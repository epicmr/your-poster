<template>
  <div>
    <div>
      <van-tabs swipeable animated @change="onClick" :active="active">
        <van-tab :title="item" v-for="(item, index) in tabList" :key="index" :name="item" />
      </van-tabs>
    </div>
    <swiper
      :duration="400"
      :style="'height:1000px'"
      @change="swiperChange"
      :current="active"
      @animationfinish="onAnimationfinish"
    >
      <swiper-item v-for="(item,index) in tabList" :key="index">
        <div>
          <van-col v-for="(img,idx) in imgList[active]" :key="idx" span="9" offset="2">
            <img class="img" :src="img" @click="imgClick(img)" />
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
      winWidth: 0,
      winHeight: 0,
      imgList: [
        [
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/3.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/4.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/5.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/6.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/7.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/8.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/1.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/2.jpg"
        ],
        [
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/1.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/2.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/3.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/4.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/5.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/6.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/7.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/8.jpg"
        ],
        [
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/8.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/2.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/3.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/4.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/5.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/6.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/7.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/1.jpg"
        ],
        [
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/7.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/6.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/3.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/4.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/5.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/2.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/1.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/8.jpg"
        ],
        [
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/4.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/5.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/3.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/1.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/2.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/6.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/7.jpg",
          "https://gstzy-test.oss-cn-shenzhen.aliyuncs.com/doctor/201707/24/8.jpg"
        ]
      ],
      tabList: ["活动", "基金", "理财", "证券", "保险"]
    };
  },
  methods: {
    onClick(event) {
      let index = event.mp.detail.index;
      this.active = index;
    },
    swiperChange(e) {
      this.active = e.mp.detail.current;
      console.log("active:" + this.active);
    },
    onAnimationfinish() {
      console.log("滑动完成.....");
    },
    imgClick(src) {
      wx.navigateTo({
        url: "../painter/main?avatar=" + src
      });
    }
  },
  onLoad() {
    var res = wx.getSystemInfoSync();
    this.winWidth = res.windowWidth;
    this.winHeight = res.windowHeight;
    this.active = 2;
    console.log("active:" + this.active);
  },
  computed: {
    contentHeight() {
      return this.winHeight + "px";
    }
  }
};
</script>

<style>
.img {
  height: 220px;
  width: 100%;
  border: 1rem;
  box-shadow: 5px 2px 6px #000;
}
</style>