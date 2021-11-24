<template>
  <div id="app">

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <server-main />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import ServerMain from "./views/server/ServerMain.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    ServerMain,
    // HelloWorld
  },
};
</script>

<style>
#app {
}
</style>
