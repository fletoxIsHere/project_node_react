const express=require("express");
const app=express();
var cors = require('cors')
app.use(cors())

const ProductRouter=require("./Routes/ProductRoutes")
const CategorieRouter=require("./Routes/CategorieRoutes")

const loggingMiddelwares=require("./Middlewares/logging_middelware")
const mongoose=require("mongoose")
app.use(express.json())
require("dotenv").config()

mongoose.connect(process.env.mongo_url)
.then((result)=>app.listen(3322,()=>console.log("server is running on http://localhost:3322/")))
.catch((error)=>console.log(error))
app.use(express.urlencoded({ extended: true }))
app.use(loggingMiddelwares.loggignfUrl)
app.use(loggingMiddelwares.loggignParamas)

app.get("/",(req,res)=>{
   res.send("<h2> Bienvneue dans notre app Express</h2>");
});

app.use("/products",ProductRouter)
app.use("/categories",CategorieRouter)