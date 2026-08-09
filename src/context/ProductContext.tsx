import { createContext, useEffect, useState } from "react";
import type { ProductType } from "@/types/ProductType";

type ProductsContextType = {
    products: ProductType[];
};

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
});

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
    const URL = import.meta.env.VITE_PATH_TO_SERVER + import.meta.env.VITE_PATH_TO_API + "product";
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data: ProductType[]) => {
                setProducts(data);
            });
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};
