<template>
  <div class="weekend">
    <div class="title">周末去哪儿玩</div>
    <ul>
      <li 
        class="item"
        v-for="item of weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexWeekend',
  props: {
    weekendList: Array
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
    overflow: hidden;
    .item-img-wrapper {
     height: 0;
     padding-bottom: 37.2%;
     overflow: hidden;
     .item-img {
       width: 100%;
     }
    }
    .item-info {
      padding: .1rem;
      .item-title {
        line-height: .54rem;
        font-size: .30rem;
      }
      .item-desc {
        line-height: .4rem;
        color: #ccc;
      }
      
    }
  }
</style>