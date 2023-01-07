const Product = require("../Models/Product")

const getAllProducts = async()=>{
return await Product.find()
}
const getProductById = async(id)=>{ 
return await Product.findOne({_id:id})
}
const deleteProductById = async(id)=>{
return await Product.findByIdAndDelete({_id:id})
}
const addProduct = async(product)=>{
    return await Product.create(product);
    }

const updateProduct = async(product)=>{
    return await Product.findOneAndUpdate(product._id,product);
    }
module.exports = {
getAllProducts,
getProductById,
deleteProductById,
addProduct,
updateProduct
}