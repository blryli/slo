<template>
  <div class="container box m-t-20">
      <div class="box">
          <div class="loans">
            <div class="loans-content">
              <p class="text">可贷额度</p>
              <div class="title">￥<strong>{{loans.money}}<span>{{loans.util}}</span></strong></div>
              <div class ="button"><button type="button" class="btn btn-ff5a00">立即贷款</button></div>
            </div>
          </div>
      </div> 
      <div class="col-md-offset-3 col-md-6 p-t-20 p-b-20">
        <finance-core :loans-search="loansSearch" @getloansSearch='getLoansSearch'></finance-core>
        <div class="form-group m-t-40">
          <div class="col-sm-12 text-center">
            <button type="button" class="btn btn-ff5a00 btn-lg" @click="submit">重新查询</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import financeCore from './financeCore'
import $ from 'jquery'
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
          money: '350',
          util: '万'
        }
      }
    },
    components: {
      financeCore
    },
    methods: {
    	submit: function(){
    	console.log(" loansSearch : "+ JSON.stringify(this.loansSearch))
    	let _this = this
    		 $.ajax({
                url: "http://localhost:9005/finance/loan",
                type : 'get',  
                data: _this.loansSearch,
                contentType: "application/json",
                xhrFields: {
                    withCredentials: true
                },
                statusCode: {
                    400: function (data) { }
                },
                success: function (data) {
                	console.log(" loansSearch : "+ JSON.stringify(data))
                    if (data.success) {
                        _this.loans = data.data
                    }
                },
                error: function (data) {
                    layer.alert(data.message, { icon: 5 });
                }
            })
    	},
    	getLoansSearch: function(loansSearch){
    		this.loansSearch = loansSearch
    	},
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
  padding: 10px 0 0;
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
    height: 260px;
    width: 260px;
    border: 4px solid #ff5a00;
    margin: 20px auto 0;
    border-radius: 200px;
    &:hover{
      border-color: #f86515;
    }
  }
  .text{
    font-size: 16px;
    color: #646464;
    margin: 40px 0 6px;
  }
  .title{
    font-size: 18px;
    margin-bottom: 15px;
    strong{
      font-size: 60px;
      font-weight: normal;
      span{
        font-size:40px;
      }
    }
  }
}
@media (min-width: 768px) { 
   .loans{
     .loans-content{
       height: 400px;
       width: 400px;
       border-radius: 200px;
     }
     .text{
       font-size: 18px;
       margin: 80px 0 12px;
     }
     .title{
       margin-bottom: 30px;
       strong{
         font-size: 80px;
         span{
           font-size:50px;
         }
       }
     }
   }
   .box{
     padding: 10px 0 40px;
   }
 }

@media (min-width: 992px) {
  
}
</style>
