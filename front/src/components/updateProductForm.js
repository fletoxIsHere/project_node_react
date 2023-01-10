import { useEffect, useState } from "react";
import productService from "../services/product.services";
import {useNavigate, useParams} from "react-router-dom"
import categorieService from "../services/category.services";


function UpdateProductForm(){

    const {id} = useParams()

    useEffect( ()=>{
        getProductById();
        getcategories();

    },[]) 
    
    async function getProductById(){
        const p = await productService.getById(id)
        console.log(p)
        setNom(p.data.name)
        setDescription(p.data.description)
        setPrix(p.data.price)
        setCatId(p.data.categorie._id)
        setCatNam(p.data.categorie.name)
        
        
    }

    const [nom,setNom]= useState("");
    const [description,setDescription]= useState("");
    const [prix,setPrix]= useState("");

    const [idc,setCatId]= useState("");
    const [catNam,setCatNam]= useState("");
    const [categories,setCategories] = useState([]);
    const [categorie,setCategorie] = useState([]);


    // console.log(nom)
    // console.log(description)
    // console.log(prix)
    // console.log(idc)
    // console.log(catNam)
     console.log(categorie)
    const navigate = useNavigate()

            async function SubmitProduct(e){
                        e.preventDefault()
                        const p = {
                            "_id":id,
                            "name":nom,
                            "description":description,
                            "price":prix,
                            "categorie":categorie
                    }
                await productService.updateProduct(p._id,p);
                navigate('/products')

            }
            
    async function getcategories(){
        const result = await categorieService.getAll();
        setCategories(result.data)
    }


    return (
            <form onSubmit={(e)=>SubmitProduct(e)}>
                <label htmlFor="nom">Nom :</label>
                <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} name="nom"/><br/>
                <label htmlFor="description">Description :</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}    name="description"/><br/>
                <label htmlFor="prix">Prix :</label>
                <input type="number"  value={prix} onChange={(e)=>setPrix(e.target.value)} name="prix"/><br/>
            
                {/* <select>
                {
                    categories.map((elem)=>{    
                    if(elem._id === idc)
                        <option value={elem._id} selected="selected" >{elem.name}</option>
                    else
                        <option value={elem._id} >{elem.name}</option>  
                }) 
                }
                </select> */}
                <select onChange={(e)=>setCategorie(e.target.value)}>
                {
                    categories.map((elem)=>
                    <option value={elem._id}>{elem.name}</option>)    
                }

                </select>
                <input type="submit"/>
            </form>
        )
}

export default UpdateProductForm