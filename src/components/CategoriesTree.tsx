import { useContext, useState } from "react";
import { CategoriesContext } from "@/context/CategoriesContext";
import { ProductsContext } from "@/context/ProductContext";
import {Product} from "@/components/Product";

const CategoriesTree = () => {
    const { categories } = useContext(CategoriesContext);
    const { products } = useContext(ProductsContext);

    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const getChildren = (parentId: number | null) =>
        categories.filter((c) => c.parentId === parentId);

    const handleClick = (id: number) => {
        setSelectedCategory(id);
    };

    const currentChildren = getChildren(selectedCategory);

    const categoryProducts = products.filter(
        (p) => p.id_category === selectedCategory
    );

    const isLeaf = currentChildren.length === 0;

    const topLevel = getChildren(null);

    return (
        <div className="mx-auto max-w-7xl p-6">
            <h1 className="mb-6 text-3xl font-bold">Categories</h1>

            {/* Верхній рівень */}
            {!selectedCategory && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {topLevel.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleClick(cat.id)}
                            className="border p-4 rounded-md hover:bg-gray-100"
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Підкатегорії */}
            {selectedCategory && !isLeaf && (
                <div>
                    <button
                        className="mb-4 text-blue-600"
                        onClick={() => setSelectedCategory(null)}
                    >
                        ← Back
                    </button>

                    <h2 className="text-xl font-semibold mb-4">Subcategories</h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {currentChildren.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleClick(cat.id)}
                                className="border p-4 rounded-md hover:bg-gray-100"
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Продукти категорії */}
            {selectedCategory && isLeaf && (
                <div>
                    <button
                        className="mb-4 text-blue-600"
                        onClick={() => setSelectedCategory(null)}
                    >
                        ← Back
                    </button>

                    <h2 className="text-xl font-semibold mb-4">Products</h2>

                    {categoryProducts.length === 0 ? (
                        <p className="text-gray-500">No products</p>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {categoryProducts.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoriesTree;