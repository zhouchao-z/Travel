<template>
  <div class="home">
    <index-header />
    <index-swiper />
  </div>
</template>

<script>
import IndexHeader from '@/components/Header';
import IndexSwiper from '@/components/Swiper';
export default {
  name: 'Home',
  components: {
    IndexHeader,
    IndexSwiper
  }
}
</script>
