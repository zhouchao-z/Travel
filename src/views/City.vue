<template>
  <div class="city">
    <city-header />
    <city-search />
  </div>
</template>

<script>
import CityHeader from '@/components/CityHeader';
import CitySearch from '@/components/CitySearch';
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="scss" scoped>


</style>