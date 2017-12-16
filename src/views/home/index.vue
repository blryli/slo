<template>
    <el-main>
      <p><span>公司名称：</span><el-input v-model="datas.name" placeholder="请输入公司名称"></el-input></p>
      <p><span>公司邮箱：</span><el-input v-model="datas.email" placeholder="请输入公司邮箱"></el-input></p>
      <p><span class="span">公司描述：</span><vue-editor v-model="datas.desc"></vue-editor></p>
      <p><span class="span">公司环境描述：</span><vue-editor v-model="datas.environment_desc"></vue-editor></p>
      <p><span class="span">公司作品描述：</span><vue-editor v-model="datas.case_desc"></vue-editor></p>
    </el-main>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data() {
    return {
      datas: {
        "name":"",
        "email":"",
        "desc":"请输入内容",
        "environment_desc":"请输入内容",
        "case_desc":"请输入内容"
      }
    }
  },
  components: {
  	VueEditor
  },
  mounted: function () {
  	
  },
  methods: {
  	
  }
}
</script>

<style lang="scss" scoped>
.el-input{
  width: 300px;
}
.quillWrapper{
  width: 80%;
  display: inline-block;
  line-height: 1px;
}
p{
  margin-bottom: 15px;
  span, .span{
    width: 90px;
    display: inline-block;
  }
  .span{
    vertical-align: top;
  }
}
</style>