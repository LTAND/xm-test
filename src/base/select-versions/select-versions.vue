<template>
  <el-select v-model="value8" filterable placeholder="请输入关键字" no-match-text="无匹配版本" @change="handle">
    <el-option v-for="item in versions" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>

<script>
import Bus from '../../common/js/bus'
export default {
  props:{
    versions:{
      type:Array,
      default:null
    }
  },
  data() {
    return {
      value8: ""
    };
  },
  methods:{
    handle(vindex){
      Bus.$emit('selectVersion', vindex)
      // console.log('vindex:',vindex)
    }
  }
};
</script>