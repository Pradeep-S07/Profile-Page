import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/profile';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getProfile = () => api.get('/');
export const updateProfile = (data) => api.put('/', data);
export const addSkill = (skill) => api.post('/skill', skill);
export const endorseSkill = (skillName) => api.post('/endorse', { skillName });
export const addExperience = (data) => api.post('/experience', data);
export const updateExperience = (id, data) => api.put(`/experience/${id}`, data);
export const deleteExperience = (id) => api.delete(`/experience/${id}`);

export const addEducation = (data) => api.post('/education', data);
export const updateEducation = (id, data) => api.put(`/education/${id}`, data);
export const deleteEducation = (id) => api.delete(`/education/${id}`);

export const addCertification = (data) => api.post('/certification', data);
export const updateCertification = (id, data) => api.put(`/certification/${id}`, data);
export const deleteCertification = (id) => api.delete(`/certification/${id}`);
export const addSocial = (data) => api.post('/social', data);
export const updateSocial = (data) => api.put('/social', data);
export const deleteSocial = (platform) => api.delete(`/social/${platform}`);
export const updateCareerVision = (data) => api.put('/career-vision', data);

export const addProject = (data) => api.post('/project', data);
export const updateProject = (id, data) => api.put(`/project/${id}`, data);
export const deleteProject = (id) => api.delete(`/project/${id}`);
export const trackResumeDownload = () => api.post('/resume-download');

export default api;
