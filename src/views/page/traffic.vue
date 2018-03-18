<template>
  <div class="end">
    <el-row :gutter="10">
      <el-col :span="16">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="时间段" label-width="80px">
            <el-date-picker value-format="yyyy-MM-dd" size="small" :clearable='false' v-model="imputValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          </el-form-item><br/>
          <el-form-item label="类型" label-width="80px">
            <el-select size="small" filterable v-model="yiValue" placeholder="请选择">
              <el-option v-for="item in yi" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select filterable :disabled="showEr" size="small" v-model="erValue" placeholder="请选择">
              <el-option v-for="item in er" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select filterable clearable :disabled="showSan" size="small" v-model="sanValue" placeholder="请选择">
              <el-option v-show="sanIsCacs" v-for="item in san" :key="item.case_id" :label="item.title" :value="item.case_id"></el-option>
              <el-option v-show="!sanIsCacs" v-for="item in san" :key="item.company_id" :label="item.name" :value="item.company_id"></el-option>
            </el-select>
            <el-button size="small" type="primary" @click.native="getCompanyList(isNew)">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="300"></el-table-column>
      <el-table-column v-if="lietouShow" prop="title" :label="lietou" width="300"></el-table-column>
      <el-table-column prop="qty" label="数量" width="300"> </el-table-column>
    </el-table>
    <div class="total">
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="page"
       @current-change="currentPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data() {
    return {
      isNew: true,
      yiValue: '',
      erValue: '',
      sanValue: '',
      lietou: '列头',
      yi: [{
          value: 'lg',
          label: '登录量',
      },{
          value: 'rg',
          label: '注册量',
      },{
          value: 'pv',
          label: '页面PV',
      },{
          value: 'uv',
          label: '页面UV',
      },{
          value: 'cl',
          label: '案例收藏量',
      },{
          value: 'at',
          label: '公司关注量',
      }],
      er: [{
        value: 'fc',
        label: '发现案例',
      },{
        value: 'wk',
        label: '作品集',
      },{
        value: 'cs',
        label: '案例',
      },{
        value: 'rec',
        label: '招聘信息',
      },{
        value: 'cc',
        label: '公司案例',
      }],
      selectedOptions: [],
      imputValue: '',
      page: 1,
      pageSize: 5,
      total: 1,
      tableData: [],
      names: [],
      cases: []
    }
  },
  components: {
  	VueEditor
  },
  created() {
    this.getCompanys();
    this.getcase();
  },
  watch: {
    yiValue() {
      this.yi.forEach((d, i) => {
        this.yiValue == d.value && (this.lietou = d.label);
      });
    },
    erValue() {
      this.er.forEach((d, i) => {
        this.erValue == d.value && (this.lietou = d.label);
      });
    },
  },
  computed: {
    showEr() {
      let value = this.yiValue == 'pv' || this.yiValue == 'uv' ? false : true;
       this.erValue = value ? '' : this.erValue;
       this.sanValue = value ? '' : this.sanValue;
      return value;
    },
    showSan() {
      let value = this.erValue == 'cs' || this.erValue == 'rec' || this.erValue == 'cc' ? false : true;
      this.sanValue = '';
      return value;
    },
    sanIsCacs() {
      return this.erValue == 'cs'
    },
    san() {
      let arr = this.erValue == 'cs' ? this.cases : this.names;
      return arr;
    },
    lietouShow() {
      let value = this.yiValue == 'lg' || this.yiValue == 'rg' || this.erValue == 'fc' || this.erValue == 'wk' ? false : true;
      return value;
    }
  },
  methods: {
    //切换页面
    currentPage(page) {
      this.page = page;
      this.getCompanyList();
    },
    //搜索
    getCompanyList(isNew) {
      var _this = this;
      var data = {
        date_range: this.imputValue,
        data_type: this.yiValue,
        page_code: this.erValue,
        sub_code: this.sanValue,
      }
      this.$fns.post('/api/admin/get-statistics-data',data,(json)=>{
          if(json.ask=='1'){
            _this.tableData = json.data;
            _this.total = parseInt(json.total);
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
    //获取公司信息
    getCompanys(){
      this.$fns.post('/api/company/get-companys',{},(json)=>{
          if(json.ask=='1'){
            this.names = json.data
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
    //获取案例ID
    getcase(){
      this.$fns.post('/api/case/get-case-list',{},(json)=>{
          if(json.ask=='1'){
            this.cases = json.data
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.v-modal{
  z-index: 90 !important;
}
.cell img{
  width: 50px;
  height: 50px;
}
.total{
  text-align: right;
  margin-top: 20px;
}
.end-box{
  .el-input{
    width: 300px;
  }
}

</style>