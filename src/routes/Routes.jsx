import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepages from "../pages/homepages/Homepages";
import Friends from "../pages/friends/Friends";
import ErrorPage from "../pages/errorpage/ErrorPage";
import CardInfoDetails from "../components/homepages/cardInfoDetails/CardInfoDetails";

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
      },
      {
        path:"/cardInfoDetails/:FriendId",
        element:<CardInfoDetails></CardInfoDetails>,
        loader:() => fetch('/data.json'),
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
  
]);
