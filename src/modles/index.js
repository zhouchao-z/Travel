import { axiosGet } from '@/utils/http.js';

function getIndexInfo () {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: '/api/mock/index.json',
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
  getIndexInfo
}