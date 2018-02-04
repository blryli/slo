<template>
  <div class="end">
    <el-row :gutter="10">
      <el-col :span="16">
        <el-form :inline="true" class="demo-form-inline">
          <el-date-picker v-model="imputValue" type="date" placeholder="开始时间"></el-date-picker>
          <el-date-picker v-model="imputTitleValue" type="date" placeholder="结束时间"></el-date-picker>
          <el-button type="primary" @click.native="getCompanyList(isNew)">搜索</el-button>
        </el-form>
      </el-col>
      <el-col :span="4" :offset="4">
        <el-button type="success" @click.native="show = true">新建</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="company_name"
        label="公司名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="300">
      </el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        width="300">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="total">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page="page"
        @current-change="currentPage">
      </el-pagination>
    </div>
    <div v-show="show">
      <div class="particulars-close close-fixed" @click="show = false"></div>
      <div class="end-bg"></div>
      <div class="end-box">
        <p><span class="span">公司名称：</span>
          <el-select v-model="datas.company_id" clearable filterable placeholder="请选择公司">
              <el-option
                v-for="item in names"
                :key="item.company_id"
                :label="item.name"
                :value="item.company_id">
              </el-option>
            </el-select>
        </p>
        <p><span class="span">标题：</span><el-input v-model="datas.title" placeholder=""></el-input></p>
        <p><span class="span">职位：</span><el-input v-model="datas.position"></el-input></p>
        <p><span class="span">招聘描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.desc"></vue-editor></p>
        <p style="margin-top: 30px;"><span></span><el-button type="primary" @click="submit">提交</el-button></p>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data() {
    return {
      isNew: true,
      show: false,
      imputValue: '',
      imputTitleValue: '',
      page: 1,
      pageSize: 5,
      total: 1,
      tableData: [],
      datas: {
        "recruitment_id":"",
        "company_id":"",
        "title":"",
        "position":"",
        "desc":""
      },
      names: [],
      customToolbar: [
        ['bold', 'italic', 'underline'],
         ['blockquote', 'code-block'],
         [{ 'list': 'ordered'}, { 'list': 'bullet' }],
         [{ 'indent': '-1'}, { 'indent': '+1' }],
         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
         [{ 'color': [] }, { 'background': [] }],
         [{ 'font': [] }],
         [{ 'align': [] }],
      ]
    }
  },
  components: {
  	VueEditor
  },
  created() {
    this.getCompanys();
  },
  methods: {
    //编辑
    handleEdit(index, row) {
      this.show = true;
      var data = {
        recruitmentId: row.recruitment_id
      }
      this.$fns.post('/api/admin/get-recruitment',data,(json)=>{
          if(json.ask=='1'){
            this.datas = json.data;
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
    //删除
    handleDelete(index, row) {
      var data = {
        recruitmentId: row.recruitment_id
      }
      this.$fns.post('/api/admin/delete-recruitment',data,(json)=>{
        if(json.ask=='1'){
          this.$message({message:'操作成功！',type:'success',showClose:true});
          this.tableData.splice(index, 1);
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
    currentPage(page) {
      this.page = page;
      this.getCompanyList();
    },
    getCompanyList(isNew) {
      var _this = this;
      var data = {
        companyName: this.imputValue,
        title: this.imputTitleValue,
        pageSize: this.pageSize,
        page: this.page
      }
      this.$fns.post('/api/admin/recruitment-list',data,(json)=>{
          if(json.ask=='1'){
            _this.tableData = json.data;
            _this.total = parseInt(json.total);
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
    submit() {
      var data = {
    		      recruitment_id:this.datas.recruitment_id,
              company_id: this.datas.company_id,
              title: this.datas.title,
              position: this.datas.position,
              desc: this.datas.desc
      }
      this.$fns.post('/api/admin/add-recruitment',data,(json)=>{
          if(json.ask=='1'){
            this.$message({message:json.message,type:'success',showClose:true});
            this.datas = {
              recruitment_id:'',
              company_id:'',
              title:'',
              position:'',
              desc:''
            }
          }else{
            var msgHtml = '';
            if(json.errors.length){
              json.errors.forEach((msg,k)=>{
                msgHtml += '<p>' + msg + '</p>';
              });
            }
            this.$message({
              type:'error',
              showClose:true,
              dangerouslyUseHTMLString: true,
              message: msgHtml ? msgHtml : 'Returns unknown error'
            });
          }
      });
    },
    getCompanys(){
      this.$fns.post('/api/company/get-companys',{},(json)=>{
          if(json.ask=='1'){
            this.names = json.data
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
  }
}
</script>

<style lang="scss">
.v-modal{
  z-index: 90 !important;
}
.cell img{
  width: 50px;
  height: 50px;
}
//关闭按钮
.particulars-close{
    position: absolute;
    right: 15px;
    top: -36px;
    width: 30px;
    height: 30px;
    z-index: 100;
    color: #fff;
    font-weight: normal;
    cursor: pointer;
    background: url(/static/img/ic_close.png) no-repeat center center;
    &:hover{
        background: url(/static/img/ic_close_2.png) no-repeat center center;
    }
}
.total{
  text-align: right;
  margin-top: 20px;
}
.end-bg{
  background-color: #000;
  opacity: .5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
}
.end-box{
  overflow: scroll;
  padding: 20px;
  position: fixed !important;
  top: 10%;
  left: 5%;
  z-index: 100;
  width: 90%;
  height: 80%;
  background-color: #fff;
  input[type=file] {
      display: none !important;
  }
  input[type=file] {
      display: none !important;
  }
  .upload-img{
    display: inline-block;
  }
  .el-input{
    width: 300px;
  }
  .quillWrapper{
    width: 80%;
    display: inline-block;
    line-height: 1px;
  }
  p, .p{
    margin-bottom: 15px;
    .span{
      width: 100px;
      display: inline-block;
    }
    .span{
      vertical-align: top;
    }
  }
  ol li:before {  
      content:counter(sectioncounter) "、";   
      counter-increment:sectioncounter;  
   } 
   ol{
    padding-left: 20px;
   }
   ol{list-style-type: decimal }
}

</style>