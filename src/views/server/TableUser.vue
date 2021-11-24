<template>
  <div>
    <!-- <Table /> -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import Table from "../../components/server/Table.vue";
export default {
  // components: { Table },
  
  
};
</script>

<style>
</style>