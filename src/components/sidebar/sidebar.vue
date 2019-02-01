<template>
  <el-aside width="200px">
    <!-- :default-openeds="['1']" -->
    <el-menu @select="selectItem" @open="handleOpen" @close="handleClose" :default-openeds="['0']">
      <el-submenu v-for="(proj, index) in data" :key="proj.id" :index="`${index}`">
        <template slot="title">
          <i class="el-icon-news"></i>
          {{proj.proName}}
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item
            :index="`${index}-${i}`"
            v-for="(fileKey, i) in Object.keys(proj.proData)"
            :key="fileKey.id">
            <i class="el-icon-document"></i>
            {{proj.proData[fileKey][0].fileName}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { projectData } from "../../api/index";
import Bus from "../../common/js/bus";
export default {
  data() {
    return {
      currentPodj: 0,
      data: null
    };
  },
  created() {
    this.data = projectData;
  },
  computed: {},
  methods: {
    handleOpen(key, indexPath) {
      // console.log('handleOpen:',key, indexPath);
    },
    handleClose(key, indexPath) {
      // console.log(key, indexPath);
    },
    selectItem(key, indexPath) {
      Bus.$emit("selectItem", key, indexPath);
      console.log("selectItem:", key, indexPath);
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
</style>
