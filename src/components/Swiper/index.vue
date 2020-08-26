<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperShow">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "IndexSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
    };
  },
  computed: {
    swiperShow () {
      return this.swiperList.length
    }
  }
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