<template>
    <div class="works-recruit">
      <h2 class="title">招聘信息</h2>
      <ul v-for="recruit in recruitInfo">
        <li><strong>{{recruit.company}}（{{recruit.address}}）</strong></li>
        <li>{{recruit.position}}&nbsp;/&nbsp;{{recruit.state}}</li>
      </ul>
      <router-link :to="{ path: '/companyProfile', query: 11}" class="more">查看更多</router-link>
    </div>
</template>

<script>
  export default {
    props: {
      recruitInfo: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    data () {
      return {}
    },
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.works-recruit{
  padding-top: 40px;
  position: relative;
  height: 316px;
  h2{
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 15px;
  }
  ul{
    margin-top: 10px;
    li{
      line-height: 24px;
      color: #191919;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  .more{
    position: absolute;
    bottom: 40px;
  }
}
</style>
