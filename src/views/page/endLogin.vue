<template>
    <div class="end-lgin">
      <p class="title"><strong>后台登陆</strong></p>
      <div class="erroInfo" v-show="show1 != ''">{{msg}}</div>
      <p><el-input v-model="name" placeholder="账号" @keyup.enter.native="isLogin()&&submit()"></el-input></p>
      <p><el-input v-model="pass" type="password" placeholder="密码" @keyup.enter.native="isLogin()&&submit()"></el-input></p>
      <p><el-button type="deflaut" style="width: 100%;" :class="{'el-button--primary':isLogin()}" @click="submit">提交</el-button></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      pass: '',
      show1: '',
      msg: ''
    }
  },
  components: {
  },
  created() {
  },
  methods: {
    isLogin() {
      if(this.name != '' && this.pass != '') {
        return true
      }
    },
    submit() {
      var data = {
              userName: this.name,
              userPass: this.pass
      }
      this.$fns.post('/api/user/login',data,(json)=>{
          if(json.ask=='1'){
            this.$router.push({path:'/admin'});
          }else{
            this.show1 = json.message;
          }
      });
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
    overflow: visible;
  }
  p+p{
    margin-top: 30px;
  }
}
.erroInfo{
  color: red;
}
</style>