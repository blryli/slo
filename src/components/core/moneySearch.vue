<template>
  <form class="form-inline">
    <div class="row m-b-20">
      <div class="form-group col-sm-12">
        <label>始发地:</label>
        <el-cascader
          expand-trigger="hover"
          :options="priceSearch.startOptions"
          v-model="priceSearch.startAddress"
          @change="handleChange">
        </el-cascader>
      </div>
    </div>
    <div class="row m-b-20">
      <div class="form-group col-sm-12">
        <label>目的地:</label>
        <el-cascader
          expand-trigger="hover"
          :options="priceSearch.endOptions"
          v-model="priceSearch.endAddress"
          @change="handleChange">
        </el-cascader>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-4 col-lg-4 m-b-20"  v-for="(item, index) in priceSearch.tiji">
        <div class="input-group" :class="{error: item.number == ''}">
          <input type="number" min="0.00" step="0.01" class="form-control input-lg form__input" v-model="item.number" @focus="focus($event)" @blur="decimal(index,$event)" @input="floating(index)">
          <label class="ab-label form__label"><span class="font_red">*</span>{{item.text}}:</label>
          <span class="input-group-addon">cm</span>
        </div>
        <span class="form-group__message">请输入正确的数值</span>
      </div>
      <div class="col-xs-12 col-sm-4 col-lg-4 m-b-20">
        <div class="input-group p-l-44" :class="{ 'form-group--error': $v.priceSearch.quantity.$error }">
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
            startOptions: [{
              value: 'guangdong',
              label: '广东省',
              children: [{
                value: 'shenzhen',
                label: '深圳市',
                children: [{
                  value: 'baoan',
                  label: '宝安区'
                }]
              }, {
                value: 'dongguang',
                label: '东莞市',
                children: [{
                  value: 'tianshangrenjian',
                  label: '天上人间'
                }]
              }]
            }],
            endOptions: [{
              value: 'guangdong',
              label: '广东省',
              children: [{
                value: 'shenzhen',
                label: '深圳市',
                children: [{
                  value: 'baoan',
                  label: '宝安区'
                }]
              }, {
                value: 'dongguang',
                label: '东莞市',
                children: [{
                  value: 'tianshangrenjian',
                  label: '天上人间'
                }]
              }]
            }],
            startAddress: [],
            endAddress: [],
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
      handleChange(value) {
        console.log(value);
      },
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
  .form-group{
  }
  .input-group{
    padding-left: 44px;
    &.p-l-44{
      padding-left: 44px;
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

@media (min-width: 768px){
  .width100{
    width: 90%;
  }
}

移除浏览器自带的上下箭头
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
</style>