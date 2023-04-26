import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies();
// const source = axios.CancelToken.source();

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  "Content-type": "application/json",
  // cancelToken: source.token
});

// Request interceptors for API calls
axiosInstance.interceptors.request.use(
  (request) => {
    if (cookie.get("token")) {
      request.headers.Authorization = `Bearer ${cookie.get("token")}`;
      // config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return request;
  },
  (error) => {
    if (error.response.status === 401) {
      cookie.remove("token");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      cookie.remove("token");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);
