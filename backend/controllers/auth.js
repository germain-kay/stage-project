const authRouter = require("express").Router();

authRouter.post('/', (req, res) => {
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
})

module.exports = authRouter;