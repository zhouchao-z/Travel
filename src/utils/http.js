import axios from 'axios';

function axiosGet (options) {
  axios.get('/api/mock/index.json')
    .then((res) => {
      options.success(res);
    })
    .catch((err) => {
      options.error(err);
    })
}

export {
  axiosGet
}