const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/config.js');
const ownerRouter = require('./routes/ownerRouter.js')
const usersRouter = require('./routes/usersRouter.js')
const productsRouter = require('./routes/productsRouter.js')

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

startServer();



// writing routes for seperate concern 
app.use("/users", usersRouter);
app.use("/owner", ownerRouter);
app.use("/products", productsRouter);


async function startServer(){
    try {
        await connectDB();
        app.listen(3000, function(){
            console.log('server is on');
        })
        
    } catch (error) {
            console.error("something went wrong: ", error.message);
            process.exit(1);
    }
}