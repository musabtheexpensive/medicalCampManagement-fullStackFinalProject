import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaHome, FaUserNinja } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="flex w-fit">
      {/* dashboard side bar */}
      <div className="w-60 min-h-screen bg-purple-200">
        <ul className="menu p-4">
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">
              <FaUserNinja />
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review
            </NavLink>
          </li>
        </ul>
      </div>
      {/* {dashboard content} */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
