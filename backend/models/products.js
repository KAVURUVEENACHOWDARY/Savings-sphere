const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description:{
        type: String,
        required: true,
    },
    quantityAvailable:{
        type: Number,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Product', productSchema);