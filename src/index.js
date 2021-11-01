const express = require('express');

const dotenv = require('dotenv');

const app= express();

const port = process.env.PORT || 8080;

require('../db/conn');

dotenv.config({path:'../config.env'});

app.use(express.json());

app.use(require('../routers/auth'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
})

