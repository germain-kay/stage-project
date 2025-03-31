const {faker} = require("@faker-js/faker");
const clientscollection = client.db("Clients").collection("fakeClients");

// Création de db users
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
    //Affichage de chaque client dans le log
    console.log(newClient.email);
}
clientscollection.insertMany(clients);