const express=require("express")
const app=express()
const rootRouter=require("./Routes/index")
app.use("/api/v1",rootRouter)

app.listen(3000)