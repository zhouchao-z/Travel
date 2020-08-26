<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont icon-leftarrow"></span>
    </router-link>
    <span>城市选择</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
  @import 'styles/varibel.scss';
  .header {
    position: relative;
    height: $headerHeight;
    line-height: $headerHeight;
    background: $bgColor;
    font-size: .32rem;
    text-align: center;
    color: #fff;
  }
  .icon-leftarrow {
    position: absolute;
    left: 0;
    top: 0;
    width: .64rem;
    color: #fff;
  }

</style>