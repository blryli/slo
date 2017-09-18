<template>
  <ul class="nav navbar-nav nav-pills topnav">
    <li v-for="(menu, index) in topMenu.menus">
      <!-- <a v-if="menu.url == undefined">
        <span class="menu-text">{{menu.menu_name}}</span>
        <b class="caret" v-if="menu.url==undefined"></b>
      </a> -->
      <router-link v-if="menu.url == '/'" :to="menu.url" exact>
        <span class="menu-text">{{menu.menu_name}}</span>
      </router-link>
      <router-link v-else :to="menu.url">
        <span class="menu-text">{{menu.menu_name}}</span>
      </router-link>
      <!-- <ul class="submenu" v-if="menu.url==undefined">
        <li v-for="sub in menu.sub_menus">
          <router-link :to="sub.url">{{sub.sub_name}}</router-link>
        </li>
      </ul> -->
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      topMenu: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
      }
    },
    methods: {
      // toActive(menu,index) {
      //   menu.forEach((d, i) =>{
      //     d.active = false
      //   })
      //   menu[index].active = true
      // }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.nav{
  float: none;
  background-color: #f8f8f8;
  padding: 10px 0;
  margin-top: -1px;
  height: 100%;
  >li{
    display: block;
    float: none;
    >a{
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #323232;
      &:hover{
        color: #f55520;
        background-color: #f0f0f0;
      }
      &.active{
        color: #f55520;
      }
    }
  }
}
@media (min-width: 768px) { 
    
 }

@media (min-width: 992px) {
    .nav{
      float: right;
      background-color: transparent;
      padding: 0;
      margin-top: 0;
      >li{
        float: left;
        & + li{
          margin-left: 20px;
        }
        >a{
        height: 100px;
        line-height: 100px;
        padding: 0;
        font-size: 18px;
        color: #323232;
        &:hover{
          color: #f55520;
          background-color: transparent;
        }
        &.active{
          color: #f55520;
        }
      }
    }
    }
}

@media (min-width: 1200px) {
  .nav{
    >li{
      & + li{
        margin-left: 40px;
      }
    }
  }
}
</style>
