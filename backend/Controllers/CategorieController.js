
const categorieService = require("../services/CategorieService")

const getAllCategories = async(req, res)=>{
try{
const result = await categorieService.getAllCategories()
res.status(200).json(result)
}
catch(error){
res.status(500).json({err:error})
}
}
const getCategorieById = async(req, res)=>{
try{
const result = await categorieService.getCategorieById(req.params.id)
res.status(200).json(result)
}
catch(error){
res.status(500).json({err:error})
}
}
const deleteCategorieById = async(req, res)=>{
try{
const result = await categorieService.deleteCategorieById(req.params.id)
res.status(200).json(result)
}
catch(error){
res.status(500).json({err:error})
}
}
const addCategorie = async(req, res)=>{
try{
const result = await categorieService.addCategorie(req.body)
res.status(200).json(result)
}
catch(error){
res.status(500).json({err:error})
}
}

const updateCategorie = async(req, res)=>{
    try{
    const result = await categorieService.updateCategorie(req.body)
    res.status(200).json(result)
    }
    catch(error){
    res.status(500).json({err:error})
    }
    }
module.exports = {
    getAllCategories,
    getCategorieById,
    deleteCategorieById,
    addCategorie,
    updateCategorie

}