const express=require("express")
const router=express.Router()

//user Routes

router.post("/signup",function(req,res){
    // create a new user 
})

router.post("/signin",function(req,res){
    // sign in a user
})

router.post("/update",function(req,res){
    // update a user
})


module.exports=router