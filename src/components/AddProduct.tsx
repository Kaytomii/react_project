const AddProduct = () => {
    return (
        <form className="w-full rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                Новый товар
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Название товара
                    </label>
                    <input
                        type="text"
                        placeholder="Apple Watch Ultra 2"
                        className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Категория
                    </label>
                    <select className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black">
                        <option>Смарт-часы</option>
                        <option>Телефоны</option>
                        <option>Ноутбуки</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Цена
                    </label>
                    <input
                        type="number"
                        placeholder="799"
                        className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Количество
                    </label>
                    <input
                        type="number"
                        placeholder="15"
                        className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Изображение
                    </label>
                    <input
                        type="text"
                        placeholder="/images/watch.png"
                        className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="flex cursor-pointer items-center justify-between rounded-2xl bg-zinc-100 p-4">
                <span className="font-medium text-zinc-700">
                    Товар активен
                </span>

                        <input
                            type="checkbox"
                            className="h-5 w-5 accent-black"
                            defaultChecked
                        />
                    </label>
                </div>

                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-gradient-to-r from-black to-zinc-700 py-4 font-semibold text-white transition hover:opacity-90"
                    >
                        Создать товар
                    </button>
                </div>
            </div>
        </form>
    )
}
export default AddProduct