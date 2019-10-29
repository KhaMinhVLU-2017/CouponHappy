const express = require('express')
const product = require('../../Model/product')

const getProducts = (req,res) => {
    // Todo write method
    product.find((err,data) => {
        res.json(data)
    })
}

const getByProductId = (req,res) => {
    // Todo write method
}

const createProduct = (req,res) => {
    // Todo write method
    product.create({
        Titile:'Dell XPS 9570',
        Value: '3500',
        Resource: 'FPT Shop',
        Category: 'Laptop',
        ExpireDate: '2020-2-2',
        BeginDate: '2019-10-10'
    }, error => {
        if(error) {
            console.log(error)
        }
        res.json('Save complete')
    })
}

const updateUser = (req,res) => {
    // Todo write method
}

const deleteProduct = (req,res) => {
    // Todo write method
}

module.exports = {getProducts, getByProductId, createProduct, updateUser, deleteProduct}