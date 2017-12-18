<template>
    <div class="end-box">
      <p><span>公司名称：</span><el-input v-model="datas.name" placeholder="请输入公司名称"></el-input></p>
      <p><span>公司邮箱：</span><el-input v-model="datas.email" placeholder="请输入公司邮箱"></el-input></p>
      <p v-html="datas.desc"></p>
      <p><span class="span">公司描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.desc"></vue-editor></p>
      <p><span class="span">公司环境描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.environment_desc"></vue-editor></p>
      <p><span class="span">公司作品描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.case_desc"></vue-editor></p>
      <div class="p">
        <span class="span">公司logo：</span>
        <div class="upload-img">
          <el-upload action="/api/img/upload" list-type="picture-card" :name="logoImg.name" :limit="logoImg.limit"  :multiple="logoImg.multiple"
          :on-preview="preview" :on-remove="removeLogo" :on-success="successLogo">
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
      </div>
      <div class="p">
        <span class="span">公司图片：</span>
        <div class="upload-img">
          <el-upload action="/api/img/upload" list-type="picture-card" :name="companyImg.name" :limit="companyImg.limit"  :multiple="companyImg.multiple"
          :on-preview="preview" :on-remove="removeCompany" :on-success="successCompany">
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
      <p style="margin-top: 30px;"><span></span><el-button type="primary" @click="submit">提交</el-button></p>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data() {
    return {
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
  methods: {
    submit() {
      var data = {
              name: this.datas.name,
              email: this.datas.email,
              desc: this.datas.desc,
              environment_desc: this.datas.environment_desc,
              case_desc: this.datas.case_desc,
              logo: this.logoImg.imgs,
              imgs: this.companyImg.imgs
      }
      this.$fns.post('/api/admin/add-company',data,(json)=>{
          if(json.ask=='1'){
            this.$message({message:json.message,type:'success',showClose:true});
            console.log(this.datas.desc)
            this.datas = {
              name:'',
              email:'',
              desc:'',
              environment_desc:'',
              case_desc:''
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
      this.logoImg.imgs = this.refreshImgs(fileList,this.logoImg.imgs);
    },
    //logo移除
    removeLogo(file, fileList){
      this.logoImg.imgs = this.refreshImgs(fileList);
    },
    //company成功
    successCompany(json, file, fileList){
      this.companyImg.imgs = this.refreshImgs(fileList,this.companyImg.imgs);
    },
    //company移除
    removeCompany(file, fileList){
      this.companyImg.imgs = this.refreshImgs(fileList);
    }
  }
}
</script>

<style lang="scss">
.end-box{
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
    span, .span{
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
   ul{
    padding-left: 40px;
   }
   ul li{ display:list-item;list-style-type: disc }
   ol{list-style-type: decimal }
}
</style>