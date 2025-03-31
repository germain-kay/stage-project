// Load environment variables
//import "./loadEnvironment.mjs";
/*
* import { CLIENTS_LIST } from '../../utils/samples';
import { PRODUCTS_LIST } from '../../utils/samples';*/

//Importer CLIENTS_LIST
require('dotenv').config();
const Client = require('./models/clients');
const Product = require('./models/products');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

app.use(express.json());
app.use(cors());


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

app.post('/api/auth', (req, res) => {
    const { email, password } = req.json();

    // Simple authentication logic
    if (email === 'admin@example.com' && password === 'password') {
        return res.json({
            token: 'fake-jwt-token',
            user: {
                id: '1',
                email: 'admin@example.com',
                firstName: 'Admin',
                lastName: 'User',
            },
        });
    } else {
        res.status(400).json('Invalid username or password');

    }
});

// Intercept "GET /api/clients" requests
app.get('/api/clients', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des clients' });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
    }
});
