<template>
<div>
  <div class="container box m-t-20">
	<money-search></money-search>
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
		  	<td><button type="button" class="btn btn-info">立即下单</button></td>
	  	</tr>
	  </tbody>
	</table>
  </div>
</div>
</template>

<script>
import moneySearch from '@/components/core/moneySearch'
  export default {
    props: {},
    data () {
      return {
      }
  	},
    components: {
    	moneySearch
    }
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
