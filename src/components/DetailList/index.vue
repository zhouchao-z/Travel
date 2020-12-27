<template>
  <div class="detail-list">
    <div
      v-for="(item, index) of categoryList"
      :key="index"
    >
      <div class="ticket border-bottom" @click="handleIsShow(item)">
        <span class="icon"></span>
        <div>{{ item.title }}</div>
      </div>
      <transition>
        <div class="chirdren" v-if="item.children" v-show="isShow">
          <detail-list 
            :categoryList="item.children"
          />
        </div> 
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array,
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    handleIsShow (item) {
      if(item.children) {
        this.isShow = !this.isShow;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-list {
    .ticket {
      line-height: .82rem;
      padding: 0 .1rem;
      &::before {
        border-color: #ccc;
      }
      .icon {
        
      }
    }
    .chirdren {
      padding: 0 .3rem;
    }
  }

  .v-enter,
  .v-leave-to {
    opacity: 0
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity .3s;
  }

  .v-enter-to,
  .v-leave {
    opacity: 1;
  }
</style>