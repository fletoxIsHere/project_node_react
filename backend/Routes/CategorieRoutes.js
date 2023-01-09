const express=require("express")
const CategorieRouter=express.Router()
const categoriesController=require("../Controllers/CategorieController")

CategorieRouter.get("/",categoriesController.getAllCategories)
CategorieRouter.get("/:id",categoriesController.getCategorieById)
CategorieRouter.delete("/:id",categoriesController.deleteCategorieById)
CategorieRouter.put("/:id",categoriesController.updateCategorie)
CategorieRouter.post("/",categoriesController.addCategorie)

module.exports=CategorieRouter