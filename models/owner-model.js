const mongoose = require('mongoose');


const ownerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    Password : String,

  
    products: {
        type: Array,
        default: []
    },
   
    picture : String
})

const ownerModel = mongoose.model("owner", ownerSchema);

module.exports = ownerModel;