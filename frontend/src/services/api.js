import axios from 'axios';

const API_URL = 'http://localhost:5000/api/profile';

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
export const addEducation = (data) => api.post('/education', data);
export const addCertification = (data) => api.post('/certification', data);

export default api;
