import {Outlet} from "react-router";
import { useState } from "react";
import CategoryModal from "@/components/CategoryModal";
import AddCategoryForm from "@/components/AddCategoryForm";

const Layout = () => {
    const [openAddCategory, setOpenAddCategory] = useState(false);

    return (
        <>
            <header className="bg-gray-900 text-white p-4 flex justify-between">
                <nav className="flex gap-4">
                    <button onClick={() => setOpenAddCategory(true)}>
                        Add Category
                    </button>
                </nav>
            </header>

            <main className="p-6">
                <Outlet />
            </main>

            <CategoryModal
                open={openAddCategory}
                close={() => setOpenAddCategory(false)}
            >
                <AddCategoryForm close={() => setOpenAddCategory(false)} />
            </CategoryModal>
        </>
    );
};

export default Layout;
