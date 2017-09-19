<template>
  <div>
  	<form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2 control-label"><span class="font_red">*</span>平台:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control input-lg" v-model="loansSearch.seller" placeholder="请输入你的平台">
        </div>
      </div>
      <div class="form-group m-t-20">
        <label class="col-sm-2 control-label"><span class="font_red">*</span>姓名:</label>
        <div class="col-sm-10" :class="{ 'form-group--error': $v.loansSearch.name.$error }">
          <input type="text" class="form-control input-lg" v-model="loansSearch.name" placeholder="请输入你的姓名" @input="$v.loansSearch.name.$touch()">
        </div>
        <span class="form-group__message" style="left: 19%;" v-if="!$v.loansSearch.name.required">姓名不能为空</span>
      </div>
      <div class="form-group m-t-20">
        <label class="col-sm-2 control-label"><span class="font_red">*</span>电话:</label>
        <div class="col-sm-10">
          <input type="tel" class="form-control input-lg" v-model="loansSearch.phone" placeholder="请输入你的电话">
        </div>
      </div>
      <div class="form-group m-t-20 ">
        <label class="col-sm-2 control-label"><span class="font_red">*</span>月收入:</label>
        <div class="col-sm-10">
          <input type="number" min="0" class="form-control input-lg" v-model="loansSearch.revenue" placeholder="请输入月收入金额，单位为元">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength, alphaNum} from 'vuelidate/lib/validators'
  export default {
    props: {
      loansSearch: {
        type: Object,
        default:{}
      }
    },
  	data () {
      return {
      }
    },
    components: {
    },
    watch : {
    	loansSearch : function(){
    		this.$emit('getloansSearch', this.loansSearch)
    	}
    },
    created() {
    },
    validations: {
      loansSearch: {
        name: {
          required
        }
      }
    },
    methods: {
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container{
	background-color: #fff;
	margin-top: 20px;
}
</style>
