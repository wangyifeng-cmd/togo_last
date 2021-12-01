<template>
<div>
  <el-header>

      <el-card shadow="always" style="margin: 20px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  
      </el-breadcrumb>
      <h1 style="margin-top: 10px;">工作台</h1>
    <h2>早上好哦</h2>


    </el-card>

  </el-header>
  <el-container style="margin-top: 20px;">

    <el-main>Main</el-main>
    <el-main>Main</el-main>
  </el-container>


   

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>