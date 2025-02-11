import {faker} from "@faker-js/faker/locale/en_US";
import i18n from '../i18n';

const createFakeClients =() =>({
     id: faker.string.uuid(),
     firstName: faker.person.firstName(),
     lastName: faker.person.lastName(),
     email: faker.internet.email(),
     avatar: faker.image.avatar(),
     job:faker.person.jobType(),
     number:faker.phone.number({style: 'international'}),

});

const createFakeProduits =() =>({
    id: faker.string.uuid(),
    image: faker.image.url({width: 1024, height :1024}),
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    department: faker.commerce.department(),
    price: faker.commerce.price(),
    statut: faker.helpers.arrayElement([i18n.t('products.statutAvailable'), i18n.t('products.statutSoon'), i18n.t('products.statutUnavailable')]),
    notation: faker.helpers.rangeToNumber({min: 1, max: 5}),

});

export const CLIENTS_LIST = Array.from({length:10}).map(createFakeClients);

export const PRODUITS_LIST = Array.from({length:10}).map(createFakeProduits);
