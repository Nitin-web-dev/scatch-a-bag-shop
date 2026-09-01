const mongoose = require('mongoose');


const ownerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    Password : String,

  
    products: {
        type: array,
        default: []
    },
   
    picture : String
})

const ownerModel = mongoose.model("owner", ownerSchema);

module.exports = ownerModel;