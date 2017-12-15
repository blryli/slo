<template>
  <li class="al-logo text-center">
      <img :src="attentionArr.logo">
      <h3>{{attentionArr.name}}</h3>
      <p class="al-btn text-center" v-if="attentionShow == true"><button type="button" class="btn btn-FEE300" :class="{ 'btn-bgfff': attentionArr.has_attention == true }" @click="attentionArr.has_attention = true"><span v-show="attentionArr.has_attention == true">已</span>关注</button></p>
  </li>
</template>

<script>
  export default {
    props: {
      attentionArr: {},
      attentionShow: {
        type: Boolean,
        default: trues
      }
    },
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
        word-wrap: break-word;
    }
}
.btn{
  font-size: 12px;
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
        padding: 70px 40px 60px;
    }
    .al-btn{
        padding-top: 13px;
    }
}

</style>