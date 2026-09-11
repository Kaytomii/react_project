import { useForm } from "react-hook-form";

type ProductFormType = {
    title: string;
    price: number;
    count: number;
    image: string;
    categoryId: number;
    is_active: boolean;
};

const AddProductForm = ({ close }: { close: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormType>();

    const URL =
        import.meta.env.VITE_PATH_TO_SERVER +
        import.meta.env.VITE_PATH_TO_API +
        "product";

    const onSubmit = async (data: ProductFormType) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            alert("Error creating product");
            return;
        }

        close();
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-2xl font-bold">Create Product</h2>

            <input
                {...register("title", { required: "Title is required" })}
                placeholder="Product title"
                className="w-full border px-4 py-2 rounded"
            />
            {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
            )}

            <input
                type="number"
                {...register("price", { required: "Price is required" })}
                placeholder="Price"
                className="w-full border px-4 py-2 rounded"
            />
            {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
            )}

            <input
                type="number"
                {...register("count", { required: "Count is required" })}
                placeholder="Count"
                className="w-full border px-4 py-2 rounded"
            />
            {errors.count && (
                <p className="text-red-500">{errors.count.message}</p>
            )}

            <input
                {...register("image", { required: "Image URL is required" })}
                placeholder="Image URL"
                className="w-full border px-4 py-2 rounded"
            />
            {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
            )}

            <input
                type="number"
                {...register("categoryId", {
                    required: "Category ID is required",
                })}
                placeholder="Category ID"
                className="w-full border px-4 py-2 rounded"
            />
            {errors.categoryId && (
                <p className="text-red-500">{errors.categoryId.message}</p>
            )}

            <label className="flex items-center gap-2">
                <input type="checkbox" {...register("is_active")} />
                Active product
            </label>

            <button className="w-full bg-blue-600 text-white py-2 rounded">
                Create Product
            </button>
        </form>
    );
};

export default AddProductForm;
