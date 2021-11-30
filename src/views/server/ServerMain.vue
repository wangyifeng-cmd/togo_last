<template>
  <v-app id="inspire" style="background-color: rgba(239, 249, 255, 0.49)">
    <v-navigation-drawer v-model="drawer" app id="my_drawer">

      <!-- 头部 头像+职称+邮箱 -->
      <v-sheet
        color=" lighten-4"
        class="pa-4"
        style="background-color: rgba(43, 51, 68, 0.02)"
      >
        <v-img
          src="https://tva1.sinaimg.cn/large/008i3skNgy1gwwa8lpmysj30vm0j6gnt.jpg"
          height="20%"
        ></v-img>
        <p style="margin-top: 30px; font-size: 250%; font-weight: bold">
          管理员
        </p>

        <div>Xinny@github.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <!-- 导航 -->
      <el-menu router style="margin-left: -20px; font-size: 50px">
        <el-menu-item index="/ServerMain">
          <i class="el-icon-menu" style="margin-right: 20px"></i>
          <span slot="title">仪表盘</span>
          
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user-solid" style="margin-right: 20px"></i>
            <span slot="title">
            表格管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/IndexTable/TableUser">用户管理</el-menu-item>
            <el-menu-item index="/IndexTable/TableTreffic">交通管理</el-menu-item>
            <el-menu-item index="/IndexTable/TableHotel">酒店管理</el-menu-item>
            <el-menu-item index="/IndexTable/TableCity">攻略管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-s-management" style="margin-right: 20px"></i>
          <span slot="title">操作数据</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-marketing" style="margin-right: 20px"></i>
          <span slot="title">数据图表</span>
        </el-menu-item>
      </el-menu>
    </v-navigation-drawer>



    <!-- 头部导航 -->
    <v-app-bar
      app
      style="
        box-shadow: 0px 0 0px rgb(0 21 41 / 25%);
        background-color: #2b3344ff;
        color: aliceblue;
      "
    >
      <v-app-bar-nav-icon
        color="#F0F8FFFF"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>ToGo游-后台数据管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <i class="el-icon-s-tools" style="size: 80px"></i>
    </v-app-bar>



    <!-- 主界面 -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    
    drawer: true,
  }),
  methods: {},
};
</script>


<style scoped>
#my_drawer {
  box-shadow: 2px 0 6px rgb(0 11 10 / 25%);
  color: aliceblue;
  font-size: 15px;
}
</style>