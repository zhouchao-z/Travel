<template>
  <div class="home">
    <index-header />
    <index-swiper :swiperList="swiperList"/>
    <index-icons :iconList="iconList"/>
    <index-recommend :recommendList="recommendList"/>
    <index-weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import IndexHeader from '@/components/Header';
import IndexSwiper from '@/components/Swiper';
import IndexIcons from '@/components/Icons';
import IndexRecommend from '@/components/Recommend';
import IndexWeekend from '@/components/Weekend';
import { getIndexInfo } from '@/modles/index.js';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexRecommend,
    IndexWeekend
  },
  data () {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.getIndexInfo();
    this.lastCity = this.city;
  },
  activated () {
    if(this.lastCity === this.city) {
      return;
    }
    this.getIndexInfo();
    this.lastCity = this.city;
  },
  methods: {
    async getIndexInfo () {
      const indexData = await getIndexInfo();
      if(indexData.ret && indexData.data) {
        const res = indexData.data;
        this.iconList = res.iconList;
        this.recommendList = res.recommendList;
        this.swiperList = res.swiperList;
        this.weekendList = res.weekendList;
      }
    }
  }
}
</script>


