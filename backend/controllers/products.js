const productRouter = require('express').Router()
const Product = require('../models/products.js')


productRouter.get('/', (req, res) => {
  Product.find({}).then((products) => {
    res.json(products)
  })
})

productRouter.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      if (product) {
        res.json(product)
      } else  {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

productRouter.post('/', (req, res, next) => {
  const body = req.body

  const product = new Product({
    image: body.image,
    productName: body.productName,
    price: body.price,
    rating: body.rating,

  })

  product.save()
    .then(savedProduct => {
      res.status(201).json(savedProduct)
    })
    .catch(error => next(error))
})

productRouter.delete('/:id', (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

productRouter.put('/:id', (req, res, next) => {
  const { productName, price, rating, image } = req.body

  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).end
      }
      product.productName = productName
      product.price = price
      product.rating = rating
      product.image = image

      return product.save().then(updatedProduct => {
        res.json(updatedProduct)
      })
    })
    .catch(error => next(error))

})

module.exports = productRouter

// const getProducts = ((req, res) => {
//     Product.find({})
//         .then(result => res.status(200).json({ result }))
//         .catch(error => res.status(500).json({msg: error}))
// })
//
// const getProduct = ((req, res) => {
//     Product.findOne({ id: req.params.productID })
//         .then(result => res.status(200).json({ result }))
//         .catch(() => res.status(404).json({msg: 'Product not found'}))
// })
//
// const createProduct = ((req, res) => {
//     Product.create(req.body)
//         .then(result => res.status(200).json({ result }))
//         .catch((error) => res.status(500).json({msg:  error }))
// })
//
// const updateProduct = ((req, res) => {
//     Product.findOneAndUpdate({ id: req.params.productID }, req.body, { new: true, runValidators: true })
//         .then(result => res.status(200).json({ result }))
//         .catch((error) => res.status(404).json({msg: 'Product not found' }))
// })
//
// const deleteProduct = ((req, res) => {
//     Product.findOneAndDelete({ id: req.params.productID })
//         .then(result => res.status(200).json({ result }))
//         .catch((error) => res.status(404).json({msg: 'Product not found' }))
// })
//
// module.exports = {
//     getProducts,
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct
// }


