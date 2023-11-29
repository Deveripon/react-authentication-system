import Layout from "../layouts/Layout";
import About from "../pages/about/About";
import Auth from "../pages/auth/Auth";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Single from "../pages/single/Single";

const publicRouter = [
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/single:id",
                element: <Single />,
            },
            {
                path: "/auth",
                element: <Auth />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
];

export default publicRouter;
