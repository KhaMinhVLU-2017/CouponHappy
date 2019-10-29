const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Product = new Schema({
    ObjectId: ObjectId,
    Title: String,
    Value: String,
    Resource: String,
    Category: String,
    ExpireDate: Date,
    BeginDate: Date
})

module.exports = mongoose.model('Products',Product)