<template>
  <div>
    <div>TableTreffic</div>
    <el-card shadow="always" style="margin: 20px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>

    <el-card shadow="always" style="margin: 20px">
      <v-data-table :headers="headers" :items="traffics" sort-by="calories">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>交通表</v-toolbar-title>
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
                  新建行程
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
                          v-model="editedItem.traffic_id"
                          label="行程id"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.type"
                          label="行程类型"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.company" label="公司">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.money" label="金额">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.start_position"
                          label="起点"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.end_position"
                          label="终点"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <!-- <v-text-field
                          v-model="editedItem.start_time"
                          label="出发时间"
                        > -->
                          <el-date-picker
                            v-model="editedItem.start_time"
                            type="datetime"
                            placeholder="出发时间"
                          >
                          </el-date-picker>
                        <!-- </v-text-field> -->
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <!-- <v-text-field
                          v-model="editedItem.end_time"
                          label="抵达时间"
                        >
                        </v-text-field> -->
                        <el-date-picker
                            v-model="editedItem.end_time"
                            type="datetime"
                            placeholder="抵达时间"
                          >
                          </el-date-picker>
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
              <v-card style="padding: 20px">
                <v-card-title class="text-h5">确定删除改行程？</v-card-title>
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
        text: "行程id",
        align: "start",
        sortable: true,
        value: "traffic_id",
      },
      {
        text: "类型",
        value: "type",
      },
      {
        text: "公司",
        value: "company",
      },
      {
        text: "金额",
        value: "money",
      },
      {
        text: "起点",
        value: "start_position",
      },
      {
        text: "终点",
        value: "end_position",
      },
      {
        text: "出发时间",
        value: "start_time",
      },
      {
        text: "抵达时间",
        value: "end_time",
      },
      { text: "操作", value: "actions", sortable: false },
    ],
    traffics: [],
    editedIndex: -1,
    editedItem: {
      traffic_id: "",
      type: "宇宙飞船",
      company: "to狗航天",
      money: "12000000",
      start_position: "地球",
      end_position: "双子阿尔法星",
      start_time: "2024-2-2 10:00:20",
      end_time: "2023-2-2 10:00:20",
    },
    defaultItem: {
      traffic_id: "",
      type: "宇宙飞船",
      company: "to狗航天",
      money: "12000000",
      start_position: "地球",
      end_position: "双子阿尔法星",
      start_time: "2024-2-2 10:00:20",
      end_time: "2023-2-2 10:00:20",
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
      this.$http.get("traffic/getAllTraffic").then((res) => {
        this.traffics = res.data;
      });
    },

    my_add() {
      let myTraffic = new URLSearchParams();
      const traffic = this.editedItem;
      // var ta = traffic.start_time;
      myTraffic.append("type", traffic.type);
      myTraffic.append("company", traffic.company);
      myTraffic.append("money", traffic.money);
      myTraffic.append("start_position", traffic.start_position);
      myTraffic.append("end_position", traffic.end_position);
      myTraffic.append("start_time", traffic.start_time);
      myTraffic.append("end_time", traffic.end_time);
      console.log(traffic);
      this.$http.post(`traffic/addTraffic`, myTraffic).then((res) => {
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
      let myTraffic = new URLSearchParams();
      const traffic = this.editedItem;
      myTraffic.append("traffic_id", traffic.traffic_id);
      myTraffic.append("type", traffic.type);
      myTraffic.append("type", traffic.type);
      myTraffic.append("company", traffic.company);
      myTraffic.append("money", traffic.money);
      myTraffic.append("start_position", traffic.start_position);
      myTraffic.append("end_position", traffic.end_position);
      myTraffic.append("start_time", traffic.start_time);
      myTraffic.append("end_time", traffic.end_time);
      console.log(traffic);
      this.$http.post(`traffic/updateTrafficById`, myTraffic).then((res) => {
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
      let myTrafficId = new URLSearchParams();
      let uid = this.editedItem.traffic_id;
      myTrafficId.append("traffic_id", uid);
      console.log(uid);
      this.$http.post(`traffic/deleteById`, myTrafficId).then((res) => {
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
      this.editedIndex = this.traffics.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.traffics.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // this.traffics.splice(this.editedIndex, 1);
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
        // Object.assign(this.traffics[this.editedIndex], this.editedItem);
        console.log("my_updateId-my_updateId");
        this.my_update();
      } else {
        console.log("addTraffic-addTraffic-addTraffic-addTraffic");
        this.my_add();
        // this.traffics.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>