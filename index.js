const express = require("express");
const app =  express();
const env = require("./config/environment")
const port = env.port;
const path = require('path');
const db = require('./config/database');
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//middleware 
// app.use(express.urlencoded());
app.use(cookieParser());
const passport = require("passport");
const passportStrategy = require("./config/passport");

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use('/' , require('./routes'));

app.listen(port , (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server Up and Running on port ${port}`);
    }
})


