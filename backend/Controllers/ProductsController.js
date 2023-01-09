
const productService = require("../services/productService")

const getAllProducts = async(req, res)=>{
try{
const result = await productService.getAllProducts()
res.status(200).json(result)
}
catch(error){
res.status(500).json({err:error})
}
}
const getProductById = async(req, res)=>{
try{
const result = await productService.getProductById(req.params.id)
res.status(200).json(result)
}
catch(error){
res.status(500).json({err:error})
}
}
const deleteProductById = async(req, res)=>{
try{
const result = await productService.deleteProductById(req.params.id)
res.status(200).json(result)
}
catch(error){
res.status(500).json({err:error})
}
}
const addProduct = async(req, res)=>{
try{
    console.log(req.body)
const result = await productService.addProduct(req.body)
res.status(200).json(result)
}
catch(error){
res.status(500).json({err:error})
}
}

const updateProduct = async(req, res)=>{
    try{
    const result = await productService.updateProduct(req.body)
    res.status(200).json(result)
    }
    catch(error){
    res.status(500).json({err:error})
    }
    }
module.exports = {
getAllProducts,
getProductById,
deleteProductById,
addProduct,
updateProduct
}