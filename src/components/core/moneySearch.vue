<template>
  <form class="form-inline">
    <div class="row m-b-20">
      <div class="form-group col-sm-12"  :class="{'has-error':priceSearch.startAddress == null}">
        <label>始发地:</label>
        <input type="text" class="form-control input-lg" style="width: 89%" v-model="priceSearch.startAddress">
      </div>
    </div>
    <div class="row m-b-20">
      <div class="form-group col-sm-12">
        <label>目的地:</label>
        <input type="text" class="form-control input-lg" style="width: 89%" v-model="priceSearch.endAddress" placeholder="请输入目的地">
      </div>
    </div>
    <div class="row m-b-20">
      <div class="col-sm-3 col-lg-4">
        <div class="input-group">
          <input type="text" class="form-control input-lg" v-model="priceSearch.long">
          <label class="ab-label">长:</label>
          <span class="input-group-addon">cm</span>
        </div>
      </div>
      <div class="col-sm-3 col-lg-4">
        <div class="input-group">
          <input type="text" class="form-control input-lg" v-model="priceSearch.breadth">
          <label class="ab-label">宽:</label>
          <span class="input-group-addon">cm</span>
        </div>
      </div>
      <div class="col-sm-3 col-lg-4">
        <div class="input-group">
          <input type="text" class="form-control input-lg" v-model="priceSearch.high">
          <label class="ab-label">高:</label>
          <span class="input-group-addon">cm</span>
        </div>
      </div>
    </div>
    <div class="row m-b-20">
      <div class="col-sm-5">
        <div class="input-group p-l-42">
          <input type="text" class="form-control input-lg" v-model="priceSearch.weight">
          <label class="ab-label">重量:</label>
          <span class="input-group-addon">kg</span>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="input-group p-l-42">
          <input type="text" class="form-control input-lg" v-model="priceSearch.quantity">
          <label class="ab-label">数量:</label>
          <span class="input-group-addon">箱</span>
        </div>
      </div>
    </div>
    <div>
      <label>特殊物品:</label>
      <label class="radio-inline">
        <input type="radio" v-model="priceSearch.Special" id="living" value="living"> 活体动植物
      </label>
      <label class="radio-inline">
        <input type="radio" v-model="priceSearch.Special" id="acoustics" value="acoustics"> 音响制品
      </label>
      <label class="radio-inline">
        <input type="radio" v-model="priceSearch.Special" id="prohibited" value="prohibited"> 违禁品
      </label>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      priceSearch: {
        type: Object,
        default: function () {
          return {
            startAddress: '广东,深圳',
            endAddress: '',
            long: '1.00',
            breadth: '1.00',
            high: '1.00',
            weight: '0.50',
            quantity: '1.00',
            Special: 'living'
          }
        }
      }
    },
    data () {
      return {
      }
  	},

  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>

.form-inline{
  label{
    color: #323232;
    font-size: 16px;
    font-weight: normal;
  }
  .form-group{
  }
  .input-group{
    padding-left: 26px;
    &.p-l-42{
      padding-left: 42px;
    }
    .ab-label{
      position: absolute;
      left: 0;
      top: 10px;
    }
  }
  .input-group-addon{
    padding: 0 2px;
  }
}
</style>