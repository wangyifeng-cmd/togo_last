<template>
  <div id="app">
    <!-- <server-main /> -->
    <Home></Home>
  </div>
</template>

<script>
import Home from "./views/client/home/Home"
// import ServerMain from "./views/server/ServerMain.vue";

export default {
  name: "app",
  components: {
    // ServerMain,
    Home
  },
};

</script>

<style>
</style>
