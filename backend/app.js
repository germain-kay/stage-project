// Load environment variables
//import "./loadEnvironment.mjs";

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.post('/api/auth', async ({ request }) => {
    const { email, password } = await request.json();

    // Simple authentication logic
    if (email === 'admin@example.com' && password === 'password') {
        return HttpResponse.json({
            token: 'fake-jwt-token',
            user: {
                id: '1',
                email: 'admin@example.com',
                firstName: 'Admin',
                lastName: 'User',
            },
        });
    } else {
        return new HttpResponse('Invalid username or password', { status: 400 })
    }
}),

// Intercept "GET /api/clients" requests
app.get('/api/clients', () => {
    return HttpResponse.json(Array.from(CLIENTS_LIST.values()))
}),
// Intercept "GET /api/products" requests
app.get('/api/products', () => {
    return HttpResponse.json(Array.from(PRODUCTS_LIST.values()))
})

 */