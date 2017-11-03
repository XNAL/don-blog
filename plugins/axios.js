import * as axios from 'axios';
export default () => {
  // The server-side needs a full url to works
  axios.defaults.baseURL = 'http://localhost:9000/blogapi';
  axios.defaults.timeout = 5000;
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8';
  // interceptors request
  axios.interceptors.request.use(
    config => {
      console.log('axios', config);
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    response => {
      return response;
    },
    err => {
      return Promise.reject(err);
    }
  );
};
