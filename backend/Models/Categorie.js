const mongoose=require("mongoose")

const categorieShema=new mongoose.Schema({
    name:String,

})

const  Categorie=mongoose.model("Categorie",categorieShema)
module.exports=Categorie