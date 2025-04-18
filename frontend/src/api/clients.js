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