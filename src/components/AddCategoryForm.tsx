import { useForm } from "react-hook-form";

type CategoryFormType = {
    name: string;
    slug: string;
    parentId: number | null;
};

const AddCategoryForm = ({ close }: { close: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CategoryFormType>();

    const URL =
        import.meta.env.VITE_PATH_TO_SERVER +
        import.meta.env.VITE_PATH_TO_API +
        "category";

    const onSubmit = async (data: CategoryFormType) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            alert("Error creating category");
            return;
        }

        close();
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-2xl font-bold">Create Category</h2>

            <input
                {...register("name", { required: "Name is required" })}
                placeholder="Category name"
                className="w-full border px-4 py-2 rounded"
            />
            {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
            )}

            <input
                {...register("slug", { required: "Slug is required" })}
                placeholder="Slug"
                className="w-full border px-4 py-2 rounded"
            />
            {errors.slug && (
                <p className="text-red-500">{errors.slug.message}</p>
            )}

            <input
                type="number"
                {...register("parentId")}
                placeholder="Parent ID (optional)"
                className="w-full border px-4 py-2 rounded"
            />

            <button className="w-full bg-green-600 text-white py-2 rounded">
                Create Category
            </button>
        </form>
    );
};

export default AddCategoryForm;
