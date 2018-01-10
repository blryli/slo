<template>
  <div>
    <top-header/>
    <div class="end-content">
      <router-view/>
    </div>
    <top-footer/>
  </div>
</template>

<script>
import topHeader from "./header";
import topFooter from "../../components/frame/footer";
export default {
  data() {
    return {
      topNavJson: {},
      showNav: ""
    };
  },
  components: {
    topHeader,topFooter
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.end-content{
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  min-height: 93vh;
  min-height: calc(100vh - 205px);
  min-height: -webkit-calc(100vh - 205px);
  min-height: -moz-calc(100vh - 205px);
}
.end-content{
  padding: 20px;
}
</style>
