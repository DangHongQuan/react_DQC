import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import LoginAdmin from "./../admin_pages/LoginAdmin";
import { NavLink } from "react-router-dom";
import axios from "axios";

function AddProduct(props) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [rate, setRate] = useState(0);
  const [count, setCount] = useState(0);

  const handleAddProduct = () => {
    const newProduct = {
      id: parseInt(id),
      title,
      price: parseInt(price),
      description,
      category,
      image,
      rating: { rate: parseInt(rate), count: parseInt(count) },
    };
    const newImg = {
      img1,
      img2,
      img3,
    };
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
    setImg1("");
    setImg2("");
    setImg3("");
    setRate("");
    setCount("");
    delete newProduct.createdAt;
    delete newProduct.modifiedAt;
    axios
      .post("http://localhost:8000/products", newProduct)
      .then((response) => {
        console.log(response.data);
        props.onAddProduct(newProduct);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post("http://localhost:8000/imgProducDistel", newImg)
      .then((response) => {
        console.log(response.data);
        props.onAddProduct(newImg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                  <NavLink className="collapse-item" to={"/productAdminList"}>
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
                  <a className="collapse-item" href="utilities-animation.html">
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
              <NavLink className="nav-link" to={"/checkout"}>
                <i className="fas fa-fw fa-table" />
                <span>Danh sách Đặt hàng</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/editqc"}>
                <i className="fas fa-fw fa-table" />
                <span>Quảng cáo</span>
              </NavLink>
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
                        Admin page
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
              <div className="container-fluid">
                <div className="ms-5">
                  <div>
                    <h3 className="h1">Thêm sản phẩm mới</h3>
                    <from>
                      <label>Tên sản phẩm:</label>
                      <input
                        className="form-control w-25"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <br />
                      <label>Giá:</label>
                      <input
                        className="form-control  w-25"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <br />
                      <label>Mô tả:</label>
                      <input
                        className="form-control  w-25"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <br />
                      <label>Danh mục:</label>
                      <select
                        className="form-control  w-25"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">-- Chọn Danh Mục --</option>
                        <option value="thoitrangnam">Thời trang nam</option>
                        <option value="thoitrangnu">Thời trang nữ</option>
                        <option value="dienthoai">Điện thoại & phụ kiện</option>
                        <option value="thietbidientu">Thiết bị điện tử</option>
                        <option value="mayanh">Máy ảnh & quay phim</option>
                        <option value="dongho">Đồng hồ</option>
                        <option value="giaydepnam">Giày dép nam</option>
                        <option value="thietbigiadung">
                          Thiết bị điện & da dụng
                        </option>
                        <option value="thethao">Thể thao & du lịch</option>
                        <option value="xemay">Ôtô & xe máy & xe đạp</option>
                      </select>

                      <br />
                      <label>Link ảnh Chính:</label>
                      <input
                        className="form-control  w-25"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                      <br />
                      <label>Ảnh phụ 1</label>
                      <input
                        className="form-control  w-25"
                        type="text"
                        value={img1}
                        onChange={(e) => setImg1(e.target.value)}
                      />
                      <br />
                      <label>Ảnh phụ 2</label>
                      <input
                        className="form-control  w-25"
                        type="text"
                        value={img2}
                        onChange={(e) => setImg2(e.target.value)}
                      />
                      <br />
                      <label>Ảnh phụ 3</label>
                      <input
                        className="form-control  w-25"
                        type="text"
                        value={img3}
                        onChange={(e) => setImg3(e.target.value)}
                      />
                      <br />
                      <label>Đánh giá:</label>
                      <input
                        className="form-control  w-25"
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                      />
                      <br />
                      <label>Số lượt đánh giá:</label>
                      <input
                        className="form-control  w-25"
                        type="number"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                      />
                      <br />

                      <button
                        className="btn btn-primary mb-5"
                        onClick={handleAddProduct}
                      >
                        Thêm sản phẩm
                      </button>
                    </from>
                  </div>
                </div>
              </div>
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
}

export default AddProduct;
