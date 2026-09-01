const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    Password : String,
    cart : {
        type: array,
        default: []
    },
    isadmin: Boolean,
    orders: {
        type: array,
        default: []
    },
    contact : Number,
    picture : String
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;