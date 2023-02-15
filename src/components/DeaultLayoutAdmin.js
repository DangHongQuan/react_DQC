import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import { Routes, Route } from "react-router-dom";
import routes from "./../routes";
import AddSp from './../pages/AddSp';

const DeaultLayoutAdmin = (props) => {
  return (
    <>
          <AddSp/>
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.components} />
            ))}
          </Routes>
    </>
  );
};

export default DeaultLayoutAdmin;
