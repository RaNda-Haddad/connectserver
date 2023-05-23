//Require express
const express = require("express");

//Create instance from express
const app = express();



//Require dotenv
require('dotenv').config();



// MiddleWare bodyParser
app.use(express.json());

//Require function Connect
const connect = require('./config/connectDB') 
connect () ;





//Create PORT
const PORT = process.env.PORT;


//Listen to the port
app.listen(PORT, (err)=>{
    err? console.log(err) :
     console.log(`Server is running on PORT : ${PORT}`)
})

//import router express
app.use ('/api/contact',require('./routes/contactRoute'))








