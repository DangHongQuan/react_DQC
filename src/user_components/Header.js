import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../style/base.css";

const StyledHeader = styled.div`
  body {
    background-color: #e1e1e1;
  }
  a {
    text-decoration: none;
    color: white;
  }

  .header {
    background: linear-gradient(-180deg, #f53d2d, #f63);
    height: 150px;
    width: 100%;
    position: fixed;
    color: #ffffff;
    padding-top: 10px;
    z-index: 999;
  }

  .container {
    max-width: 1200px;
    padding: 0;
  }

  .navbar {
    padding: 0;
  }

  .navbar span {
    font-size: 14px;
  }

  .icon-media {
    width: 17px;
    height: 17px;
  }

  .hr1 {
    width: 1px;
    height: 15px;
    background-color: #ffffff;
  }

  .wrap-search {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    border-radius: 6px;
  }

  .wrap-icon-s {
    position: absolute;
    background: linear-gradient(-180deg, #f53d2d, #f63);
    border-radius: 3px;
    width: 60px;
    height: 87%;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-control {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: none;
    background-color: transparent;
  }

  .form-control:focus {
    box-shadow: none;
    border-radius: 6px;
  }

  .icon-shop {
    width: 30px;
    height: 30px;
    margin-left: 60px;
  }

  .brand-img {
    width: 45px;
    height: 55px;
  }

  .text-brand {
    font-size: 30px;
    font-weight: 400;
  }

  .under-input span {
    font-size: 12px;
    font-weight: 100;
  }

  .wrap-navbar-input {
    margin-left: 50px;
    width: 67%;
  }
`;
const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="header">
          <div className="container">
            {/* navbar  */}
            <nav className="navbar d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span>Tải ứng dụng</span>
                <div className="hr1 mx-2" />
                <span className="me-2">Kết nối</span>
                <img
                  className="icon-media me-2 ml-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/facebook.png`}
                  alt=""
                />
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/instagram.png`}
                  alt=""
                />
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/pendidikan.png`}
                  alt=""
                />
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/line.png`}
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center">
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/notif.png`}
                  alt=""
                />
                <span className="me-2">Thông báo</span>
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/bantuan.png`}
                  alt=""
                />
                <span className="me-4">Hỗ trợ</span>
                <NavLink to={"/login"} className="nav-link">
                  Đăng nhập
                </NavLink>
                <div className="hr1 mx-2" />
                <NavLink to={"/signup"} className="font-weight-bold">
                  Đăng kí
                </NavLink>
              </div>
            </nav>
            {/* input search brand */}
            <div className="d-flex align-items-center mt-4">
              <div className="d-flex align-items-center">
                <img
                  className="brand-img mr-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/brand.png`}
                  alt=""
                />
                <span className="text-brand">Shopee</span>
              </div>
              <div className="wrap-navbar-input">
                <div className="wrap-search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhanh tay săn voucher lên đến 50%"
                  />
                  <div className="wrap-icon-s">
                    <img
                      className="icon-media"
                      src={`${process.env.PUBLIC_URL}/assets/images/search.png`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="under-input d-inline mt-2">
                  <span className="me-2">Áo Khoác</span>
                  <span className="me-2">Dép</span>
                  <span className="me-2">LEGO</span>
                  <span className="me-2">Túi xách</span>
                  <span className="me-2">Ốp iPhone</span>
                  <span className="me-2">Áo Croptop</span>
                  <span className="me-2">Tai nghe Bluetoth</span>
                  <span className="me-2">Son</span>
                </div>
              </div>

              <NavLink to={'/shopcart'} >
              <img
                className="icon-shop"
                src={`${process.env.PUBLIC_URL}/assets/images/shop.png`}
                alt=""
              />
              </NavLink>
            </div>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
