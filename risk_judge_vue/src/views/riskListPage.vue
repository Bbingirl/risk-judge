<template>
  <div class="container">
    <div class="title">风险事件列表</div>
    <el-table :data="tableData.filter(data => !search || data.event_name.toLowerCase().includes(search.toLowerCase()))"
      stripe @row-click="jumpDetail" style="width: 100%;margin-bottom: 20px;box-shadow: 0 0 2px #999;">
      <el-table-column prop="event_creattime" sortable label="事件时间" width="180">
      </el-table-column>
      <el-table-column prop="event_id" label="事件ID" width="180">
      </el-table-column>
      <el-table-column prop="event_name" label="事件名称" width="280">
      </el-table-column>
      <el-table-column prop="event_kind" label="事件种类" width="180">
      </el-table-column>
      <el-table-column prop="event_type" label="事件类型" width="180">
      </el-table-column>
      <el-table-column prop="event_version" align="center" label="事件版本号" width="180">
      </el-table-column>
      <el-table-column align="center">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="jumpDetail(scope.row)">操作</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :page-size="10" @current-change="pageChange" :total="15">
    </el-pagination>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init()
  },
  data() {
    return {
      search: "", // 搜索框内容
      tableData: [] // 表格数据
    }
  },
  methods: {
    // 初始化页面
    init() {
      this.getListData()
    },
    // 获取数据
    getListData() {
      // this.$http.get()
      this.tableData = [{
        event_id: '10000',
        event_name: '用户远程登录其他用户终端操作系统',
        event_kind: '违规访问网络',
        event_type: '网络、应用异常',
        event_creattime: '2023.3.5',
        event_version: '0.0.1',

      }]
    },
    // 跳转详情，传递参数
    jumpDetail(row) {
      this.$store.commit("setRiskData", row)
      this.$router.push({
        name: 'riskDetail',
        // params: row
      })
    },
    // 页码改变
    pageChange(currentPage) {
      console.log(currentPage)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 10px 20px;

  .title {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    background-color: #6694ed;
    line-height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    // text-align: left;
    padding-left: 20px;
    margin-bottom: 10px;
  }
}
</style>