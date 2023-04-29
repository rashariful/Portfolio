import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import Home from "../Components/Pages/Home/Home";
import ProjectDetails from "../Components/Pages/Home/ProjectDetails/ProjectDetails";
import Portfolio from "../Components/Pages/Portfolio/Portfolio";
import Resume from "../Components/Pages/Resume/Resume";
import Main from "../Layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
        loader: () => fetch("https://fakestoreapi.com/products"),
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: async ({ params }) => {
          return fetch(`${process.env.REACT_APP_ROOT}/api/v1/project/${params?.id}`);
        },
      },
    ],
  },
]);

export default router