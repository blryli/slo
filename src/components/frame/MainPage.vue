<template>
  <div class="main-page">
    <header>
      <gateway-header @get-json="getTopNavJson"></gateway-header>
    </header>
    <gateway-main></gateway-main>
    <footer>
      <div class="footer">
        <div class="footer-inner">
          <div class="footer-content">
            <span class="footer-text">深圳市星邮供应链管理有限公司</span>
            <span class="action-buttons">
            <!-- <a href="" class="qq-icon"><i class="fa fa-qq bigger-150" aria-hidden="true"></i></a>
            <a href="" class="weixin-icon"><i class="fa fa-weixin bigger-150" aria-hidden="true"></i></a>
            <a href="" class="weibo-icon"><i class="fa fa-weibo bigger-150" aria-hidden="true"></i></a> -->
          </span>
          </div>
        </div>
      </div>
    </footer>
    <!--返回顶部按钮-->
    <div class="to-top" style="display: none;">
      <a href="#" title="返回顶部" id="goBack" @click.prevent="backTop">返回顶部</a>
    </div>
  </div>
</template>

<script>
  import gatewayHeader from './header'
  import gatewayMain from './main'
  export default {
    data () {
      return {
        topNavJson: ''
      }
    },
    components: {
      gatewayHeader,
      gatewayMain
    },
    mounted () {
      
    },
    methods: {
      getTopNavJson (val) {
        this.topNavJson = val
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.main-page{
  background-color: #EDEDED;
}
.footer {
  margin-top: 20px;
    .footer-inner{
      text-align: center;
      .footer-content{
        padding: 8px;
        line-height: 24px;
        color: #666;
        background-color: #666;
        .footer-text{
          color: #fff;
          opacity: .6;
        }
        .action-buttons a {
          margin: 0 3px;
          display: inline-block;
          text-decoration: none;
          .fa{
            display: inline-block;
            line-height: 1;
            color: #999;
            padding: 4px;
            border: 1px solid #999;
            border-radius: 20px;
            &:hover{
              color: #666;
              border-color: #666;
            }
          }
        }
      }
    }
  }
</style>
