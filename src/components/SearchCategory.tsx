import { useContext, useState } from "react";
import { CategoriesContext } from "@/context/CategoriesContext";
import type { CategoryType } from "@/types/CategoryType";

const SearchCategory = () => {
    const { categories } = useContext(CategoriesContext);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<CategoryType[]>([]); // ✅ типізуємо масив

    const handleSearch = () => {
        const filtered = categories.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    };

    return (
        <div className="mx-auto max-w-7xl p-6">
            <h1 className="mb-6 text-3xl font-bold">Search Category</h1>

            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter category name..."
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </div>

            {results.length === 0 && query !== "" && (
                <p className="text-gray-500">Nothing found</p>
            )}

            {results.length > 0 && (
                <ul className="list-disc pl-6">
                    {results.map((cat) => (
                        <li key={cat.id}>{cat.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchCategory;
