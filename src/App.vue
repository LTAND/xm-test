<template>
  <div id="app">
    <up-load-excel v-show="btn_flag"></up-load-excel>
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
import Bus from "./common/js/bus";
export default {
  name: "app",
  components: {
    Header,
    Sidebar,
    Mainer,
    upLoadExcel
  },
  data() {
    return { btn_flag: false };
  },
  created() {
    Bus.$on("show_btn", count => {
      if (parseInt(count) === 3) {
        this.btn_flag = true;
      }
    });
    // console.log('app',projectData)  // 打印api所有数据
  },
  computed: {}
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
</style>
