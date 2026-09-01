const mongoose = require('mongoose');


async function connectDB(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/scatchBagDB");
        console.log("db is connected");
    } catch (error) {
        console.error("something went wrong db: ", error.message);
        throw error;
    }
}

module.exports = connectDB; 