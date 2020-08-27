<template>
  <div class="city-list" ref="wrapper">
    <div class="content">
      <div class="area">
        <h2 class="title border-topbottom">当前城市</h2>
        <ul class="city-content">
          <li class="border-rightbottom">
            <a href="#">{{ city }}</a>
          </li>
        </ul>
      </div>

      <div class="area">
        <h2 class="title border-topbottom">热门城市</h2>
        <ul class="city-content">
          <li 
            class="border-rightbottom"
            v-for="item of hotCities"
            :key="item.id"
          >
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      
      <div 
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <h2 class="title border-topbottom">{{ key }}</h2>
        <ul class="city-content">
          <li
            class="border-rightbottom row4"
            v-for="city of item"
            :key="city.id"
          >
            <a href="#">{{ city.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  props: {
    city: String,
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0];
      this.scroll.scrollToElement(element);
    }
  }
}
</script>

<style lang="scss" scoped>
  .city-list {
    overflow: hidden;
    position: absolute;
    top: 1.75rem;
    left: 0;
    right: 0;
    bottom:0;
    .area {
    .title {
      line-height: .7rem;
      background: #eee;
      padding: 0 .15rem;
    }
    .border-topbottom {
      &::before {
        border-color: #ccc;
      }
      &::after {
        border-color: #ccc;
      }
      
    }
    .city-content {
      display: flex;
      flex-wrap: wrap;
      .border-rightbottom {
        &:before {
          border-color: #ccc;
        } 
        &:after {
          border-color: #ccc;
        }
      }
      li {
        width: 33.33%;
        height: 0;
        padding-bottom: 11.73%;
        text-align: center;
        line-height: .9rem;
        // overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        a {
          font-size: .28rem;
        }
      }
      li.row4 {
        width: 25%;
      }
    }
  }

  }
  
</style>