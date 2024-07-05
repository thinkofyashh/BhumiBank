const express=require("express")
const router=express.Router()
const zod=require("zod")
const { Users } = require("../DB/indexx")
const jwt=require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const authMiddleWares = require("../MiddleWares/middleware")

//user Routes

const signupBody=zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string().min(6),
})

router.post("/signup",async function(req,res){
    // create a new user
    const body=req.body;

    // validating inputs 

    const okreport=signupBody.safeParse(body);
    if(!okreport.success){
        res.json({
            message: "Incorrect inputs"
        })
    }

    // checking for existing user 

    const existingUser=await Users.findone(
        {username:body.username}
    )

    // checking if the existing user id is present or not .if yes then sending user message that user already exists .

    if(existingUser._id){
        res.json({
            message: "User already exists"
        })
    }

    // after checking all the checks . we creating a user in the database .

    const newUser=await Users.create(body)

    // generating jwt token for the user. using the id of the newUser created .

    const jwtToken=jwt.sign({userId:newUser._id},JWT_SECRET)
  

    res.json({
        message: "User created",
        token:jwtToken
    })

    


})
// zod schema for signin 

const signinBody=zod.object({
    username:zod.string().email(),
    password:zod.string().min(6),
});

router.post("/signin",async function(req,res){
    // sign in a user
    const body=req.body;

    // input vaildation 

    const okreport=signinBody.safeParse(body);
    if(!okreport.success){
        res.json({
            message: "Incorrect inputs"
        })
    }

    // finding if you the user exist or not in the database

    const existingUser=await Users.findone({
        username:body.username
    })

    // if user doesnt exist it will be returned back.
    if(!existingUser){
        res.json({
            message: "User not found"
        })
    }

    // if exist then signing the jwt token
    const jwtToken=jwt.sign({userId:existingUser._id},JWT_SECRET)

    // sending back the response with token 

    res.json({
        message: "User signed in",
        token:jwtToken
    })
    
})

const updatebody=zod.object({
    firstname:zod.string().optional(),
    lastname:zod.string().optional(),
    password:zod.string().min(6).optional()
})

router.put("/update",authMiddleWares,async function(req,res){
    // update a user
    const body=req.body;
    const okreport=updatebody.safeParse(body);
    if(!okreport.success){
        res.json({
            message: "Incorrect inputs"
        })
    }

    await Users.updateOne(body,{
        id: req.userId
    })

    res.json({
        message: "User updated"
    })

})


module.exports=router