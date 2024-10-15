import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

import Home from "../layout/pages/Home/Home";
import Login from "../layout/pages/Login/Login";
import Register from "../layout/pages/Register/Register";
import Details from "../layout/pages/Details/Details";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },

      {
        path: "/news/:id",
        element: (
          <Privateroute>
            <Details></Details>
          </Privateroute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
