import {faker} from "@faker-js/faker/locale/en_US";

 const createFakeClients =() =>({
     id: faker.string.uuid(),
     prenom: faker.person.firstName(),
     nom: faker.person.lastName(),
     email: faker.internet.email(),
     avatar: faker.image.avatar(),
     metier:faker.person.jobType(),
     number:faker.phone.number({style: 'international'}),

});

export const CLIENTS_LIST = Array.from({length:10}).map(createFakeClients);


export const PRODUITS_LIST = [
    {
        "id": "2754432345678",
        "nom": "Pack Certification MUT",
        "description": "Programme de certification pour les prestataires afin de garantir leur fiabilité et leur compétence.",
        "categorie": "Service",
        "prix": 250,
        "disponibilite": "Disponible",
        "notation": 5
    },
    {
        "id": "2756744564564",
        "nom": "Formation AMOA",
        "description": "Formation complète en Assistance à Maîtrise d'Ouvrage pour les chefs de projet et consultants.",
        "categorie": "Formation",
        "prix": 500,
        "disponibilite": "Disponible",
        "notation": 5
    },
    {
        "id": "27566534564564",
        "nom": "Audit Qualité Projet",
        "description": "Service d'audit pour évaluer la qualité des projets en cours ou terminés.",
        "categorie": "Service",
        "prix": 700,
        "disponibilite": "En cours de préparation",
        "notation": 4
    },
    {
        "id": "2756744567889",
        "nom": "Accès Premium MUT",
        "description": "Abonnement premium offrant des fonctionnalités avancées sur la plateforme MUT.",
        "categorie": "Abonnement",
        "prix": 100,
        "disponibilite": "Disponible",
        "notation": 3
    },
    {
        "id": "2756889054564",
        "nom": "Service de Pilotage Projet",
        "description": "Prestation clé en main pour le cadrage et le pilotage des projets complexes.",
        "categorie": "Service",
        "prix": 1200,
        "disponibilite": "Disponible",
        "notation": 2
    },
    {
        "id": "7655434564564",
        "nom": "Pack Networking Business",
        "description": "Accès au réseau d'affaires pour faciliter les mises en relation avec des partenaires qualifiés.",
        "categorie": "Service",
        "prix": 300,
        "disponibilite": "Indisponible",
        "notation": 5
    }
];
