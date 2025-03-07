import { http, HttpResponse } from 'msw'
import { CLIENTS_LIST } from '../../utils/samples';
import { PRODUCTS_LIST } from '../../utils/samples';


export const handlers = [

    //Intercept "POST /api/auth.js" requests for user authentication message: 'Invalid username or password',
    http.post('/api/auth', async ({ request }) => {
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
    http.get('/api/clients', () => {
        return HttpResponse.json(Array.from(CLIENTS_LIST.values()))
    }),
    // Intercept "GET /api/products" requests
    http.get('/api/products', () => {
        return HttpResponse.json(Array.from(PRODUCTS_LIST.values()))
    }),


];