import axios from 'axios';
// import Config from 'react-native-config';

// const baseURLEnviroment = __DEV__
//   ? Config.DEVELOPMENT_API_URL
//   : Config.PRODUCTION_API_URL;

const api = axios.create({
  baseURL: 'http://localhost:3333',
  //   baseURL: baseURLEnviroment,
});

export default api;
