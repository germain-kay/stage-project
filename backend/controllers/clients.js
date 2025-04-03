const clientRouter = require("express").Router();
const Client = require('../models/clients')

clientRouter.get('/', (req, res) => {
    Client.find({}).then((clients) => {
        res.json(clients);
    })

})

module.exports = clientRouter;