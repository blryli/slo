<template>
  <div class="header">
      <div class="header-top container ">
        <router-link class="navbar-brand phone-margin" :to="'/'">LA<span class="dan">FOLIO</span></router-link>
        <div class="navbar-header navbar-default">
          <button type="button" class="navbar-toggle" @click="navSwitch">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
      </div>
      <nav class="navbar">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <!-- <el-collapse-transition> -->
              <div v-show="showNav" @click="closeNav" :class="{nbActive: showNav}">
                  <top-menu :top-menu="menuJson" class="phone-top-menu"></top-menu>
              </div>
              <!-- </el-collapse-transition> -->
              <div class="hidden-xs" >
                <top-menu :top-menu="menuJson"></top-menu>
              </div>
            </div>
            <div  class="col-sm-6">
              <div class="row">
                <div class="col-xs-8 col-sm-6 col-sm-offset-2 phone-margin header-topsearch" style="margin-top: 22px;">
                  <i class="fa fa-search" aria-hidden="true"></i>
                  <input type="text" class="form-control" placeholder="请输入公司 / 作品名称">
                </div>
                <div class="col-xs-4 col-sm-4 text-right" v-if="userName == ''">
                  <a href="#"  class="login"><strong>登录</strong><span></span></a>
                  <span class="l-hr hidden-xs">|</span>
                  <a href="#" class="register hidden-xs"><strong>注册</strong><span></span></a>
                </div>
                 <div v-else class="col-sm-6">
                  <span class="l-hr">blry</span>
                </div>
              </div>
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
    // menuJson: {
    //   handler(val, oldVal) {
    //     this.$emit('get-json', val);
    //   }
    // }
  },
  components: {
    TopMenu
  },
  created: function () {
    this.getTopMenu()
  },
  mounted() {
    
  },
  methods: {
  	// login: function() {
   //          //绑定Ajax的内容
   //          let _url = window.location.href
   //          window.location.href = URL + "/oauth/login?url=" + _url;
  	// },
  	// user: function(){
  	// 	let _this = this
  	// 	   $.ajax({
   //              url: URL + "/user/query",
			// 	type : 'get',                    
   //              xhrFields: {
   //                  withCredentials: true
   //              },
   //              success: function (data) {
   //              	if(data != null){
	  //               	_this.userName = data
   //              	}
   //              }
   //       })
  	// },
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
.header-topsearch{
  position: relative;
  .fa{
    position: absolute;
    top: 7px;
    left: 24px;
    color: #aaa;
  }
  .form-control{
    height: 30px;
    padding-left: 30px;
    font-size: 12px;
  }
}
.phone-top-menu{
  background-color: #e5e5e5;
  height: 100%;
}
.dan{
  color: #888;
}
.form-control{
  background-color: #eee;
  border: 0;
  box-shadow: none;
}
.navbar-default{
  background-color: #fff;
  .navbar-toggle {
    padding: 14px;
    margin-top: 21px;
    margin-right: 0;
    .icon-bar{
      width: 24px;
      height: 3px;
      &+.icon-bar{
        margin-top: 5px;
      }
    }
  }
}
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
.f-l{
  float: left;
}
.f-r{
  float: right;
}
.o-h{
  overflow: hidden;
}
.header{
  position: relative;
  z-index: 1000;
  background-color: #fff;
}
.header-top{
  .navbar-brand{
    font-size: 36px;
    height: 36px;
    line-height: 36px;
    color: #191919;
    padding: 0;
    font-weight: block;
    margin-top: 36px;
  }
}
.login, .register{
  position: relative;
  height:80px;
  line-height:80px;
  color: #191919;
  text-decoration: none;
  font-size: 16px;
  strong{
    font-weight: normal;
  }
  &:hover{
    strong{
      position: relative;
      font-weight: bold;
      z-index: 10;
    }
    span{
      position: absolute;
      left: 0;
      top: 6px;
      z-index: 0;
      display: block;
      width: 100%;
      height: 4px;
      background-color: #FEE300;
    }
  }
}
.l-hr{
  color: #aaa;
  margin: 0 10%;
  opacity: .6;
  font-size: 12px;
  height:30px;
  line-height:30px;
}
.phone-margin{
  margin: 0 15px 0 -15px;
}
@media (min-width: 768px) { 
    .navbar-header {
        float: none;
    }
    .navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {
        margin-left: 0;
    }
    .phone-margin{
      margin: 0;
    }
}

@media (min-width: 992px) {
  .navbar-header {
      float: left;
}
  
}
@media (max-width: 992px) {
}

@media (min-width: 1200px) {
   .navbar-brand{
     img{
       width: 200px;
       height: auto;
     }
   }
}
</style>
