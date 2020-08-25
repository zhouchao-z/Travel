<template>
  <div class="home">
    <index-header />
    <index-swiper />
    <index-icons />
    <index-recommend />
    <index-weekend />
  </div>
</template>

<script>
import IndexHeader from '@/components/Header';
import IndexSwiper from '@/components/Swiper';
import IndexIcons from '@/components/Icons';
import IndexRecommend from '@/components/Recommend';
import IndexWeekend from '@/components/Weekend';
export default {
  name: 'Home',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexRecommend,
    IndexWeekend
  }
}
</script>
