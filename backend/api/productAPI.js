const express = require('express');
const router = express.Router();

const ProductModel = require('../models/products');

const {prodUpload} = require("../multer");

const s3 = require("../s3");


router.post("/add-product/:id",prodUpload, async (req, res) => {
    try {
        const response = await s3.uploadFile(process.env.AWS_BUCKET_NAME,req.files.prodImage[0]) ; 
        const {name,price,description,category,supplier,stock} = req.body;
        const product = new ProductModel({
            name,
            price,
            description,
            category,
            supplier,
            stock,
            imageUrl:response.Location
        });
        await product.save();
        res.status(200).json({ message: "product added" });
    } catch (err) {
        console.log(err);
        res.json({ message: "error" });
    }
})

module.exports = router;