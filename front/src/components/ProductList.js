import {useState,useEffect} from  "react"
import productService from "../services/product.services"
import { Link } from "react-router-dom"

function ProductList(){

    let [products,setProducts] = useState([])
    
        useEffect(()=>{
        getProducts()
        },[])

            async function getProducts(){

                try {
                   const result = await productService.getAll();
                   
                    setProducts(result.data)
                    console.log(result.data)
                }catch(error){
                    console.log(error)
                }
            }
            async function deleteProd(id){
                try {
                    await productService.deleteById(id);
                    window.location.reload();

                }catch(error){
                     console.log(error)
                 } 
            }




    return (
        <table border="1">
            <thead>
            <tr><th>No</th><th>Nom</th><th>Description</th><th>prix</th><th>Categorie</th><th>Action</th></tr></thead>
            <tbody>
            {
            products.map((elem,index)=>
            <tr key={elem._id}>
                <td>{index+1}</td>
                <td>{elem.name}</td>
                <td>{elem.description}</td>
                <td>{elem.price}</td>
                <td>{elem.categorie.name}</td>
                <td><button onClick={()=>deleteProd(elem._id)}>delete</button>
                <Link to={`/products/update/${elem._id}`}>update</Link></td>
            </tr>
            )}
            </tbody>
        </table>
    )
}


export default ProductList