<template>
  <div>
    <div class="container m-t-20">
      <div class="row">
        <h4 class="col-sm-6 text-left">查订单号：<strong>{{orderNumber}}</strong></h4>
        <div class="col-sm-6">
          <div class="input-group text-left">
                <input type="text" class="form-control input-lg" placeholder="请输入物流单号" v-model="orderNumbers">
                <span class="input-group-btn">
                  <button type="button" class="btn btn-e62260" @click="submit">搜索
              </button>
            </span>
            </div>
          </div>
        </div>
    </div>
    <div class="container">
      <table class="table table-striped table-striped table-hover">
        <thead>
          <tr>
            <td>名称</td>
            <td>SKU</td>
            <td>尺寸(cm)</td>
            <td>重量(kg)</td>
            <td>申报价值</td>
            <td>费用</td>
            <td>下单时间</td>
            <td>订单状态</td>
            <td>路线</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in orderArr">
            <td>{{item.name}}</td>
            <td>{{item.sku}}</td>
            <td>
              <p>长:{{item.dimension.long}}</p>
              <p>宽:{{item.dimension.width}}</p>
              <p>高:{{item.dimension.height}}</p>
            </td>
            <td>{{item.weight}}</td>
            <td>{{item.cost}}</td>
            <td>{{item.menoy}}</td>
            <td>{{item.time}}</td>
            <td>{{item.state}}</td>
            <td>{{item.way}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container box m-t-20">
      <div class="row">
        <h4 class="col-sm-6 text-left"><strong>物流追踪</strong></h4>
      </div>
      <div class="m-t-20">
        <el-steps :space="200" :active="0" style="text-align: center;">
          <el-step title="下单"></el-step>
          <el-step title="发货"></el-step>
          <el-step title="运输中"></el-step>
          <el-step title="收货"></el-step>
        </el-steps>
      </div>
      <div class="m-t-40">
        <p v-for="(item, index) in orderStatus" style="margin-left: 15%;"><span>{{item.time}}</span>&nbsp;&nbsp;<span>{{item.status}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        orderNumber: '',
        orderNumbers: '',
        orderStatus: [
          {time: '2017-09-26 08:08:08', status: '下单成功'},
          {time: '2017-09-26 08:08:08', status: '下单成功'},
          {time: '2017-09-26 08:08:08', status: '下单成功'},
        ],
        orderArr: [
          {
            name: '井空仓',
            sku:  '美国加州',
            dimension: {
              long: '10',
              width: '10',
              height: '30'
            },
            weight: '50',
            cost: '$1000',
            menoy: '$100.00',
            time: '2017-09-26 06:06:06',
            state: '正在运送',
            way: '深圳-俄罗斯'
          },
          {
            name: '井空仓',
            sku:  '美国加州',
            dimension: {
              long: '10',
              width: '10',
              height: '30'
            },
            weight: '50',
            cost: '$1000',
            menoy: '$100.00',
            time: '2017-09-26 06:06:06',
            state: '正在运送',
            way: '深圳-俄罗斯'
          },
        ]
      }
    },
    created() {
      if(this.$route.query.order){
      this.orderNumber = this.$route.query.order;
      }
    },
    methods: {
      submit() {
        this.orderNumber = this.orderNumbers
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container{
  background-color: #fff;
  padding: 20px;
}
</style>
