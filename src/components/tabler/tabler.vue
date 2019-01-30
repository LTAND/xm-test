<template>
  <el-main>
    <h1 class="title">{{proName+tableData.fileName}}</h1>
    <el-table :data="tableData.data" border style="width: 100%">
      <el-table-column prop="num" label="编号" width="50"></el-table-column>
      <el-table-column prop="step" label="测试步骤"></el-table-column>
      <el-table-column prop="result" label="预期结果" width="300"></el-table-column>
      <el-table-column prop="people" label="责任人" width="75"></el-table-column>
      <el-table-column prop="note" label="备注" width="100"></el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Object,
      default: null
    },
    proName: {
      type: String,
      default: ""
    }
  },
  created() {},
  data() {
    return {};
  }
};
</script>    
<style lang='stylus' scoped rel='stylesheet/stylus'>
h1
  font-size: 20px
  color: #757576
  text-align: center
</style>
