<template>
  <li class="al-logo text-center">
      <router-link :to="{ path: '/worksPage',query:{id: attentionArr.company_id}}"> 
        <img :src="attentionArr.logo">
      </router-link>
      <h3 @mouseenter="show = true" @mouseleave="show = false">{{attentionArr.name}}</h3>
      <h2 v-if="show == true && textLength(attentionArr.name)" class="orient">{{attentionArr.name}}</h2>
      <p class="al-btn-btn text-center" v-if="attentionShow == true"><button type="button" class="btn btn-FEE300" :class="{ 'btn-bgfff': attentionArr.has_attention == '1'}" @click="getAttention"><span v-show="attentionArr.has_attention == '1'">取消</span>关注</button></p>
  </li>
</template>

<script>
  export default {
    props: {
      attentionArr: {},
      attentionShow: {
        type: Boolean,
        default: true
      },
      id: ''
    },
    data () {
      return {
        show: false,
        qux: false
      }
    },
    created(){
    },
    methods: {
      textLength(text) {
        return text.length > 12
      },
      getAttention() {
        var data = {
            companyId:this.id,
        }
        this.$fns.post('/api/user/edit-attention',data,(json)=>{
            if(json.ask=='1'){
              this.attentionArr.has_attention = !this.attentionArr.has_attention; 
              this.$message({message:json.message,type:'success',showClose:true});
            }else{
              this.$message({message:json.message,type:'error',showClose:true});
            }
        });
      },
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.al-logo{
    img{
        width: 60px;
        height: auto;
        padding-top: 15px;
    }
    h3{
        margin-top: 10px;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        position: relative;
        line-height: 30px;
    }
    .orient{
      position: absolute;
      line-height: 30px;
      font-size: 24px;
      left: 100%;
      top: 100px;
      z-index: 2000;
      width: 300px;
      background-color: #fff;
      border: 1px solid #ddd;
      box-shadow: 0 2px 8px rgba(0,0,0,.2);
      padding: 10px;
    }
}
.btn{
  font-size: 12px;
}
.al-btn-btn{
    margin-top: 30px;
}
.btn-bgfff{
  border-color: #aaa;
  background-color: #fff;
  &:hover{
    cursor: default;
  }
}
.companyProfile{
    .al-logo{
        padding: 70px 40px 60px;
    }
    .al-btn{
        padding-top: 13px;
    }
}

</style>