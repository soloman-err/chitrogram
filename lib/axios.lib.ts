import axios from 'axios';
import Cookies from 'js-cookie';

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

const getBearerToken = () => {
  if (typeof window !== 'undefined') {
    return Cookies.get('__token__');
  } else {
    return;
  }
};

axiosSecure.interceptors.request.use(
  (config) => {
    const token = getBearerToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 400) {
        console.error('Bad Request:', error.response.data);
      }
      if (error.response.status === 401) {
        console.error('Unauthorized:', error.response.data);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosSecure;
