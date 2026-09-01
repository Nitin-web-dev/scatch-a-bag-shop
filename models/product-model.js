const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    image: String,
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
    },
    price : Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor : String,
    panelcolor: String,
    textcolor: String
})

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;