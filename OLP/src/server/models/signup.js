const mongoose=require('mongoose')
const signupSchema=new mongoose.Schema({
    name:String,
    mail:String,
    password:String
})
module.exports=mongoose.model("users",signupSchema)