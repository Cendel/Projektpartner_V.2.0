import axios from "axios";
import authHeader from "../helpers/functions/auth-header";
import { settings } from "../helpers/settings";

const API_URL = settings.apiURL;

// USER ENDPOINTS
export const sendMessage = (message) => {
  return axios.post(`${API_URL}/messages/create/`, message, {
    headers: authHeader(),
  });
};

// ADMIN ENDPOINTS

export const listMessages = () => {
  return axios.get(`${API_URL}/messages/`, {
    headers: authHeader(),
  });
};

export const getMessage = (id) => {
  return axios.get(`${API_URL}/messages/${id}/`, {
    headers: authHeader(),
  });
};

export const deleteMessage = (id) => {
  return axios.delete(`${API_URL}/messages/${id}/`, {
    headers: authHeader(),
  });
};
