<template>
  <div class="header">
    <!-- <div class="header-left">
      <span class="iconfont icon-leftarrow"></span>
    </div> -->
    <div class="header-input">
      <span class="iconfont icon-search"></span>
      <span class="place">输入城市/景点/游玩主题</span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>城市</span>
        <span class="iconfont icon-belowarrow"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibel.scss';
  .header {
    display: flex;
    height: $headerHeight;
    background: $bgColor;
    color: #fff;
    .header-left {
      display: flex;
      width: .64rem;
      align-items: center;
      justify-content: center;
    }
    .header-input {
      flex: 1;
      background: #fff;
      border-radius: .1rem;
      height: .62rem;
      line-height: .62rem;
      margin-top: .12rem;
      margin-left: .5rem;
      color: #ccc;
      padding-left: .2rem;
      .place {
        vertical-align: top;
      }
      .icon-search {
        font-size: 0.4rem;
      }
    }
    .header-right {
      display: flex;
      width: 1.24rem;
      line-height: .86rem;
      align-items: center;
      justify-content: center;
      color: #fff;
      .icon-belowarrow {
        font-size: 0.24rem;
        margin-left: .04rem;
      }  
    }
  }
</style>