import axios from "axios";
import { isServer } from "@/lib/utils";
import { getToken, isAuthenticated, removeTokens } from "@/lib/auth";

const baseURL = isServer()
  ? process.env.PRIVATE_API_URL
  : process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = getToken("access");
  if (isAuthenticated() && token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}),
  (error) => {
    return Promise.reject(error);
  };

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      removeTokens();
      if (!isServer()) {
        window.location.reload();
      }
    }
    return Promise.reject(error);
  }
);

export default api;

export const login = async (email, password) => {
  const response = await api.post("/auth/login/", { email, password });
  return response;
};

export const logout = async () => {
  removeTokens();
  return await api.post("/auth/logout/");
};

export const resetPassword = async (email) => {
  const response = await api.post("/auth/password/reset/", { email });
  return response;
};

export const confirmResetPassword = async (
  uid,
  token,
  new_password1,
  new_password2
) => {
  const response = await api.post("/auth/password/reset/confirm/", {
    uid,
    token,
    new_password1,
    new_password2,
  });
  return response;
};