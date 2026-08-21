const CategorySkeleton = () => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md animate-pulse">
            <div className="h-52 w-full bg-gray-200" />

            <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="h-6 w-32 bg-gray-200 rounded" />
                    <div className="h-6 w-12 bg-gray-200 rounded-full" />
                </div>

                <div className="space-y-2">
                    <div className="h-4 w-40 bg-gray-200 rounded" />
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
};

export default CategorySkeleton;