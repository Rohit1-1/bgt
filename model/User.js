const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    email:String,
    password:String,
})

const User_Model=mongoose.model('buguser',userSchema)

module.exports={User_Model}