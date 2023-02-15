import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import '../style/base.css';

const StyledHeader = styled.div`
body {
  background-color: #e1e1e1;
}
a{
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

.header__cart-wrap:hover .header__cart-list {
  display: block;
}

.header__cart-icon {
  color: var(--white-color);
  font-size: 2.4rem;
  margin-top: 6px 0;
}

.header__cart-list {
  position: absolute;
  z-index: 1;
  top: calc(100% + 10px);
  right: -5px;
  background-color: var(--white-color);
  width: 400px;
  border-radius: 2px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  display: none;
  animation: fadeIn ease-in 0.2s;
  cursor: default;
}

.header__cart-list::after {
  content: "";
  border-width: 20px 26px;
  border-style: solid;
  border-color: transparent transparent var(--white-color) transparent;
  position: absolute;
  right: 0px;
  top: -29px;
  cursor: pointer;
}

.header__cart-list--no-cart {
  padding: 24px 0;
}

.header__cart-no-cart-img {
  width: 54%;
  display: none;
}

.header__cart-list-no-cart-msg {
  display: none;
  font-size: 1.4rem;
  margin-top: 14px;
  color: var(--text-color);
}
.header__cart-list--no-cart .header__cart-no-cart-img,
.header__cart-list--no-cart .header__cart-list-no-cart-msg {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Header cart */
.header__cart {
  width: 150px;
  text-align: center;
}

.header__cart-wrap {
  position: relative;
  display: inline-block;
  padding: 0 12px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;

}

.header__cart-wrap:hover .header__cart-list {
  display: block;
}

.header__cart-icon {
  color: var(--white-color);
  font-size: 2.4rem;
  margin-top: 6px 0;
}

.header__cart-list {
  position: absolute;
  z-index: 1;
  top: calc(100% + 10px);
  right: -5px;
  background-color: var(--white-color);
  width: 400px;
  border-radius: 2px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  display: none;
  animation: fadeIn ease-in 0.2s;
  cursor: default;
}

.header__cart-list::after {
  content: "";
  border-width: 20px 26px;
  border-style: solid;
  border-color: transparent transparent var(--white-color) transparent;
  position: absolute;
  right: 0px;
  top: -29px;
  cursor: pointer;
}

.header__cart-list--no-cart {
  padding: 24px 0;
}

.header__cart-no-cart-img {
  width: 54%;
  display: none;
}

.header__cart-list-no-cart-msg {
  display: none;
  font-size: 1.4rem;
  margin-top: 14px;
  color: var(--text-color);
}
.header__cart-list--no-cart .header__cart-no-cart-img,
.header__cart-list--no-cart .header__cart-list-no-cart-msg {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.header__cart-notice {
  position: absolute;
  padding: 1px 7px;
  top: -8px;
  right: -4px;
  font-size: 1.4rem;
  line-height: 1.4rem;
  border-radius: 10px;
  border: 2px solid #ee4d2d;
  color: var(--primary-color);
  background-color: var(--white-color);
  user-select: none;
  -webkit-user-select: none;
}

.header__cart-heading {
  text-align: left;
  margin: 8px 0 8px 12px;
  font-size: 1.4rem;
  color: #999;
  font-weight: 400;
}

.header__cart-list-item {
  padding-left: 0;
  list-style: none;
  max-height: 56vh;
  overflow-y: auto;
}
.header__cart-item {
  display: flex;
  align-items: center;
}

.header__cart-item:hover {
  background-color: #f8f8f8;
}

.header__cart-img {
  width: 42px;
  height: 42px;
  margin: 12px;
  border: 1px solid var(--border-color);
}

.header__cart-item-info {
  width: 100%;
  margin-right: 12px;
}
.header__cart-item-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__cart-item-name {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  overflow: hidden;
  flex: 1;
  padding-right: 16px;
  max-height: 4rem;
  color: var(--text-color);
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;
}

.header__cart-item-price {
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--primary-color);
}
.header__cart-item-multiply {
  font-size: 1rem;
  margin: 0 4px;
  color: #757575;
}
.header__cart-item-qnt {
  font-size: 1.2rem;
  color: #757575;
}
.header__cart-item-body {
  display: flex;
  justify-content: space-between;
}
.header__cart-item-description {
  color: #757575;
  font-size: 1.2rem;
  font-weight: 300;
}

.header__cart-item-remove {
  color: var(--text-color);
  font-size: 1.4rem;
}

.header__cart-item-remove:hover {
  color: var(--primary-color);
  cursor: pointer;
}

.header__cart-view-cart {
  float: right;
  margin: 0 12px 12px 0;
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
              <NavLink to={"/login"} className="nav-link">Đăng nhập</NavLink>
              <div className="hr1 mx-2" />
              <NavLink to={"/signup"} className="font-weight-bold">Đăng kí</NavLink>
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

            {/*Giỏ hàng*/}
            <div className="header__cart">
              <div className="header__cart-wrap">
                <img
                  className="icon-shop"
                  src={`${process.env.PUBLIC_URL}/assets/images/shop.png`}
                  alt=""
                />
                <span className="header__cart-notice">3</span>
                {/* No cart : header__cart-list--no-cart */}
                <div className="header__cart-list ">
                  {/* Nocart */}
                  <img
                    src="./assets/img/no-cart.png"
                    alt="No Cart"
                    className="header__cart-no-cart-img"
                  />
                  <span className="header__cart-list-no-cart-msg">
                    Chưa có sản phẩm
                  </span>
                  {/* Hascart */}
                  <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                  {/* Cart item */}
                  <ul className="header__cart-list-item">
                    <li className="header__cart-item">
                      <img
                        src="https://placeimg.com/320/120/tech"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set dĩa nhôm 7075 39T cho Raider FI dĩa nhôm 7075
                            39T cho Raider FI dĩa nhôm 7075 39T cho Raider FI
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">
                              2.000.000đ
                            </span>
                            <span className="header__cart-item-multiply">
                              x
                            </span>
                            <span className="header__cart-item-qnt">2</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description">
                            Phân loại : Bạc
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                    <li className="header__cart-item">
                      <img
                        src="https://placeimg.com/320/120/tech"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set dưỡng ẩm whoo vàng
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">
                              3.105.000đ
                            </span>
                            <span className="header__cart-item-multiply">
                              x
                            </span>
                            <span className="header__cart-item-qnt">1</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description">
                            Phân loại : mức
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                    <li className="header__cart-item">
                      <img
                        src="https://placeimg.com/320/120/tech"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set kem mắt hoàn lưu cao cấp
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">
                              11.610.000đ
                            </span>
                            <span className="header__cart-item-multiply">
                              x
                            </span>
                            <span className="header__cart-item-qnt">3</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description">
                            Phân loại : Tinh hoa
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="/#"
                    className="header__cart-view-cart btn btn--primary"
                  >
                    Xem giỏ hàng
                  </a>
                </div>
              </div>
            </div>

            {/*Kết thúc Giỏ hàng*/}
          </div>
        </div>
      </div>
        </StyledHeader>
    </>
  )
}

export default Header