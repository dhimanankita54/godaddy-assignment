import { useRoutes } from "react-router"
import Home from "../Pages/Home";
import Layout from "../layout";
import Details from "../Pages/Details";

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