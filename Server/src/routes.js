const express = require('express')
const route = express.Router()

const productsController = require('./Api/Controllers/product')

route.use('/producs',productsController)

module.exports = route