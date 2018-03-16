<template>
  <div class="edito-box">
    <el-button class="button" type="primary" size="small" @click="openDiolog">编辑文字</el-button>
    <div class="text" v-html="text"></div>
  </div>
</template>

<script>
export default {
	props: {
    text: '',
    index: ''
  },
  data() {
    return {
      
    }
  },
  methods: {
    openDiolog() {
      this.$emit('diolog-arr', [this.index, this.text]);
    }
  }
}
</script>

<style lang="scss" scoped>
.edito-box{
  position: relative;
  height: 148px;
  +.edito-box{
    margin-top: 15px;
  }
  .button{
    width: 80px;
    float: left;
  }
  .text{
    margin-left: 100px;
    p{
      margin-bottom: 0;
      max-width: 1000px;
    }
  }
}
</style>
