import http from "./http-common"

async function getAll(){
    return await http.get("/categories")
}

async function getById(id){
    return await http.get(`/categories/${id}`)
}

async function deleteById(id){
    return await http.delete(`/categories/${id}`)
}

async function addCategorie(categorie){
    return await http.post(`/categories`,categorie)
}
async function updateCategorie(id,categorie){
    return await http.put(`/categories/${id}`,categorie)
}
const categorieService = {getAll, getById, deleteById,addCategorie,updateCategorie}

export default categorieService