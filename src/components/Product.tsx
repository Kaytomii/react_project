import type {ProductType} from "../types/ProductType.ts";

function Product(prop:{product:ProductType})
{
    const{id,title,image,is_active,count,price} = prop.product;
    return (
        <article className="group w-full max-w-[300px] overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur transition hover:scale-110"
                >
                    <svg
                        className="h-5 w-5 stroke-zinc-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>

                {is_active ? (
                    <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-2 py-1 text-[10px] font-semibold text-white">
                В наличии
            </span>
                ) : (
                    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-[10px] font-semibold text-white">
                Нет в наличии
            </span>
                )}
            </div>

            <div className="p-4">
                <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-zinc-900">
                    {title}
                </h3>

                <p className="mb-3 text-xs text-zinc-500">
                    Артикул #{id}
                </p>

                <div className="mb-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-zinc-900">
                ${price}
            </span>

                    {count !== undefined && (
                        <span className="text-xs text-zinc-500">
                    {count} шт.
                </span>
                    )}
                </div>

                <button
                    disabled={!is_active}
                    className="w-full rounded-xl bg-black py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Add to Cart
                </button>
            </div>
        </article>
    )
}
export  {Product};