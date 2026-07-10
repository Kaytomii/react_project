import './App.css'
// import ProductsList from "./components/ProductsList";
// import AddProduct from "./components/AddProduct";
//import productdata from "./models/Products.ts"
//import {useState} from "react";
import CategoryList from "./components/CategoryList.tsx";

function App() {
    // const [products, setProducts] = useState(productdata);
    return (
        <>
           {/*<ProductsList products={products}/>*/}
           {/* <AddProduct setProducts={setProducts} products={products}/>*/}
            <CategoryList></CategoryList>
        </>
    )
}
export default App