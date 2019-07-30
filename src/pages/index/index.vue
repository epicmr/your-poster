<template>
<div>
<div>
  <van-tabs swipeable animated @change="onClick" :active="active">
    <van-tab :title="item"  v-for="(item, index) in tabList" :key="index" :name="item"/>
  </van-tabs>
</div>
      <swiper :duration="50" :style="'height:1000px'" @change="swiperChange" :current="currentTab" @animationfinish="onAnimationfinish">
        <swiper-item  v-for="(item,index) in tabList" :key="index">
<div>
          <van-col v-for="(img,idx) in imgList" :key="idx" span="9" offset="2" >
          <img class="img" :src="img"/>
          </van-col>
</div>
        </swiper-item>
      </swiper>
</div>
</template>
<script>
  export default {
    data() {
      return {
        active: 1,
        winWidth:0,
        winHeight: 0,
        imgList:[],
        imgList1: [
        "/static/images/3.jpg",
        "/static/images/4.jpg",
        "/static/images/5.jpg",
        "/static/images/6.jpg",
        "/static/images/7.jpg",
        "/static/images/8.jpg"],
        imgList2: [
        "/static/images/1.jpg",
        "/static/images/2.jpg",
        "/static/images/3.jpg",
        "/static/images/4.jpg",
        "/static/images/5.jpg",
        "/static/images/6.jpg",
        "/static/images/7.jpg",
        "/static/images/8.jpg"],
        tabList: ["活动","基金","理财","证券","保险"]
      }
    },
    methods: {
      onClick(event) {
        console.log(event);
        let index = event.mp.detail.index
        this.active = index
        if (index == 0) {
          this.imgList = this.imgList1
        } else if (index == 1) {
          this.imgList = this.imgList2
        }
      },
      swiperChange(e) {
      this.active =e.mp.detail.current;;
        console.log(this.active)
    },
    onAnimationfinish() {
      console.log("滑动完成.....")
      console.log(this.imgList)
    }
    }, 
          onLoad() {
    var res = wx.getSystemInfoSync();
    this.winWidth = res.windowWidth;
    this.winHeight = res.windowHeight;
      console.log(this.winHeight)
  },
     computed: {
    contentHeight() {
      return this.winHeight + "px";
    }
  },
  }
</script>

<style>
.img{
  height: 220px;
  width: 100%;
  border:1rem;
  box-shadow:5px 2px 6px #000;
}
</style>