const express = require('express')
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const productRouter = require('./controllers/products')
const clientRouter = require('./controllers/clients')
const authRouter = require('./controllers/auth')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

const app = express()

logger.info('Connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB', error.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

// Intercepte le router Auth
app.use('/api/auth', authRouter)
// Intercepte le router Client
app.use('/api/clients', clientRouter)
// Intercepte le router Produits
app.use('/api/products', productRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app