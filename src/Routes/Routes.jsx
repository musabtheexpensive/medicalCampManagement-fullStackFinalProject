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
import PrivateRoute from "../Providers/PrivateRoute";
import AddCamps from "../pages/Dashboard/AddCamps";
import AdminRoute from "../Providers/AdminRoute";
import ManageCamp from "../pages/Dashboard/ManageCamp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/availableCamp",
        element: (
          <PrivateRoute>
            <AvailableCamp></AvailableCamp>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://backend-medical-camp-management-full-project-12.vercel.app/allCamps/${params._id}`),
      },
      {
        path: "/availableDetails/:id",
        element: <AvailableDetails></AvailableDetails>,
        loader: ({ params }) =>
          fetch(
            `https://backend-medical-camp-management-full-project-12.vercel.app/allCamps/${params.id}`
          ),
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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      // admin routes
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addCamp",
        element: (
          <AdminRoute>
            <AddCamps></AddCamps>
          </AdminRoute>
        ),
      },
      {
        path: "manageCamp",
        element: (
          <AdminRoute>
            <ManageCamp></ManageCamp>
          </AdminRoute>
        ),
      },
    ],
  },
]);
