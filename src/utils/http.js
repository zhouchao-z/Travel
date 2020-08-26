import axios from 'axios';

function axiosGet (options) {
  axios.get(options.url)
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