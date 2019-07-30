<template>
<div>
  <van-tabs swipeable animated @change="onClick">
    <van-tab :title="index"  v-for="(item, index) in tabList" :key="index" :name="item"/>
  </van-tabs>
  <van-col v-for="(item, index) in imgList" v-bind:key="index" span="9" offset="2" >
<img class="img" :src="item"/>
  </van-col>
</div>
</template>
<script>
  export default {
    data() {
      return {
        active: 1,
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
        if (title == "基金") {
          this.imgList = this.imgList1
        } else {
          this.imgList = this.imgList2
        }
      }
    }
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