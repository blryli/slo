<template>
    <div class="end-box">
      <p><span class="span">公司名称：</span>
        <el-select v-model="datas.name" clearable filterable placeholder="请选择公司">
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
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data() {
    return {
      datas: {
        "name":"",
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
    submit() {
      var data = {
              company_id: this.datas.name,
              title: this.datas.title,
              position: this.datas.position,
              desc: this.datas.desc
      }
      this.$fns.post('/api/admin/add-recruitment',data,(json)=>{
          if(json.ask=='1'){
            this.$message({message:json.message,type:'success',showClose:true});
            this.datas = {
              name:'',
              title:'',
              position:'',
              desc:''
            }
          }else{
              this.$message({message:msg,type:'error',showClose:true});
          }
      });
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