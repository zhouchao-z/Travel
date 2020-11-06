<template>
  <div class="detail">
    <detail-banner 
      :bannerImg="bannerImg"
      :sightName="sightName"
    />
    <detail-header />
    <detail-list 
      :categoryList="categoryList"
    />
    <div class="height"></div>
  </div>
</template>

<script>
import DetailBanner from '@/components/DetailBanner';
import DetailHeader from '@/components/DetailHeader';
import DetailList from '@/components/DetailList';
import { getDetailData } from '@/modles/detail';
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.getDetailData()
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    async getDetailData () {
      let data = await getDetailData(),
        res = data.data;
      if(res.ret && res.data) {
        res = res.data;
        this.sightName = res.sightName;
        this.bannerImg = res.bannerImg;
        this.gallaryImgs = res.gallaryImgs;
        this.categoryList = res.categoryList;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .height {
    height: 30rem;
  }
</style>
