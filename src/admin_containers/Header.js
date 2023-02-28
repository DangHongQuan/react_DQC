import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import LoginAdmin from "./../admin_pages/LoginAdmin";
import { NavLink } from "react-router-dom";

import Dashboard from "../admin_pages/Dashboard";
import Menu from "../admin_pages/Menu";

function Header(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Gửi yêu cầu đăng nhập đến máy chủ và xác thực thông tin đăng nhập
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password.");
    }
  };

  if (loggedIn) {
    return (
      <>
                  <Dashboard/>
      </>
    );
  } else {
    return (
      <div>
        <LoginAdmin onSubmit={handleLogin} />
      </div>
    );
  }
}

export default Header;
