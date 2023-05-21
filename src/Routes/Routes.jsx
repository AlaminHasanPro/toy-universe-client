import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Ragistraiton/Registration";
import ToyInfo from "../Pages/ToyInfo/ToyInfo";

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
        path: "/toyInfo",
        element: <ToyInfo />,
      },
      {
        path: "/addToy",
        element: <AddToy />,
      },
    ],
  },
]);

export default router;
