<template>
  <v-app id="inspire">
    

    <v-navigation-drawer v-model="drawer" app id="my_drawer">
      <v-sheet color="grey lighten-4" class="pa-4" >
        <p style="margin-top: 30px; font-size:250%; font-weight: bold;">管理员</p>
       

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>


    <v-main>
       <div class="card_wrap">
                    <v-card class="r_card">
                        <v-card-title>Ve-histogram</v-card-title>
                        <v-divider></v-divider>
                        <div class="item_content">
                            <div class="chart_wrap">
                                <ve-histogram
                                    :data="chartData"
                                    :extend="chartExtend"
                                    height="240px"
                                ></ve-histogram>
                            </div>
                        </div>
                    </v-card>
                    <v-card class="r_card">
                        <v-card-title>Ve-line</v-card-title>
                        <v-divider></v-divider>
                        <div class="item_content">
                            <div class="tool">
                                <div class="t">
                                    <div class="i">Daily Income</div>
                                    <div class="r">
                                        <v-icon>mdi-arrow-up</v-icon>38%
                                    </div>
                                </div>
                                <div class="v">584</div>
                            </div>
                            <div class="chart_wrap chart_wrap1">
                                <ve-line
                                    :data="chartData2"
                                    :extend="chartExtend2"
                                    :settings="chartSettings"
                                    height="240px"
                                ></ve-line>
                            </div>
                        </div>
                    </v-card>
                </div>
      <Title/>
      <Table />
    </v-main>
  </v-app>
</template>

<script>
import Table from "../../components/server/Table.vue";
import Title from "../../components/server/Title.vue";

export default {
  components: { 
    Table,
    Title 
  },
  data: () => ({
    cards: ["Today", "Yesterday"],
    // drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
    mini: true,
  }),
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>


<style scoped>
#my_drawer {
  
  box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
  color: aliceblue;
}
</style>