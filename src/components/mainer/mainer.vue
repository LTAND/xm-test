<template>
  <el-container>
    <tabler
      v-show="currentFileType==='cases'"
      :tableData="currentData"
      :proName="getCurrentProName"
    ></tabler>
    <normal
      v-show="currentFileType==='reports'"
      :normalData="currentData"
      :proName="getCurrentProName"
    ></normal>
  </el-container>
</template>

<script>
import Tabler from "../../components/tabler/tabler";
import Normal from "../../components/normal/normal";
import { projectData } from "../../api/index";
import Bus from "../../common/js/bus";
export default {
  data() {
    return {
      currentItem: "0-0",
      currentData: projectData[0].proData["cases"],
      currentFileType: "cases",
      currentProIndex: 0
    };
  },
  created() {
    Bus.$on("selectItem", key => {
      let proIndex = parseInt(key.split("-")[0]); // 项目下标
      let fileIndex = parseInt(key.split("-")[1]); // 项目文件类型下标
      let fileType = this.currentFileType
      switch (fileIndex) {
        // 根据第一项为cases
        case 0:
          fileType = "cases";
          break;
        case 1:
          fileType = "reports";
          break;
      }
      this.currentItem = key;
      this.currentProIndex = proIndex;
      this.currentData = projectData[proIndex].proData[fileType];
      console.log("key:", key);
      if (!fileType || fileType === "None") {
        this.currentFileType = "normal";
      } else {
        this.currentFileType = fileType;
      }
    });

  },
  mounted() {},
  components: {
    Tabler,
    Normal
  },
  computed: {
    getCurrentProName() {
      let proName = projectData[this.currentProIndex].proName;
      return proName;
    }
  },
  methods: {}
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
</style>
