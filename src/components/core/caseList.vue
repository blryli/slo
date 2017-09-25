<template>
  <ul class="row">
    <li class="col-sm-6 col-md-4 col-lg-3" style="padding: 0" v-for="(item, index) in caseArr">
      <ul class="slo-case o-h" :style="minHeight">
        <router-link class="img router" :to="{path: '/particulars',query: caseArr[index]}" tag="li"><img :src="item.src"></router-link>
        <router-link class="title router" :style="titleSize" to="/particulars" tag="li"><strong>{{item.title}}</strong><span></span><span></span></router-link>
        <li class="text">{{item.text}}</li>
      </ul>
    </li>
  </ul>
</template>

<script>

export default {
    props: {
      caseArr: {},
      titleSize: {
        type: Object,
        default: {
          'font-size': '14px'
        }
      },
      minHeight: {
        type: Object,
        default: {
          'min-height': '211px'
        }
      }
    },
    data () {
        return {
       }
    },
    methods:{
    }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.o-h{
  overflow: hidden;
}

.slo-case{
  padding: 10px 10px 0;
  max-width: 280px;
  background-color: #fff;
  margin: 0 1px 20px;
  &:hover{
    box-shadow: 0 4px 16px rgba(0,0,0,.2)
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
// .through{
//   position: relative;
//   strong{
//     position: relative;
//     z-index: 10;
//   }
//   span{
//     position: absolute;
//     top: 10px;
//     z-index: 0;
//     display: block;
//     width: 100%;
//     height: 4px;
//     background-color: #FEE300;
//     &+span{
//       top: 34px;
//     }
//   }
// }
.title{
  font-weight: bold;
  margin-top: 18px;
}
.text{
  font-size: 14px;
  padding: 12px 0 20px;
}

</style>