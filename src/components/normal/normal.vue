<template>
  <div class="normal">
    <h1>{{proName+normalData.fileName}}</h1>
    <div>{{normalData.data}}</div>
  </div>
</template>

<script>
export default {
  props:{
    proName:{
      type:String,
      default:""
    },
    normalData:{
      type:Object,
      default:null
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},
  methods: {}
}

</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.normal
  text-align: center
  margin 0 auto 
  h1
    font-size: 20px
    color: #757576
</style>
