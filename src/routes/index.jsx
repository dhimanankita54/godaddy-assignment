import { useRoutes } from "react-router"
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Layout from "../Layout";

const Router = () => {

    return useRoutes([
        {
            path: "/", element: <Layout />,
            children: [
                { path: "", element: <Home /> },
                { path: "/:id", element: <Details /> },
            ]
        }
    ])
}

export default Router;