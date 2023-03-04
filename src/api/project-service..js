import axios from "axios";
//import authHeader from "../helpers/functions/auth-header";
import { settings } from "../helpers/settings";

const API_URL = settings.apiURL; //api adresimizi setting dosyamizdan aldik

// USER ENDPOINTS
export const createProject = (project) => {
  return axios.post(`${API_URL}/Projects`, project);
};

export const getProject = (id) => {
  return axios.get(`${API_URL}/Projects/${id}`);
};

export const getAllProjects = () => {
  return axios.get(`${API_URL}/Projects`);
};

export const deleteProject = (id) => {
  return axios.delete(`${API_URL}/Projects/${id}`);
};

//bundan sonra yazacagimiz backend baglantilarinda axios ile alakali her sey burada olacak, sayfalarda axios kullanmayacagiz, bu fonksiyonu cagiracagiz.
//asenkron yapilarimiz ve await imiz fonksiyonlari nerede cagiriyorsak orada olacak.

// ADMIN ENDPOINT
export const getMessagesByPage = (
  page = 0,
  size = 20,
  sort = "id",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/contactmessage/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`
  );
};

export const getMessage = (id) => {
  return axios.get(`${API_URL}/contactmessage/${id}`);
};
