<template>
  <div>
    <button id="btn" @click="btnClick">btn</button>
    <div id="hhh">hhhhh</div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    btnClick(){
      console.log('hhh');
      $('#hhh').fadeOut(500);
    }
  },
};
</script>

<style lang="scss" scoped>

</style>