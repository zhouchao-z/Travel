<template>
  <div class="detail">
    <detail-banner />
    <detail-header />
    <detail-list />
  </div>
</template>

<script>
import DetailBanner from '@/components/DetailBanner';
import DetailHeader from '@/components/DetailHeader';
import DetailList from '@/components/DetailList';
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>
