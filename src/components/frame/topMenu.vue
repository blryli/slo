<template>
  <ul class="nav navbar-nav nav-pills topnav">
    <li v-for="(menu, index) in topMenu" :key="index">
      <!-- <a v-if="menu.url == undefined">
        <span class="menu-text">{{menu.menu_name}}</span>
        <b class="caret" v-if="menu.url==undefined"></b>
      </a> -->
      <router-link v-if="menu.url == '/'" :to="menu.url" exact>
        <span class="menu-text"><strong class="title">{{menu.menu_name}}</strong><span></span></span>
      </router-link>
      <router-link v-else :to="menu.url">
        <span class="menu-text"><strong class="title">{{menu.menu_name}}</strong><span></span></span>
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
        type: Array,
        required: true,
        default: function() {
          return []
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.nav{
  float: none;
  padding: 10px 0;
  >li{
    display: block;
    float: none;
    >a{
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #333;
      &:hover{
        color: #333;
        background-color: #f0f0f0;
      }
      &.active{
        color: #333;
        background-color: #f0f0f0;
        font-size: 32px;
      }
    }
  }
}
.title{
  font-weight: normal;
}
.active .menu-text{
  position: relative;
  padding: 0 4px;
  .title{
    position: relative;
    z-index: 10;
  }
  span{
    position: absolute;
    top: 20px;
    z-index: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: #FEE300;
  }
}
@media (min-width: 768px) { 
    .nav{
      padding: 0;
      margin-top: 0;
      float: left;
      >li{
        float: left;
        & + li{
          margin-left: 20px;
        }
        >a{
        height: 80px;
        line-height: 80px;
        padding: 0;
        font-size: 18px;
        color: #333;
        &:hover{
          color: #333;
          background-color: transparent;
        }
        &.active{
          background-color: transparent;
          color: #333;
          font-size: 32px;
        }
      }
    }
  }
 }

@media (min-width: 992px) {
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
