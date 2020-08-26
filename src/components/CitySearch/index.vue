<template>
  <div class="search">
    <input 
      type="text" 
      placeholder="输入城市名或者拼音"
      class="search-input"
    >
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
  @import 'styles/varibel.scss';
  .search {
    height: .71rem;
    line-height: .71rem;
    background: $bgColor; 
    padding:0.1rem .15rem;
    .search-input {
      width: 100%;
      text-align: center;
      border-radius: .06rem;
      padding: .1rem;
      box-sizing: border-box;
    }
  }
</style>