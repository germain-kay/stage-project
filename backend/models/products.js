//Integration MongoDB avec Faker
const mongoose= require('mongoose')
const { faker } = require('@faker-js/faker')

mongoose.set('strictQuery', false)

// Connection URL
const url = process.env.MONGODB_URI
mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB - Models-Product')
  })
  .catch(error => {
    console.log('error connecting to MongoDB - Models-Product:', error.message)
  })

// Création du Schéma pour les produits
const productSchema = new mongoose.Schema({
  // _id: {
  //     type: String,
  //     default: () => new mongoose.Types.ObjectId(),
  // },
  image: {
    type: String,
    required: true,
  },
  productName:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  rating:{
    type: Number,
    required: true,
  }
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Création du modèle pour les produits
const Product = mongoose.model('Product', productSchema)

// Création de la collection de produits
let products = []
for (let i = 0; i < 50; i++) {
  let newProduct = {
    image: faker.image.url({ width: 1024, height :1024 }),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    rating: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
  }
  products.push(newProduct)
  //Affichage de chaque client dans le log
  console.log(newProduct.productName)
}
Product.insertMany(products)



module.exports = Product



