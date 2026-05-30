import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepages from "../pages/homepages/Homepages";
import Friends from "../pages/friends/Friends";
import ErrorPage from "../pages/errorpage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
        element:<Homepages></Homepages>,
      },
      {
        path:"/friends",
        element:<Friends></Friends>,
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
  
]);
