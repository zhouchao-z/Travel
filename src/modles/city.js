import { axiosGet } from '@/utils/http.js';

function getCityInfo () {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: '/api/mock/city.json',
      success (res) {
        resolve(res.data);
      },
      error (err) {
        reject(err);
      }
    })
  })
}
export {
  getCityInfo
}