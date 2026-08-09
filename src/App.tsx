import './App.css'
import { CategoriesProvider } from "@/context/CategoriesContext";
import { ProductsProvider } from "@/context/ProductContext";

import CategoriesTree from "@/components/CategoriesTree";
import SearchCategory from "@/components/SearchCategory";

function App() {
    return (
        <CategoriesProvider>
            <ProductsProvider>
                <CategoriesTree />
                <SearchCategory />
            </ProductsProvider>
        </CategoriesProvider>
    );
}

export default App;
