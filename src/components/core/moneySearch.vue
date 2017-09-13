<template>
  <form class="form-inline">
    <div class="row m-b-20">
      <div class="form-group col-sm-12">
        <label>始发地:</label>
        <input type="text" class="form-control input-lg" style="width: 89%" v-model="priceSearch.startAddress">
      </div>
    </div>
    <div class="row m-b-20">
      <div class="form-group col-sm-12" :class="{ 'form-group--error': $v.priceSearch.endAddress.$error }">
        <label>目的地:</label>
        <input type="text" class="form-control input-lg" style="width: 89%" v-model="priceSearch.endAddress" @focus="focus($event)" placeholder="请输入目的地" @input="$v.priceSearch.endAddress.$touch()">
      </div>
      <span class="form-group__message" style="left: 66px;" v-if="!$v.priceSearch.endAddress.required">目的地不能为空</span>
      <span class="form-group__message" style="left: 66px;" v-else="!$v.priceSearch.endAddress.minLength">长度小于4</span>
    </div>
    <div class="row">
      <div class="col-sm-3 col-lg-4 m-b-20"  v-for="(item, index) in priceSearch.tiji">
        <div class="input-group" :class="{error: item.number == ''}">
          <input type="number" min="0.00" step="0.01" class="form-control input-lg form__input" v-model="item.number" @focus="focus($event)" @blur="decimal(index,$event)" @input="floating(index)">
          <label class="ab-label form__label"><span class="font_red">*</span>{{item.text}}:</label>
          <span class="input-group-addon">cm</span>
        </div>
        <span class="form-group__message">请输入正确的数值</span>
      </div>
      <div class="col-sm-3 col-lg-4">
        <div class="input-group p-l-42" :class="{ 'form-group--error': $v.priceSearch.quantity.$error }">
          <input type="number" min="0" step="1" class="form-control input-lg" v-model="priceSearch.quantity" @focus="focus($event)" @input="$v.priceSearch.quantity.$touch()">
          <label class="ab-label"><span class="font_red">*</span>数量:</label>
          <span class="input-group-addon">箱</span>
        </div>
        <span class="form-group__message" v-if="!$v.priceSearch.quantity.required">请输入正确的数值</span>
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
import { required, minLength} from 'vuelidate/lib/validators'
  export default {
    props: {
      priceSearch: {
        type: Object,
        default: function () {
          return {
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
      }
    },
    data () {
      return {
      }
  	},
    validations: {
      priceSearch: {
        endAddress: {
          required,
          minLength: minLength(4)
        },
        breadth: {
          required
        },
        long: {
          required
        },
        high: {
          required
        },
        weight: {
          required
        },
        quantity: {
          required
        },
      }
    },
    methods: {
      decimal(index, event) {
          let z = /^(0|[1-9][0-9]*)$/
          let f = /^(0|[1-9][0-9]*)+(.[0-9])$/
          let d = /^(0|[1-9][0-9]*)+(.[0-9]{2})$/
          if(z.test(this.priceSearch.tiji[index].number)){
            this.priceSearch.tiji[index].number = this.priceSearch.tiji[index].number+'.00'
          }else if(f.test(this.priceSearch.tiji[index].number)){
            this.priceSearch.tiji[index].number = this.priceSearch.tiji[index].number+'0'
          }else if(d.test(this.priceSearch.tiji[index].number)){
            this.priceSearch.tiji[index].number = this.priceSearch.tiji[index].number
          }else{
            this.priceSearch.tiji[index].number = '';
            event.currentTarget.select();
          }
      },
      floating(index) {
        let a = /^(0|[1-9][0-9]*)+(.[0-9]{2}[0-9])$/
        if(a.test(this.priceSearch.tiji[index].number)){
          let arr = this.priceSearch.tiji[index].number.split('');
          arr.splice(-1, 1);
          let vl = arr.join('');
           this.priceSearch.tiji[index].number = vl
        }
      },
      focus(event){
          event.currentTarget.select();
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>

.m-b-20{
  position: relative;
}
.form-inline{
  label{
    color: #323232;
    font-size: 16px;
    font-weight: normal;
  }
  .form-group{
  }
  .input-group{
    padding-left: 42px;
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
.error{
  position: relative;
    &+.form-group__message {
      display: block;
      color: #CC3333;
      position: absolute;
      bottom: -20px;
      left: 24%;
    }
}

.error input, .error input:focus, .error input:hover, .error textarea {
    border-color: #CC3333;
}

//移除浏览器自带的上下箭头
// input::-webkit-outer-spin-button,
// input::-webkit-inner-spin-button {
//   -webkit-appearance: none;
// }
// input[type="number"]{
//   -moz-appearance: textfield;
// }
</style>