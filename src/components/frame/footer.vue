<template>
  <footer>
    <div class="footer">
      <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 logo">
          <router-link to="/" @click.native="backTop"><img src="static/img/logo2.png"></router-link>
        </div>
        <div class="col-xs-12 col-sm-6 text">
          <ul>
            <li class="about">关于Lafo叔叔：景观从业者，对好案例有偏执的收藏癖</li>
            <li class="about">联系Lafo叔叔：微信Lafo-uncle</li>
            <li class="about"><small>la-folio.com | Copayright @ 2017 ofo inc. 保留所有权利。京公网安备</small> 11010802022978号</li>
          </ul>
        </div>
        <!-- <div class="col-xs-12 col-sm-2">
          <div class="ewm"><img src="static/img/ewm_small.png" alt="微信"></div>
        </div> -->
      </div>
      </div>
      </div>
  </footer>
</template>
<script>
export default {
    methods: {
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

<style lang="scss" scoped>
.footer {
  padding: 20px 0;
  background-color: #282727;
  color: #fff;
  .container{
    padding: 0;
  }
  .logo{
    margin-top: 44px;
    img{
      cursor: pointer;
      display: block;
    }
  }
  .text{
    padding: 20px 0;
    .about{
      font-size: 14px;
      opacity: .8;
      small{
        font-size: 10px;
      }
    }
    ul{
      margin-bottom: 0;
      display: inline-block;
      float: right;
      margin-right: 15px;
    }
    li{
      &+li{
        margin-top: 10px;
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

</style>
