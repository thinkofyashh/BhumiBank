const express=require("express")
const cors = require('cors');
const app=express()
const rootRouter=require("./Routes/index")
app.use("/api/v1",rootRouter)
app.use(cors());

app.listen(3000)