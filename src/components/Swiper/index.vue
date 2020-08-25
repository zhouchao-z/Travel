<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgSrc" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "IndexSwiper",
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgSrc:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3936610868,4030009306&fm=26&gp=0.jpg",
        },
        {
          id: "0002",
          imgSrc:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2932263949,3539059350&fm=26&gp=0.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff !important;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  overflow: hidden;
}
.swiper-img {
  width: 100%;
  height: 117px;
}
</style>