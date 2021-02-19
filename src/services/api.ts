import axios from 'axios';
// import Config from 'react-native-config';

// const baseURLEnviroment = __DEV__
//   ? Config.DEVELOPMENT_API_URL
//   : Config.PRODUCTION_API_URL;

const api = axios.create({
  baseURL: 'https://602fbcb7a1e9d20017af0f4a.mockapi.io',
  //   baseURL: baseURLEnviroment,
});

export default api;
