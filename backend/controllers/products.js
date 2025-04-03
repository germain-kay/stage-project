const productRouter = require("express").Router();
const Product = require('../models/products.js')


productRouter.get('/', (req, res) => {
    Product.find({}).then((products) => {
            res.json(products);
        })
})

productRouter.get('/:_id', (req, res, next) => {
  Product.findById(req.params._id)
      .then(product => {
          if (product) {
                res.json(product);
          } else  {
                res.status(404).end()
          }
      })
        .catch(error => next(error));
})

productRouter.post('/', (req, res, next) => {
    const body = req.body;

    const product = new Product({
        name: body.name,
        description: body.description,
        price: body.price,
        quantity: body.quantity,
        image: body.image,
        category: body.category,
    })

    product.save()
        .then(savedProduct => {
            res.status(201).json(savedProduct);
        })
        .catch(error => next(error))
})

productRouter.delete('/:_id', (req, res, next) => {
    Product.findByIdAndDelete(req.params._id)
        .then(() => {
            res.status(204).end();
        })
        .catch(error => next(error))
})

productRouter.put('/:_id', (req, res, next) => {
    const { name, description, price, quantity, image, category } = req.body

    Product.findById(req.params._id)
        .then(product => {
            if (!product) {
                return res.status(404).end;
            }

        product.name = name
        product.description = description
        product.price = price
        product.quantity = quantity
        product.image = image
        product.category = category

        return product.save().then(updatedProduct => {
            res.json(updatedProduct)
        })
    })
        .catch(error => next(error))

})

module.exports = productRouter;

// const getProducts = ((req, res) => {
//     Product.find({})
//         .then(result => res.status(200).json({ result }))
//         .catch(error => res.status(500).json({msg: error}))
// })
//
// const getProduct = ((req, res) => {
//     Product.findOne({ _id: req.params.productID })
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
//     Product.findOneAndUpdate({ _id: req.params.productID }, req.body, { new: true, runValidators: true })
//         .then(result => res.status(200).json({ result }))
//         .catch((error) => res.status(404).json({msg: 'Product not found' }))
// })
//
// const deleteProduct = ((req, res) => {
//     Product.findOneAndDelete({ _id: req.params.productID })
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


