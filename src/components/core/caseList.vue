<template>
  <ul class="row">
    <li class="col-xs-6 col-sm-4 col-md-3" style="padding: 0" v-for="(item, index) in caseArr">
      <ul class="slo-case o-h">
        <router-link class="img router" :to="{path: '/particulars',query: caseArr[index]}" tag="li"><img :src="item.src"></router-link>
        <router-link class="title router through" :style="{ 'font-size': titleSize + 'px' }" to="/particulars" tag="li"><strong>{{item.title}}</strong><span></span><span :style="{ top: rowTop + 'px' }" v-if="textLength(item.title)"></span></router-link>
        <li class="text" v-if="showText">{{item.text}}</li>
      </ul>
    </li>
  </ul>
</template>

<script>

export default {
    props: {
      caseArr: {},
      titleSize: {
        type: Number,
        default: function() {
          return document.body.scrollWidth < 768 ? 16 : 18
        }
      },
      rowTop: {
        type: Number,
        default: 34
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data () {
        return {
       }
    },
    created() {
    },
    mounted: function () {
      this.$nextTick(function () {
      })
    },
    watch: {
    },
    methods:{
      textLength(text) {
        if( document.body.scrollWidth < 768 ){
          if(text.length>11){
            return true
          }
        } else {
          if(text.length>16){
            return true
          }
        }
      }
    }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.o-h{
  overflow: hidden;
}

.slo-case{
  max-width: 280px;
  background-color: #fff;
  margin: 0 6px 20px;
  &:hover{
    box-shadow: 0 4px 16px rgba(0,0,0,.2);
  }
}
.router{
  cursor: pointer;
}
.img{
  img{
    width: 100%;
    height: auto;
  }
}
.through{
  position: relative;
  strong{
    position: relative;
    z-index: 10;
  }
  span{
    position: absolute;
    top: 10px;
    z-index: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: #FEE300;
  }
}
.title{
  font-weight: bold;
  margin-top: 12px;
  min-height: 50px;
}
.text{
  font-size: 14px;
  padding: 12px 0 20px;
}
@media (min-width: 768px) { 
  .slo-case{
    padding: 10px 10px 0;
    margin: 0 1px 20px;
  }
  .title{
    margin-top: 18px;
    min-height: 50px;
  }
}
</style>