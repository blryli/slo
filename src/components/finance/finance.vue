<template>
  <div class="container m-t-20">
    <div class="col-md-6 p-t-40">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">我是:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control input-lg" v-model="finance.seller" placeholder="请输入你的平台">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">姓名:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control input-lg" v-model="finance.name" placeholder="请输入你的姓名">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">电话:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control input-lg" v-model="finance.phone" placeholder="请输入你的电话">
          </div>
        </div>
        <div class="form-group m-t-40">
          <div class="col-sm-12 text-center">
            <button type="button" class="btn btn-ff5a00 btn-lg">查询额度</button>
          </div>
        </div>
      </form>
    </div>
  	<div class="col-md-6">
      <div class="box">
          <div class="loans">
            <div class="loans-content">
              <p class="text">最高可贷额度</p>
              <div class="title">￥<strong>{{loans.money}}万</strong></div>
              <div class ="button"><button type="button" class="btn btn-ff5a00">立即贷款</button></div>
            </div>
          </div>
      </div> 
    </div>
  </div>
</template>

<script>
  export default {
  	data () {
      return {
        finance: {
          seller: '',
          name: '',
          phone: '',
        },
        loans: {
          seller: '',
          money: '35'
        }
      }
    },
    components: {
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
    height: 320px;
    width: 320px;
    border: 4px solid #ff5a00;
    margin: 20px auto 0;
    border-radius: 200px;
    &:hover{
      border-color: #f86515;
    }
  }
  .text{
    font-size: 14px;
    color: #646464;
    margin: 60px 0 12px;
  }
  .title{
    font-size: 18px;
    margin-bottom: 30px;
    strong{
      font-size: 60px;
      font-weight: normal;
    }
  }
}
</style>
