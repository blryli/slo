<template>
  <div class="footer">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/">省钱方案</router-link></li>
      <li><router-link to="/">关于我们</router-link></li>
      <li><router-link to="/">联系我们</router-link></li>
    </ul>
    <div class="bei">
      <span>Copyright@2017 fba.top,All Rights Reserved</span>
      <i>|</i>
      <span>粤ICP备15039098号-2</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {},
  data() {
    return {
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.footer{
  text-align: center;
  background-color: #43494D;
  margin: 0 -20px;
  padding: 20px;
  ul{
    overflow: hidden;
    display: inline-block;
    li{
      float: left;
      +li{
        margin-left: 20px;
      }
      a{
        color: #fff;
        opacity: .7;
        &:hover{
          opacity: .9;
          text-decoration: underline;
        }
      }
    }
  }
  .bei{
    margin-top: 15px;
    span{
      color: #fff;
      opacity: .6;
    }
    i{
      color: #fff;
      opacity: .3;
      margin: 0 10px;
    }
  }
}
</style>
