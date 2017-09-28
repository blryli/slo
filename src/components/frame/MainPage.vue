<template>
  <div class="main-page"  :class="{ 'bodyRight75':showNav == true }">
    <header>
      <gateway-header @get-json="getTopNavJson" @showNav-to="getShowNav"></gateway-header>
    </header>
    <gateway-main></gateway-main>
    <footer>
      <div class="footer">
        <div class="container row">
          <div class="col-xs-12 col-sm-2 logo text-center">
            <h1>slo</h1>
          </div>
          <div class="col-xs-12 col-sm-8 text text-center">
            <ul>
              <li class="col-xs-4"><a href="#">商务合作</a></li>
              <li class="col-xs-4"><a href="#">联系我们</a></li>
              <li class="col-xs-4"><a href="#">声明版权</a></li>
              <li class="col-xs-4"><a href="#">意见反馈</a></li>
              <li class="col-xs-4"><a href="#">关于我们</a></li>
              <li class="col-xs-4"><a href="#">隐私保护</a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-2  text-center">
            <div class="ewm"><img src="static/img/wx.png" alt="微信"></div>
          </div>
        </div>
        </div>
    </footer>
    <!--返回顶部按钮-->
    <div class="to-top" style="display: none;">
      <a href="#" title="返回顶部" id="goBack" @click.once="backTop"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
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
          if($(window).scrollTop() > 450){
            $('.to-top').fadeIn('slow');
          }else{
            $('.to-top').fadeOut('slow');
          }
        })
      },
      //当点击跳转按钮时
      backTop () {
        $('body').animate({
          scrollTop:0
        },500)
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
  padding: 20px;
  background-color: #282727;
  color: #fff;
  .logo{
    color: #FEE300;
    text-align: center;
    margin-top: 15px;
    h1{
      font-size: 46px;
    }
  }
  .text{
    padding: 20px 0;
    li{
      margin: 10px 0;
      a{
        font-size: 14px;
        opacity: .6;
        color: #fff;
        &:hover{
          opacity: .9;
          text-decoration: none;
        }
      }
    }
  }
  .ewm{
    padding: 10px 20px;
  }
}
/* 返回顶部按钮 */
  .to-top {
    position: fixed;
    bottom: 168px;
    right: 15px;
    cursor: pointer;
    z-index: 999999;
    opacity: 1;
  }
  #goBack{
    color: #fff;
    display: block;
    padding: 10px 14px;
    overflow: hidden;
    background-color: #666;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    text-decoration: none;
    &:hover{
      background-color: #444;
    }
  }

  @media (min-width: 768px) { 
      .footer{
        .text{
          border-right: 2px solid #666;
          border-left: 2px solid #666;
          padding: 20px 40px;
        }
      }
   }
</style>
