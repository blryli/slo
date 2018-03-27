<template>
  <div class="header">
      <div class="header-top container ">
        <router-link class="navbar-brand phone-margin" :to="'/'"><img src="static/img/logo1.png"></router-link>
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
            <div class="col-sm-7">
              <!-- <el-collapse-transition> -->
              <div v-show="showNav" @click="closeNav" :class="{nbActive: showNav}">
                  <top-menu :top-menu="menuJson" class="phone-top-menu"></top-menu>
              </div>
              <!-- </el-collapse-transition> -->
              <div class="hidden-xs" >
                <top-menu :top-menu="menuJson"></top-menu>
              </div>
            </div>
            <div  class="col-sm-5">
              <div class="row">
                <div class="col-xs-0 col-sm-2"></div>
                <div class="col-xs-9 col-sm-6 phone-margin header-topsearch" style="margin-top: 26px;">
                  <i class="fa fa-search" aria-hidden="true"></i>
                  <input type="text" class="form-control" :value="count" @keyup.enter="updateCount" @blur="updateCount" placeholder="请输入公司 / 作品名称">
                </div>
                <div class="col-xs-3 col-sm-4 text-right" v-if="userName == ''">
                  <router-link  class="login" to="/login"><strong>登录</strong><span></span></router-link>
                  <span class="l-hr hidden-xs"></span>
                  <router-link :to="{path:'/login',query: {crru:2}}" class="register hidden-xs"><strong>注册</strong><span></span></router-link>
                </div>
                 <div v-else class="col-xs-4 col-sm-4 text-right loginFinish">
                    <div class="uesr-box">
                      <img :src="userImg" alt="我的头像">
                      <div class="p-yellow"></div>
                      <ul class="dropdown-menu dropdown-menu-right user-info">
                        <li class="user-text"><router-link :to="{path: '/myCenter', query: {active:1}}">{{myName}}</router-link></li>
                        <li role="separator" class="divider"></li>
                        <li class="user-text"><router-link :to="{path: '/myCenter', query: {active:1}}">我的收藏</router-link></li>
                        <li class="user-text"><router-link :to="{path: '/myCenter', query: {active:2}}">我的关注</router-link></li>
                        <li role="separator" class="divider"></li>
                        <li class="user-text"><a href="#" @click="pullOut">退出</a></li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script type="text/babel">
import TopMenu from './topMenu'
import $ from 'jquery'
import {mapGetters} from 'Vuex'
export default {
  data() {
    return {
      showNav: false,
      active: false,
      userName : '',
      userImg: '',
      nickname: '',
      menuJson: [
        {
            "id": "index",
            "active": true,
            "menu_name": "精选案例",
            "url": "/"
        },
        {
            "id": "works",
            "active": false,
            "menu_name": "公司集",
            "url": "/works"
        }
      ]
    }
  },
  components: {
    TopMenu
  },
  created: function () {
    // this.getTopMenu();
    this.getUserInfo();
    this.ylqbb();
  },
  computed: {
    myName() {
      return this.nickname != '' ? this.nickname : this.userName;
    },
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    updateCount(e) {
      this.$store.commit('updateCount', e.target.value)
    },
    getUserInfo() {
        this.$fns.post('/api/user/login',{},(json)=>{
            if(json.ask=='1'){
              this.nickname = json.nick_name;
              this.userName = json.name;
              this.userImg = json.avatar_img;
            }
        });
    },
    pullOut() {
      this.$fns.post('/api/user/logout',{},(json)=>{
          if(json.ask=='1'){
            this.userName = '';
            this.nickname = '';
            this.userImg = '';
            if(this.$route.path == '/myCenter') {
              this.$router.push('/')
            }
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
    // getTopMenu() {
  	//   this.$fns.post('/api/menu/get-top-menus',{},(json)=>{
  	// 	  if(json.ask=='1'){
  	// 		  this.menuJson = json.data
  	// 	  }else{
  	// 		  console.error(json.message)
  	// 	  }
  	//   });    	
    // },
    closeNav() {
      this.showNav = false
      this.$emit('showNav-to', this.showNav)
    },
    navSwitch() {
      this.showNav = !this.showNav
      this.$emit('showNav-to', this.showNav)
    },
    ylqbb() {
      var Browser = Browser || (function(window) {
            var document = window.document,
                navigator = window.navigator,
                agent = navigator.userAgent.toLowerCase(),
                //IE8+支持.返回浏览器渲染当前文档所用的模式
                //IE6,IE7:undefined.IE8:8(兼容模式返回7).IE9:9(兼容模式返回7||8)
                //IE10:10(兼容模式7||8||9)
                IEMode = document.documentMode,
                //chorme
                chrome = window.chrome || false,
                System = {
                    //user-agent
                    agent: agent,
                    //是否为IE
                    isIE: /msie/.test(agent),
                    //Gecko内核
                    isGecko: agent.indexOf("gecko") > 0 && agent.indexOf("like gecko") < 0,
                    //webkit内核
                    isWebkit: agent.indexOf("webkit") > 0,
                    //是否为标准模式
                    isStrict: document.compatMode === "CSS1Compat",
                    //是否支持subtitle
                    supportSubTitle: function() {
                        return "track" in document.createElement("track");
                    },
                    //是否支持scoped
                    supportScope: function() {
                        return "scoped" in document.createElement("style");
                    },
                    //获取IE的版本号
                    ieVersion: function() {
                        try {
                            return agent.match(/msie ([\d.]+)/)[1] || 0;
                        } catch (e) {
                            console.log("error");
                            return IEMode;
                        }
                    },
                    //Opera版本号
                    operaVersion: function() {
                        try {
                            if (window.opera) {
                                return agent.match(/opera.([\d.]+)/)[1];
                            } else if (agent.indexOf("opr") > 0) {
                                return agent.match(/opr\/([\d.]+)/)[1];
                            }
                        } catch (e) {
                            console.log("error");
                            return 0;
                        }
                    },
                    //描述:version过滤.如31.0.252.152 只保留31.0
                    versionFilter: function() {
                        if (arguments.length === 1 && typeof arguments[0] === "string") {
                            var version = arguments[0];
                            start = version.indexOf(".");
                            if (start > 0) {
                                end = version.indexOf(".", start + 1);
                                if (end !== -1) {
                                    return version.substr(0, end);
                                }
                            }
                            return version;
                        } else if (arguments.length === 1) {
                            return arguments[0];
                        }
                        return 0;
                    }
                };

            try {
                //浏览器类型(IE、Opera、Chrome、Safari、Firefox)
                System.type = System.isIE ? "IE" :
                    window.opera || (agent.indexOf("opr") > 0) ? "Opera" :
                    (agent.indexOf("chrome") > 0) ? "Chrome" :
                    //safari也提供了专门的判定方式
                    window.openDatabase ? "Safari" :
                    (agent.indexOf("firefox") > 0) ? "Firefox" :
                    'unknow';

                //版本号 
                System.version = (System.type === "IE") ? System.ieVersion() :
                    (System.type === "Firefox") ? agent.match(/firefox\/([\d.]+)/)[1] :
                    (System.type === "Chrome") ? agent.match(/chrome\/([\d.]+)/)[1] :
                    (System.type === "Opera") ? System.operaVersion() :
                    (System.type === "Safari") ? agent.match(/version\/([\d.]+)/)[1] :
                    "0";

                //浏览器外壳
                System.shell = function() {
                    //遨游浏览器
                    if (agent.indexOf("maxthon") > 0) {
                        System.version = agent.match(/maxthon\/([\d.]+)/)[1] || System.version;
                        return "傲游浏览器";
                    }
                    //QQ浏览器
                    if (agent.indexOf("qqbrowser") > 0) {
                        System.version = agent.match(/qqbrowser\/([\d.]+)/)[1] || System.version;
                        return "QQ浏览器";
                    }

                    //搜狗浏览器
                    if (agent.indexOf("se 2.x") > 0) {
                        return '搜狗浏览器';
                    }

                    //Chrome:也可以使用window.chrome && window.chrome.webstore判断
                    if (chrome && System.type !== "Opera") {
                        var external = window.external,
                            clientInfo = window.clientInformation,
                            //客户端语言:zh-cn,zh.360下面会返回undefined
                            clientLanguage = clientInfo.languages;

                        //猎豹浏览器:或者agent.indexOf("lbbrowser")>0
                        if (external && 'LiebaoGetVersion' in external) {
                            return '猎豹浏览器';
                        }
                        //百度浏览器
                        if (agent.indexOf("bidubrowser") > 0) {
                            System.version = agent.match(/bidubrowser\/([\d.]+)/)[1] ||
                                agent.match(/chrome\/([\d.]+)/)[1];
                            return "百度浏览器";
                        }
                        //360极速浏览器和360安全浏览器
                        if (System.supportSubTitle() && typeof clientLanguage === "undefined") {
                            //object.key()返回一个数组.包含可枚举属性和方法名称
                            var storeKeyLen = Object.keys(chrome.webstore).length,
                                v8Locale = "v8Locale" in window;
                            return storeKeyLen > 1 ? '360极速浏览器' : '360安全浏览器';
                        }
                        return "Chrome";
                    }
                    return System.type;
                };

                //浏览器名称(如果是壳浏览器,则返回壳名称)
                System.name = System.shell();
                //对版本号进行过滤过处理
                System.version = System.versionFilter(System.version);

            } catch (e) {
                console.log("error");
            }
            return {
                client: System
            };

        })(window);
        var num = Browser.client.version.split('.')[0];
        if (Browser.client.name == 'IE' && parseInt(num) < 10) {
            this.$alert('您当前的游览器版本过低，存在安全风险，请升级游览器！', {
              showConfirmButton: false,
              width: '60%',
              type: "warning"
            });
        } else if (Browser.client.name == 'QQ浏览器' && parseInt(num) < 9) {
            this.$alert('您当前的游览器版本过低，存在安全风险，请升级游览器！', {
              showConfirmButton: false,
              width: '60%',
              type: "warning"
            });
        } else if (Browser.client.name == 'Firefox' && parseInt(num) < 49) {
            this.$alert('您当前的游览器版本过低，存在安全风险，请升级游览器！', {
              showConfirmButton: false,
              width: '60%',
              type: "warning"
            });
        }
    }
  }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.user-info {
  .user-text{
    padding: 4px 0;
    a{
      &:hover{
        font-weight: bold;
      }
    }
  }
}
.container{
  padding: 0;
}
.loginFinish{
  margin-top: 18px;
  .uesr-box{
    position: relative;
    .p-yellow{
      display: none;
    }
    .user-info{
      display: none;
      border-radius: 0;
      padding: 10px 0;
      top: 60px;
    }
    img{
      z-index: 1050;
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    &:hover{
      .p-yellow{
        display: block;
        position: absolute;
        right: 0;
        bottom: -20px;
        width: 60px;
        height: 160px;
        background-color: #FEE300;
      }
      .user-info{
        display: block;
      }
    }
  }
}
.header-topsearch{
  position: relative;
  .fa{
    position: absolute;
    top: 7px;
    left: 24px;
    color: #aaa;
  }
  .form-control{
    height: 26px;
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
    margin-right: 15px;
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
    padding: 0;
    margin-top: 36px;
    height: 28px;
    img{
      display: block;
    }
  }
}
.login, .register{
  position: relative;
  height:80px;
  line-height:80px;
  color: #191919;
  text-decoration: none;
  padding: 0 2px;
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
      top: 10px;
      z-index: 0;
      display: block;
      width: 100%;
      height: 4px;
      background-color: #FEE300;
    }
  }
}
.l-hr{
  background-color: #aaa;
  margin: 0 16px -2px;
  width: 1px;
  height: 14px;
  display: inline-block;
}
.phone-margin{
  // margin: 0 15px 0 0;
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
    .navbar-default{
      .navbar-toggle {
        margin-right: 0;
      }
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
}
</style>
