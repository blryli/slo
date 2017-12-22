<template>
    <div class="end-lgin">
      <p class="title"><strong>后台登陆</strong></p>
      <div class="erroInfo" v-show="show && show1 != ''">{{msg}}</div>
      <p><el-input v-model="name" placeholder="账号"></el-input></p>
      <p><el-input v-model="pass" type="password" placeholder="密码"></el-input></p>
      <p><el-button type="primary" style="width: 100%;" @click="submit">提交</el-button></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      pass: '',
      show: false,
      show1: ''
    }
  },
  components: {
  },
  created() {
  },
  moumted: {
    msg() {
      return this.show == true ? '请输入正确的账号密码' : this.show1
    }
  },
  methods: {
    submit() {
      if(this.name != '' && this.pass != '') {
        var data = {
                userName: this.name,
                userPass: this.pass
        }
        this.$fns.post('/api/user/login',data,(json)=>{
            if(json.ask=='1'){
              this.$router.push({path:'/admin'});
            }else{
              this.show = false;
              this.show1 = json.message;
            }
        });
      }else{
        this.show = true
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