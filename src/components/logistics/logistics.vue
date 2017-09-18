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
		  	<tr>
			  	<td>顺丰专线</td>
			  	<td>深圳-美国</td>
			  	<td>8-12天</td>
			  	<td>￥75.00</td>
			  	<td>100</td>
			  	<td>1000</td>
			  	<td><a href="#">点击查看</a></td>
			  	<td><button type="button" class="btn btn-df303f">下单</button></td>
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
}
.box{
	padding: 20px 10%;
}
</style>
