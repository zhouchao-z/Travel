<template>
  <div class="banner">
    <div class="banner-img">
      <img :src="bannerImg" alt="">
    </div>
    <div class="banner-title">
      <p>{{ sightName }}</p>
    </div>
    <div class="banner-icon">
      <span class="iconfont icon-search"></span>
      <span class="number">36</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    position: relative;
    .banner-img{
      overflow: hidden;
      height: 0;
      padding-bottom: 55%;
      width: 100%;
    }
    .banner-title {
      position: absolute;
      left: .2rem;
      bottom: .3rem;
      font-size: .36rem;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0,0,0, .7)
    }
    .banner-icon {
      display: flex;
      position: absolute;
      right: .2rem;
      bottom: .3rem; 
      width: 1.2rem;
      height: .4rem;
      border-radius: .2rem;
      background: rgba(0, 0, 0, .5);
      justify-content: center;
      align-items: center;
      .number {
        font-size: .24rem;
        color: #fff;
      }
      .icon-search {
        font-size: .24rem;
        color: #fff;
      }
    }
  }
  

</style>