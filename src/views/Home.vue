<template>
  <div class="home">
    <index-header />
    <index-swiper />
    <index-icons />
  </div>
</template>

<script>
import IndexHeader from '@/components/Header';
import IndexSwiper from '@/components/Swiper';
import IndexIcons from '@/components/Icons';
export default {
  name: 'Home',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons
  }
}
</script>
