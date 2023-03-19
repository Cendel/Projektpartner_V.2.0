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
export const getProjectsByAdminAdvice = (status) => {
  return axios.get(`${API_URL}/Projects?adminAdvice=${status}`);
};

export const updateProject = (id, values) => {
  return axios.put(`${API_URL}/Projects/${id}`, values);
};

// ADMIN ENDPOINTS

export const updateProjectStatus = (id, value) => {
  return axios.put(`${API_URL}/Projects/${id}`, { projectStatus: value });
};

export const updateAdminAdvice = (id, value) => {
  return axios.put(`${API_URL}/Projects/${id}`, { adminAdvice: value });
};

export const deleteProject = (id) => {
  return axios.delete(`${API_URL}/Projects/${id}`);
};

export const updateParticipantList = (id, values) => {
  return axios.post(`${API_URL}/Projects/${id}.participantList`, values);
};
