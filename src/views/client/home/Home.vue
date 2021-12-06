<template>
  <div id="home" @mousemove="mousemove">
    <img src="../../../assets/img/wyf/错误.png" @click="flyClick" alt="" width="60px" id="fly">
    <div id="top-bgc"></div>
    <div id="video-center-dv">
      <video id="video" src="../../../assets/img/wyf/vlog.mp4" loop width="100%"></video>
    </div>
    <Top></Top>
    <div id="img">
      <div id="img-text1-dv">
        <div class="img-text" id="img-one">
          <div id="img-one-text">
            Let Make Your
          </div>
        </div>
        <div class="img-text" id="img-two">
          <div id="img-two-text">
            Best Trip
          </div>
        </div>
        <div class="img-text" id="img-three">
          <div id="img-three-text">
            Ever
          </div>
        </div>
      </div>
      <div id="img-text2-dv">
        <div class="img-text2">Some people only have holidays, others know how to put it down.</div>
        <div class="img-text2">There are zebra crossings on the road. It's better to have zebras. </div>
        <div class="img-text2">Advanced seats are not on the map, but only on the earth.</div>
      </div>
      <div id="img-btn-dv">
        <div id="img-btn">
          <ImgBtn>
            <div slot="name">MORE</div>
          </ImgBtn>
        </div>
      </div>
      <div id="img-mouse-dv">
        <div id="img-mouse"><img src="../../../assets/img/wyf/鼠标.png" width="30px" alt=""></div>
        <div id="img-down"><img src="../../../assets/img/wyf/向下箭头.png" width="30px" alt=""></div>
      </div>
    </div>
    <div id="content">
      <div id="one">
        <div id="one-text-dv">
          <div id="one-text-bgc">不同人和不同城市</div>
          <div id="one-text1">开启一段发现</div>
          <div id="one-text2">不同人和不同城市</div>
          <div id="one-text3">的旅程</div>
        </div>
        <div id="one-video-dv">
          <div id="one-video">
            <img src="../../../assets/img/wyf/电脑.png" id="one-video-computer" width="100%" alt="">
            <img src="../../../assets/img/wyf/播放.png" @click="videoClick" id="one-video-img" width="90px" alt="">
          </div>
        </div>
      </div>
      <div id="two">
        <video id="two-bgc" src="../../../assets/img/wyf/bgcvideo1.mp4" autoplay muted loop width="100%"></video>
        <div id="two-dv">
          <div id="two-content">
            <div id="two-text">
              <div id="two-text1">人类先发明了旅行</div>
              <div id="two-text2">但又不停追问</div>
              <div id="two-text3">什么是旅行的意义</div>
            </div>
            <div id="two-map-dv">
              <img id="two-map" src="../../../assets/img/wyf/中华人民共和国.svg" height="600px" alt="">
            </div>
          </div>
        </div>
      </div>
      <div id="three">
        <div id="three-content">
          <div id="three-word">
            <img src="../../../assets/img/wyf/地球.png" height="100%" alt="">
          </div>
          <div id="three-right-text">
            <div id="three-text">
              <div id="three-text1">不要犹豫</div>
              <div id="three-text2">来一场说走就走</div>
              <div id="three-text3">的旅行</div>
            </div>
            <div id="three-text-message">
              <div>去旅行每个人都有自己的定义，不愿被困在笼中，迷恋在路上的感觉，远方有着让人难以抵挡的诱惑，所以，我们旅行。不去旅行的借口更是不同，没有多余的精力和时间，旅行的费用不足，林林总总。之于我，旅行也是不断学习的过程，让自己活得更自由。旅行，自由。没有繁琐的计划，没有沉重的负担，只有最纯粹的态度。</div>
            </div>
            <div id="three-btn">
              <ThreeBtn>
                <div slot="name">DIRECTION</div>
              </ThreeBtn>
            </div>
          </div>
        </div>
      </div>
      <div id="four">
        <div id="four-content">
          <div  id="four-list">
            <div id="four-list1">出行计划</div>
            <div id="four-list2">旅行真正的快乐不在于目的地，而在于它的过程。遇见不同的人，遭遇到奇奇怪怪的事，克服种种的困难，听听不同的语言。</div>
            <div id="four-btn">
              <ThreeBtn>
                <div slot="name">LEARN MORE</div>
              </ThreeBtn>
            </div>
          </div>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list1.jpg" width="100%" alt="">
            <span slot="text1">长沙</span>
            <span slot="text2">星城</span>
            <span slot="text3">长沙，湖南省省会，是长江中游地区重要的中心城市。长沙是首批国家历史文化名城，历经三千年城名、城址不变，有“屈贾之乡”、“楚汉名城”、“潇湘洙泗”之称。存有四羊方尊、三国吴简、岳麓书院等历史遗迹。-1000米的沿海防护林带均在国内外度假区中享有极高的声誉</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list2.jpg" width="100%" alt="">
            <span slot="text1">海南三亚</span>
            <span slot="text2">中国的马尔代夫</span>
            <span slot="text3">在这里栖息，面朝大海，在温暖的.阳光中醒来。海浪声声，帘卷海风，大海与卧室，一道玻璃门之隔。卧床可见一片辽阔的海，细细碎碎的浪花，从远处层层叠叠铺展开来，循环往复，倏忽之间就消失不见了，犹如微小易逝的幸福。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list11.jpg" width="100%" alt="">
            <span slot="text1">珠穆朗玛峰</span>
            <span slot="text2">世界第一高峰</span>
            <span slot="text3">简称珠峰，又意译作圣母峰，尼泊尔称为萨加马塔峰，也叫“埃非勒斯峰”（Everest），位于中华人民共和国和尼泊尔交界的喜马拉雅山脉之上，终年积雪。高度8844.43米，为世界第一高峰，中国最美的、令人震撼的十大名山之一。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list4.jpg" width="100%" alt="">
            <span slot="text1">云南</span>
            <span slot="text2">彩云之南</span>
            <span slot="text3">云南是个向往的地方，这里充满了浪漫与自由的味道，大理洱海、丽江大理艳遇之都，香格里拉神秘多彩的世界、泸沽湖、情侣牵手留下美好回忆的地方。云南无疑是中国最具有吸引力的旅游省份之一，壮丽优美的山川风光，众多的名胜古迹，风情各异 少数民族，无一不令人神往。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list5.jpg" width="100%" alt="">
            <span slot="text1">上海</span>
            <span slot="text2">东方魔幻城</span>
            <span slot="text3">上海不同于其他城市，上海有一种不同于其他城市的“魔力”，朋友圈除了上海的神奇气息，说说还与上海的人文情怀有关，短句上海是一个很精致的城市，打卡上海处处体现契约精神，文案很讲道理，上海有时很冷酷，朋友圈有时很普通，说说体现了老上海的人情世故和世界的多样性。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list6.jpg" width="100%" alt="">
            <span slot="text1">北京</span>
            <span slot="text2">首都</span>
            <span slot="text3">在北京时，不喜欢浑浊的空气，厌烦拥挤的人潮和车流。离开后却异常怀念，关于北京的点滴都变得亲切起来，就连每个早上从通州到酒仙桥两段地铁的早晚高峰的人海，都觉得很动人，他们不是蝼蚁，是有故事的人。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list7.jpg" width="100%" alt="">
            <span slot="text1">重庆</span>
            <span slot="text2">内陆山水之城</span>
            <span slot="text3">奇特的地形、魔幻的交通、麻辣火锅还有各种大电影的拍摄取景地，重庆是一个非常值得打卡的网红城市！ 重庆必去景点：天生三桥、天坑地缝、乌江画廊、仙女山、九黎城、羊角古镇还有市区的洪崖洞、解放碑、 李子坝轻轨穿楼、渣滓洞、磁器口等。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list8.jpg" width="100%" alt="">
            <span slot="text1">漠河北极村</span>
            <span slot="text2">中国最北方</span>
            <span slot="text3">最近一首歌火了漠河，漠河的亮点非常多，而且都是独一无二的。泼水成冰、漠河北极村冰屋、冰屋咖啡、冰屋火锅等，随手一拍都是爆款视频。还可以体验马拉爬犁、雪地越野车、雪地摩托车、滑雪圈、冰上保龄球、雪地碰碰车、堆雪人、寻找难得一见的泡泡冰等都极为有趣。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list9.jpg" width="100%" alt="">
            <span slot="text1">塔克拉玛干沙漠</span>
            <span slot="text2">世界十大沙漠之一</span>
            <span slot="text3">位于南新疆塔里木盆地，也是世界第十大沙漠，这里不仅有一望无际的大沙漠，还有最长的内陆河——塔里木河，这里不仅有充满张力和韧性的植物——胡杨，还有最神秘的古老部族——罗布人，这一切就是塔克拉玛干沙漠值得探索的原因！巴丹吉林沙漠|世界上最高的沙丘。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list10.jpg" width="100%" alt="">
            <span slot="text1">桂林</span>
            <span slot="text2">山水甲天下</span>
            <span slot="text3">丘陵地形下的山小巧玲珑，典型的喀斯特地貌却造就了桂林形态万千的奇山，诸如象鼻山、骆驼峰等。相比于其他地区如波涛般此起彼伏的群山，桂林的山更像是一个个孤独的士兵，各自独立却相守相望，饱经沧桑却巍然屹立，守护着一方水土。</span>
          </FourList>
          <FourList>
            <img slot="img" src="../../../assets/img/wyf/list3.jpg" width="100%" alt="">
            <span slot="text1">拉萨</span>
            <span slot="text2">布达拉宫</span>
            <span slot="text3">拉萨，藏语的意思叫圣地。她同时还有一个美称叫日光城。她是一个具有一十三白年历史的局原乂化名城，是世界上海拔最高的城市。这里有雄伟的布达拉宫;也有被称为天河的雅鲁藏布江;有具有浓郁宗教气息的大昭寺;还有美丽的罗布林卡。</span>
          </FourList>
        </div>
      </div>
      <div id="five">
        <ThreeBtn>
          <div slot="name">MORE</div>
        </ThreeBtn>
      </div>
      <div id="six">
        <div id="six-content">
          <div class="six-title">Subscribe</div>
          <div class="six-title">to Our Newsletter</div>
          <div id="six-input-dv">
            <input type="text" name="" id="six-input" placeholder="wangyifeng668@qq.com">
            <button id="six-btn">Subscribe</button>
          </div>
          <div id="six-bottom">
            <div id="six-bottom-left">Copyright © 2021</div>
            <div id="six-bottom-center">
              <div class="six-bottom-center-btn">HOME</div>
              <div class="six-bottom-center-btn">ABOUT US</div>
              <div class="six-bottom-center-btn">FACILITIES</div>
              <div class="six-bottom-center-btn">CONTACT US</div>
            </div>
            <div id="six-bottom-right">
              <img class="six-bottom-center-btn" src="../../../assets/img/wyf/微信.png" height="30px" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../../../components/topbar/TopBar'
import ImgBtn from './btn/ImgBtn'
import ThreeBtn from './btn/ThreeBtn'
import FourList from './components/FourList'
export default {
  name: 'HomeMain',

  data() {
    return {
      
    };
  },
  components:{
    Top,
    ImgBtn,
    ThreeBtn,
    FourList
  },
  mounted() {
    $('#top-bgc').slideUp(0)
    window.addEventListener('scroll', this.handleScroll)
    var imgOneText = document.getElementById('img-one-text')
    var imgTwoText = document.getElementById('img-two-text')
    var imgThreeText = document.getElementById('img-three-text')
    imgOneText.style.right = "0px"
    imgTwoText.style.left = "0px"
    imgThreeText.style.right = "0px"
  },

  methods: {
    handleScroll () {
        var topbgc = document.getElementById('top-bgc')
        var imgOneText = document.getElementById('img-one-text')
        var imgTwoText = document.getElementById('img-two-text')
        var imgThreeText = document.getElementById('img-three-text')
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop > 50){
          $('#top-bgc').slideDown(500)
        }else if(scrollTop <= 50){
          $('#top-bgc').slideUp(500)
        }
        if(scrollTop > 100){
          imgOneText.style.right = "835px"
          imgTwoText.style.left = "482px"
          imgThreeText.style.right = "264px"
        }else if(scrollTop <= 100){
          imgOneText.style.right = "0px"
          imgTwoText.style.left = "0px"
          imgThreeText.style.right = "0px"
        }
    },
    videoClick(e){
      var fly = document.getElementById("fly")
      var video = document.getElementById("video")
      var videoDv = document.getElementById("video-center-dv")
      fly.style.display = "block"
      videoDv.style.zIndex = "120"
      videoDv.style.opacity = "1"
      videoDv.style.transform = "scale(4.5)"
      video.play()
    },
    mousemove(e){
      var fly = document.getElementById('fly')
      fly.style.left = e.clientX - 32 + "px";
      fly.style.top = e.clientY - 36 + "px";
    },
    flyClick(){
      var fly = document.getElementById("fly")
      var video = document.getElementById("video")
      var videoDv = document.getElementById("video-center-dv")
      fly.style.display = "none"
      video.pause()
      videoDv.style.opacity = "0"
      videoDv.style.transform = "scale(1)"
      videoDv.style.zIndex = "-120"
    }
  },
};
</script>

<style lang="scss">
// #home{
//   display: flex;
//   justify-content: space-around;
// }
#fly {
  mix-blend-mode: difference;
  display: none;
  position: fixed;
  z-index: 1000;
}
#top-bgc{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background-color: #01010110;
    z-index: 100;
}
#video-center-dv{
  // mix-blend-mode: difference;
  position: fixed;
  overflow: hidden;
  height: 135px;
  width: 300px;
  top: 350px;
  right: 0;
  left: 0;
  margin: 0 auto;
  transition: 1.5s;
  opacity: 0;
  transform: scale(1);
  z-index: -100;
}
#video{
  position: absolute;
  top: -17px;
  right: 0;
  left: 0;
  margin: 0 auto;
}
#img{
  box-sizing: border-box;
  padding-top: 160px;
  width: 100vw;
  height: 818px;
  background: url('../../../assets/img/wyf/4.jpg') no-repeat center/cover;
}
#img-text1-dv{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-text{
  font-size: 105px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
#img-one,#img-two,#img-three{
  height: 105.33px;
  position: relative;
  overflow: hidden;
  font-family: ADAM;
}
#img-one{
  width: 835px;
}
#img-two{
  width: 482px;
}
#img-three{
  width:264px;
}
#img-one-text,#img-two-text,#img-three-text{
  position: relative;
  transition: 2s;
}
#img-one-text{
  right: 835px;
}
#img-two-text{
  left: 482px;
  color: #ffffff00;
  -webkit-text-stroke:3px #ffffff;
}
#img-three-text{
  right: 264px;
}
#img-text2-dv{
  font-size: 20px;
  font-family: os;
  margin-top: 30px;
  margin-bottom: 30px;
}
.img-text2{
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
#img-btn{
  font-family: oppo1;
  display: flex;
  justify-content: space-around;
}
#img-mouse-dv{
  margin-top: 70px;
}
#img-mouse,#img-down{
  display: flex;
  justify-content: space-around;
}
#img-down{
  position: relative;
  animation: move 1.5s linear infinite;
}
@keyframes move{
  0%{
    top: 0;
  }
  50%{
    top: 10px;
  }
  100%{
    top: 0;
  }
}
#content{
  width: 100vw;
  height: 1000px;
}
#one{
  box-sizing: border-box;
  padding-top: 150px;
  width: 100%;
  height:900px;
  background-color: #010101;
  // background-color: #2148c7;
}
#one-text-dv{
  position: relative;
  margin-bottom: 90px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#one-text-bgc{
  position: absolute;
  top: 15px;
  font-size: 150px;
  color: #ffffff18;
}
#one-text1,#one-text3{
  font-size: 50px;
  color: #ffffff;
}
// #one-text1{
// }
#one-text2{
  font-size: 80px;
  // color: #ffffff00;
  // -webkit-text-stroke:1px #ffffff;
  background-image: -webkit-linear-gradient(left, #15A7E0, #8ce0f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
// #one-text3{
// }
#one-video-dv{
  display: flex;
  justify-content: space-around;
}
#one-video{
  position: relative;
  width: 400px;
  height: 237px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  // background: url('../../../assets/img/wyf/电脑.png') no-repeat center/cover;
}
#one-video-computer{
  position: absolute;
  top: 0;
  left: 0;
}
#one-video-img{
  cursor: pointer;
  transition: .2s;
  z-index: 20;
}
#one-video-img:hover{
  width: 110px;
}
#one-video-img:active{
  transition: .1s;
  width: 100px;
}
#two{
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 600px;
}
#two-bgc{
  position: absolute;
  top: 0;
  z-index: -1;
}
#two-dv{
  height: 100%;
  width: 100vw;
  background-color: #030303a8;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#two-content{
  box-sizing: border-box;
  padding: 0 0px;
  height: 100%;
  width: 1440px;
  background-color: #ffffff00;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#two-text{
  position: relative;
  left: 90px;
  margin-left: 60px;
  line-height:100px;
  font-size: 60px;
  color: #fff;
}
#two-text3{
  background-image: -webkit-linear-gradient(left, #15A7E0, #8ce0f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#two-map{
  position: relative;
  top: 50px;
  left: 50px;
}
#three{
  box-sizing: border-box;
  padding-top: 200px;
  width: 100%;
  height: 1100px;
  background-color: #010101;
  display: flex;
  align-items: center;
  justify-content: space-around;
  // background: url('../../../assets/img/wyf/地球.png') no-repeat center/cover;
}
#three-content{
  overflow: hidden;
  width: 1440px;
  height: 100%;
  // background-color: #fff;
  display: flex;
  justify-content: space-around;
}
#three-word{
  position: relative;
  left: -250px;
  height: 100%;
}
#three-right-text{
  position: relative;
  top: 100px;
  left: -180px;
  width: 400px;
}
#three-text{
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-top: 80px;
  align-items: center;
  font-size: 50px;
  color: #fff;
}
#three-text-message{
  margin: 50px 0;
  font-size: 18px;
  color: #fff;
}
#three-text2{
  background-image: -webkit-linear-gradient(left, #15A7E0, #8ce0f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#four{
  width: 100%;
  height: 900px;
  background-color: #010101;
  display: flex;
  justify-content: space-around;
}
#four-content{
  position: relative;
  left: 12px;
  box-sizing: border-box;
  padding: 100px 100px;
  width: 1440px;
  height: 100%;
}
#four-list{
  float: left;
  width: 286px;
  height: 240px;
  margin: 0 24px 30px 0;
  // box-shadow: 0 0 0px 3px rgb(255, 255, 255);
  // background-color: #ffffff;
}
#four-list1{
  color: rgb(255, 255, 255);
  font-size: 40px;
}
#four-list2{
  margin: 20px 0;
  color: rgb(255, 255, 255);
  font-size: 20px;
}
#five{
  width: 100%;
  height: 150px;
  background-color: #010101;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#six{
  width: 100%;
  height: 750px;
  background-color: #010101;
  display: flex;
  justify-content: space-around;
}
#six-content{
  position: relative;
  box-sizing: border-box;
  background: url('../../../assets/img/wyf/55.jpg') no-repeat bottom/contain;
  padding: 350px 100px 100px 100px;
  width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.six-title{
  font-family: Ak;
  color: #fff;
  font-size: 50px;
}
#six-input-dv{
  margin-top: 30px;
  width: 520px;
  height:70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
#six-input{
  width: 390px;
  box-sizing: border-box;
  padding: 25px;
  font-size: 19px;
  // background-color: rgb(0, 0, 0);
}
#six-btn{
  font-family: Ak;
  width: 130px;
  font-size: 22px;
  color: #fff;
  background-color: rgb(235, 70, 41);
  transition: .1s;
}
#six-btn:active{
  background-color: rgb(189, 54, 30);
}
#six-bottom{
  box-sizing: border-box;
  padding: 0 50px;
  position: relative;
  width: 100%;
  height: 50px;
  color: #fff;
  // background-color: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#six-bottom-center{
  position: relative;
  right: 35px;
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.six-bottom-center-btn{
  cursor: pointer;
}
</style>