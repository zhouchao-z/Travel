<template>
  <div class="weekend">
    <div class="title">周末去哪儿玩</div>
    <ul>
      <li 
        class="item"
        v-for="item of weekend"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgSrc" />
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
  data () {
    return {
      weekend: [
        {
          id: '0001',
          imgSrc: "http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg" ,
          title: '长沙乐水魔方水世界',
          desc: '好好玩，好好玩'
        },
        {
          id: '0002',
          imgSrc: "http://img1.qunarzz.com/sight/source/1811/88/8d3b492ebf0b16.jpg_r_640x214_7b3a281d.jpg" ,
          title: '长沙乐水魔方水世界',
          desc: '好好玩，好好玩'
        },
        {
          id: '0003',
          imgSrc: "http://img1.qunarzz.com/sight/source/1811/88/8d3b492ebf0b16.jpg_r_640x214_7b3a281d.jpg" ,
          title: '长沙乐水魔方水世界',
          desc: '好好玩，好好玩'
        },
        {
          id: '0004',
          imgSrc: "http://img1.qunarzz.com/sight/source/1811/88/8d3b492ebf0b16.jpg_r_640x214_7b3a281d.jpg" ,
          title: '长沙乐水魔方水世界',
          desc: '好好玩，好好玩'
        },
      ]
    }
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