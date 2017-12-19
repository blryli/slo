<template>
  <el-row class="end-box">
    <el-col :span="10">
      <p><span>所属公司：</span>
        <el-select v-model="datas.name" clearable filterable placeholder="请选择">
            <el-option
              v-for="item in names"
              :key="item.company_id"
              :label="item.name"
              :value="item.company_id">
            </el-option>
          </el-select>
      </p>
      <p><span>标题：</span><el-input v-model="datas.title" placeholder=""></el-input></p>
      <p><span>作者：</span><el-input v-model="datas.author" placeholder=""></el-input></p>
      <p><span>业主单位：</span><el-input v-model="datas.unit" placeholder=""></el-input></p>
    </el-col>
    <el-col :span="10">
      <p><span class="span">项目地址：</span><el-input v-model="datas.address"></el-input></p>
      <p><span class="span">设计师团队：</span><el-input v-model="datas.team"></el-input></p>
      <p><span class="span">用地规模：</span><el-input v-model="datas.scale"></el-input></p>
      <p><span class="span">设计日期：</span><el-input v-model="datas.design_date"></el-input></p>
      <p><span class="span">拍摄者：</span><el-input v-model="datas.photographer"></el-input></p>
    </el-col>
    <el-col :span="24">
      <p><span class="span">案例描述：</span><vue-editor :editorToolbar="customToolbar" v-model="datas.desc"></vue-editor></p>
        <div class="p">
          <span class="span">案例图片：</span>
          <div class="upload-img">
            <el-upload action="/api/img/upload" list-type="picture-card" :name="logos.name" :limit="logos.limit"  :multiple="logos.multiple"
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
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data() {
    return {
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
      dialogImageUrl: '',
      dialogVisible: false,
      name:'img',
      logos: {
        limit:1,
        multiple:false,
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
	  submit() {

    },
    getCompanys(){
      this.$fns.post('/api/company/get-companys',{},(json)=>{
          if(json.ask=='1'){
            this.names = json.data
          }else{
              console.error(json.message)
          }
      });
    },
     refreshImgs(fileList){
        this.imgs=[];
        if(fileList.length){
          fileList.forEach((item,k)=>{
            if(item.response.ask=='1'){
              item.response.filename && this.imgs.push(item.response.filename);
            }
          });
        }
      },
      success(json, file, fileList){
        this.refreshImgs(fileList);
        //console.log(this.imgs);
      },
      remove(file, fileList){
        this.$fns.post('/api/img/delete',{filename:file.response.filename},(json)=>{
          if(json.ask=='1'){
            console.log('删除成功');
          }else{
            console.error('删除失败');
          }
        });
        this.refreshImgs(fileList);
      },
      preview(file){
        this.dialogImageUrl = file.url;
            this.dialogVisible = true;
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
   ol{list-style-type: decimal }
}
</style>