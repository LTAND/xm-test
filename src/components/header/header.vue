<template>
  <el-header class="header">
     <!-- :default-active="activeIndex" -->
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="logo" class="logo-wrapper"><div class="logo-image"></div></el-menu-item>
      <el-menu-item index="0">处理中心</el-menu-item>
      <!--<el-submenu index="1">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled><a href="#" target="_blank">订单管理</a></el-menu-item> -->
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = parseInt(key)
      // console.log(key, keyPath);
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.header
  margin-bottom: 1px
  .logo-wrapper
    border-bottom: none;
    .logo-image
      width 140px
      height 60px
      background:url("../../assets/xm_logo.png" )
      background-size 150px
      background-repeat: no-repeat
</style>

