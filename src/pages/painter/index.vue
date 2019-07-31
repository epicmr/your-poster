<template>
  <div>
    <!-- <van-row>
      <van-col offset="2" span="20" :show="imgshow">
        <img class="img" :src="src" />
      </van-col>
    </van-row>-->
    <painter
      :customStyle="customStyle"
      @imgOK="onImgOK"
      @imgErr="onImgErr"
      :palette="template"
      dirty="true"
    />
    <van-row>
      <button style="margin-top:40rpx" @click="genPoster">分享</button>
    </van-row>
    <van-popup :show="show" position="bottom" @close="onClose" close-on-click-overlay="true">
      <van-field
        :value="value"
        type="number"
        size="large"
        left-icon="phone-o"
        label="手机号"
        placeholder="请输入手机号"
        @change="onChange"
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
      value: "",
      show: false,
      imagePath: "",
      customStyle: "",
      template: {}
    };
  },
  methods: {
    onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.mp.detail);
      this.value = event.mp.detail;
    },
    onImgErr(e) {
      console.log(e);
    },
    onImgOK(e) {
      console.log("value " + this.value);
      this.imagePath = e.mp.detail.path;
      console.log("imgok " + this.imagePath);
      let arr = [];
      arr.push(this.imagePath);
      if (this.value != "") {
        wx.previewImage({
          current: this.imagePath, // 当前显示图片的http链接
          urls: arr // 需要预览的图片http链接列表
        });
        this.value = "";
      }
    },
    genPoster() {
      this.show = true;
    },
    onClickBtn() {
      console.log("确认生成...... " + this.src + " " + this.value);
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
    console.log("args " + this.$root.$mp.query.avatar);
    this.src = this.$root.$mp.query.avatar;
    //this.onClickBtn();
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