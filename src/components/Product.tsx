import type {ProductType} from "../types/ProductType.ts";

function Product(prop: {product:ProductType})
{
    return (
        <p>Title: {prop.product.title},
        <b>Description: {prop.product.description}</b>
        <p>Price: {prop.product.price} Count: {prop.product.count}</p>
            <b>Id: {prop.product.id}</b>
            <b>{prop.product.in_stock}</b>
        </p>
    )
}
export  {Product};