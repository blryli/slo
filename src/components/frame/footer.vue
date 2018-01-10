<template>
  <footer>
    <div class="footer">
      <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-3 logo">
          <router-link to="/" @click.native="backTop"><img src="static/img/logo2.png"></router-link>
        </div>
        <div class="col-xs-12 col-sm-7 text">
          <ul class="row">
            <li class="col-xs-12 about"><a href="#">关于我们</a></li>
            <li class="col-xs-12"><a href="#">LAFOLIO 设计网 Copayright @ 2017 ofo inc. 保留所有权利。京公网安备 11010802022978号</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="ewm"><img src="static/img/ewm_small.png" alt="微信"></div>
        </div>
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

</style>
