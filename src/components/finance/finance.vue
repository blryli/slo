<template>
  <div class="container box m-t-20">
      <div class="box">
          <div class="loans">
            <div class="loans-content">
              <p class="text">可贷额度</p>
              <div class="title">￥<strong>{{loans.money}}<span>万</span></strong></div>
              <div class ="button"><button type="button" class="btn btn-ff5a00">立即贷款</button></div>
            </div>
          </div>
      </div> 
      <div class="col-md-offset-3 col-md-6 p-t-20">
        <finance-core :loans-search="loansSearch"></finance-core>
        <div class="form-group m-t-40">
          <div class="col-sm-12 text-center">
            <button type="button" class="btn btn-ff5a00 btn-lg" @click="Submit">重新查询</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import financeCore from './financeCore'
  export default {
  	data () {
      return {
        loansSearch: {
          seller: '',
          name: '',
          phone: '',
          revenue: ''
        },
        loans: {
          money: '350'
        }
      }
    },
    components: {
      financeCore
    },
    created() {
      
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container{
	background-color: #fff;
	margin-top: 20px;
}
.col-md-6{
  &+.col-md-6{
    border-left: 1px solid #dcdcdc;
  }
}
.box{
  overflow: hidden;
  padding: 10px 0 40px;
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
  } 
  .loans-content{
    height: 400px;
    width: 400px;
    border: 4px solid #ff5a00;
    margin: 20px auto 0;
    border-radius: 200px;
    &:hover{
      border-color: #f86515;
    }
  }
  .text{
    font-size: 18px;
    color: #646464;
    margin: 80px 0 12px;
  }
  .title{
    font-size: 18px;
    margin-bottom: 30px;
    strong{
      font-size: 80px;
      font-weight: normal;
      span{
        font-size:50px;
      }
    }
  }
}
</style>
