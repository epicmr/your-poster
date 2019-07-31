<template>
  <div>
    <!-- <van-row>
      <van-col offset="2" span="20" :show="imgshow">
        <img class="img" :src="src" />
      </van-col>
    </van-row>-->
    <painter :customStyle="customStyle" @imgOK="onImgOK" :palette="template" />
    <van-row>
      <button style="margin-top:40rpx" @click="genPoster">分享</button>
    </van-row>
    <van-popup :show="show" position="bottom" @close="onClose" close-on-click-overlay="true">
      <van-field
        :value="phone"
        type="number"
        size="large"
        left-icon="phone-o"
        label="手机号"
        placeholder="请输入手机号"
        required
        autosize
        use-button-slot
      >
        <van-button slot="button" size="small" type="primary" @click="onClickBtn">完成</van-button>
      </van-field>
    </van-popup>
  </div>
</template>

<script>
import Card from "./card";

export default {
  data() {
    return {
      imgshow: true,
      src: "",
      phone: "",
      show: false,
      imagePath: "",
      customStyle: "",
      template: {}
    };
  },
  methods: {
    onImgOK(e) {
      this.imagePath = e.mp.detail.path;
    },
    genPoster() {
      this.show = true;
      // wx.saveImageToPhotosAlbum({
      //   filePath: this.imagePath
      // });
    },
    onClickBtn() {
      console.log(this.show);
      this.show = false;
      this.imgshow = false;

      const card = new Card();
      const userInfo = {
        avatar: this.src
      };
      this.customStyle = "margin-left:40rpx";
      this.template = card.do(userInfo);
    }
  },
  onShow(options) {
    this.src = this.$root.$mp.query.avatar;
    this.onClickBtn();
  }
};
</script>

<style>
.img {
  height: 1000rpx;
  width: 100%;
  border: 1rem;
  box-shadow: 5px 2px 6px #000;
}
</style>