<template>
  <div class="recommend">
    <div class="title">推荐列表</div>
    <ul>
      <router-link 
        tag="li" 
        :to="`/detail/${item.id}`"
        class="item"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.desc }}</div>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexCommend',
  props: {
    recommendList: Array
  }
  
}
</script>


<style lang="scss" scoped>
  .title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item {
    display: flex;
    overflow: hidden;
    height: 1.9rem;
    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info {
      flex: 1;
      padding: .1rem;
      .item-title {
        line-height: .54rem;
        font-size: .32rem;
      }
      .item-desc {
        line-height: .4rem;
        color: #ccc;
      }
      .item-btn {
        line-height: .44rem;
        background: #ff9300;
        color: #fff;
        border-radius: .06rem;
        padding: 0 .2rem;
        margin-top: .2rem;
      }
    }
  }
</style>