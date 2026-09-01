const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');



const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");



app.get('/', function(req,res){
    res.status(200).send({
        message: "ok"
    })
})



startServer();
function startServer(){
    try {
        app.listen(3000, function(){
            console.log('server is on');
        })
        
    } catch (error) {
            console.error("something went wrong: ", error.message);
            process.exit(1);
    }
}