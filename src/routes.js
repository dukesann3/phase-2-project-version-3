import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Settings from "./components/Settings";
import Postlist from "./components/Postlist";
import Home from "./components/Home";
import Error from "./components/Error";
import About from "./components/About";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Settings",
                element: <Settings />
            },
            {
                path: "/Posts",
                element: <Postlist />
            },
            {
                path: "/About",
                element: <About />
            }
        ]
    }
]);

export default routes;