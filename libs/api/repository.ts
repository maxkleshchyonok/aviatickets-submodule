import axios from "axios";
import { LocalStorageKeys } from "enums/local-storage-keys.enum";

const { REACT_APP_API_URL } = process.env;

const repository = axios.create({
  baseURL: REACT_APP_API_URL,
  //withCredentials: true,
});

repository.interceptors.request.use((config) => {
  const access_token = localStorage.getItem(LocalStorageKeys.AccessToken);
  const reset_token = localStorage.getItem("reset_token");
  console.log(access_token);
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  if (reset_token) {
    config.headers.Authorization = `Bearer ${reset_token}`;
  }
  console.log(config.headers);

  return config;
});

repository.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh = localStorage.getItem("refresh_token");
      try {
        const token = await axios.post(`${REACT_APP_API_URL}/auth/refresh`, {
          refresh,
        });

        if (!token) {
          localStorage.removeItem("refresh_token");
          return;
        }

        sessionStorage.setItem("access_token", token.data.accessToken);

        return repository(originalRequest);
      } catch (error) {
        sessionStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        return Promise.reject(error);
      }
    }

    throw error;
  }
);

export default repository;
