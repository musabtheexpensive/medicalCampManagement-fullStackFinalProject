import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AvailableCamp from "../pages/AvailableCamp.jsx/AvailableCamp";
import AvailableDetails from "../pages/AvailableCamp.jsx/AvailableDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../pages/Profile/userProfile";
import AllUsers from "../pages/Dashboard/AllUsers";
import ContactUs from "../pages/ContactUs/ContactUs";
// import PrivateRoute from "../Providers/PrivateRoute";

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
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      // admin routes
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
