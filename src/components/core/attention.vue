<template>
  <li class="al-logo text-center">
      <img :src="attentionArr.attentionLogo">
      <h3>{{attentionArr.attentionName}}</h3>
      <p class="al-btn text-center" v-if="attentionShow == true"><button type="button" class="btn btn-FEE300" :class="{ 'btn-default': attentionActive == true }" @click="attentionActive =! attentionActive"><span v-show="attentionActive == true">已</span>关注</button></p>
  </li>
</template>

<script>
  export default {
    props: {
      attentionArr: {},
      attentionShow: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        attentionActive: false
      }
    },
    components: {
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.al-logo{
    img{
        width: 60px;
        height: auto;
        padding-top: 15px;
    }
    h3{
        margin-top: 10px;
    }
}
.al-btn{
    margin-top: 20px;
}
.companyProfile{
    .al-logo{
        padding: 50px 40px;
    }
    .al-btn{
        padding-top: 30px;
    }
}

</style>