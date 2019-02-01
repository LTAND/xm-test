<template>
  <div class="normal">
    <div class="title">
      <h1>{{proName+normalData[vindex].fileName+" "+normalData[vindex].versions}}</h1>
      <select-versions :versions="versions"></select-versions>
    </div>
    <div>{{normalData[vindex].data}}</div>
  </div>
</template>

<script>
import Bus from "../../common/js/bus";
import SelectVersions from "../../base/select-versions/select-versions";
export default {
  props: {
    proName: {
      type: String,
      default: ""
    },
    normalData: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      versions: [],
      vindex: 0
    };
  },
  created() {
    this.getVersions()
    Bus.$on("selectVersion", vindex => {
      this.vindex = vindex;
    });
  },
  components: { SelectVersions },
  computed: {},
  methods: {
    getVersions() {
      const arr = [];
      this.normalData.forEach((el, i) => {
        arr.push({ value: String(i), label: el.versions });
      });
      this.versions = arr;
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.normal
  text-align: center
  margin: 0 auto
  h1
    font-size: 20px
    color: #757576
</style>
