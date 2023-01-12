
const categorieService = require("../services/CategorieService")
const productService = require("../services/productService")

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
                const products = await productService.getProductsByCategorie(req.params.id);
                    for(let i = 0; i<products.length; i++){
                        // console.log(products[i])
                        await productService.deleteProductById(products[i]._id);
                    }
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
        console.log(req.body)
    const result = await categorieService.updateCategorie(req.params.id,req.body)
    res.status(200).json(result)
    }
    catch(error){
    res.status(500).json({"err":error})
    }
    }
module.exports = {
    getAllCategories,
    getCategorieById,
    deleteCategorieById,
    addCategorie,
    updateCategorie

}