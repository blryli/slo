<template>
  <li class="al-logo text-center">
      <img :src="attentionArr.attentionLogo">
      <h3>{{attentionArr.attentionName}}</h3>
      <p class="al-btn text-center" v-if="attentionShow == true"><button type="button" class="btn btn-FEE300" :class="{ 'btn-bgfff': attentionActive == true }" @click="attentionActive = true"><span v-show="attentionActive == true">已</span>关注</button></p>
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
    margin-top: 30px;
}
.btn-bgfff{
  border-color: #aaa;
  background-color: #fff;
  &:hover{
    cursor: default;
  }
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