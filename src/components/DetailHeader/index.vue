<template>
  <div class="detail-header">
    <span 
      class="iconfont icon-leftarrow go-back" 
      v-show="isShow"
      @click="handleBackClick"
    >
    </span>
    <div 
      class="detail-header-content" 
      v-show="!isShow"
      :style="opactiy"
    >
      <span 
        class="iconfont icon-leftarrow"
        @click="handleBackClick"
      >
      </span>
      <p class="header-title">查看详情</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShow: true,
      opactiy: {
        opactiy: ''
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scroll);
  },
  methods: {
    handleBackClick () {
      this.$router.push('/')
    },
    scroll () {
      const top = document.documentElement.scrollTop || 
        document.body.scrollTop || window.pageYOffset;
      if(top > 30) {
        this.isShow = false;
        let opacity = top / 100;
        this.opactiy = { opacity }
      } else {
        this.isShow = true;
      }
    }
  },
  
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibel.scss';
  .detail-header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: .88rem;
    text-align: center;
    .detail-header-content {
      width: 100%;
      background: $bgColor;
      .icon-leftarrow {
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        width: .8rem;
        height: .88rem;
        text-align:center;
        line-height: .88rem;
      }
      .header-title {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 .8rem;
        line-height: .88rem;
        font-size: 0.32rem;
        color: #fff;
      }
    }
    .go-back {
      width: .72rem;
      height: .72rem;
      color: #fff;
      border-radius: 50%;
      margin: .1rem 0 0 .1rem;
      background: rgba(0, 0, 0, .5);
      text-align: center;
      line-height: .72rem;
    }
  }
  
</style>