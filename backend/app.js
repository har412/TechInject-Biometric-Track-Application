const express=require('express')
const app=express();
// DB Connection
const db = require("./dbconnect")
db();
// Routes
const router = require('./Routes/index')
app.use('/test',router);

//cors  

const cors = require('cors')

app.use(cors({
    options:"*"
}))



app.listen(3004,()=>{
    console.log("app listening at 3004")
})