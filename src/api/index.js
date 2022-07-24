import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';



Axios.interceptors.request.use(
  (config) => {
    const isExternal = !!config?.url?.startsWith('http');
    const token =localStorage.getItem("user")
    console.log(token )
    const authHeaders =
      token && !isExternal ? { Authorization: `${token}` } : {};
    return {
      baseURL: "http://localhost:4000",
      ...config,
      headers: {
        ...authHeaders,
        ...config.headers,
      },
    };
  },
  (error) => Promise.reject(error)
);

// Axios.interceptors.response.use((response) => {
//   if (response.headers['x-total-count']) {
//     return {
//       content: response.data,
//       totalItems: response?.headers['x-total-count'],
//     };
//   }
//   return response.data;
// });