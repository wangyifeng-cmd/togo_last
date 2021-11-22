<template>
  <div>
    <button id="btn" @click="btnClick">btn</button>
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
    }
  },
};
</script>

<style lang="scss" scoped>

</style>