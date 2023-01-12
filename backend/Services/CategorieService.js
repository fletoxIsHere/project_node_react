const Categorie = require("../Models/Categorie")
const mongoose =require("mongoose")
const getAllCategories = async()=>{
return await Categorie.find()
}
const getCategorieById = async(id)=>{ 
return await Categorie.findOne({_id:id})
}
const deleteCategorieById = async(id)=>{
return await Categorie.findByIdAndDelete({_id:id})
}
const addCategorie = async(categorie)=>{
    return await Categorie.create(categorie);
    }

const updateCategorie = async(id,categorie)=>{
    return await Categorie.updateOne({_id:mongoose.Types.ObjectId(id)},{$set:categorie})

    }
module.exports = {
    getAllCategories,
    getCategorieById,
    deleteCategorieById,
    addCategorie,
    updateCategorie
}