<template>
  <div class="end">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
          <el-input placeholder="公司名称" v-model="imputValue" clearable></el-input>
          </el-form-item>
          <el-form-item>
          <el-input placeholder="标题" v-model="imputTitleValue" clearable></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click.native="getCompanyList(isNew)">搜索</el-button>
      </el-col>
      <el-col :span="4" :offset="8">
        <el-button type="success" @click.native="show = true">新建</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="company_name"
        label="公司名称" width="120">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者">
      </el-table-column>
      <el-table-column
        label="公司logo">
        <template slot-scope="scope">
          <img :src="'/imgs/'+scope.row.img_min" alt="logo">
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序">
      </el-table-column>
      <el-table-column
        prop="is_ad"
        label="是否">
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
      <el-row class="end-box">
        <el-col :span="10">
          <p><span class="span">所属公司：</span>
            <el-select v-model="datas.name" clearable filterable placeholder="请选择">
                <el-option
                  v-for="item in names"
                  :key="item.company_id"
                  :label="item.name"
                  :value="item.company_id">
                </el-option>
              </el-select>
          </p>
          <p><span class="span">标题：</span><el-input v-model="datas.title" placeholder=""></el-input></p>
          <p><span class="span">作者：</span><el-input v-model="datas.author" placeholder=""></el-input></p>
          <p><span class="span">业主单位：</span><el-input v-model="datas.unit" placeholder=""></el-input></p>
          <p><span class="span">排序：</span><el-input type="number" v-model="datas.sort" placeholder=""></el-input></p>
          <p>
            <span class="span">是否推广：</span>
            <el-select v-model="datas.is_ad" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </p>
        </el-col>
        <el-col :span="10">
          <p><span class="span">项目地址：</span><el-input v-model="datas.address"></el-input></p>
          <p><span class="span">设计师团队：</span><el-input v-model="datas.team"></el-input></p>
          <p><span class="span">用地规模(m²)：</span><el-input v-model="datas.scale"></el-input></p>
          <p><span class="span">设计日期：</span>
            <el-date-picker
              v-model="datas.design_date"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </p>
          <p><span class="span">拍摄者：</span><el-input v-model="datas.photographer"></el-input></p>
        </el-col>
        <el-col :span="24">
          <p><span class="span">案例描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.desc"></vue-editor></p>
            <div class="p">
              <span class="span">案例图片：</span>
              <div class="upload-img">
                <el-upload action="/api/img/upload" list-type="picture-card" :file-list="logoImgList" :name="name" ref="logos" :limit="logos.limit"  :multiple="logos.multiple"
                :on-preview="preview" :on-remove="remove" :on-success="success">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                  <img width="100%" :src="dialogImageUrl" alt>
                </el-dialog>
              </div>
            </div>
          </p>
          <p style="margin-top: 30px;"><span></span><el-button type="primary" @click="submit">提交</el-button></p>
        </el-col>
      </el-row>
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
        "name":"",
        "title":"",
        "author":"",
        "unit":"",
        "address":"",
        "team":"",
        "scale":"",
        "design_date":"",
        "photographer":"",
        "desc":""
      },
      options: [{
        value: '1',
        label: '1(是)'
      }, {
        value: '0',
        label: '0(否)'
      }],
      dialogImageUrl: '',
      dialogVisible: false,
      name:'img',
      logoImgList: [],
      logos: {
        limit:50,
        multiple:true,
        imgs:[],
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
  mounted: function () {
  	
  },
  methods: {
    //编辑
    handleEdit(index, row) {
      this.show = true;
      var data = {
        companyId: row.company_name
      }
      this.$fns.post('/api/admin/get-case',data,(json)=>{
          if(json.ask=='1'){
            let arr = [];
            let imgArr = [];
            this.datas = json.data;
            json.data.imgs.forEach((d, i) => {
              arr.push({url: '/imgs/' + d});
              imgArr.push('/imgs/' + d);
            })
            //展示图片
            this.logoImgList = arr;
            //上传图片
            this.logos.imgs = imgArr;
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
    //删除
    handleDelete(index, row) {
      var data = {
        caseId: row.case_id
      }
      this.$fns.post('/api/admin/delete-case',data,(json)=>{
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
      this.$fns.post('/api/admin/case-list',data,(json)=>{
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
              company_id: this.datas.name,
              title: this.datas.title,
              author: this.datas.author,
              unit: this.datas.unit,
              address: this.datas.address,
              team: this.datas.team,
              scale: this.datas.scale,
              design_date: this.datas.design_date,
              photographer: this.datas.photographer,
              desc: this.datas.desc,
              sort: this.datas.sort,
              is_ad: this.datas.is_ad,
              imgs: this.logos.imgs
      }
      this.$fns.post('/api/admin/add-case',data,(json)=>{
          if(json.ask=='1'){
            this.$message({message:json.message,type:'success',showClose:true});
            this.datas = {
              "name":"",
              "title":"",
              "author":"",
              "unit":"",
              "address":"",
              "team":"",
              "scale":"",
              "design_date":"",
              "photographer":"",
              "desc":""
            }
            this.logos.imgs = [];
            this.$refs.logos.clearFiles();
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
     refreshImgs(fileList){
        var imgs=[];
        if(fileList.length){
          fileList.forEach((item,k)=>{
            if(item.response.ask=='1'){
              item.response.filename && imgs.push(item.response.filename);
            }
          });
        }
        return imgs;
      },
      success(json, file, fileList){
        this.logos.imgs = this.refreshImgs(fileList);
      },
      remove(file, fileList){
        this.logos.imgs = this.refreshImgs(fileList);
      },
      preview(file){
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>

<style lang="scss">
.v-modal{
  z-index: 90 !important;
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
.cell img{
  width: 50px;
  height: 50px;
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