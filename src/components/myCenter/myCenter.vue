<template>
  <div :class="{ 'bg-F2F2F2': active == 2, 'p-b-20': active == 2 }" v-scroll="loadMore">
    <div class="bg-F2F2F2 works-banner my-center text-center">
      <img :src="userImg">
      <h1>{{myName}}</h1>
      <small>{{userText}}</small>
      <div class="al-btn">
        <button type="button" class="btn btn-FEE300-fff" @click="shouc" :class="{ 'btn-FEE300': active == 1 }">我的收藏</button>
        <button type="button" class="btn btn-FEE300-fff" @click="gzhu" :class="{ 'btn-FEE300': active == 2 }">我的关注</button>
      </div>
    </div>
    <div class="container m-t-20 m-b-20" v-if="active == 1">
        <case-list :case-arr="datas"></case-list>
    </div>
    <div class="container m-t-20 m-b-20 bg-fff" v-for="(item, index) in myAttentionArr" v-if="active == 2">
      <ul class="col-sm-2 my-center-left">
        <attention :attention-arr="item.company_info" :id="item.company_info.company_id"></attention>
      </ul>
      <!-- <div class="fix-bg" v-if="item.showText == true"></div>
      <div class="fix-box row" v-if="item.showText == true">
        <div class="container">
          <div class="particulars-close" @click="item.showText = false"></div>
          <attention :attention-arr="item.attentionArr" attention-show="false" class="fix-box-header"></attention>
          <p>{{item.text}}</p>
        </div>
      </div> -->
      <div class="col-sm-9 my-center-right">
        <case-list :case-arr="item.cases" class="m-r-20"></case-list>
      </div>
      <div class="col-sm-1 works-right">
        <router-link :to="{ path: '/worksPage'}">  
          <label class="text-center"><i class="fa fa-chevron-right" aria-hidden="true"></i><br><small>查看全部</small></label>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
import attention from '@/components/core/attention'
var count = 0;
  export default {
    props: {
    },
    data () {
      return {
        userImg: '',
        userName: '',
        nickname: '',
        userText: '',
        active: 1,
        myAttentionArr: [],
        datas: [],
        page:1,
        pageSize:8,
        keyWords:'',
        loading: false,
        hasMore: true,
      }
    },
    components: {
      caseList, attention
    },
    created () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.getUserInfo();
      this.getCollects();
    },
    computed: {
      myName() {
        return this.nickname != '' ? this.nickname : this.userName;
      }
    },
    methods: {
      loadMore(){
        if(!this.loading && this.hasMore){
          this.loading = true;
          // 请求下一页数据
          if(this.active == 1){
            this.getCollects();
          }else{
            this.getAttentions();
          }
          this.loading = false;
        }
      },
      shouc() {
        this.active = 1;
        this.getCollects();
      },
      gzhu() {
        this.active = 2;
        this.getAttentions();
      },
      getUserInfo() {
        let _this = this;
          this.$fns.post('/api/user/login',{},(json)=>{
              if(json.ask=='1'){
                _this.nickname = json.nick_name;
                _this.userName = json.name;
                _this.userImg = json.avatar_img;
                _this.userText = json.signature;
              }else{
                this.$message({message:json.message,type:'error',showClose:true});
              }
          });
      },
      getAttentions(){
        var data = {
            page:this.page,
            pageSize:this.pageSize,
            keyWords:this.keyWords
        }
        this.$fns.post('/api/user/get-attentions',data,(json)=>{
          if(json.ask=='1'){
            if(json.data.length){
              this.page++;
              json.data.forEach((item,k)=>{
                this.myAttentionArr.push(item);
              })
            }
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
        },{},false);
      },
      getCollects(){
        var data = {
            page:this.page,
            pageSize:this.pageSize,
            keyWords:this.keyWords
        }
        this.$fns.post('/api/user/get-collects',data,(json)=>{
          if(json.ask=='1'){
            if(json.data.length){
              this.page++;
              json.data.forEach((item,k)=>{
                this.datas.push(item);
              })
            }
            if(json.data.length<this.pageSize){
               this.hasMore = false;
            }
          }else{
            this.$message({message:json.message,type:'error',showClose:true});
          }
        },{},false);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.fix-bg{
  position: fixed;
  background-color: #000;
  opacity: .4;
  z-index: 1001;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.fix-box{
  position: fixed;
  z-index: 1100;
  top: 30%;
  .container{
    padding-bottom: 20px;
    background-color: #fff;
  }
  .particulars-close{
    right: 0;
  }
  .fix-box-header{
    padding: 15px 0 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
}
.m-r-20{
  margin-right: 20px;
}
.works-banner.my-center{
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
  h1{
    font-size: 18px;
    margin-bottom: 4px;
    margin-top: 30px;
  }
  small{
    font-size: 14px;
    color: #aaa;
    display: block;
    margin-bottom: 35px;
  }
}
.works-right{
  height: auto;
  padding-left: 102px;
  padding-top: 10px;
  label{
    .fa{
        background-color: #fff;
        border: 1px solid #666;
        width: 40px;
        height: 40px;
        padding-left: 2px;
        line-height: 40px;
        border-radius: 20px;
        cursor: pointer;
    }
    small{
      margin-top: 10px;
      display: inline-block;
      color: #888;
      font-weight: normal;
    }
    &:hover{
      .fa{
        color: #333;
        background-color: #FEE300;
        border-color: #FEE300;
      }
      small{
        color: #333;
      }
    }
  }
}
.my-center-left{
  padding-top: 60px;
}
.my-center-right{
  padding-top: 20px;
  .slo-case{
    margin-bottom: 0;
  }
}
.bg-F2F2F2{
    background-color: #F2F2F2;
}
.bg-fff{
  background-color: #fff;
}
.works-banner{
  padding: 70px 0 30px;
  h1{
    font-weight: bold;
    color: #191919;
  }
}
.al-btn{
}
.btn{
    font-size: 14px;
    height: 38px;
    width: 160px;
    border: 1px solid #FEE300;
    background-color: #fff;
    &.btn-FEE300{
      background-color: #FEE300;
      font-size: 16px;
      font-weight: bold;
    }
    &:first-child{
      border-radius: 8px 0 0 8px;
    }
    &:last-child{
      border-radius: 0 8px 8px 0;
    }
    &+.btn{
      margin-left: -4px;
    }
}
 @media (min-width: 768px) {
  .works-right{
    border-left: 1px solid #ddd;
    height: 326px;
    padding-left: 30px;
    padding-top: 140px;
  }
 }
</style>