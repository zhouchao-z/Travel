<template>
  <ul class="aplhabet">
    <li 
      v-for="(item, key) of cities" 
      :key="key"
      @click="handleLetterClick"
    >
    {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Aplhabet',
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) {
      const letter = e.target.innerText;
      this.$emit('changeLetter', letter);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/varibel.scss';
  .aplhabet {
    position: absolute;
    top: 1rem;
    bottom: 0;
    right: 0;
    width: .35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      line-height: .44rem;
      text-align: center;
      color: $bgColor;
    }
  }
</style>