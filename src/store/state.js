let defaultCity = '北京';
try {
  if(localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  console.log(e + '本地存储有些许问题');
}

export default {
  city: defaultCity
}