<template>
  <div class="hello">
    <el-button type="primary" @click="jump('/riskListPage')">风险列表</el-button>
    <el-button type="primary"  @click="jump('/riskDetail')">风险详情</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    jump(url){
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
