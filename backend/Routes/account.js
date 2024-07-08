const express=require("express");
const zod=require("zod")

const authMiddleWares = require("../MiddleWares/middleware");
const { Accounts } = require("../DB/indexx");
const { default: mongoose } = require("mongoose");
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

const transferBody=zod.object({
    to:zod.string(),
    amount:zod.number().min(1).max(10000)
})
router.post("/transfer",authMiddleWares,async function(req,res){

    const session=await mongoose.startSession();

    session.startTransaction()


    const body=req.body

    // checking if the user is sending me the right information if he/she want to send the money.

    const okreport=transferBody.safeParse(body)
    if(!okreport){
        res.json({
            msg:"Invalid Request"
        })
    }

// finding the sender account address by their unique user id

    const senderAccount=await Accounts.findOne({
        userId:req.userId
    }).session(session)

// checking if the sender has amount greater than which he/she sending if not the case returning .

    if(!senderAccount || senderAccount.amount<body.amount){
        await session.abortTransaction()
        res.json({
            msg:"Insufficient Balance"

        })
    }
// finding the account whom the transaction has to be made .

    const toAccount=await Accounts.findOne({
        userid:body.to
    }).session(session)

// checking if the account exist or not .

    if(!toAccount){
        await session.abortTransaction()
        res.json({
            msg:"Invalid Account"
        })
    }

// updating the sender balance with new balance 

    await Accounts.updateOne({userId:req.userId},{"$inc":{balance:-amount}}).session(session)

// updating the account with updated value.

    await Accounts.updateOne({userId:body.to},{"$inc":{balance:amount}}).session(session)

// if all done returning the message .
await session.commitTransaction()

    res.json({
        msg:"Transfer Successful"
    })

})




module.exports=router;