import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-c697a.firebaseio.com/'
});

export default instance;