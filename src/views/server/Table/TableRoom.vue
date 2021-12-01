<template>
  <div>
    <el-card shadow="always" style="margin: 20px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">工作台</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">表格管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>

    <el-card shadow="always" style="margin: 20px">
      <v-data-table :headers="headers" :items="rooms" sort-by="calories">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>房间表</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark class="mb-2">刷新</v-btn>
                <div style="width: 10px"></div>
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  添加房间
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
                          v-model="editedItem.room_id"
                          label="房间id"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.type"
                          label="房间类型"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.money"
                          label="金额"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.people"
                          label="可入住人数"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.count"
                          label="房间剩余数"
                        >
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
                <v-card-title class="text-h5">确定删除？</v-card-title>
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
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil</v-icon
          >
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
        text: "房间编号",
        align: "start",
        sortable: true,
        value: "room_id",
      },
      {
        text: "房间类型",
        value: "type",
      },
      {
        text: "金额",
        value: "money",
      },
      {
        text: "可入住人数",
        value: "people",
      },
      { 
        text: "房间剩余数",
        value: "count",
      },
      
      { text: "操作", value: "actions", sortable: false },
    ],
    rooms: [],
    editedIndex: -1,
    editedItem: {
      room_id: "",
      type: "大床房",
      money: 333333,
      people: 123,
      count: 18,
    },
    defaultItem: {
       room_id: "",
      type: "大床房",
      money: 333333,
      people: 123,
      count: 18,
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
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },
    my_error() {
      this.$message({
        message: "错了哦，这是一条错误消息",
        type: "error",
      });
    },
    my_init() {
      // 初始化表格数据
      // 从后台获取数据
      this.$http.get("room/getAllRoom").then((res) => {
        this.rooms = res.data;
      });
    },

    my_add() {
      let myRoom = new URLSearchParams();
      const room = this.editedItem;
      myRoom.append("room_id", room.room_id);
      myRoom.append("type", room.type);
      myRoom.append("money", room.money);
      myRoom.append("people", room.people);
      myRoom.append("count", room.count);
      console.log(room);
      this.$http.post(`room/addRoom`,myRoom).then((res) => {
        console.log("res.data-res.data-res.data");
        console.log(res.data);
        if (res.data.insertId > 0) {
          this.$message({
            message: "添加成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "添加失败",
            type: "error",
          });
        }
        this.my_init();
      });
    },

    my_update() {
      let myRoom = new URLSearchParams();
      const room = this.editedItem;
      myRoom.append("room_id", room.room_id);
      myRoom.append("type", room.type);
      myRoom.append("money", room.money);
      myRoom.append("people", room.people);
      myRoom.append("count", room.count);
      console.log(room);
      this.$http.post(`room/updateRoomById`,myRoom).then((res) => {
        console.log(res.data);
        if (res.data.changedRows > 0) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "修改失败",
            type: "error",
          });
        }
        this.my_init();
      });
    },

    my_deleteId() {
      console.log("deleteById-deleteById-deleteById-deleteById");
      let myRoomId = new URLSearchParams();
      let uid = this.editedItem.room_id;
      myRoomId.append("room_id", uid);
      console.log(uid);
      this.$http.post(`room/deleteById`, myRoomId).then((res) => {
        console.log(res.data);
        if (res.data.affectedRows > 0) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "删除失败",
            type: "error",
          });
        }
        this.my_init();
      });
    },

    editItem(item) {
      this.editedIndex = this.rooms.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.rooms.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // this.rooms.splice(this.editedIndex, 1);
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
        // Object.assign(this.rooms[this.editedIndex], this.editedItem);
        console.log("my_updateId-my_updateId");
        this.my_update();
      } else {
        console.log("addRoom-addRoom-addRoom-addRoom");
        this.my_add();
        // this.rooms.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>