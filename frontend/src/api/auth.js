import axios from 'axios';

const authUser = async (email, password) => {
    try {
        const response = await axios.post('/api/auth', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('Error response:', error.response.data);
            throw new Error(error.response.data.message || 'Authentication failed');
        } else if (error.request) {
            // Request was made but no response received
            console.error('Error request:', error.request);
            throw new Error('No response from server');
        } else {
            // Something else happened while setting up the request
            console.error('Error message:', error.message);
            throw new Error('Error in setting up request');
        }
    }
};

export default authUser;