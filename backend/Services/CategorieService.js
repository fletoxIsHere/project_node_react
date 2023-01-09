const Categorie = require("../Models/Categorie")

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

const updateCategorie = async(categorie)=>{
    return await Categorie.findOneAndUpdate(categorie._id,categorie);
    }
module.exports = {
    getAllCategories,
    getCategorieById,
    deleteCategorieById,
    addCategorie,
    updateCategorie
}