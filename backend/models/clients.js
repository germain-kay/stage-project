//Integration MongoDB avec Faker
const mongoose= require('mongoose');
const {faker} = require("@faker-js/faker");

mongoose.set('strictQuery', false)

// Connection URL
const url = process.env.MONGODB_URI
mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB - Models-Client')
    })
    .catch(error => {
        console.log('error connecting to MongoDB on Models-Client:', error.message)
    })

// Création du Schéma pour les clients
const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    job:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
    }
})

// Création du modèle pour les clients
const Client = mongoose.model('Client', clientSchema);

// Création de la collection de clients
let clients = [];
for (let i = 0; i < 50; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    let newClient = {
        id: faker.string.uuid(),
        firstName,
        lastName,
        email: faker.internet.email({firstName:firstName, lastName:lastName}),
        avatar: faker.image.avatar(),
        job:faker.person.jobType(),
        number:faker.phone.number({style: 'international'}),
    };
    clients.push(newClient);
    //Affichage de chaque email d'un client dans le log
    console.log(newClient.email);
}
Client.insertMany(clients);

module.exports = Client;
