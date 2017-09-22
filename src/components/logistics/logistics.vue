<template>
	<div>
	  <div class="container box m-t-20">
		<money-search :price-search="priceLogistics"></money-search>
		<div class="row m-t-40">
		  <div class="col-sm-12 text-center">
		    <button type="button" class="btn btn-df303f btn-lg" @click="query()">查询价格</button>
		  </div>
		</div>
	  </div>
	  <div class="container tb m-t-20 p-t-20">
		<table class="table table-striped table-striped">
		  <thead>
		  	<tr>
			  	<td>运输方案</td>
			  	<td>运输路线</td>
			  	<td>运输时长</td>
			  	<td>重量(kg)</td>
			  	<td>运输单价</td>
			  	<td>总价</td>
			  	<td>物品说明</td>
			  	<td></td>
		  	</tr>
		  </thead>
		  <tbody>
		  	<tr v-for="(item ,index) in  logistics">
			  	<td>{{item.productName}}</td>
			  	<td>{{item.outAddress}}-{{item.arriveAddress}}</td>
			  	<td>{{item.prescription}}{{item.prescriptionUnit}}</td>
			  	<td>{{item.weight}}kg</td>
			  	<td>{{item.price}}{{item.currency}}</td>
			  	<td>{{item.wholePrice}}{{item.currency}}</td>
			  	<td><a href="#">点击查看</a></td>
			  	<td><button type="button" class="btn btn-df303f" @click="createOrder(item.productCode)">下单</button></td>
		  	</tr>
		  </tbody>
		</table>
	  </div>
	</div>
</template>

<script>
import moneySearch from '@/components/core/moneySearch'
  export default {
    data () {
      return {
      	priceLogistics: {
      		startOptions: [],
      		endOptions: [],
      		startAddress: [],
      		endAddress: [],
      		tiji: [
      		  {number: 1.00, text: '长'},
      		  {number: 1.00, text: '宽'},
      		  {number: 1.00, text: '高'},
      		  {number: 0.50, text: '重量'}
      		],
      		quantity: '1',
      		Special: 'living'
      	},
      	logistics: []
      }
  	},
    components: {
    	moneySearch
    },
    created() {
    	if(this.$route.query.long){
			this.priceLogistics = this.$route.query;
    	}
    	this.queryStartOptions()
    	this.queryEndOptions()
    },
    watch: {
    },
    methods: {
    	createOrder: function(code){
    		let _url = window.location.href
            window.location.href =  URL + "/order/create?code=" + code;
    	},
    	query: function(){
    		let _this = this
    		let length 
    		let width 
    		let height 
    		let weight 
    		this.priceLogistics.tiji.forEach((data , index)=>{
    			if(data.text == '长'){
    				length = data.number
    			}
    			if(data.text == '宽'){
    				width = data.number
    			}
    			if(data.text == '高'){
    				height = data.number
    			}
    			if(data.text == '重量'){
    				weight = data.number
    			}
    		})
    		let form = {'originatingSites':this.priceLogistics.startAddress,'destinations':this.priceLogistics.endAddress,
    		'length':length ,'width': width ,'height':height, 'weight':weight ,'number': this.priceLogistics.quantity}
    		 $.ajax({
                url: URL + "/logistic/price",
                type : 'post',
                data: JSON.stringify(form), 
                contentType: "application/json",
                xhrFields: {
                    withCredentials: true
                },
                statusCode: {
                    400: function (data) { }
                },
                success: function (data) {
                    if (data.success) {
                     	_this.logistics = data.data
                    }
                }
            })
    	},
    	queryEndOptions: function(){
    		let _this = this
    		 $.ajax({
                url: URL + "/selection/address/world",
                type : 'get',  
                contentType: "application/json",
                xhrFields: {
                    withCredentials: true
                },
                statusCode: {
                    400: function (data) { }
                },
                success: function (data) {
                    if (data.success) {
                     	_this.priceLogistics.endOptions = data.data
                    }
                }
            })
    	},
    	queryStartOptions: function(){
    		let _this = this
    		 $.ajax({
                url:  URL + "/selection/address/aboriginal",
                type : 'get',  
                contentType: "application/json",
                xhrFields: {
                    withCredentials: true
                },
                statusCode: {
                    400: function (data) { }
                },
                success: function (data) {
                    if (data.success) {
                       _this.priceLogistics.startOptions = data.data
                    }
                }
            })
    	}
    },
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container{
	background-color: #fff;
	margin-top: 20px;
}
.box{
	padding: 20px 10%;
}
</style>
