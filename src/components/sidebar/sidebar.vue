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
          <el-menu-item :index="`${index}-${i}`" v-for="(file, i) in proj.proData" :key="file.id">
            <i class="el-icon-document"></i>
            {{file.fileName}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>项目二
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>-->
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
    // console.log('side',projectData)
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
