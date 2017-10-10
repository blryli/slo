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
            <h1>LA<span>FOLIO</span></h1>
          </div>
          <div class="col-xs-12 col-sm-7 text">
            <ul>
              <li class="col-xs-4 about"><a href="#">关于我们</a></li>
              <li class="col-xs-12"><a href="#">SLO 设计网 Copayright @ 2017 ofo inc. 保留所有权利。京公网安备 11010802022978号</a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-2">
            <div class="ewm"><img src="static/img/wx.png" alt="微信"></div>
          </div>
        </div>
        </div>
        </div>
    </footer>
    <!--返回顶部按钮-->
    <div class="to-top" style="display: none;">
      <button type="button" id="goBack" @click="backTop"><i class="fa fa-chevron-up" aria-hidden="true"></i></button>
      <br>
      <span>返回顶部</span>
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
  .logo{
    color: #FEE300;
    margin-top: 18px;
    h1{
      font-size: 40px;
    }
    span{
      opacity: .8;
    }
  }
  .text{
    padding: 20px 40px;
    .about{
      a{
        font-size: 18px;
        opacity: 1;
      }
    }
    li{
      margin: 10px 0;
      a{
        font-size: 14px;
        opacity: .6;
        color: #fff;
        &:hover{
          text-decoration: none;
        }
      }
    }
  }
  .ewm{
    float: right;
    padding-top: 20px;
  }
}
/* 返回顶部按钮 */
  .to-top {
    position: fixed;
    bottom: 200px;
    right: 250px;
    cursor: pointer;
    z-index: 999999;
    opacity: 1;
    span{
      font-size: 12px;
      color: #666;
    }
  }
  #goBack{
    color: #666;
    display: inline-block;
    padding: 10px 14px;
    overflow: hidden;
    background-color: #fff;
    font-size: 14px;
    border-radius: 20px;
    border: 1px solid #eee;
    text-decoration: none;
    &:hover{
      color: #333;
    }
  }

  @media (min-width: 768px) { 
      .footer{
        .text{
          border-right: 2px solid #666;
          border-left: 2px solid #666;
          padding: 20px 80px;
        }
      }
   }
</style>
