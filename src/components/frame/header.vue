<template>
  <div class="header">
      <div class="header-top">
        <div class="float-right container">
          <div class="row" v-if="userName == ''">
            <a href="#" @click="login"  class="login">登录</a>
            <span class="l-hr">|</span>
            <a href="#" class="register">注册</a>
          </div>
           <div class="row" v-else>
            <span class="l-hr">尊敬的{{userName}},欢迎登录starpost官方网站</span>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-default">
        <div class="container nav-container">
          <div class="row">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" @click="navSwitch">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <router-link class="navbar-brand" :to="'/'">
                <img src="../../assets/img/logo.png" alt="星邮物流支付中心" title="星邮物流支付中心">
              </router-link>
            </div>
            <!-- <el-collapse-transition> -->
              <div v-show="showNav" @click="closeNav"  :class="{nbActive: showNav}">
                  <top-menu :top-menu="menuJson"></top-menu>
              </div>
            <!-- </el-collapse-transition> -->
            <div class="visible-md-block visible-lg-block">
              <top-menu :top-menu="menuJson"></top-menu>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
import TopMenu from './topMenu'
import $ from 'jquery'
export default {
  data() {
    return {
      showNav: false,
      active: false,
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
            window.location.href = URL + "/oauth/login?url=" + _url;
  	},
  	user: function(){
  		let _this = this
  		   $.ajax({
                url: URL + "/user/query",
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
    closeNav() {
      this.showNav = false
      this.$emit('showNav-to', this.showNav)
    },
    navSwitch() {
      this.showNav = !this.showNav
      this.$emit('showNav-to', this.showNav)
    }
  }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.nbActive{
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 75%;
  animation: width75 .5s;
}
@keyframes width75
{
  from {width: 0;}
  to {width: 75%;}
}

ul,li{
  padding: 0;
  margin: 0;
  list-style: none;
}
.header{
  position: relative;
  z-index: 1000;
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
.navbar{
  margin: 0;
  height: 100px;
  .navbar-toggle {
    padding: 18px;
    margin-top: 21px;
    margin-right: 0;
    .icon-bar{
      width: 28px;
      height: 3px;
      &+.icon-bar{
        margin-top: 5px;
      }
    }
  }
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
.container.nav-container{
    margin:0;
  }

@media (min-width: 768px) { 
    .navbar-toggle {
        display: block;
        position: relative;
        float: right;
    }
    .navbar-header {
        float: none;
    }
    .navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {
        margin-left: 0;
    }
 }

@media (min-width: 992px) {
  .navbar-toggle {
      display: none;
  }
  .container.nav-container{
    width: 970px;
    margin: 0 auto;
  }
  .navbar-header {
      float: left;
  }
  
}
@media (max-width: 992px) {
  .container.nav-container{
    width: 100%;
    .navbar-toggle{
      margin-right: 15px;
    }
    .navbar-brand{
      margin-left: 15px;
    }
  }
}

@media (min-width: 1200px) {
   .navbar-brand{
     img{
       width: 200px;
       height: auto;
     }
   }
   .container.nav-container{
     width: 1170px;
   }

}
</style>
