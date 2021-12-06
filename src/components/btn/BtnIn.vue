<template>
    <div class="btn-div">
        <button href="#" id="button">
            <div class="click-div" @click="btnClick"></div>
            <slot name="name"></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'TogoLastBtnIn',

    data() {
        return {
            
        };
    },

    mounted() {
    },

    methods: {
        btnClick(e){
            let x = e.clientX - e.currentTarget.getBoundingClientRect().left;
            let y = e.clientY - e.currentTarget.getBoundingClientRect().top;
            let ripples = document.createElement("span");
            ripples.style.left = x + "px";
            ripples.style.top = y + "px";
            ripples.setAttribute("class","btn-span");
            e.currentTarget.appendChild(ripples);
            setTimeout(() => {
                ripples.remove()
            }, 800);
        }
    },
};
</script>

<style lang="scss">
.btn-div{
    position: relative;
}
.click-div{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
}
#button {
    position: relative;
    box-sizing: border-box;
    padding: 8px 18px;
    color: white;
    border: 2px solid #fff;
    // background: linear-gradient(90deg, #69A5B8, #BADBD5);
    // box-shadow: 0 5px 15px 0 #3b3b3b96;
    background: #00000000;
    display: inline-block;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    border-radius: 20px;
}

.btn-span {
    position: absolute;
    background-color: #fff;
    pointer-events: none;
    border-radius: 50%;
    animation: animate 1s linear infinite;
    -webkit-animation: animate 1s linear infinite;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
}

@keyframes animate {
    0% {
        width: 0px;
        height: 0px;
        opacity: 0.5;
    }
    100% {
        width: 500px;
        height: 500px;
        opacity: 0;
    }
}
</style>