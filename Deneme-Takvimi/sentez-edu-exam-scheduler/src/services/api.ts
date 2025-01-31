import axios from 'axios';

const API_BASE_URL = 'https://api.sentezedu.net'; // Replace with your actual API base URL

export const fetchExamSchedule = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/exams`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching exam schedule');
    }
};

export const addExam = async (examData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/exams`, examData);
        return response.data;
    } catch (error) {
        throw new Error('Error adding exam');
    }
};

export const authenticateAdmin = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error('Error authenticating admin');
    }
};