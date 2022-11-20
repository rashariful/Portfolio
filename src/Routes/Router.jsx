import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Portfolio from "../Components/Pages/Portfolio/Portfolio";
import Resume from "../Components/Pages/Resume/Resume";
import Main from "../Layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/resume',
                element: <Resume/>
            },
            {
                path: '/portfolio',
                element: <Portfolio/>
            },
        ]
    }
])

export default router