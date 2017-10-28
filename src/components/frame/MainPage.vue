<template>
  <div class="main-page"  :class="{ 'bodyRight75':showNav == true }">
    <header>
      <gateway-header @get-json="getTopNavJson" @showNav-to="getShowNav"></gateway-header>
    </header>
    <gateway-main></gateway-main>
    <footer>
      <div class="footer">
        <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-3 logo">
            <img src="static/img/logo2.png"  @click="headerShow">
          </div>
          <div class="col-xs-12 col-sm-7 text">
            <ul class="row">
              <li class="col-xs-12 about"><a href="#">关于我们</a></li>
              <li class="col-xs-12"><a href="#">SLO 设计网 Copayright @ 2017 ofo inc. 保留所有权利。京公网安备 11010802022978号</a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-2">
            <div class="ewm"><img src="static/img/ewm_small.png" alt="微信"></div>
          </div>
        </div>
        </div>
        </div>
    </footer>
    <!--返回顶部按钮-->
    <div class="to-top" style="display: none;">
      <div class="container">
        <p>
          <a id="goBack" @click="backTop"></a>
          <br>
          <span>返回顶部</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import gatewayHeader from './header'
  import gatewayMain from './main'
  import $ from 'jquery'
  export default {
    data () {
      return {
        topNavJson: '',
        showNav: ''
      }
    },
    components: {
      gatewayHeader,
      gatewayMain
    },
    mounted () {
      this.toggleToTop()
    },
    methods: {
      getTopNavJson (val) {
        this.topNavJson = val
      },
      getShowNav(val) {
        this.showNav = val
      },
      toggleToTop () {
        $(window).scroll(function(){
          if($(window).scrollTop() > 150){
            $('.to-top').fadeIn('slow');
          }else{
            $('.to-top').fadeOut('slow');
          }
        })
      },
      //回到顶部
      backTop () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // $('body').stop().animate({
        //   scrollTop:0
        // },500)
      },
       headerShow() {
        this.$router.push({ path: '/'})
        $('.header').css('display', 'block')
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
//动画
.bodyRight75{
  position: fixed;
  width: 100%;
  right: 75%;
  animation: right75 .5s;
}
@keyframes right75
{
  from {right: 0;}
  to {right: 75%;}
}

.main-page{
  // background-color: #EDEDED;
}
.footer {
  padding: 20px 0;
  background-color: #282727;
  color: #fff;
  .container{
    padding: 0;
  }
  .logo{
    margin-top: 30px;
    img{
      cursor: pointer;
      display: block;
      margin: 0 auto;
    }
  }
  .text{
    padding: 20px 40px;
    text-align: center;
    .about{
      a{
        font-size: 18px;
        opacity: 1;
      }
    }
    ul{
      margin-bottom: 0;
    }
    li{
      &+li{
        margin-top: 13px;
      }
      a{
        font-size: 13px;
        opacity: .6;
        color: #fff;
        &:hover{
          text-decoration: none;
        }
      }
    }
  }
  .ewm{
    padding-top: 10px;
    img{
      display: block;
      margin: 0 auto;
    }
  }
}
/* 返回顶部按钮 */
  .to-top {
    position: fixed;
    bottom: 185px;
    width: 100%;
    z-index: 999999;
    opacity: 1;
    .container{
      position: relative;
      text-align: right;
      cursor: pointer;
    }
    span{
      font-size: 12px;
      margin-top: 6px;
      color: #666;
    }
    p{
      margin-right: -110px;
    }
  }
  #goBack{
    width:40px;
    height: 40px;
    display: inline-block;
    background: url(/static/img/ic_back1.png) no-repeat center center;
    &:hover{
      background: url(/static/img/ic_back_select.png) no-repeat center center;
    }
  }

  @media (min-width: 768px) { 
      .footer{
        .logo{
          margin-top: 49px;
          img{
            margin: 0;
          }
        }
        .text{
          border-right: 2px solid #666;
          border-left: 2px solid #666;
          padding: 30px 80px;
          text-align: left;
        }
      }
      .ewm{
        float: right;
        img{
          margin: 0;
        }
      }
   }
</style>
