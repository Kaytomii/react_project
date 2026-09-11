import { useContext, useState } from "react";
import { CategoriesContext } from "@/context/CategoriesContext";
import Category from "@/components/Category";

const CategoriesPagination = () => {
    const { categories } = useContext(CategoriesContext);

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8; // скільки категорій показувати на сторінці

    const totalPages = Math.ceil(categories.length / perPage);

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    const currentCategories = categories.slice(startIndex, endIndex);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (categories.length === 0) {
        return (
            <p className="text-center text-gray-500 text-lg mt-10">
                List is empty
            </p>
        );
    }

    return (
        <div className="mx-auto max-w-7xl p-6">
            <h1 className="mb-6 text-3xl font-bold">Categories</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentCategories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                <span className="text-lg font-semibold">
                    Page {currentPage} / {totalPages}
                </span>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CategoriesPagination;
