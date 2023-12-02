import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaHome, FaUserNinja, FaUsers } from "react-icons/fa";
import { TbCamper } from "react-icons/tb";
import { GiGoblinCamp } from "react-icons/gi";
const Dashboard = () => {
  // TODO: get isAdmin value from the database
  const isAdmin = true;
  return (
    <div className="flex w-fit">
      {/* dashboard side bar */}
      <div className="w-60 min-h-screen bg-purple-200">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addCamp">
                  <GiGoblinCamp />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCamp">
                  <TbCamper />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          <div className="divider"></div>
        </ul>
      </div>
      {/* {dashboard content} */}
      <div className="lg:ml-80 mt-40">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
