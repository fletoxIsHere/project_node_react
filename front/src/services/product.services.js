import http from "./http-common"

async function getAll(){
    return await http.get("/products")
}

async function getById(id){
    return await http.get(`/products/${id}`)
}

async function deleteById(id){
    return await http.delete(`/products/${id}`)
}

async function addProduct(product){
    return await http.post(`/products`,product)
}
async function updateProduct(id,product){
    return await http.put(`/products/${id}`,product)
}
const productService = {getAll, getById, deleteById,addProduct,updateProduct}

export default productService