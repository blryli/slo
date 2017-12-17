<template>
    <div class="end-lgin">
      <p class="title"><strong>后台登陆</strong></p>
      <p><el-input v-model="name" placeholder="账号"></el-input></p>
      <p><el-input v-model="mima" placeholder="密码"></el-input></p>
      <p><el-button type="primary" style="width: 100%;" @click="submit">提交</el-button></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      mima: ''
    }
  },
  components: {
  },
  created() {
  },
  methods: {
    submit() {
      if(this.name != '' && this.mima != '') {
        this.$router.push({path:'/admin'})
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.end-lgin{
  width: 300px;
  margin: 10% auto 0;
  .title{
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
  }
  p+p{
    margin-top: 30px;
  }
}
</style>