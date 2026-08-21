const ProductSkeleton = () => {
    return (
        <article className="group w-full max-w-[300px] overflow-hidden rounded-2xl bg-white shadow-md animate-pulse">
            <div className="h-52 bg-gray-200" />

            <div className="p-4 space-y-4">
                <div className="h-4 w-48 bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-200 rounded" />

                <div className="flex items-center justify-between">
                    <div className="h-6 w-20 bg-gray-200 rounded" />
                    <div className="h-4 w-10 bg-gray-200 rounded" />
                </div>

                <div className="h-10 w-full bg-gray-300 rounded-xl" />
            </div>
        </article>
    );
};

export default ProductSkeleton;
