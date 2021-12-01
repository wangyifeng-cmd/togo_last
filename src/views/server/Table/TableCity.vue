<template>
  <div>

   <div>TableCity</div>
    <el-card shadow="always" style="margin: 20px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    

    <el-card shadow="always" style="margin: 20px; ">


      <v-data-table
          :headers="headers"
          :items="users"
          sort-by="calories"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>用户表</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark class="mb-2">刷新</v-btn>
                <div style="width: 10px"></div>
                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                  新建用户
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            v-model="editedItem.user_id"
                            label="用户id"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.user_name" label="姓名">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.user_phone" label="电话">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            v-model="editedItem.user_password"
                            label="密码"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.user_age" label="年龄">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.user_city" label="城市">
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                  <v-btn color="blue darken-1" text @click="save">确定</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">确定删除改用户？</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">
                    取消
                  </v-btn>

                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                    确定
                  </v-btn>

                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="my_init"> Reset</v-btn>
        </template>

      </v-data-table>
<!--    </v-card>-->
    </el-card>
  </div>

</template>


<script>

// import Qs from 'qs'
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "用户id",
        align: "start",
        sortable: true,
        value: "user_id",
      },
      {
        text: "姓名",
        value: "user_name",
      },
      {
        text: "电话",
        value: "user_phone",
      },
      {
        text: "密码",
        value: "user_password",
      },
      {
        text: "年龄",
        value: "user_age",
      },
      {
        text: "城市",
        value: "user_city",
      },
      {text: "操作", value: "actions", sortable: false},
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      user_id: "",
      user_name: "my_friend",
      user_phone: 19991314520,
      user_password: "123pw",
      user_age: 18,
      user_city: "深圳",
    },
    defaultItem: {
      user_id: "",
      user_name: "my_friend",
      user_phone: 19991314520,
      user_password: "123pw",
      user_age: 18,
      user_city: "深圳",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "新建" : "修改";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.my_init();
  },

  methods: {
    my_success() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },
    my_error() {
      this.$message({
        message: '错了哦，这是一条错误消息',
        type: 'error'
      });
    },
    my_init() {
      // 初始化表格数据
      // 从后台获取数据
      this.$http.get("user/getAllUser").then((res) => {
        this.users = res.data;
      });
    },


    my_add() {
      let myUser = new URLSearchParams();
      const user = this.editedItem;
      myUser.append('user_name', user.user_name);
      myUser.append('user_phone', user.user_phone);
      myUser.append('user_password', user.user_password);
      myUser.append('user_age', user.user_age);
      myUser.append('user_city', user.user_city);
      console.log(user);
      this.$http.post(`user/addUser`,).then((res) => {
        console.log("res.data-res.data-res.data")
        console.log(res.data);
        if (res.data.insertId > 0) {
          this.$message({
            message: '添加成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '添加失败',
            type: 'error'
          });
        }
        this.my_init();
      });
    },

    my_update() {
      let myUser = new URLSearchParams();
      const user = this.editedItem;
      myUser.append('user_id', user.user_id);
      myUser.append('user_name', user.user_name);
      myUser.append('user_phone', user.user_phone);
      myUser.append('user_password', user.user_password);
      myUser.append('user_age', user.user_age);
      myUser.append('user_city', user.user_city);
      console.log(user);
      this.$http.post(`user/updateUserById`, myUser).then((res) => {
        console.log(res.data);
        if (res.data.changedRows > 0) {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '修改失败',
            type: 'error'
          });
        }
        this.my_init();
      });
    },

    my_deleteId() {
      console.log("deleteById-deleteById-deleteById-deleteById")
      let myUserId = new URLSearchParams();
      let uid = this.editedItem.user_id;
      myUserId.append('user_id', uid);
      console.log(uid)
      this.$http.post(`user/deleteById`, myUserId).then((res) => {
        console.log(res.data);
        if (res.data.affectedRows > 0) {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '删除失败',
            type: 'error'
          });
        }
        this.my_init();
      });
    },

    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // this.users.splice(this.editedIndex, 1);
      this.closeDelete();
      // console.log(this.editedItem);
      this.my_deleteId();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        // Object.assign(this.users[this.editedIndex], this.editedItem);
        console.log("my_updateId-my_updateId");
        this.my_update();
      } else {
        console.log("addUser-addUser-addUser-addUser");
        this.my_add();
        // this.users.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>