import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaHome, FaUserNinja, FaUsers } from "react-icons/fa";
import { TbCamper } from "react-icons/tb";
import { GiGoblinCamp } from "react-icons/gi";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex ">
      {/* dashboard side bar */}
      <div className="w-60 min-h-screen bg-purple-200">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  Organizer Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addCamp">
                  <GiGoblinCamp />
                  Add Camps
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCamp">
                  <TbCamper />
                  Manage Camps
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All LogIn Users
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
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
