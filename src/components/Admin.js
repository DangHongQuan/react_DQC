import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import AddSp from "./../pages/AddSp";
import routes from "./../routes";
import { Routes, Route } from "react-router-dom";

const StyledAdmin = styled.div`
  .font-custom {
    font-family: "Times New Roman", Times, serif;
    color: white;
  }
`;
const Admin = (props) => {
  return (
    <>
      <StyledAdmin>
        <div className="row">
          <div className=" ms-5 mt-5 rounded-3 bg-secondary font-custom text-center">
            <h1 className="pt-3">Edit Admin</h1>
            <hr className="w-75 ms-5 text-black" />
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
              <NavLink className="nav-link" to={"/Addsp"}>
                 
                 <h4> Thêm sản phẩm</h4>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to={"/abc%"}>
                 
                 <h4> Delete sản phẩm</h4>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                 
                 <h4> Thêm sản phẩm</h4>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                 
                 <h4> Thêm sản phẩm</h4>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                 
                 <h4> Thêm sản phẩm</h4>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </StyledAdmin>
    </>
  );
};

export default Admin;
