<template>
  <div class="end">
    <el-row :gutter="10">
      <el-col :span="16">
        <el-form :inline="true" class="demo-form-inline">
          <el-cascader size="small" expand-trigger="hover" :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
          <el-date-picker size="small" v-model="imputValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-button size="small" type="primary" @click.native="getCompanyList(isNew)">搜索</el-button>
        </el-form>
      </el-col>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="time" label="日期" width="300"></el-table-column>
      <el-table-column prop="title" label="列头" width="300"></el-table-column>
      <el-table-column prop="number" label="数量" width="300"> </el-table-column>
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
      options: [{
          value: 'lg',
          label: '登录量--lg',
      },{
          value: 'rg',
          label: '注册量--rg',
      },{
          value: 'pv',
          label: '页面PV--pv',
          children: [{
            value: 'fc',
            label: '发现案例--fc',
          },{
            value: 'wk',
            label: '作品集--wk',
          },{
            value: 'cs',
            label: '案例--cs',
          },{
            value: 'rec',
            label: '招聘信息--rec',
          },{
            value: 'cc',
            label: '公司案例--cc',
          }]
      },{
          value: 'UV',
          label: '页面UV--uv',
          children: [{
            value: 'fc',
            label: '发现案例--fc',
          },{
            value: 'wk',
            label: '作品集--wk',
          },{
            value: 'cs',
            label: '案例--cs',
          },{
            value: 'rec',
            label: '招聘信息--rec',
          },{
            value: 'cc',
            label: '公司案例--cc',
          }]
      },{
          value: 'cl',
          label: '案例收藏量--cl',
      },{
          value: 'at',
          label: '公司关注量--lg',
      }],
      selectedOptions: [],
      imputValue: '',
      page: 1,
      pageSize: 5,
      total: 1,
      tableData: [],
      names: [],
    }
  },
  components: {
  	VueEditor
  },
  created() {
    this.getCompanys();
  },
  methods: {
    //级联选择器
    handleChange(value) {
      console.log(value);
    },
    //切换页面
    currentPage(page) {
      this.page = page;
      this.getCompanyList();
    },
    //搜索
    getCompanyList(isNew) {
      var _this = this;
      var data = {
        companyName: this.imputValue,
        title: this.imputTitleValue,
        pageSize: this.pageSize,
        page: this.page
      }
      this.$fns.post('/api/admin/recruitment-list',data,(json)=>{
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