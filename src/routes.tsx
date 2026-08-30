import { createBrowserRouter } from "react-router";
import Layout from "@/components/Layout";
import Error from "@/components/Error";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <div>Home Page</div>,
            },
            {
                path: "about",
                element: <div>About Page</div>,
            }
        ]
    }
]);
