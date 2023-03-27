
const User = require('../Modals/User')


exports.getUser = (req,res) =>{
    User.find()
    .then((data)=>{
        console.log(data)
        res.json(data).send()
    }).catch((err)=>{
        console.log(err)
    })
  

}
exports.postUser = (req,res) =>{
    const data =new User({
        name:"Harkirat",
        id:3268768,
        phone:78689698
    })
    data.save()
    .then((result)=>{
        console.log(data)
        res.send("Data Sent")
    }).catch((err)=>{
        console.log(err)
    })
    

}