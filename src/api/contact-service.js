import axios from "axios";
const API_URL = "https://640781398ee73db92e2b1261.mockapi.io";

// USER ENDPOINTS
export const sendMessage = (message) => {
  return axios.post(`${API_URL}/messages`, message);
};

// ADMIN ENDPOINT

export const getMessage = (id) => {
  return axios.get(`${API_URL}/messages/${id}`);
};

export const getMessages = () => {
    return axios.get(`${API_URL}/messages`);
  };

export const deleteMessage = (id) => {
  return axios.delete(`${API_URL}/messages/${id}`);
};
