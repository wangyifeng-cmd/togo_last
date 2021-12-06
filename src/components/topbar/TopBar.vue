<template>
    <div id="top-bar">
        <div id="top-bar-mes">
            <div id="top-logo">
                togo
            </div>
            <div id="title">
                <span class="title-mem">热门城市</span>
                <span class="title-mem">跟团方案</span>
                <span class="title-mem">自驾游</span>
                <span class="title-mem">订票</span>
                <span class="title-mem">攻略</span>
                <div class="title-mem" id="top-person">
                    <img src="../../assets/img/wyf/person1.png" width="30px" alt="">
                </div>
            </div>
            <div id="top-btn">
                <Btn-In><div class="top-btn-div" slot="name">Sign in</div></Btn-In>
                <Btn-Out><div class="top-btn-div" slot="name">Sign out</div></Btn-Out>
            </div>
        </div>
    </div>
</template>

<script>
import BtnIn from './BtnIn'
import BtnOut from './BtnOut'
export default {
    name: 'TogoLastTopbar',

    data() {
        return {
            
        };
    },
    components:{
        BtnIn,
        BtnOut
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll () {
            var topbar = document.getElementById('top-bar')
            var topbarmes = document.getElementById('top-bar-mes')
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop > 50){
                topbar.style.height = "60px"

            }else if(scrollTop <= 50){
                topbar.style.height = "85px"
            }
        },
    },
};
</script>

<style lang="scss" scoped>
#top-bar{
    color: #ffffff;
    // mix-blend-mode: difference;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    top: 0;
    width: 100vw;
    height:85px;
    z-index: 100;
    transition: .8s;
}
#top-bar-mes{
    mix-blend-mode: difference;
    width: 96%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .8s;
}
#top-logo{
    cursor: pointer;
    position: relative;
    top: -3px;
    font-size: 40px;
    font-family: moon;
}
#title{
    margin-left: 100px;
    width: 550px;
    font-family: os;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title-mem{
    cursor: pointer;
}
#top-person{
    width: 40px;
    display: flex;
    justify-content: space-around;
}
#top-btn{
    margin-right: 20px;
    width: 180px;
    display: flex;
    justify-content: space-between;
}
.top-btn-div{
    font-family: BarlowBold;
}
</style>