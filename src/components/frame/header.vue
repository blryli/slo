<template>
  <div class="header">
      <div class="header-top">
        <div class="float-right container">
          <div class="row" v-if="userName == ''">
            <a @click="login"  class="login">登录</a>
            <span class="l-hr">|</span>
            <a href="#" class="register">注册</a>
          </div>
           <div class="row" v-else>
            <span class="l-hr">尊敬的{{userName}},欢迎登录starpost官方网站</span>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="row">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".top-menu" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">
                <img src="../../assets/img/logo.png" alt="星邮物流支付中心" title="星邮物流支付中心">
              </a>
            </div>
            <div class="collapse navbar-collapse">
              <top-menu :top-menu="menuJson"></top-menu>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
import TopMenu from './topMenu'
export default {
  data() {
    return {
      userName : '',
      menuJson: {}
    }
  },
  watch: {
    menuJson: {
      handler(val, oldVal) {
        this.$emit('get-json', val);
      }
    }
  },
  components: {
    TopMenu
  },
  created: function () {
    this.getTopMenu()
    this.user()
  },
  mounted() {
    
  },
  methods: {
  	login: function() {
            //绑定Ajax的内容
            let _url = window.location.href
            window.location.href = "/api/oauth/login?url=" + _url;
  	},
  	user: function(){
  		let _this = this
  		   $.ajax({
                url: "/api/user/query",
				type : 'get',                    
                xhrFields: {
                    withCredentials: false
                },
                success: function (data) {
                	if(data != null){
	                	_this.userName = data
                	}
                }
         })
  	},
    getTopMenu() {
      this.$http.get('../../../static/data/topMenu.json').then((response) => {
        this.menuJson = response.data
      }, (response) => {
        console.log(response)
      })
    },
  }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
ul,li{
  padding: 0;
  margin: 0;
  list-style: none;
}
.header-top{
  background-color: #333;
  height: 30px;
  .float-right{
    text-align: right;
    .login, .register{
      height:30px;
      line-height:30px;
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      opacity: .8;
      &:hover{
        opacity: 1;
      }
    }
    .l-hr{
      color: #fff;
      margin: 0 10px;
      opacity: .6;
      font-size: 12px;
      height:30px;
      line-height:30px;
    }
  }
}
.collapse {
  padding: 0;
}
.navbar{
  margin: 0;
  height: 100px;
}
.navbar-brand{
  font-size: 60px;
  height: 100px;
  line-height: 100px;
  padding: 20px 0 0;
  img{
    width: 160px;
    height: auto;
  }
}

@media (min-width: 768px) { 
    
 }

@media (min-width: 992px) {
}

@media (min-width: 1200) {
   .navbar-brand{
     img{
       width: 200px;
       height: auto;
     }
   }

}
</style>
