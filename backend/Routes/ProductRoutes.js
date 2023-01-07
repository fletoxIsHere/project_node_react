const express=require("express")
const router=express.Router()
const productsController=require("../Controllers/ProductsController")

router.get("/",productsController.getAllProducts)
router.get("/:id",productsController.getProductById)
router.delete("/:id",productsController.deleteProductById)
router.put("/:id",productsController.updateProduct)
router.post("/",productsController.addProduct)

module.exports=router