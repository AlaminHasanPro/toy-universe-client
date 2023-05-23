import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs";
import Modify from "../Components/Modify";
import Root from "../Layout/Root";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import Registration from "../Pages/Ragistraiton/Registration";
import ToyInfo from "../Pages/ToyInfo/ToyInfo";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/alltoy",
        element: <AllToy />,
      },
      {
        path: "/toyInfo/:id",
        element: (
          <PrivateRoute>
            <ToyInfo />,
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: <MyToys />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/modifyItems/:id",
        element: <Modify />,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

export default router;
