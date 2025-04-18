import axios from 'axios';

const baseUrl = 'http://localhost:3002/api/products';

export const getProducts = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
};

export const getProductById = async (id) => {
    const res = await axios.get(`${baseUrl}/${id}`);
    return res.data;
};

export const createProducts = async (product) => {
    const res = await axios.post(baseUrl, product);
    return res.data;
};

export const updateProduct = async (id, updatedProduct) => {
    const res = await axios.put(`${baseUrl}/${id}`, updatedProduct);
    return res.data;
};

export const deleteProduct = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
};