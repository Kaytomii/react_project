import {createBrowserRouter} from "react-router";
//import CategoriesList from "@/components/CategoryList.tsx";
import Layout from "@/components/Layout.tsx";
import Error from "@/components/Error.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <div>Home Page</div>
            },
            {
                path: 'about',
                element: <div>About Page</div>
            }
        ]
    }
    // {
    //     path: "about",
    //     element: <>About Page</>
    // },
    // {
    //     path: "contacts",
    //     element: <>Contacts</>
    // }
])