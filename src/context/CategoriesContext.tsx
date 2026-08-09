import { createContext, useEffect, useState } from "react";
import type { CategoryType } from "@/types/CategoryType";

type CategoriesContextType = {
    categories: CategoryType[];
};

export const CategoriesContext = createContext<CategoriesContextType>({
    categories: [],
});

export const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
    const URL = import.meta.env.VITE_PATH_TO_SERVER + import.meta.env.VITE_PATH_TO_API + "category";
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data: CategoryType[]) => {
                setCategories(data);
            });
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    );
};
