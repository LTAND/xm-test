<template>
  <el-container>
    <tabler v-show="currentFileType==='table'" :tableData="currentData" :proName="getCurrentProName"></tabler>
    <normal v-show="currentFileType==='normal'" :normalData="currentData" :proName="getCurrentProName"></normal>
  </el-container>
</template>

<script>
import Tabler from "../../components/tabler/tabler";
import Normal from "../../components/normal/normal"
import { projectData } from "../../api/index";
import Bus from "../../common/js/bus";
export default {
  data() {
    return {
      currentItem: "0-0",
      currentData: projectData[0].proData[0],
      currentFileType: "table",
      currentProIndex: 0
    };
  },
  created() {
    Bus.$on("selectItem", key => {
      let proIndex = parseInt(key.split("-")[0]); // 项目下标
      let fileIndex = parseInt(key.split("-")[1]); // 项目文件下标
      let fileType = projectData[proIndex].proData[fileIndex].fileType;
      this.currentItem = key;
      this.currentProIndex = proIndex;
      this.currentData = projectData[proIndex].proData[fileIndex];

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
    setCurrentData() {
      if (this.currenTableType) {
        return this.currentData;
      }
    },
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
