const clientRouter = require("express").Router();
const Client = require('../models/clients')

clientRouter.get('/', (req, res) => {
    Client.find({}).then((clients) => {
        res.json(clients);
    })

})

clientRouter.get('/:id', (req, res, next) => {
    Client.findById(req.params.id)
        .then(client => {
            if (client) {
                res.json(client);
            } else  {
                res.status(404).end()
            }
        })
        .catch(error => next(error));
})

clientRouter.post('/', (req, res, next) => {
    const body = req.body;

    const client = new Client({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        avatar: body.avatar,
        job: body.job,
        number: body.number,
    })

    client.save()
        .then(savedclient => {
            res.status(201).json(savedclient);
        })
        .catch(error => next(error))
})

clientRouter.delete('/:id', (req, res, next) => {
    Client.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).end();
        })
        .catch(error => next(error))
})

clientRouter.put('/:id', (req, res, next) => {
    const {firstName, lastName, email, job, number} = req.body;

    Client.findById(req.params.id)
        .then(client => {
            if (!client) {
                return res.status(404).end;
            }

            client.firstName = firstName;
            client.lastName = lastName;
            client.email = email;
            client.job = job;
            client.number = number;

            return client.save().then(updatedclient => {
                res.json(updatedclient)
            })
        })
        .catch(error => next(error))

})

module.exports = clientRouter;