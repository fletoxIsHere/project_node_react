const mongoose=require("mongoose")

const productShema=new mongoose.Schema({
    name:String,
    description:String,
    price:Number
})

const  Product=mongoose.model("Product",productShema)
module.exports=Product