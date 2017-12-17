<template>
    <div class="end-box">
      <p><span>公司名称：</span>
        <el-select v-model="datas.name" filterable placeholder="请选择公司">
            <el-option
              v-for="item in names"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </p>
      <p><span>标题：</span><el-input v-model="datas.title" placeholder=""></el-input></p>
      <p><span class="span">职位：</span><el-input v-model="datas.position"></el-input></p>
      <p><span class="span">招聘描述：</span><vue-editor v-model="datas.desc"></vue-editor></p>
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
    }
  },
  components: {
  	VueEditor
  },
  methods: {
    submit() {

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
    span, .span{
      width: 100px;
      display: inline-block;
    }
    .span{
      vertical-align: top;
    }
  }
}

</style>