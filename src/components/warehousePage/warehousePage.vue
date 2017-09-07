<template>
	<div>
	  <div class="container box m-t-20">
	  	<h4>查询地点：美国加州</h4>
	  </div>
	  <div class="container m-t-20">
		<table class="table table-striped table-striped">
		  <thead>
		  	<tr>
			  	<td>仓库名称</td>
			  	<td>仓库地点</td>
			  	<td>免租期</td>
			  	<td>操作费</td>
			  	<td>价格详情</td>
		  	</tr>
		  </thead>
		  <tbody>
		  	<tr>
			  	<td>井空仓</td>
			  	<td>美国加州</td>
			  	<td>1个月</td>
			  	<td>$10.00</td>
			  	<td><a href="#">查看详情</a></td>
		  	</tr>
		  	<tr>
			  	<td>井空仓</td>
			  	<td>美国加州</td>
			  	<td>1个月</td>
			  	<td>$10.00</td>
			  	<td><a href="#">查看详情</a></td>
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
	padding: 20px;
}
</style>
