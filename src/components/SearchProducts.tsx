import { useState, useContext } from "react";
import { ProductsContext } from "@/context/ProductContext";
import {Product} from "@/components/Product";
import type { ProductType } from "@/types/ProductType";

const SearchProducts = () => {
    const { products } = useContext(ProductsContext);

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<ProductType[]>([]);
    const [searched, setSearched] = useState(false);

    const handleSearch = () => {
        const filtered = products.filter((p) =>
            p.title.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered);
        setSearched(true);
    };

    if (products.length === 0) {
        return (
            <p className="text-center text-gray-500 text-lg mt-10">
                List is empty
            </p>
        );
    }

    return (
        <div className="mx-auto max-w-7xl p-6">
            <h1 className="mb-6 text-3xl font-bold">Search Products</h1>

            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter product name..."
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </div>

            {searched && results.length === 0 && (
                <p className="text-center text-gray-500 text-lg mt-10">
                    Nothing found
                </p>
            )}

            {results.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {results.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchProducts;
