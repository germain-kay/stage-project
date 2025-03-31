// Load environment variables
//import "./loadEnvironment.mjs";
/*
* import { CLIENTS_LIST } from '../../utils/samples';
import { PRODUCTS_LIST } from '../../utils/samples';*/

//Importer CLIENTS_LIST
const { CLIENTS_LIST } = require('../frontend/src/utils/samples');
const { PRODUCTS_LIST } = require('../frontend/src/utils/samples');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

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
app.get('/api/clients', (req, res) => {
    return res.json(Array.from(CLIENTS_LIST.values()))
});

// Intercept "GET /api/products" requests
app.get('/api/products', (req, res) => {
    return res.json(Array.from(PRODUCTS_LIST.values()))
});

