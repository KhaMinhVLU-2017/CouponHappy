const express = require('express')
const route = express.Router()
const productService = require('../../Services/Products/product')

route.get('/', productService.getProducts);

route.get('/:id', productService.getByProductId);

route.post('/', productService.createProduct);

route.put('/:id', productService.updateUser);

route.delete('/:id', productService.deleteProduct);

module.exports = route
