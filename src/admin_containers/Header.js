import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import LoginAdmin from "./../admin_pages/LoginAdmin";
import { NavLink } from "react-router-dom";
import ProductAdminList from './../admin_pages/ProductAdminList';

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
        <div id="page-top">
          {/* Page Wrapper */}
          <div id="wrapper">
            {/* Sidebar */}
            <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              {/* Sidebar - Brand */}
              <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/backend/images/cdsg.png`}
                  id="logocdsg"
                  alt="datgold"
                />
              </a>
              {/* Divider */}
              <hr className="sidebar-divider my-0" />
              {/* Nav Item - Dashboard */}
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  <i className="fas fa-fw fa-tachometer-alt" />
                  <span>Tổng Quan</span>
                </a>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider" />
              {/* Heading */}
              <div className="sidebar-heading">Interface</div>
              {/* Nav Item - Pages Collapse Menu */}
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-fw fa-cog" />
                  <span>Cài Đặt</span>
                </a>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Xin Chào Đạt,Quân,Châu:</h6>
                    <NavLink className="collapse-item" to={"/addProduct"}>
                     Thêm sản phẩm
                    </NavLink>
                    <NavLink className="collapse-item"  to={"/productAdminList"}>
                     Chỉnh sửa sản phẩm
                    </NavLink>
                  </div>
                </div>
              </li>
              {/* Nav Item - Utilities Collapse Menu */}
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-toggle="collapse"
                  data-target="#collapseUtilities"
                  aria-expanded="true"
                  aria-controls="collapseUtilities"
                >
                  <i className="fas fa-fw fa-table" />
                  <span>Tables</span>
                </a>
                <div
                  id="collapseUtilities"
                  className="collapse"
                  aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Quản Lý Sản Phẩm</h6>
                    <a className="collapse-item" href="utilities-color.html">
                      Danh Sách Sản Phẩm
                    </a>
                    <a className="collapse-item" href="utilities-border.html">
                      Borders
                    </a>
                    <a
                      className="collapse-item"
                      href="utilities-animation.html"
                    >
                      Animations
                    </a>
                    <a className="collapse-item" href="utilities-other.html">
                      Other
                    </a>
                  </div>
                </div>
              </li>

              {/* Nav Item - Pages Collapse Menu */}

              <li className="nav-item">
                <a className="nav-link" href="tables.html">
                  <i className="fas fa-fw fa-table" />
                  <span>Tables</span>
                </a>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider d-none d-md-block" />
              {/* Sidebar Toggler (Sidebar) */}

              {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div> */}

              {/* Sidebar Message */}
            </ul>
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  {/* Sidebar Toggle (Topbar) */}
                  <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  {/* Topbar Search */}
                  <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* Topbar Navbar */}
                  <ul className="navbar-nav ml-auto">
                    {/* Nav Item - Search Dropdown (Visible Only XS) */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#/"
                        id="searchDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-search fa-fw" />
                      </a>
                      {/* Dropdown - Messages */}
                      <div
                        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                      >
                        <form className="form-inline mr-auto w-100 navbar-search">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control bg-light border-0 small"
                              placeholder="Search for..."
                              aria-label="Search"
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>

                    <div className="topbar-divider d-none d-sm-block" />
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                          Trần Quang Đạt
                        </span>
                        <img
                          className="img-profile rounded-circle"
                          src={`${process.env.PUBLIC_URL}/backend/images/1.png`}
                          alt="avata"
                        />
                      </a>
                      {/* Dropdown - User Information */}
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                      >
                        <a className="dropdown-item" href="/#">
                          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                          Hoạt Động Đăng Nhập
                        </a>
                        <div className="dropdown-divider" />
                        <NavLink
                          className="dropdown-item"
                          to={"/Layout"}
                          data-toggle="modal"
                          data-target="#logoutModal"
                        >
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                          Đăng xuất
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </nav>
                {/* End of Topbar */}
                {/* Begin Page Content */}
                <div className="container-fluid">Trang chủ</div>
                {/* /.container-fluid */}
              </div>
              {/* End of Main Content */}
              {/* Footer */}
              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright © Your Website 2021</span>
                  </div>
                </div>
              </footer>
              {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
          </div>
          {/* End of Page Wrapper */}
        </div>
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
// const Header = (props) => {
//     return (

//        <>
//  <div id="page-top">

// {/* Page Wrapper */}
// <div id="wrapper">
//   {/* Sidebar */}
//   <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
//     {/* Sidebar - Brand */}
//     <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
//     <img src={`${process.env.PUBLIC_URL}/backend/images/cdsg.png`} id="logocdsg" alt="datgold"/>
//     </a>
//     {/* Divider */}
//     <hr className="sidebar-divider my-0" />
//     {/* Nav Item - Dashboard */}
//     <li className="nav-item active">
//       <a className="nav-link" href="index.html">
//         <i className="fas fa-fw fa-tachometer-alt" />
//         <span>Tổng Quan</span></a>
//     </li>
//     {/* Divider */}
//     <hr className="sidebar-divider" />
//     {/* Heading */}
//     <div className="sidebar-heading">
//       Interface
//     </div>
//     {/* Nav Item - Pages Collapse Menu */}
//     <li className="nav-item">
//       <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
//         <i className="fas fa-fw fa-cog" />
//         <span>Cài Đặt</span>
//       </a>
//       <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
//         <div className="bg-white py-2 collapse-inner rounded">
//           <h6 className="collapse-header">Xin Chào Đạt,Quân,Châu:</h6>
//           <a className="collapse-item" href="buttons.html">Cài Đặt Nút</a>
//           <a className="collapse-item" href="cards.html">Cài Đặt Giao Diện</a>
//         </div>
//       </div>
//     </li>
//     {/* Nav Item - Utilities Collapse Menu */}
//     <li className="nav-item">
//       <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
//       <i className="fas fa-fw fa-table" />
//         <span>Tables</span>
//       </a>
//       <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
//         <div className="bg-white py-2 collapse-inner rounded">
//           <h6 className="collapse-header">Quản Lý Sản Phẩm</h6>
//           <a className="collapse-item" href="utilities-color.html">Danh Sách Sản Phẩm</a>
//           <a className="collapse-item" href="utilities-border.html">Borders</a>
//           <a className="collapse-item" href="utilities-animation.html">Animations</a>
//           <a className="collapse-item" href="utilities-other.html">Other</a>
//         </div>
//       </div>
//     </li>

//     {/* Nav Item - Pages Collapse Menu */}

//     <li className="nav-item">
//       <a className="nav-link" href="tables.html">
//         <i className="fas fa-fw fa-table" />
//         <span>Tables</span></a>
//     </li>
//     {/* Divider */}
//     <hr className="sidebar-divider d-none d-md-block" />
//     {/* Sidebar Toggler (Sidebar) */}

//     {/* <div className="text-center d-none d-md-inline">
//       <button className="rounded-circle border-0" id="sidebarToggle" />
//     </div> */}

//     {/* Sidebar Message */}

//   </ul>
//   {/* End of Sidebar */}
//   {/* Content Wrapper */}
//   <div id="content-wrapper" className="d-flex flex-column">
//     {/* Main Content */}
//     <div id="content">
//       {/* Topbar */}
//       <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
//         {/* Sidebar Toggle (Topbar) */}
//         <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
//           <i className="fa fa-bars" />
//         </button>
//         {/* Topbar Search */}
//         <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
//           <div className="input-group">
//             <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
//             <div className="input-group-append">
//               <button className="btn btn-primary" type="button">
//                 <i className="fas fa-search fa-sm" />
//               </button>
//             </div>
//           </div>
//         </form>
//         {/* Topbar Navbar */}
//         <ul className="navbar-nav ml-auto">
//           {/* Nav Item - Search Dropdown (Visible Only XS) */}
//           <li className="nav-item dropdown no-arrow d-sm-none">
//             <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               <i className="fas fa-search fa-fw" />
//             </a>
//             {/* Dropdown - Messages */}
//             <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
//               <form className="form-inline mr-auto w-100 navbar-search">
//                 <div className="input-group">
//                   <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
//                   <div className="input-group-append">
//                     <button className="btn btn-primary" type="button">
//                       <i className="fas fa-search fa-sm" />
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </li>

//           <div className="topbar-divider d-none d-sm-block" />
//           {/* Nav Item - User Information */}
//           <li className="nav-item dropdown no-arrow">
//             <a className="nav-link dropdown-toggle" href="/#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               <span className="mr-2 d-none d-lg-inline text-gray-600 small">Trần Quang Đạt</span>
//               <img className="img-profile rounded-circle" src={`${process.env.PUBLIC_URL}/backend/images/1.png`} alt="avata"/>
//             </a>
//             {/* Dropdown - User Information */}
//             <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">

//               <a className="dropdown-item" href="/#">
//                 <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
//                Hoạt Động Đăng Nhập
//               </a>
//               <div className="dropdown-divider" />
//               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
//                 <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
//                 Đăng Xuất
//               </a>
//             </div>
//           </li>
//         </ul>
//       </nav>
//       {/* End of Topbar */}
//       {/* Begin Page Content */}
//       <div className="container-fluid">
//         Trang chủ
//       </div>
//       {/* /.container-fluid */}
//     </div>
//     {/* End of Main Content */}
//     {/* Footer */}
//     <footer className="sticky-footer bg-white">
//       <div className="container my-auto">
//         <div className="copyright text-center my-auto">
//           <span>Copyright © Your Website 2021</span>
//         </div>
//       </div>
//     </footer>
//     {/* End of Footer */}
//   </div>
//   {/* End of Content Wrapper */}
// </div>
// {/* End of Page Wrapper */}

// </div>

//        </>

//      );
// }

// export default Header;
