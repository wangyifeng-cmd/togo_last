<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app id="my_drawer">
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg "
          height="20%"
        ></v-img>
        <p style="margin-top: 30px; font-size: 250%; font-weight: bold">
          管理员
        </p>

        <div>Xinny@github.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <el-menu router style="margin-left: -20px; font-size: 50px">
        <el-menu-item index="/user/TableUser">
          <i class="el-icon-menu" style="margin-right: 20px"></i>
          <span slot="title">
            工作台</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user-solid" style="margin-right: 20px"></i>
            表格管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user/IndexTable">用户管理</el-menu-item>
            <el-menu-item index="/article/create">交通管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="/article/index">酒店管理</el-menu-item>
          <el-menu-item index="/article/index">攻略管理</el-menu-item>
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

    <v-app-bar app style="box-shadow: 0px 0 0px rgb(0 21 41 / 35%)">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>ToGo游-后台数据管理</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import Table from "../../components/server/Table.vue";
// import Title from "../../components/server/Title.vue";

export default {
  components: {
    // Table,
    // Title
  },
  data: () => ({
    links: [
      ["mdi-inbox-arrow-down", "用户管理"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    drawer: true,
  }),
  methods: {},
};
</script>


<style scoped>
#my_drawer {
  box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
  color: aliceblue;
  font-size: 15px;
  /* margin: ; */
}
</style>