<template>
	<div>
	  <div class="container m-t-20">
	  	<div class="row">
		  	<h4 class="col-sm-6 text-left">查询地点：<strong>美国加州</strong></h4>
		  	<div class="col-sm-6">
			  	<div class="input-group text-left">
		            <input type="text" class="form-control input-lg" placeholder="请输入查询地点">
		            <span class="input-group-btn">
			            <button type="button" class="btn btn-e62260">搜索
					    </button>
				    </span>
		        </div>
	        </div>
        </div>
	  </div>
	  <div class="container m-t-20">
		<table class="table table-striped table-striped table-hover">
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
		  	<tr v-for="(item, index) in warehouseArr">
			  	<td>{{item.name}}</td>
			  	<td>{{item.address}}</td>
			  	<td>{{item.name}}</td>
			  	<td>{{item.time}}</td>
			  	<td><a href="#" class="warehouseColor">{{item.laons}}</a></td>
		  	</tr>
		  </tbody>
		</table>
	  </div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
      	warehouseArr: [
      		{
      			name: '井空仓',
	      		address:  '美国加州',
	      		time: '1个月',
	      		menoy: '$10.00',
	      		laons: '查看详情'
      		},
      		{
      			name: '井空仓',
	      		address:  '美国加州',
	      		time: '1个月',
	      		menoy: '$10.00',
	      		laons: '查看详情'
      		}
      	]
      }
  	}
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container{
	background-color: #fff;
	margin-top: 20px;
	padding: 20px;
}
</style>
