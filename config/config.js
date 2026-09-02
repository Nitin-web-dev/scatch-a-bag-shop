const mongoose = require('mongoose');
const config = require("config");

const dbgr = require('debug')("development: mongoose")

async function connectDB(){
    try {
        await mongoose.connect(`${config.get("MONGODB_URI")}/scatchBagDB`);
        dbgr("db is connected");
    } catch (error) {
        // console.error("something went wrong db: ", error.message);
        dbgr("something went wrong db: ", error.message);
        throw error;
    }
}

module.exports = connectDB; 