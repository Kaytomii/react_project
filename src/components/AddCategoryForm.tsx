import { useState, useContext } from "react";
import { CategoriesContext } from "@/context/CategoriesContext";

const AddCategoryForm = ({ close }: { close: () => void }) => {
    const { categories } = useContext(CategoriesContext);

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [parentId, setParentId] = useState<number | null>(null);
    const [error, setError] = useState("");

    const URL = import.meta.env.VITE_PATH_TO_SERVER + import.meta.env.VITE_PATH_TO_API + "category";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                slug,
                parentId,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.message || "Error adding category");
            return;
        }

        close();
        window.location.reload(); // оновлюємо список категорій
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold">Add Category</h2>

            <input
                type="text"
                placeholder="Category name"
                className="w-full border px-4 py-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Slug"
                className="w-full border px-4 py-2 rounded"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
            />

            <select
                className="w-full border px-4 py-2 rounded"
                value={parentId ?? ""}
                onChange={(e) =>
                    setParentId(e.target.value === "" ? null : Number(e.target.value))
                }
            >
                <option value="">No parent (root)</option>

                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>

            {error && <p className="text-red-500">{error}</p>}

            <button className="w-full bg-green-600 text-white py-2 rounded">
                Add Category
            </button>
        </form>
    );
};

export default AddCategoryForm;
