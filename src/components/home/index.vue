<template>
  <div>
    <div class="banner">
      <div class="banner-bg" :style="loansBanner"></div>
    </div>
    <div class="container m-t-20">
      <div class="gt-content row  height-560">
        <div class="search-box col-md-12 col-lg-7">
          <ul class="search-menu">
            <li v-for="(item, index) in searchArr" :class="{activeColor:item.active == true}" @click="searchActive(index)">{{item.value}}</li>
          </ul>
          <ul class="search-content">
            <!-- 单号查询 -->
            <li v-show="searchArr[0].active == true">
              <form class="form-horizontal">
                <div class="form-group">
                  <div class="col-sm-12" :class="{ 'form-group--error': $v.orderSearch.order.$error }">
                    <input type="text" class="form-control input-lg" v-model="orderSearch.order" placeholder="请输入你的单号" @input="$v.orderSearch.order.$touch()">
                  </div>
                  <span class="form-group__message" style="left: 15px;" v-if="!$v.orderSearch.order.required">单号不能为空</span>
                  <span class="form-group__message" style="left: 15px;" v-if="!$v.orderSearch.order.minLength">请输入正确的单号</span>
                </div>
                <div class="form-group m-t-40">
                  <div class="col-sm-12 text-center">
                    <button type="button" class="btn btn-ff5a00 btn-lg" @click="numbarSubmit">查询单号</button>
                  </div>
                </div>
              </form>
            </li>
            <!-- 价格查询 -->
            <li v-show="searchArr[1].active == true">
              <money-search :price-search="priceSearch"></money-search>
              <div class="col-sm-12">
              </div>
              <div class="row m-t-40">
                <div class="col-sm-12 text-center">
                  <button type="button" class="btn btn-df303f btn-lg" @click="logisticsSubmit">查询价格</button>
                </div>
              </div>
            </li>
            <!-- 贷款查询 -->
            <li v-show="searchArr[2].active == true">
              <finance-core :loans-search="loansSearch"></finance-core>
              <div class="form-group m-t-40">
                <div class="col-sm-12 text-center">
                  <button type="button" class="btn btn-ff5a00 btn-lg" @click="financeSubmit">查询额度</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="gt-advertising visible-lg-block col-lg-5" :style="advertising"></div>
      </div>
    </div>
    <!-- 价格专区 -->
    <div class="container m-t-20">
      <div class="gt-content row">
        <div class="gt-header">
          <h1>价格专区</h1>
          <a href="#" class="more price-more">更多优惠>></a>
        </div>
        <Price-list :price-arr="priceArr"></Price-list>
        <div class="gt-footer"></div>
      </div>
    </div>
    <!-- 贷款专区 -->
    <div class="container m-t-20">
      <div class="gt-content row">
        <div class="gt-header">
          <h1>贷款专区</h1>
          <a href="#" class="more price-more">更多贷款>></a>
        </div>
        <loans-list :loans-arr="loansArr"></loans-list>
        <div class="gt-footer"></div>
      </div>
    </div>
    <!-- 海外仓专区 -->
    <div class="container m-t-20">
      <div class="gt-content row">
        <div class="gt-header">
          <h1>海外仓专区</h1>
          <a href="#" class="more price-more">更多仓库>></a>
        </div>
        <warehouse :warehouse-arr="warehouseArr"></warehouse>
        <div class="gt-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceList from '@/components/core/priceList'
import loansList from '@/components/core/loansList'
import warehouse from '@/components/core/warehouse'
import moneySearch from '@/components/core/moneySearch'
import financeCore from '@/components/finance/financeCore'
import { required, minLength, alphaNum} from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        searchArr:[ 
          {'value': '单号查询', 'active': true},
          {'value': '价格查询', 'active': false},
          {'value': '贷款查询', 'active': false},
          // {'value': '海外仓查询', 'active': false},
        ],
        orderSearch: {
          order: ''
        },
        loansBanner: {backgroundImage: "url(" + require('../../../static/img/banner.png') + ")"},
        advertising: {backgroundImage: "url(" + require('../../../static/img/advertising.png') + ")"},
        priceSearch: {
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
        },
        loansSearch: {
          seller: '',
          name: '',
          phone: '',
          revenue: ''
        },
        loansArr: [
          {
            money: '500',
            seller: 'ebay卖家'
          },
          {
            money: '500',
            seller: 'ebay卖家'
          },
          {
            money: '500',
            seller: 'ebay卖家'
          },
          {
            money: '500',
            seller: 'ebay卖家'
          }
        ],
        warehouseArr: [
          {
            warehouse: '美国',
            text: '涵盖美系、美东在内的100个仓库',
            money: '30'
          },
          {
            warehouse: '美国',
            text: '涵盖美系、美东在内的100个仓库',
            money: '30'
          },
          {
            warehouse: '美国',
            text: '涵盖美系、美东在内的100个仓库',
            money: '30'
          },
          {
            warehouse: '美国',
            text: '涵盖美系、美东在内的100个仓库',
            money: '30'
          }
        ],
        priceArr: [
          {
            startAddress: '深圳',
            endAddress: '俄罗斯',
            data: '2017.09.06',
            time: '48小时',
            price: '10',
          },
          {
            startAddress: '深圳',
            endAddress: '俄罗斯',
            data: '2017.09.06',
            time: '48小时',
            price: '10',
          },
          {
            startAddress: '深圳',
            endAddress: '俄罗斯',
            data: '2017.09.06',
            time: '48小时',
            price: '10',
          },
          {
            startAddress: '深圳',
            endAddress: '俄罗斯',
            data: '2017.09.06',
            time: '48小时',
            price: '10',
          }
        ]
    }
    },
    components: {
      PriceList, loansList ,warehouse, moneySearch, financeCore
    },
    methods: {
      searchActive(index) {
        this.searchArr.forEach((d, i) =>{
          d.active = false
        })
        this.searchArr[index].active = true
      },
      numbarSubmit() {
          this.$router.push({ path: '/orderQuery', query: this.orderSearch })
      },
      logisticsSubmit() {
          this.$router.push({ path: '/logistics', query: this.priceSearch })
      },
      financeSubmit() {
          this.$router.push({ path: '/finance', query: this.loansSearch })
      }
    },
    validations: {
      orderSearch: {
        order: {
          required,
          alphaNum
        },
      }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

.btn-ff5a00{
  background-color: #ff5a00;
  color: #fff;
  padding: 10px 30px;
  &:hover{
    background-color: #FF762B;
  }
}
.banner{
  .banner-bg{
    height: 312px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1200px auto;
  }
}
.m-t-20{
  margin-top: 26px;
}
.gt-content{
  background-color: #fff;
  border-radius: 10px;
  .gt-header{
    padding: 0 20px;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    & *{
      height: 60px;
      line-height: 60px;
      font-size: 18px;
    }
    h1{
      color: #323232;
      float: left;
    }
    .more{
      float: right;
    }
    .price-more{
      color: #df303f;
    }
  }
  .gt-footer{
    height: 40px;
  }
  .search-box{
    padding: 40px;
    //搜索菜单
    .search-menu{
      overflow: hidden;
      >li{
        float: left;
        cursor: pointer;
        font-size: 18px;
        padding: 0 4px 20px;
        border-bottom: 2px solid #fff;
        &.activeColor, &:hover{
          color: #f55520;
          border-color: #f55520;
        }
        &+li{
          margin-left: 10%;
        }
      }
    }
    //搜索内容
    .search-content{
      margin-top: 50px;
      label{
        color: #323232;
        font-weight: normal;
      }
      .form-horizontal{
        .form-group{
          width: 100%;
        }
        label{
          min-width: 64px;
        }
      }
      .form-inline{
        label{
          color: #323232;
          font-weight: normal;
        }
        .form-group{
          position: relative;
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
    }
  }
  .gt-advertising{
    height: 560px;
  }
}
.form-group{
  position: relative;
}

@media (min-width: 768px) { 
    .height-560{
      height: 560px;
    }
    .banner{
      .banner-bg{
        height: 369px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 1420px auto;
      }
    }
 }

@media (min-width: 992px) {
  .banner{
      .banner-bg{
        height: 500px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 1920px auto;
      }
    }
}

@media (min-width: 1200) {

}
</style>