import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../Pages/Users/Users";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./Privateroute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
