import {createBrowserRouter} from "react-router";
import CategoriesList from "@/components/CategoryList.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <CategoriesList/>
    },
    {
        path: "about",
        element: <>About Page</>
    },
    {
        path: "contacts",
        element: <>Contacts</>
    }
])