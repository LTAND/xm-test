<template>
  <div id="app">
    <up-load-excel></up-load-excel>
    <Header></Header>
    <el-container>
      <sidebar></sidebar>
      <mainer></mainer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header/header";
import Mainer from "./components/mainer/mainer";
import Sidebar from "./components/sidebar/sidebar";
import upLoadExcel from "./base/upLoadExcel/upLoadExcel";
import { projectData } from "./api/index";
export default {
  name: "app",
  components: {
    Header,
    Sidebar,
    Mainer,
    upLoadExcel
  },
  data() {
    return { mock: "" };
  },
  created() {
    // console.log('app',projectData)  // 打印api所有数据
    console.log(projectData);
  },
  mouted() {
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
</style>
