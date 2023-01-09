const mongoose=require("mongoose")
 

const productShema=new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    categorie:{
        type:mongoose.Types.ObjectId,
        ref: 'Categorie'
    }
})

const  Product=mongoose.model("Product",productShema)
module.exports=Product