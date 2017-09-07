<template>
  <ul class="nav navbar-nav topnav">
    <li v-for="(menu,index) in topMenu.menus" @click="toActive(menu,index)">
      <a v-if="menu.url == undefined">
        <span class="menu-text">{{menu.menu_name}}</span>
        <b class="caret" v-if="menu.url==undefined"></b>
      </a>
      <router-link v-else :to="menu.url">
        <span class="menu-text">{{menu.menu_name}}</span>
      </router-link>
      <ul class="submenu" v-if="menu.url==undefined">
        <li v-for="sub in menu.sub_menus">
          <router-link :to="sub.url">{{sub.sub_name}}</router-link>
        </li>
      </ul>
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
      toActive(menu,index) {
        menu.forEach((d, i) =>{
          d.active = false
        })
        this.topMenu[index].active = true
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.nav{
  float: right;
  >li{
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
      }
      &.router-link-exact-active.active{
        color: #f55520;
      }
    }
  }
}
@media (min-width: 768px) { 
    
 }

@media (min-width: 992px) {
    .nav{
      >li{
        & + li{
          margin-left: 30px;
        }
      }
    }
}

@media (min-width: 1200) {

}
</style>
