const Product = require("../Models/Product")

const getAllProducts = async()=>{
return await Product.find().populate("categorie")
}
const getProductById = async(id)=>{ 
return await Product.findOne({_id:id}).populate("categorie")
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
const getProductsByCategorie = async(id)=>{
    console.log(id)
    const result =  await Product.find({"categorie":id})
    console.log(result)
    return result;

    }
module.exports = {
getAllProducts,
getProductById,
deleteProductById,
addProduct,
updateProduct,
getProductsByCategorie
}