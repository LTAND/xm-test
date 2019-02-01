<template>
  <el-main>
    <div class="title">
      <h1>{{proName+tableData[vindex].fileName+" "+tableData[vindex].versions}}</h1>
      <select-versions :versions="versions"></select-versions>
    </div>
    <el-table :data="tableData[vindex].data" border style="width: 100%">
      <el-table-column prop="num" label="编号" width="50"></el-table-column>
      <el-table-column prop="step" label="测试步骤"></el-table-column>
      <el-table-column prop="result" label="预期结果" width="300"></el-table-column>
      <el-table-column prop="people" label="责任人" width="75"></el-table-column>
      <el-table-column prop="note" label="备注" width="100"></el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import Bus from '../../common/js/bus'
import SelectVersions from "../../base/select-versions/select-versions";
export default {
  props: {
    tableData: {
      type: Array,
      default: null
    },
    proName: {
      type: String,
      default: ""
    }
  },
  components: {
    SelectVersions
  },
  created() {
    this.getVersions();
    Bus.$on('selectVersion',vindex=>{
      this.vindex = vindex
    })
  },
  data() {
    return { 
      versions: [],
      vindex:0
    };
  },
  methods: {
    getVersions() {
      const arr = [];
      this.tableData.forEach((el, i) => {
        arr.push({ value: String(i), label: el.versions });
      });
      this.versions = arr;
    }
  }
};
</script>    
<style lang='stylus' scoped rel='stylesheet/stylus'>
.title
  h1
    font-size: 20px
    color: #757576
    text-align: center
</style>
