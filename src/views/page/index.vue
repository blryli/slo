<template>
  <div class="end">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-input
          placeholder="请输入内容"
          v-model="imputValue"
          clearable>
        </el-input>
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
        prop="name"
        label="公司名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="logo"
        label="公司logo"
        width="300">
      </el-table-column>
      <el-table-column
        prop="email"
        label="公司邮箱"
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
        <p><span class="span">公司名称：</span><el-input v-model="datas.name" placeholder="请输入公司名称"></el-input></p>
        <p><span class="span">公司邮箱：</span><el-input v-model="datas.email" placeholder="请输入公司邮箱"></el-input></p>
        <p><span class="span">公司描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.desc"></vue-editor></p>
        <p><span class="span">公司环境描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.environment_desc"></vue-editor></p>
        <p><span class="span">公司作品描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.case_desc"></vue-editor></p>
        <div class="p">
          <span class="span">公司logo：</span>
          <div class="upload-img">
            <el-upload action="/api/img/upload" list-type="picture-card" :name="name" ref="logoImg" :limit="logoImg.limit"  :multiple="logoImg.multiple"
            :on-preview="preview" :on-remove="removeLogo" :on-success="successLogo">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </div>
        <div class="p">
          <span class="span">公司图片：</span>
          <div class="upload-img">
            <el-upload action="/api/img/upload" list-type="picture-card" :name="name" ref="companyImg" :limit="companyImg.limit"  :multiple="companyImg.multiple"
            :on-preview="preview" :on-remove="removeCompany" :on-success="successCompany">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </div>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl">
        </el-dialog>
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
      page: 1,
      pageSize: 6,
      total: 1,
      tableData: [],
      datas: {
        name:'',
        email:'',
        desc:'',
        environment_desc:'',
        case_desc:''
      },
      name:'img',
      dialogImageUrl: '',
      dialogVisible: false,
      logoImg:{
        limit:1,
        multiple:false,
        imgs:[]
      },
      companyImg:{
        limit:50,
        multiple:true,
        imgs:[]
      },
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
  mounted: function() {
    this.$nextTick(function() {})
  },
  computed: { },
  methods: {
    handleEdit(index, row) {
      this.show = true;
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    currentPage(page) {
      this.page = page;
      console.log(page)
      this.getCompanyList();
    },
    getCompanyList(isNew) {
      var _this = this;
      var data = {
        name: this.imputValue,
        pageSize: this.pageSize,
        page: this.page
      }
      this.$fns.post('/api/admin/company-list',data,(json)=>{
          if(json.ask=='1'){
            _this.tableData = [];
            _this.total = json.total;
            json.data.forEach((d, i) => {
              if(d.name == _this.imputValue){
                isNew && (_this.page = 1);
                if(_this.page*_this.pageSize - _this.pageSize <= i && i < _this.page*_this.pageSize){
                  _this.tableData.push(d);
                }
              }
            })
          }else{
            this.$message({
              type:'error',
              showClose:true,
              dangerouslyUseHTMLString: true,
              message: msgHtml ? msgHtml : 'Returns unknown error'
            });
          }
      });
    },
    submit() {
      var data = {
              name: this.datas.name,
              email: this.datas.email,
              desc: this.datas.desc,
              environment_desc: this.datas.environment_desc,
              case_desc: this.datas.case_desc,
              logo: this.logoImg.imgs.length?this.logoImg.imgs[0]:'',
              imgs: this.companyImg.imgs
      }
      this.$fns.post('/api/admin/add-company',data,(json)=>{
          if(json.ask=='1'){
            this.$message({message:json.message,type:'success',showClose:true});
            this.datas = {
              name:'',
              email:'',
              desc:'',
              environment_desc:'',
              case_desc:''
            }
            this.logoImg.imgs = this.companyImg.imgs = [];
            this.$refs.companyImg.clearFiles();
            this.$refs.logoImg.clearFiles();
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
	 //查看图片
    preview(file){
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //更新图片数组
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
    //logo成功
    successLogo(json, file, fileList){
      this.logoImg.imgs = this.refreshImgs(fileList);
    },
    //logo移除
    removeLogo(file, fileList){
      this.logoImg.imgs = this.refreshImgs(fileList);
    },
    //company成功
    successCompany(json, file, fileList){
      this.companyImg.imgs = this.refreshImgs(fileList);
    },
    //company移除
    removeCompany(file, fileList){
      this.companyImg.imgs = this.refreshImgs(fileList);
    }
  }
}
</script>

<style lang="scss">
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
  position: fixed;
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
</style>