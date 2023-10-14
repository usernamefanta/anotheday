const Product = require('../models/productModel');

const products = [
    new Product({ name: 'Product A', price: 19.99 }),
    new Product({ name: 'Product B', price: 29.99 }),
    new Product({ name: 'Product C', price: 39.99 }),
];

module.exports = {
    getAllProducts: (req, res) => {
        res.json(products);
    },
};
