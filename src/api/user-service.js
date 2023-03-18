import axios from "axios";
import { settings } from "../helpers/settings";

const API_URL = settings.apiURL;

// USER ENDPOINTS

export const register = (user) => {
  return axios.post(`${API_URL}/users`, user);
};

export const login = (credential) => {
  return axios.post(`${API_URL}/login`, credential);
};

export const updateUserById = (id, values) => {
  return axios.put(
    `https://640781398ee73db92e2b1261.mockapi.io/user/${id}`,
    values
  );
};

// ADMIN ENDPOINT

export const getUsers = () => {
  return axios.get(`https://640781398ee73db92e2b1261.mockapi.io/user`);
};

export const deleteUser = (id) => {
  return axios.delete(`https://640781398ee73db92e2b1261.mockapi.io/user/${id}`);
};
