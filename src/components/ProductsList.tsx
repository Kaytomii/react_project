import products from "../models/Products.ts";
import {Product} from "./Product.tsx";
import {useState} from "react";

const ProductsList = () => {
    const [listproducts, setListproducts] = useState<Product[]>([...products]);
    return (<div className="flex p-8">
        {listproducts.map(product => {
            return (<Product key={product.id} product={product} />);
        })}
        </div>)
}
export default ProductsList;