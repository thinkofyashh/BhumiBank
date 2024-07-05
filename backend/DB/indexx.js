const mongoose=require("mongoose")
const { string } = require("zod")

mongoose.connect("mongodb+srv://thinkofyash:18NovMonday@cluster0.xay1cqj.mongodb.net/BhumiBank")

const UserSchema=mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String
})

const User=mongoose.model("Users",UserSchema)

module.exports={
    Users:User
}
