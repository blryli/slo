<template>
  <div class="box">
      <div class="warehouse col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in warehouseArr">
        <div class="title">{{item.warehouse}}</div>
        <div class="text">{{item.text}}<br>单价低至<strong>{{item.money}}RMB/Kg</strong></div>
        <div class ="button"><button type="button" class="btn btn-e62260">查询仓库</button></div>
      </div>
  </div>
</template>

<script>

export default {
    props: {
      warehouseArr: {}
    },
    data () {
        return {
       }
    },
    methods:{
    }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>

.box{
  overflow: hidden;
}
.warehouse{
  height: 360px;
  position: relative;
  padding: 60px 20px 30px;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  text-align: center;
  &:hover{
    border: 1px solid #e62260;
  }
  .title{
    font-size: 24px;
    color: #323232;
    margin-bottom: 50px;
  }
  .text{
    font-size: 16px;
    color: #646464;
    strong{
      color: #e62260;
    }
  }
  .button{
    padding-top: 60px;
  }
}
</style>