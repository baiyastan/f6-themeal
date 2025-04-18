import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Browse from "./pages/Browse";
import Search from "./pages/Search";
import Area from "./pages/Area";
import Info from "./pages/Info";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "browse/:char",
                element: <Browse/>
            },
            {
                path: "search/:value",
                element: <Search/>
            },
            {
                path: "area/:nurel",
                element: <Area/>
            },
            {
                path: "info/:id",
                element: <Info/>
            }
        ]
    }
])

export default myRouter