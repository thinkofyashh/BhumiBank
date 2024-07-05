const express=require("express")
const cors = require('cors');
const bodyParser=require("body-parser")
const rootRouter=require("./Routes/index")

const app=express()
app.use(bodyParser.json())
app.use("/api/v1",rootRouter)
app.use(cors());

app.listen(3000)