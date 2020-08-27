<template>
  <div class="search">
    <input 
      type="text" 
      placeholder="输入城市名或者拼音"
      class="search-input"
      v-model="keyword"
    >
    <div 
      class="search-content" 
      v-show="keyword" 
      ref="search"
    >
      <ul>
        <li
          v-for="item of keywordList"
          :key="item.id"
          class="content border-bottom"
          @click="handCityClick(item.name)"
        >
        {{ item.name }}
        </li>
        <li 
          v-show="isShow"
          class="content border-bottom"
        >
          没有搜索到内容
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapMutations } from 'vuex';
export default {
  name: 'CitySearch',
  mounted () {
    new Bscroll(this.$refs.search);
  },
  data () {
    return {
      keyword: '',
      keywordList: [],
      timer: null
    }
  },
  methods: {
    handCityClick (city) {
      this.changeCity(city);
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  props: {
    cities: Object
  },
  computed: {
    isShow () {
      return !this.keywordList.length;
    }
  },
  watch: {
    keyword () {
      if(this.timer) {
        clearTimeout(this.timer);
      }
      if(!this.keyword) {
        this.keywordList = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if(value.spell.indexOf(this.keyword) > -1 || 
              value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          })
        }
        this.keywordList = result;
      }, 200)
    }
  }
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
    .search-content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 1.74rem;
      z-index: 1;
      background: #eee;
      overflow: hidden;

      .content {
        line-height: .7rem;
        background: #fff;
        padding: 0 .15rem;
      }
    }
  }
</style>