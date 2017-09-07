<template>
  <div class="box">
      <div class="price col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in priceArr">
        <div class="title">{{item.startAddress}}<i class="iconfont icon-jiantou"></i>{{item.endAddress}}</div>
        <p><span class="left">日期</span><span class="right">{{item.data}}</span></p>
        <p><span class="left">耗时</span><span class="right">{{item.time}}</span></p>
        <p><span class="left">特价</span><span class="right c-df303f">{{item.price}} RMB/Kg</span></p>
        <div class ="button"><button type="button" class="btn btn-df303f">立即下单</button></div>
        <i class="iconfont icon-feiji"></i>
        <i class="iconfont icon-huoche"></i>
      </div>
  </div>
</template>

<script>

export default {
    props: {
      priceArr: {}
    },
    data () {
        return {
       }
    },
    methods:{
    }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../../static/iconfont/iconfont.css';

.box{
  overflow: hidden;
}
.icon-feiji, .icon-huoche{
  position: absolute;
  font-size: 90px;
  left: 50%;
  margin-left: -45px;
  color: #df303f;
  opacity: .1;
}
.icon-feiji{
  top: 10%;
}
.icon-huoche{
  top: 50%;
}
.icon-jiantou{
  font-size:30px;
  padding: 0 10px;
  line-height: 24px;
}
.price{
  height: 430px;
  position: relative;
  padding: 60px 20px 30px;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  &:hover{
    border: 1px solid #df303f;
  }
  .title{
    font-size: 24px;
    color: #323232;
    margin-bottom: 50px;
    text-align: center;
  }
  p{
    overflow: hidden;
    margin-bottom: 30px;
    .left{
      color: #646464;
      font-size: 16px;
      float: left;
    }
    .right{
      color: #323232;
      font-size: 18px;
      float: right;
      &.c-df303f{
        color: #df303f;
        font-size: 24px;
      }
    }
  }
  .button{
    text-align: center;
    padding-top: 20px;
  }
}
</style>