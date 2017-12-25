<template>
  <div :class="{ 'bg-F2F2F2': active == 2, 'p-b-20': active == 2 }" class="my-center-box" v-scroll="loadMore">
    <div class="bg-F2F2F2 works-banner my-center text-center">
      <!-- <img :src="userImg"> -->
      <div class="upload-img">
        <el-upload action="/api/img/upload" list-type="picture-card" :name="name" ref="logoImg" :limit="logoImg.limit"  :multiple="logoImg.multiple"
        :on-preview="preview" :on-remove="removeLogo" :on-success="successLogo">
        <img v-if="userImg" :src="userImg" class="avatar">
        </el-upload>
      </div>
      <div>
        <h1 class="user-info" v-show="showMyName == false">{{myName}}&nbsp;<i @click="showMyName = true" class="el-icon-edit"></i></h1>
        <h1 class="user-info" v-show="showMyName == true">
          <el-input
            placeholder="请输入内容"
            v-model="myName" @blur="pushMyName" @keyup.enter.native="pushMyName">
          </el-input>
        </h1>
      </div>
      <small class="user-info" v-show="showUserText == false">{{userText}}&nbsp;<i @click="showUserText = true" class="el-icon-edit"></i></small>
      <small class="user-info">
        <el-input v-show="showUserText == true"
          placeholder="请输入内容"
          v-model="userText" @blur="pushUserText" @keyup.enter.native="pushUserText">
        </el-input>
      </small>
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
      <div class="col-sm-9 my-center-right">
        <case-list :case-arr="item.cases" class="m-r-20"></case-list>
      </div>
      <div class="col-sm-1 works-right">
        <router-link :to="{ path: '/worksPage',query:{id: item.company_info.company_id}}">  
          <label class="text-center"><i class="fa fa-chevron-right" aria-hidden="true"></i><br><small>查看全部</small></label>
        </router-link>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
import attention from '@/components/core/attention'
import {mapGetters} from 'Vuex'
  export default {
    props: {
    },
    data () {
      return {
        showMyName: false,
        showUserText: false,
        userImg: '',
        name:'',
        dialogImageUrl: '',
        dialogVisible: false,
        logoImg:{
          limit:1,
          multiple:false,
          imgs:[]
        },
        userName: '',
        nickname: '',
        userText: '',
        myName: '',
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
      if(this.$route.query.active){
        this.active = this.$route.query.active;
      }
      this.getUserInfo();
      if(this.active == 1) {
        this.getCollects();
      }else{
        this.getAttentions();
      }
    },
    watch: {
      count() {
            var data = {
                page:1,
                pageSize:this.pageSize,
                keyWords:this.count
            }
            this.$fns.post('/api/case/find-cases',data,(json)=>{
              if(json.ask=='1'){
                if(json.data.length){
                  this.datas = json.data
                }
                if(json.data.length<this.pageSize){
                   this.hasMore = false;
                }
              }else{
                this.$message({message:json.message,type:'error',showClose:true});
              }
            },{},false);
      }
    },
    computed: {
      ...mapGetters([
        'count'
      ])
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
        this.page = 1;
        this.pageSize = 8;
        this.hasMore = true;
        this.active = 1;
        this.datas=[];
        this.getCollects();
      },
      gzhu() {
        this.page = 1;
        this.pageSize = 2;
        this.hasMore = true;
        this.active = 2;
        this.myAttentionArr=[];
        this.getAttentions();
      },
      getUserInfo() {
        let _this = this;
          this.$fns.post('/api/user/login',{},(json)=>{
              if(json.ask=='1'){
                _this.nickname = json.nick_name;
                _this.userName = json.name;
                _this.logoImg = json.avatar_img;
                _this.userImg = json.avatar_img;
                _this.userText = json.signature;
                if(json.nick_name){
                  _this.myName = json.nick_name
                }else{
                  _this.myName = json.name
                }
              }else{
                this.$message({message:json.message,type:'error',showClose:true});
              }
          });
      },
      pushMyName() {
        var data = {
          nickName: this.myName
        }
        this.$fns.post('/api/user/edit-user-info',data,(json)=>{
            if(json.ask=='1'){
              this.showMyName = false;
            }else{
              this.$message({message:json.message,type:'error',showClose:true});
            }
        });
      },
      pushUserText() {
        var data = {
          signature: this.userText
        }
        this.$fns.post('/api/user/edit-user-info',data,(json)=>{
            if(json.ask=='1'){
              this.showUserText = false;
            }else{
              this.$message({message:json.message,type:'error',showClose:true});
            }
        });
      },
      getAttentions(){
        var data = {
            page:this.page,
            pageSize:this.pageSize,
            keyWords:this.count
        }
        this.$fns.post('/api/user/get-attentions',data,(json)=>{
          if(json.ask=='1'){
            if(json.data.length){
              this.page++;
              json.data.forEach((item,k)=>{
                this.myAttentionArr.push(item);
              })
            }
            if(json.data.length<this.pageSize){
               this.hasMore = false;
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
            keyWords:this.count
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
      },
      //查看图片
      preview(file){
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //更新图片数组
      refreshImgs(fileList){
        var imgs=[];
        if(fileList.length){
          fileList.forEach((item,k)=>{
            if(item.response.ask=='1'){
              item.response.filename && imgs.push(item.response.filename);
            }
          });
        }
        return imgs;
      },
      //logo成功
      successLogo(json, file, fileList){
        this.logoImg.imgs = this.refreshImgs(fileList);
      },
      //logo移除
      removeLogo(file, fileList){
        this.logoImg.imgs = this.refreshImgs(fileList);
      },
    }
  }
</script>

<style lang="scss">
.el-upload--picture-card {
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    box-sizing: border-box;
    width: auto;
    height: auto;
    line-height: auto;
    vertical-align: top;
    input[type=file] {
        display: none !important;
    }
}
.el-upload-list--picture-card .el-progress{
  width: 100px;
}
.upload-img{
  width: 100px;
  margin: 0 auto;
  position: relative;
  .el-upload-list{
    position: absolute;
  }
}
.el-upload-list--picture-card .el-upload-list__item{
    overflow: hidden;
    background-color: transparent;
    border: 0;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    margin: 0 8px 8px 0;
    display: inline-block;
    .el-progress-circle{
      width: 100px !important;
      height: 100px !important;
    }
}
.my-center-box{
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
      margin-bottom: 0;
      margin-top: 30px;
    }
    .user-info{
      position: relative;
      width: auto;
      display: inline-block;
      i{
        display: none;
        position: absolute;
        right: -30px;
        padding: 0 10px;
        cursor: pointer;
      }
      &:hover{
        i{
          display: inline-block;
        }
      }
    }
    small{
      font-size: 14px;
      color: #aaa;
      margin-top: 10px;
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
    margin-top: 35px;
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
}

</style>