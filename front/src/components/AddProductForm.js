import { useEffect, useState } from "react";
import productService from "../services/product.services";
import {useNavigate} from "react-router-dom"
import categorieService from "../services/category.services";

function AddProductForm(){

    const [nom,setNom]= useState("");
    const [description,setDescription]= useState("");
    const [prix,setPrix]= useState("");
    const [categories,setCategories] = useState([""]);
    const [categorie,setCategorie] = useState("");

    useEffect(()=>{
        getcategories();
    },[])

    const navigate = useNavigate()

    async function SubmitProduct(e){
        e.preventDefault()
        const p = {
            "name":nom,
            "description":description,
            "price":prix,
            "categorie":categorie
    }
        await productService.addProduct(p);
        navigate('/products')

    }

    async function getcategories(){
        const result = await categorieService.getAll();
        setCategories(result.data)
    }

    return (
        <form onSubmit={(e)=>SubmitProduct(e)}>
            <label htmlFor="nom">Nom :</label>
            <input type="text" onChange={(e)=>setNom(e.target.value)} name="nom"/><br/>
            <label htmlFor="description">Description :</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}    name="description"/><br/>
            <label htmlFor="prix">Prix :</label>
            <input type="number"  onChange={(e)=>setPrix(e.target.value)} name="prix"/><br/>

                <select onChange={(e)=>setCategorie(e.target.value)}>
                {
                    categories.map((elem)=>
                    <option value={elem._id} >{elem.name}</option>

                    )    
                }
          
               
                
                </select>
                
            <input type="submit"/>
        </form>



    )
}

export default AddProductForm