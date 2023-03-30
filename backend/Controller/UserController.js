
const User = require('../Modals/User')


exports.getUser = (req,res) =>{
    const id =  req.params.id
    console.log(id)
    User.find({"user_id":id})
    .then((data)=>{
        console.log(data)
        res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
  

}
exports.postUser = (req,res) =>{
    // const data =new User({
    //     name:"Harkirat",
    //     user_id:12346,
    //     phone:78689698
    // })
    const data =new User({
        name:"Chirag",
        user_id:12349,
        phone:9356034555
    })
    // const data =new User({
    //     name:"Harkirat Singh",
    //     user_id:12348,
    //     phone:6239572909
    // })
    // const data =new User({
    //     name:"aman",
    //     user_id:12347,
    //     phone:78689698
    // })
    data.save()
    .then((result)=>{
        console.log(data)
        res.send("Data Sent")
    }).catch((err)=>{
        console.log(err)
    })
    

}