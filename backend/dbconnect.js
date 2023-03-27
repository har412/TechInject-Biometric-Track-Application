const mongoose =require('mongoose')
const connection = ()=>{
    mongoose.connect("mongodb+srv://harkirat:12345678aA@coalmantra.n08tpmg.mongodb.net/coalmantra?retryWrites=true&w=majority").then(()=>{
        console.log("Mongo Connected")
    }).catch((err)=>{
    console.log(err)
    })
}


module.exports=connection;