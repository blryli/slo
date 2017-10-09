<template>
  <li class="al-logo text-center">
      <img :src="attentionArr.attentionLogo">
      <h3>{{attentionArr.attentionName}}</h3>
      <p class="al-btn text-center"><button type="button" class="btn btn-FEE300" :class="{ 'btn-default': active == true }" @click="active = true"><span v-show="active == true">已</span>关注</button></p>
  </li>
</template>

<script>
  export default {
    props: {
      attentionArr: {}
    },
    data () {
      return {
        active: false
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
.btn-FEE300{
    background-color: #FEE300;
    &:hover{
        background-color: #FFEB47;
    }
}
.btn-default{
    background-color: #fff;
    &:hover{
        background-color: #fff;
    }
}
.btn{
    border-radius: 8px;
    padding: 4px 8px;
    width: 106px;
}

</style>