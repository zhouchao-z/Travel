<template>
  <swiper>
    <swiper-slide v-for="(iconList, index) of pages" :key="index">
      <div class="icons">
        <div 
          class="icon"
          v-for="item in iconList"
          :key="item.id"
        >
          <div class="icon-img">
            <img :src="item.imgSrc" class="icon-img-content">
          </div>
          <p class="icon-desc"> {{ item.desc }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  
</template>

<script>
export default {
  name: 'IndexIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          desc: '景点门票',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          id: '0002',
          desc: '一日游',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },{
          id: '0003',
          desc: '动植物院',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'
        },{
          id: '0004',
          desc: '天门山公园',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png'
        },
        {
          id: '0005',
          desc: '景点门票',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          id: '0006',
          desc: '一日游',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },{
          id: '0007',
          desc: '动植物院',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'
        },{
          id: '0008',
          desc: '天门山公园',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png'
        },{
          id: '0008',
          desc: '天门山公园',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png'
        }
      ]
    }
  },
  computed: {
    pages () {
      //通过数据来计算到底展示的页码有几页
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if(!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      })
      return pages;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibel.scss';
  .icons {
    display: flex;
    flex-wrap: wrap;
    height: 0;
    padding-bottom: 50%;
    .icon {
      position: relative;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: .44rem;
        text-align: center;
        padding: .1rem .3rem;

        .icon-img-content {
          height: 100%;
        }
      }
      .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: $darkTextColor;
      }
    }
  }
</style>