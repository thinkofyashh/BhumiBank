const express=require("express");
const authMiddleWares = require("../MiddleWares/middleware");
const { Accounts } = require("../DB/indexx");
const router=express.Router();


router.get("/balance",authMiddleWares,async function(req,res){
    const userid=req.userid
    const account=await Accounts.findOne({
        userid:userid
    })
    res.json({
        balance:account.balance
    })
})



module.exports=router;