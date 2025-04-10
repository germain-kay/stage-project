// import axios from 'axios';
//
// const getClients = async () => {
//     try {
//         const response = await axios.get('http://localhost:3001/api/clients');
//         return response.data;
//     } catch (error) {
//         if (error.response) {
//             // Server responded with a status other than 200 range
//             console.error('Error response:', error.response.data);
//             throw new Error(error.response.data.message || 'Failed to fetch clients');
//         } else if (error.request) {
//             // Request was made but no response received
//             console.error('Error request:', error.request);
//             throw new Error('No response from server');
//         } else {
//             // Something else happened while setting up the request
//             console.error('Error message:', error.message);
//             throw new Error('Error in setting up request');
//         }
//     }
// };
//
// export default getClients;

import axios from 'axios';

const baseUrl = 'http://localhost:3002/api/clients';

export const getClients = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export const getClientById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

export const createClient = async (client) => {
    const response = await axios.post(baseUrl, client);
    return response.data;
};

export const updateClient = async (id, updatedClient) => {
    const response = await axios.put(`${baseUrl}/${id}`, updatedClient);
    return response.data;
};

export const deleteClient = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
};