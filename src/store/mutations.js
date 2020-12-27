export default {
  changeCity (state, city) {
    console.log(this);
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) {
      console.log(e + '本地存储有些许问题');
    }
  }
}