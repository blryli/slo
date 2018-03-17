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
        <el-button type="success" @click.native="create">新建</el-button>
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
        label="公司logo"
        width="300">
        <template slot-scope="scope">
          <img :src="'/imgs/'+scope.row.logo" alt="logo">
        </template>
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

    <el-dialog title="新建案例" :visible.sync="outerVisible" :close-on-click-modal="false" width="80%" top="5vh" @close="closeCase">
      <div class="end-box">
        <p><span class="span">公司名称：</span><el-input v-model="datas.name" placeholder="请输入公司名称"></el-input></p>
        <p><span class="span">公司邮箱：</span><el-input v-model="datas.email" placeholder="请输入公司邮箱"></el-input></p>
        <p><span class="span">公司描述：</span><vue-editor :editorToolbar="customToolbar" id="editor1" v-model="datas.desc"></vue-editor></p>
        <p><span class="span">公司环境描述：</span><vue-editor :editorToolbar="customToolbar" id="editor2" v-model="datas.environment_desc"></vue-editor></p>
        <p><span class="span">公司作品描述：</span><vue-editor :editorToolbar="customToolbar" id="editor3" v-model="datas.case_desc"></vue-editor></p>
        <div class="p">
          <span class="span">公司logo：</span>
          <div class="upload-img">
            <el-upload action="/api/img/upload" list-type="picture-card" :file-list="logoImgList" :name="name" ref="logoImg" :limit="logoImg.limit"  :multiple="logoImg.multiple"
            :on-preview="preview" :on-remove="removeLogo" :on-success="successLogo">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </div>

        <div class="p">
          <span class="span">公司水印：</span>
          <div class="upload-img">
            <el-upload action="/api/img/upload" list-type="picture-card" :file-list="waterMarkImgList" :name="name" ref="waterMarkImg" :limit="waterMarkImg.limit"  :multiple="waterMarkImg.multiple"
            :on-preview="preview" :on-remove="removeWaterMark" :on-success="successWaterMark">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </div>

        <div class="p">
          <span class="span">公司图片：</span>
          <div class="upload-img">
            <el-upload class="add-img" action="/api/img/upload" list-type="picture-card" :file-list="companyImg.imgs" :name="name" ref="companyImg" :limit="companyImg.limit"  :multiple="companyImg.multiple"
              :on-preview="preview" :on-remove="removeCompany" :on-success="successCompany">
              <i class="el-icon-plus"></i>
            </el-upload>
            <div class="add-text">
              <component :is="comment" @diolog-arr="getDiologArr" :index="index" :text="item.text" v-for="(item, index) in companyImg.imgs" :key="index"></component>
            </div>
          </div>
        </div>
        <el-dialog :visible.sync="dialogVisible" size="tiny" append-to-body>
          <img width="100%" :src="dialogImageUrl">
        </el-dialog>

        <el-dialog title="编辑文字" :visible.sync="dialogFormVisible" append-to-body>
          <vue-editor id="id1" :editorToolbar="customToolbar" v-model="editorContent"></vue-editor>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitText">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import textEditor from './text-editor'
export default {
  data() {
    return {
      comment: 'text-editor',
      outerVisible: false,
      dialogFormVisible: false,
      textIndex: 0,
      editorContent: '',
      isNew: true,
      imputValue: '',
      page: 1,
      pageSize: 5,
      total: 1,
      tableData: [],
      datas: {
        company_id: '',
        name:'',
        email:'',
        desc:'',
        environment_desc:'',
        case_desc:'',
        logo: '',
        water_mark:'',
        imgs: [],
      },
      name:'img',
      dialogImageUrl: '',
      dialogVisible: false,
      logoImgList: [],
      waterMarkImgList: [],
      companyImgList: [],
      logoImg:{
        limit:1,
        multiple:false,
        imgs:[]
      },
      waterMarkImg:{
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
  	VueEditor, textEditor
  },
  mounted: function() {
    this.$nextTick(function() {})
  },
  computed: {},
  methods: {
    closeCase() {
      this.datas.imgs = [];
      this.logoImg.imgs = [];
      this.companyImg.imgs = [];
      this.editorContent = '';
    },
    //保存文本
    submitText() {
      let bcText = this.editorContent;
      this.companyImg.imgs[this.textIndex].text = bcText;
      bcText = '';
      this.dialogFormVisible = false
    },
    //点击按钮获取当前索引
    getDiologArr(arr) {
      console.log(arr)
      this.dialogFormVisible = true;
      this.textIndex = arr[0];
      this.editorContent = arr[1];
    },
    //创建
    create(){
      this.outerVisible = true;
      this.datas.company_id = '';
      this.datas.name = '';
      this.datas.email = '';
      this.datas.desc = '';
      this.datas.environment_desc = '';
      this.datas.case_desc = '';
      this.datas.logo = '';
      this.datas.water_mark = '';
      this.datas.imgs = [];
      this.logoImg.imgs = [];
      this.companyImg.imgs = [];
      setTimeout(function() {
        this.$refs.companyImg.clearFiles();
        this.$refs.logoImg.clearFiles();   
        this.$refs.waterMarkImg.clearFiles();
      }, 100)
    },
    //编辑
    handleEdit(index, row) {
      this.outerVisible = true;
      var data = {
        companyId: row.company_id
      }
      this.$fns.post('/api/admin/get-company',data,(json)=>{
          if(json.ask=='1'){
            let arr = [];
            let imgArr = [];
            this.logoImgList = [];
            this.waterMarkImgList=[];
            this.datas = json.data;
            json.data.imgs.forEach((d, i) => {
              arr.push({url: '/imgs/' + d.url, text: d.text});
              // imgArr.push('/imgs/' + d);
            })
            //展示图片
            json.data.logo && this.logoImgList.push({url: '/imgs/' + json.data.logo});
            json.data.water_mark && this.waterMarkImgList.push({url: '/imgs/' + json.data.water_mark});
            // this.companyImgList = arr;
            //上传图片
            this.logoImg.imgs = []; 
            json.data.logo && (this.logoImg.imgs[0] = '/imgs/' +json.data.logo);
            this.waterMarkImg.imgs = []; 
            json.data.water_mark && (this.waterMarkImg.imgs[0] = '/imgs/' +json.data.water_mark);
            this.companyImg.imgs = arr;
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
    //删除
    handleDelete(index, row) {
      var data = {
        company_id: row.company_id
      }
      this.$fns.post('/api/admin/delete-company',data,(json)=>{
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
        name: this.imputValue,
        pageSize: this.pageSize,
        page: this.page
      }
      this.$fns.post('/api/admin/company-list',data,(json)=>{
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
        company_id: this.datas.company_id,
        name: this.datas.name,
        email: this.datas.email,
        desc: this.datas.desc,
        environment_desc: this.datas.environment_desc,
        case_desc: this.datas.case_desc,
        logo: this.logoImg.imgs.length?this.logoImg.imgs[0]:'',
        water_mark:this.waterMarkImg.imgs.length?this.waterMarkImg.imgs[0]:'',
        imgs: this.companyImg.imgs
      }
      this.$fns.post('/api/admin/add-company',data,(json)=>{
          if(json.ask=='1'){
            this.$message({message:'操作成功！',type:'success',showClose:true});
            this.datas.company_id = '';
            this.datas.name = '';
            this.datas.email = '';
            this.datas.desc = '';
            this.datas.environment_desc = '';
            this.datas.case_desc = '';
            this.datas.logo = '';
            this.datas.water_mark = '';
            this.datas.imgs = [];
            this.logoImg.imgs = [];
            this.companyImg.imgs = [];
            this.$refs.companyImg.clearFiles();
            this.$refs.logoImg.clearFiles(); 
            this.$refs.waterMarkImg.clearFiles();
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
          if(item.hasOwnProperty('response')){
            item.response.ask=='1' && item.response.filename && imgs.push({url: item.response.filename, text: ''});
          }else if(item.hasOwnProperty('url')){
            imgs.push({url: item.url, text: ''});
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
    //水印成功
    successWaterMark(json, file, fileList){
      this.waterMarkImg.imgs = this.refreshImgs(fileList);
    },
    //水印移除
    removeWaterMark(file, fileList){
      this.waterMarkImg.imgs = this.refreshImgs(fileList);
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

<style lang="scss" scoped>
.v-modal{
  z-index: 90 !important;
}
.cell img{
  width: 50px;
  height: 50px;
}
.total{
  text-align: right;
  margin-top: 20px;
}
.end-box{
  input[type=file] {
      display: none !important;
  }
  .upload-img{
    position: relative;
    display: inline-block;
    .add-img{
      width: 148px;
      float: left;
    }
    .add-text{
      margin-left: 160px;
      .button{
        float: left;
      }
      .text{
        max-width: 1000px;
      }
    }
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