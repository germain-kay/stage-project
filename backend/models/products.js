//Integration MongoDB avec Faker
const mongoose= require('mongoose');

 // DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const password = process.argv[2];
const url = `mongodb+srv://fullstackgerm:${password}@cluster0.vhymoxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Connection URL
const client = new MongoClient(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

const productsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    productName:{
        type: String,
        required: true,
    }




})




