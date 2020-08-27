<template>
  <div class="city">
    <city-header />
    <city-search />
    <city-list 
      :city="city"
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"
    />
    <alphabet 
      :cities="cities" 
      @changeLetter="changeLetter"
    />
  </div>
</template>

<script>
import CityHeader from '@/components/CityHeader';
import CitySearch from '@/components/CitySearch';
import CityList from '@/components/CityList';
import Alphabet from '@/components/Alphabet';
import { getCityInfo } from '@/modles/city';
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  data () {
    return {
      cities: {},
      city: '',
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo();
  },
  methods: {
    async getCityInfo () {
      const res = await getCityInfo();
      if(res.ret && res.data) {
        this.cities = res.data.cities;
        this.city = res.data.city;
        this.hotCities = res.data.hotCities;
      }
    },
    changeLetter (letter) {
      this.letter = letter;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>