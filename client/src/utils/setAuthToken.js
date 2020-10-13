//import api from './api';
import axios from 'axios';
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-api-key'] = token;
    //localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['x-api-key'];
    //localStorage.removeItem('token');
  }
};

export default setAuthToken;