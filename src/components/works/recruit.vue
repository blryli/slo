<template>
    <div class="works-recruit">
      <h2 class="title">招聘信息</h2>
      <ul v-for="recruit in recruitInfo">
        <li><strong>{{recruit.company}}（{{recruit.address}}）</strong></li>
        <li>{{recruit.position}}&nbsp;/&nbsp;{{recruit.state}}</li>
      </ul>
      <a href="#">查看更多</a>
    </div>
</template>

<script>
  export default {
    props: {
      recruitInfo: ''
    },
    data () {
      return {}
    },
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.works-recruit{
  padding-top: 40px;
  h2{
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
  ul{
    margin-top: 15px;
    li{
      line-height: 24px;
    }
  }
}
</style>
