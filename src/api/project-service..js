import axios from "axios";
//import authHeader from "../helpers/functions/auth-header";
import { settings } from "../helpers/settings";

const API_URL = settings.apiURL;

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

export const getProjectsByStatus = (status) => {
  return axios.get(`${API_URL}/Projects?projectStatus=${status}`);
};

export const updateProjectStatus = (id, value) => {
  return axios.put(`${API_URL}/Projects/${id}`, { projectStatus: value });
};

export const updateProject = (id, values) => {
  return axios.put(`${API_URL}/Projects/${id}`, values);
};

export const deleteProject = (id) => {
  return axios.delete(`${API_URL}/Projects/${id}`);
};

export const getProjectsByPage = (
  page = 0,
  size = 20,
  sort = "id",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/projects/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`
  );
};
