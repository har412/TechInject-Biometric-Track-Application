const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user_id:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

const User = mongoose.model('User',UserSchema);

module.exports = User;