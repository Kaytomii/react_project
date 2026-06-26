//import Products from "../models/Products.ts";
import type {ProductType} from "../types/ProductType.ts";
import {type ChangeEvent, type SubmitEvent, useState} from "react";

type CreateProductProps = {
    products: ProductType[];
    setProducts: (products: ProductType[]) => void;
}
const AddProduct = ({products, setProducts}:CreateProductProps) => {
    const [is_active, setIsActive] = useState<boolean>(true);
    const [image, setImage] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const handlerSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newProduct: ProductType = {
            id: crypto.randomUUID(),
            title,
            price,
            count,
            image,
            is_active
        };

        setProducts([...products, newProduct]);
    }
    return (
        <form onSubmit={handlerSubmit} className="w-full rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                Новый товар
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Название товара
                    </label>
                    <input
                        type="text"
                        value={title}
                        placeholder="Your Product Name"
                        className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setTitle(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Категория
                    </label>
                    <select className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black">
                        <option>Смарт-часы</option>
                        <option>Телефоны</option>
                        <option>Ноутбуки</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Цена
                    </label>
                    <input
                        type="number"
                        value={price}
                        placeholder="0"
                        className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setPrice(+e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Количество
                    </label>
                    <input
                        type="number"
                        value={count}
                        placeholder="0"
                        className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setCount(+e.target.value);
                        }}
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Изображение
                    </label>
                    <input
                        type="text"
                        value={image}
                        placeholder="/images/watch.png"
                        className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setImage(e.target.value);
                        }}
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="flex cursor-pointer items-center justify-between rounded-2xl bg-zinc-100 p-4">
                <span className="font-medium text-zinc-700">
                    Товар активен
                </span>

                        <input
                            type="checkbox"
                            className="h-5 w-5 accent-black"
                            checked={is_active}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setIsActive(e.target.checked);
                            }}
                        />
                    </label>
                </div>

                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-gradient-to-r from-black to-zinc-700 py-4 font-semibold text-white transition hover:opacity-90"
                    >
                        Создать товар
                    </button>
                </div>
            </div>
        </form>
    )
}
export default AddProduct