import './App.css';
import AddProductForm from './components/AddProductForm';
import Home from './components/Home';
import ProductList from './components/ProductList';
import {Routes, Route, Link} from "react-router-dom";
import UpdateProductForm from './components/updateProductForm';


function App() {
  return (
    <>    
    <nav>
      <ul>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/products">Produits</Link></li>
      <li><Link to="/products/add">AjouterProduit</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/products/add" element={<AddProductForm/>}/>
      <Route path="/products/update/:id" element={<UpdateProductForm/>}/>
    </Routes>
    </>
  );
}

export default App;
