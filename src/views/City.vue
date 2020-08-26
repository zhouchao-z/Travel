<template>
  <div class="city">
    <city-header />
    <city-search />
    <city-list />
  </div>
</template>

<script>
import CityHeader from '@/components/CityHeader';
import CitySearch from '@/components/CitySearch';
import CityList from '@/components/CityList';
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style lang="scss" scoped>

</style>