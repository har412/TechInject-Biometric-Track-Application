const express=require('express')
const app=express();
// DB Connection
const db = require("./dbconnect")
db();
// Routes
const router = require('./Routes/index')
app.use('/test',router);
const port = 8080;
app.listen(port,()=>{
    console.log(`app listening at ${port}`)
})