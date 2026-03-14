const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// GET /api/products (Protected route as per requirements: "If user has not signed in they cannot access the /products page")
router.get('/', auth, async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// POST /api/products (Admin panel route to add products)
router.post('/', async (req, res) => {
    try {
        const { title, description, price, image } = req.body;
        const newProduct = new Product({
            title,
            description,
            price,
            image
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
