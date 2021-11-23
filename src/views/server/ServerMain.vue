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

    <v-main>
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