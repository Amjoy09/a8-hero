import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Applications from "../Pages/Applications";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import LoadingSpinner from "../Components/LoadingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <LoadingSpinner/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/appDetails/:id",
        element: <AppDetails />,
      }
    ],
  },
]);
