<template>
  <div>
    <TableUser />
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="user_id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="user_name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="user_phone" label="电话"> </el-table-column>
      <el-table-column prop="user_password" label="密码"> </el-table-column>
      <el-table-column prop="user_age" label="年龄"> </el-table-column>
      <el-table-column prop="user_city" label="城市"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import TableUser from "../../components/server/TableUser.vue";
export default {
  data () {
    return {
      users:[]
    }
  },
  created(){
    this.$http.get('user/getAllUser').then(res=>{
      this.users = res.data;
    })
  },
  components: { TableUser },
  
  
};
</script>

<style>
</style>