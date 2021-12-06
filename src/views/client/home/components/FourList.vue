<template>
    <div @mouseenter="listMouseEnter" @mouseleave="listMouseLeave" class="four-list-dv">
        <div class="four-list-img">
            <slot name="img"></slot>
        </div>
        <div class="four-list-text">
            <div class="four-list-text1"><slot name="text1"></slot></div>
            <div class="four-list-text2"><slot name="text2"></slot></div>
            <div class="four-list-text3"><slot name="text3"></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TogoLastFourlist',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        listMouseEnter(e){
            e.currentTarget.lastChild.style.top = '0px'
            e.currentTarget.lastChild.style.backgroundColor = '#01010140'
            // e.currentTarget.lastChild.style.color = '#fff'
        },
        listMouseLeave(e){
            e.currentTarget.lastChild.style.top = '170px'
            e.currentTarget.lastChild.style.backgroundColor = '#adadad40'
            // e.currentTarget.lastChild.style.color = '#ffffff'
        }
    },
};
</script>

<style lang="scss" scoped>
.four-list-dv{
  cursor: pointer;
  position: relative;
  float: left;
  overflow: hidden;
  width: 286px;
  height: 240px;
  margin: 0 24px 30px 0;
  background-color: #fff;
}
.four-list-img{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.four-list-text{
    position: absolute;
    top: 170px;
    box-sizing: border-box;
    padding: 10px 20px 20px 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    // background-color: #ffffff;
    background-color: #adadad40;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: .3s;
}
.four-list-text1{
    font-size: 17px;
}
.four-list-text2{
    margin: 0px 0 15px 0;
    font-weight: 700;
    font-size: 20px;
}
.four-list-text3{
    box-sizing: border-box;
    padding: 0 10px;
}
</style>