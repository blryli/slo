<template>
  <div class="main-page"  :class="{ 'bodyRight75':showNav == true }">
    <header>
      <gateway-header @get-json="getTopNavJson" @showNav-to="getShowNav"></gateway-header>
    </header>
    <router-view/>
    <gateway-footer></gateway-footer>
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
  import gatewayFooter from './footer'
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
      gatewayFooter
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
  // position: relative;
  // z-index: 5;
}

/* 返回顶部按钮 */
  .to-top {
    position: fixed;
    height: 1px;
    bottom: 200px;
    z-index: 9999;
    width: 100%;
    .container{
      position: relative;
      z-index: 9999;
      height: 1px;
    }
    span{
      font-size: 12px;
      margin-top: 6px;
      color: #666;
    }
    p{
      margin-right: -110px;
      margin-top: -60px;
      float: right;
      z-index: 9999;
      position: relative;
      text-align: center;
    }
  }
  #goBack{
    cursor: pointer;
    width:40px;
    height: 40px;
    margin-left: 4px;
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
