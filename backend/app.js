const express=require('express')
const app=express();
// DB Connection
const db = require("./dbconnect")
db();
// Routes
const router = require('./Routes/index')
app.use('/test',router);

app.listen(8000,()=>{
    console.log("app listening at 8000")
})