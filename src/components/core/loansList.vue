<template>
  <div class="box">
      <div class="loans col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in loansArr">
        <div class="loans-content">
          <p class="header"><span class="logo">logo</span><span class="right">{{item.seller}}</span></p>
          <p class="text">最高可贷额度</p>
          <div class="title">￥<strong>{{item.money}}万</strong></div>
          <div class ="button"><button type="button" class="btn btn-f86515">查询额度</button></div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    props: {
      loansArr: {}
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
.loans{
  position: relative;
  padding-bottom: 20px;
  text-align: center;
  &:nth-child(even){
    .loans-content{
      &:hover{
        border-color: #f4a236;
      }
    }
    .header{
      background-color: #f4a236;
    }
  } 
  .loans-content{
    height: 380px;
    border: 1px solid #dcdcdc;
    margin: 20px 0 0;
    border-radius: 6px;
    &:hover{
      border-color: #f86515;
    }
  }
  .header{
    background-color: #f86515;
    height: 120px;
    line-height: 120px;
    padding: 0 20px;
    overflow: hidden;
    .logo{
      font-size:36px;
      color: #fff;
      float: left;
    }
    .right{
      float: right;
      color: #fff;
      font-size: 24px;
    }
  }
  .text{
    font-size: 14px;
    color: #646464;
    margin: 40px 0 12px;
  }
  .title{
    font-size: 18px;
    margin-bottom: 30px;
    strong{
      font-size: 48px;
      font-weight: normal;
    }
  }
}
</style>