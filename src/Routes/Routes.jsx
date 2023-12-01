import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AvailableCamp from "../pages/AvailableCamp.jsx/AvailableCamp";
import AvailableDetails from "../pages/AvailableCamp.jsx/AvailableDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/SignUp";
import SignUp from "../pages/Login/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allCamps"),
      },
      {
        path: "/availableCamp",
        element: <AvailableCamp></AvailableCamp>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/allCamps/${params._id}`),
      },
      {
        path: "/availableDetails/:id",
        element: <AvailableDetails></AvailableDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allCamps/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
