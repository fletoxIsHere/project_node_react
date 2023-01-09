const express=require("express")
const ProductRouter=express.Router()
const productsController=require("../Controllers/ProductsController")

ProductRouter.get("/",productsController.getAllProducts)
ProductRouter.get("/:id",productsController.getProductById)
ProductRouter.delete("/:id",productsController.deleteProductById)
ProductRouter.put("/:id",productsController.updateProduct)
ProductRouter.post("/",productsController.addProduct)

module.exports=ProductRouter