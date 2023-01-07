// const product =require("../Models/Product")

// const getAllProducts=(req,res)=>{
//     product.find({}).then(result=>{res.status(200).json({result})})
//     .catch(error=>res.status(500).json({msg:error}))
     
//   }
//   const getProductById=(req,res)=>{
//      product.findOne({_id:req.params.id})
//      .then(result=>res.status(200).json({result}))
//      .catch(error=>res.status(404).json({msg:error}))
//   }
 
//   const deleteProduct=(req,res)=>{
//      product.deleteOne({_id:req.params.id})
//      .then((result)=>res.status(200).json({msg:"Le produit est bien suprrimé"}))
//      .catch((error)=>res.status(500).json({msg:error}))
//   }
//   const addProduct=(req,res)=>{
//     product.create(req.body)
//     .then((result)=>res.status(201).json({msg:"produit bien ajouté"}))
//     .catch((error)=>res.status(500).json({msg:error}))
//   }
 
//   module.exports={
//      getAllProducts,
//      getProductById,
//      deleteProduct,
//      addProduct
//   }
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