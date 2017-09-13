<template>
	<div>
	  <div class="container box m-t-20">
		<money-search :price-search="priceLogistics"></money-search>
		<div class="row m-t-40">
		  <div class="col-sm-12 text-center">
		    <button type="button" class="btn btn-df303f btn-lg">查询价格</button>
		  </div>
		</div>
	  </div>
	  <div class="container m-t-20">
		<table class="table table-striped table-striped">
		  <thead>
		  	<tr>
			  	<td>产品名称</td>
			  	<td>运输时长</td>
			  	<td>运输单价</td>
			  	<td>费用详情</td>
			  	<td>物品说明</td>
		  	</tr>
		  </thead>
		  <tbody>
		  	<tr>
			  	<td>一件代发</td>
			  	<td>8-12天</td>
			  	<td>￥75.00</td>
			  	<td>
			  		<p>邮费：￥400</p>
			  		<p>燃油费：￥90</p>
			  		<p>挂号费：￥80</p>
			  		<p>其他费：￥90</p>
			  	</td>
			  	<td><a href="#">点击查看</a></td>
			  	<td><button type="button" class="btn btn-df303f">立即下单</button></td>
		  	</tr>
		  	<tr>
			  	<td>一件代发</td>
			  	<td>8-12天</td>
			  	<td>￥75.00</td>
			  	<td>
			  		<p>邮费：￥400</p>
			  		<p>燃油费：￥90</p>
			  		<p>挂号费：￥80</p>
			  		<p>其他费：￥90</p>
			  	</td>
			  	<td><a href="#">点击查看</a></td>
			  	<td><button type="button" class="btn btn-df303f">立即下单</button></td>
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
      		startAddress: '广东,深圳',
      		endAddress: '',
      		tiji: [
      		  {number: '1.00', text: '长'},
      		  {number: '1.00', text: '宽'},
      		  {number: '1.00', text: '高'},
      		  {number: '0.50', text: '重量'}
      		],
      		quantity: '1',
      		Special: 'living'
      	}
      }
  	},
    components: {
    	moneySearch
    },
    created() {
    	if(this.$route.query.long){
			this.priceLogistics = this.$route.query;
    	}
    },
    methods: {
    },
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container{
	background-color: #fff;
	margin-top: 20px;
	padding: 20px;
}
.box{
	padding: 20px 10%;
}
</style>
