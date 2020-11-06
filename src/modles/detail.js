import { axiosGet } from '@/utils/http';

function getDetailData () {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: "/api/mock/detail.json",
      success (res) {
        resolve(res);
      },
      error (err) {
        reject(err);
      }
    })
  })
}

export { getDetailData }