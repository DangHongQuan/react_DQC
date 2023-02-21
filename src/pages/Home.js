import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchFilter from "react-filter-search";
import { Row } from "react-bootstrap";
import ProductCard from "../user_components/ProductCard";
import { NavLink } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useCart } from "react-use-cart";
import Myconponent from "./Myconponent";
const StyledHome = styled.div`
/* carousel */
.content {
  position: relative;
  top: 130px;
  background-color: #e1e1e1;
}

.content .shape1 {
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(-90deg);
  top: 17px;
  left: 20px;
}
.content .shape2 {
  position: absolute;
  left: -3px;
  top: -3px;
}
.content .shape3 {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}
.content .shape4 {
  position: absolute;
  transform: rotate(90deg);
  right: 17px;
  top: 20px;
}

.wrap-carousel {
  height: 250px;
  position: relative;
  top: 30px;
  z-index: 2;
}

.carousel-indicators li {
  border: 0;
  border-radius: 20px;
  width: 10px;
  height: 10px;
}

/* jenis sale */

.jenis-sale {
  padding: 20px;
  background-color: #ffffff;
  margin-top: 60px;
}

.jenis-sale p {
  font-size: 14px;
}
.wrap-img {
  border-radius: 12px;
  width: 50px;
  height: 50px;
  position: relative;
  border: 1px solid #888;
  padding: 5px;
}

.wrap-img img {
  width: 100%;
  height: 100%;
}

/* KATEGORY */
.kategory {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.kategory h5 {
  color: #8e8e8e;
  font-weight: 500;
}

.kategory p {
  font-size: 14px;
}

.card-kategory {
  padding: 10px 5px;
  width: 10%;
  height: 140px;
  border: 1px solid #f4f4f4;
}

.card-kategory .wrap-img {
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 20px;
  border: none;
}

/* sale */
.sale {
  background-color: #ffffff;
  /* padding: 13px; */
  flex-direction: column;
  padding-bottom: 20px;
}
.sale h5 {
  color: #f53d2d;
}

.sale span {
  background-color: black;
  color: #fff;
  font-weight: bold;
  padding: 0 5px;
}

.sale .diskon span {
  background-color: transparent;
}

.diskon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(255, 212, 36, 0.9);
  width: 60px;
  height: 60px;
}

.total {
  position: absolute;
  bottom: 0;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text span {
  background-color: #ffffff;
  color: #f53d2d;
  font-size: 20px;
  padding: 0;
  font-weight: 400;
}

.text span:first-child {
  font-size: 14px;
  font-weight: 400;
}

.progresss {
  left: 0;
  width: 90%;
  border-radius: 12px;
  background-color: #ff000057;
  display: flex;
  height: 20px;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.progress-on {
  background-color: red;
  position: absolute;
  left: 0;
  top: 0;
  width: 75%;
  z-index: 6;
  height: 100%;
}
.progresss span {
  background-color: transparent;
  color: #ffffff;
  font-size: 12px;
  position: relative;
  z-index: 7;
  font-weight: 100;
}

.row-card {
  height: 250px;
  border-top: 1px solid #9b9b9b7a;
}

.wrap-img-sale {
  height: 70%;
  width: 80%;
  position: relative;
}

/* pencarian populer */
.card-pencarian {
  width: 20%;
  border-top: 1px solid #d0d0d0;
  border-right: 1px solid #d0d0d0;
  border-left: 1px solid #d0d0d0;
}

.card-pencarian span {
  font-size: 14px;
}

/* rekomendasi */
.nav-link.active {
  border-bottom: 3px solid #f53d2d !important;
}import { useCart } from 'react-use-cart';
import { useCart } from 'react-use-cart';

`;
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

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function getResponse() {
    const res = await fetch("http://localhost:8000/products").then((res) =>
      res.json()
    );
    setProductData(await res);
  }

  useEffect(() => {
    getResponse();
  }, []);

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
                <div>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <BiSearch size="2rem" />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Nhanh tay săn voucher lên đến 50%"
                      className="bg-white"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </InputGroup>
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

              <NavLink to={"/shopcart"}>
                {/* //cart */}
                <Myconponent />
                {/* <Myconponent />
                <img
                  className="icon-shop"
                  src={`${process.env.PUBLIC_URL}/assets/images/shop.png`}
                  alt=""
                /> */}
              </NavLink>
            </div>
          </div>
        </div>
      </StyledHeader>
      <StyledHome>
        <div className="content">
          <img
            className="shape1"
            src={`${process.env.PUBLIC_URL}/assets/images/shape1.png`}
            alt=""
          />
          <img
            className="shape2"
            src={`${process.env.PUBLIC_URL}/assets/images/shape2.png`}
            alt=""
          />
          <img
            className="shape3"
            src={`${process.env.PUBLIC_URL}/assets/images/shape1.png`}
            alt=""
          />
          <img
            className="shape4"
            src={`${process.env.PUBLIC_URL}/assets/images/shape2.png`}
            alt=""
          />
          <div className="container">
            {/* carousel */}
            <div className="row wrap-carousel">
              <div className="col-8 h-100 pr-1">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide h-100"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    />
                  </ol>
                  <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/slider/3.png`}
                        className="d-block w-100 h-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item h-100">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/slider/4.png`}
                        className="d-block w-100 h-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item h-100">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/slider/5.png`}
                        className="d-block w-100 h-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only" />
                  </a>
                </div>
              </div>
              <div className="col-4 h-100 pl-0">
                <div className="h-50">
                  <img
                    className="w-100 h-100"
                    src={`${process.env.PUBLIC_URL}/assets/images/chuyentien.png`}
                    alt=""
                  />
                </div>
                <div className="h-50 pt-1">
                  <img
                    className="w-100 h-100"
                    src={`${process.env.PUBLIC_URL}/assets/images/chuyentien.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* kategory */}
            <div className="row mx-0 mt-4 kategory">
              <h5 className="p-4">DANH MỤC</h5>
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/thoitrangnam.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Thời Trang Nam</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/dienthoai.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Điện Thoại &amp;</p>
                  <p className="mb-0 flex-column">Phụ Kiện</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/thietbidientu.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Thiết Bị Điện Tử </p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/maytinh.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Máy tính &amp;</p>
                  <p className="mb-0 flex-column">Laptop</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/mayanh.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Máy ảnh &amp; Máy</p>
                  <p className="mb-0 flex-column">Quay Phim</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/dongho.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Đồng Hồ</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/giaydepnam.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Giày Dép Nam</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/images/thietbigiadung.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 text-center mt-2">
                    Thiết Bị Điện Gia Dụng
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/images/thethao.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 text-center mt-2">
                    Thể Thao &amp; Du Lịch
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/images/xemay.jpg"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 text-center mt-2">
                    Ô Tô &amp; Xe Máy &amp; Xe Đạp
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/thoitrangnu.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Thời Trang Nữ</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/mevaembe.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Mẹ &amp; Em Bé</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/nhacuavadoisong.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 text-center mt-2">
                    Nhà Cửa &amp; Đời Sống
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/sacdep.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Sắc Đẹp</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/suckhoe.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Sức Khỏe</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/giaydepnu.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Giày Dép Nữ</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/tuivinu.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Túi Ví Nữ</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/phukiennu.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 text-center mt-2">
                    Phụ Kiện &amp; Trang Sức Nữ
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/bachhoaonlone.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Bách Hóa Online</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <div className="wrap-img">
                    <img
                      className="w-100 h-100"
                      src="assets/nhasachonline.png"
                      alt=""
                    />
                  </div>
                  <p className="mb-0 flex-column mt-2">Nhà Sách Online</p>
                </div>
              </div>
            </div>
            {/* flash sale */}
            {/* <div className="row mx-0 sale mt-4">
              <div className="d-flex px-4 pt-4">
                {/* <h5 class="mr-5">FLASH SALE</h5> */}
            {/* <div className="fl-sale mr-3" />
                <span>00</span>
                <span className="ml-3">00</span>
                <span className="ml-3">00</span>
              </div>
              <div className="row mx-0 mt-4 row-card">
                <div className="col-2 h-100 position-relative">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="diskon">
                      <span
                        className="font-weight-bold"
                        style={{ color: "#f53d2d" }}
                      >
                        35%
                      </span>
                      <span className="text-white font-weight-bold">OFF</span>
                    </div>
                    <div className="wrap-img-sale">
                      <img
                        className="w-100 h-100"
                        src="assets/asdd.png"
                        alt=""
                      />
                    </div>
                    <div className="total w-100">
                      <div className="text">
                        <span>Rp</span>
                        <span>246.250</span>
                      </div>
                      <div className="progresss">
                        <span> 1 TERJUAL</span>
                        <div className="progress-on" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2 h-100 position-relative">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="diskon">
                      <span
                        className="font-weight-bold"
                        style={{ color: "#f53d2d" }}
                      >
                        35%
                      </span>
                      <span className="text-white font-weight-bold">OFF</span>
                    </div>
                    <div className="wrap-img-sale">
                      <img
                        className="w-100 h-100"
                        src="assets/asdd.png"
                        alt=""
                      />
                    </div>
                    <div className="total w-100">
                      <div className="text">
                        <span>Rp</span>
                        <span>246.250</span>
                      </div>
                      <div className="progresss">
                        <span> 1 TERJUAL</span>
                        <div className="progress-on" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2 h-100 position-relative">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="diskon">
                      <span
                        className="font-weight-bold"
                        style={{ color: "#f53d2d" }}
                      >
                        35%
                      </span>
                      <span className="text-white font-weight-bold">OFF</span>
                    </div>
                    <div className="wrap-img-sale">
                      <img
                        className="w-100 h-100"
                        src="assets/asdd.png"
                        alt=""
                      />
                    </div>
                    <div className="total w-100">
                      <div className="text">
                        <span>Rp</span>
                        <span>246.250</span>
                      </div>
                      <div className="progresss">
                        <span> 1 TERJUAL</span>
                        <div className="progress-on" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2 h-100 position-relative">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="diskon">
                      <span
                        className="font-weight-bold"
                        style={{ color: "#f53d2d" }}
                      >
                        35%
                      </span>
                      <span className="text-white font-weight-bold">OFF</span>
                    </div>
                    <div className="wrap-img-sale">
                      <img
                        className="w-100 h-100"
                        src="assets/asdd.png"
                        alt=""
                      />
                    </div>
                    <div className="total w-100">
                      <div className="text">
                        <span>Rp</span>
                        <span>246.250</span>
                      </div>
                      <div className="progresss">
                        <span> 1 TERJUAL</span>
                        <div className="progress-on" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2 h-100 position-relative">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="diskon">
                      <span
                        className="font-weight-bold"
                        style={{ color: "#f53d2d" }}
                      >
                        35%
                      </span>
                      <span className="text-white font-weight-bold">OFF</span>
                    </div>
                    <div className="wrap-img-sale">
                      <img
                        className="w-100 h-100"
                        src="assets/asdd.png"
                        alt=""
                      />
                    </div>
                    <div className="total w-100">
                      <div className="text">
                        <span>Rp</span>
                        <span>246.250</span>
                      </div>
                      <div className="progresss">
                        <span> 1 TERJUAL</span>
                        <div className="progress-on" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2 h-100 position-relative">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="diskon">
                      <span
                        className="font-weight-bold"
                        style={{ color: "#f53d2d" }}
                      >
                        35%
                      </span>
                      <span className="text-white font-weight-bold">OFF</span>
                    </div>
                    <div className="wrap-img-sale">
                      <img
                        className="w-100 h-100"
                        src="assets/asdd.png"
                        alt=""
                      />
                    </div>
                    <div className="total w-100">
                      <div className="text">
                        <span>Rp</span>
                        <span>246.250</span>
                      </div>
                      <div className="progresss">
                        <span> 1 TERJUAL</span>
                        <div className="progress-on" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              className="row mx-0 mt-4 py-1"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="col-8">
                <img
                  className="w-100 h-100"
                  src="assets/1234.png"
                  alt=""
                  style={{ borderRadius: 20 }}
                />
              </div>
              <div className="col-4">
                <img
                  className="w-100 h-100"
                  src="assets/12345.png"
                  alt=""
                  style={{ borderRadius: 20 }}
                />
              </div>
            </div> */}
            {/* <div className="row flex-column mx-0 mt-4">
              <div className="d-flex justify-content-between w-100 pl-5 my-3">
                <div className="d-flex align-items-center">
                  <h4 className="mb-0" style={{ color: "#f53d2d" }}>
                    SHOPEE MALL
                  </h4>
                  <div className="hr1 mx-4" />
                  <img src="assets/11.png" alt="" />
                  <span className="ml-2">7 Hr Pengembalian</span>
                  <img className="ml-4" src="assets/22.png" alt="" />
                  <span className="ml-2">100% Ori</span>
                  <img className="ml-4" src="assets/33.png" alt="" />
                  <span className="ml-2">Gratis Ongkir</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="mr-4" style={{ color: "#f53d2d" }}>
                    Lihat Semua
                  </span>
                  <img src="assets/44.png" alt="" />
                </div>
              </div>
              <div
                className="row mx-0 py-2"
                style={{ height: 500, backgroundColor: "#ffffff" }}
              >
                <div className="col-4 h-100">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide h-100"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={2}
                      />
                    </ol>
                    <div className="carousel-inner h-100">
                      <div className="carousel-item h-100 active">
                        <img className="h-100" src="assets/55.png" alt="..." />
                      </div>
                      <div className="carousel-item h-100">
                        <img className="h-100" src="assets/66.png" alt="..." />
                      </div>
                      <div className="carousel-item h-100">
                        <img className="h-100" src="assets/77.png" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8 h-100">
                  <div
                    id="carouselExampleIndicators2"
                    className="carousel slide h-100"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={2}
                      />
                    </ol>
                    <div className="carousel-inner h-100">
                      <div className="carousel-item h-100 active">
                        <div className="row">
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item h-100">
                        <div className="row">
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-column align-items-center">
                            <img
                              src="assets/poipoi.png"
                              alt=""
                              style={{ height: "67%" }}
                            />
                            <span style={{ color: "#f53d2d" }}>
                              Diskon s/d 50%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators2"
                      role="button"
                      data-slide="prev"
                      style={{ left: "-90px" }}
                    >
                      <img
                        src="assets/222.png"
                        alt=""
                        style={{ width: "50%" }}
                      />
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators2"
                      role="button"
                      data-slide="next"
                    >
                      <img
                        src="assets/333.png"
                        alt=""
                        style={{ width: "50%", position: "relative", left: 70 }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* pencarian populer */}
            {/* <div
              className="row flex-column mx-0 pt-3 mt-4"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="px-4 d-flex justify-content-between align-items-center w-100">
                <h4 className style={{ color: "#888" }}>
                  PENCARIAN POPULER
                </h4>
                <span style={{ color: "#f53d2d", fontWeight: 100 }}>Ubah</span>
              </div>
              <div className="d-flex w-100 pt-3">
                <div className="card-pencarian">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column">
                      <span className="font-weight-bold"> Sepatu </span>
                      <span
                        className="font-weight-bold"
                        style={{ color: "#888" }}
                      >
                        136RB+Produk
                      </span>
                    </div>
                    <img className="w-50" src="assets/123.png" alt="" />
                  </div>
                </div>
                <div className="card-pencarian">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column">
                      <span className="font-weight-bold"> Sepatu </span>
                      <span
                        className="font-weight-bold"
                        style={{ color: "#888" }}
                      >
                        136RB+Produk
                      </span>
                    </div>
                    <img className="w-50" src="assets/123.png" alt="" />
                  </div>
                </div>
                <div className="card-pencarian">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column">
                      <span className="font-weight-bold"> Sepatu </span>
                      <span
                        className="font-weight-bold"
                        style={{ color: "#888" }}
                      >
                        136RB+Produk
                      </span>
                    </div>
                    <img className="w-50" src="assets/123.png" alt="" />
                  </div>
                </div>
                <div className="card-pencarian">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column">
                      <span className="font-weight-bold"> Sepatu </span>
                      <span
                        className="font-weight-bold"
                        style={{ color: "#888" }}
                      >
                        136RB+Produk
                      </span>
                    </div>
                    <img className="w-50" src="assets/123.png" alt="" />
                  </div>
                </div>
                <div className="card-pencarian">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column">
                      <span className="font-weight-bold"> Sepatu </span>
                      <span
                        className="font-weight-bold"
                        style={{ color: "#888" }}
                      >
                        136RB+Produk
                      </span>
                    </div>
                    <img className="w-50" src="assets/123.png" alt="" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* produk terlaris */}
            <div
              className="row mx-0 mt-4"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="d-flex flex-column w-100 pt-4 pb-2">
                <div className="d-flex justify-content-between w-100 px-4 pb-2">
                  <h4 style={{ color: "#888" }}>PRODUK TERLARIS</h4>
                  <div
                    className="d-flex align-items-center"
                    style={{ color: "#f53d2d" }}
                  >
                    <span> Lihat Semua </span>
                    <span className="h4 mb-0 ml-2">&gt;</span>
                  </div>
                </div>
                {/* carousel */}
                <div
                  id="carouselExampleControls3"
                  className="carousel slide"
                  data-ride="carousel"
                  style={{ height: 300 }}
                >
                  <div className="carousel-inner h-100">
                    <div className="carousel-item h-100 active">
                      <div
                        className="row h-100 mx-0"
                        style={{ borderTop: "2px solid #f2f2f2" }}
                      >
                        <div
                          className="col-4 h-100 pt-4"
                          style={{ borderRight: "2px solid #f2f2f2" }}
                        >
                          <div
                            className="d-flex w-100"
                            style={{ height: "87%" }}
                          >
                            <div
                              className="h-100 mr-2"
                              style={{
                                width: "60%",
                                backgroundColor: "white",
                              }}
                            >
                              <img
                                className="w-100 h-100"
                                src="assets/1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="h-100" style={{ width: "40%" }}>
                              <div className style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/3.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="mt-2" style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/2.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="position-relative h5"
                            style={{ color: "#888", top: 10 }}
                          >
                            Masker Kain Karakter
                          </span>
                        </div>
                        <div
                          className="col-4 h-100 pt-4"
                          style={{ borderRight: "2px solid #f2f2f2" }}
                        >
                          <div
                            className="d-flex w-100"
                            style={{ height: "87%" }}
                          >
                            <div
                              className="h-100 mr-2"
                              style={{
                                width: "60%",
                                backgroundColor: "white",
                              }}
                            >
                              <img
                                className="w-100 h-100"
                                src="assets/2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="h-100" style={{ width: "40%" }}>
                              <div className style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/3.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="mt-2" style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/6.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="position-relative h5"
                            style={{ color: "#888", top: 10 }}
                          >
                            Masker Kain Karakter
                          </span>
                        </div>
                        <div
                          className="col-4 h-100 pt-4"
                          style={{ borderRight: "2px solid #f2f2f2" }}
                        >
                          <div
                            className="d-flex w-100"
                            style={{ height: "87%" }}
                          >
                            <div
                              className="h-100 mr-2"
                              style={{
                                width: "60%",
                                backgroundColor: "white",
                              }}
                            >
                              <img
                                className="w-100 h-100"
                                src="assets/3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="h-100" style={{ width: "40%" }}>
                              <div className style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/4.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="mt-2" style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/2.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="position-relative h5"
                            style={{ color: "#888", top: 10 }}
                          >
                            Masker Kain Karakter
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item h-100">
                      <div
                        className="row h-100 mx-0"
                        style={{ borderTop: "2px solid #f2f2f2" }}
                      >
                        <div
                          className="col-4 h-100 pt-4"
                          style={{ borderRight: "2px solid #f2f2f2" }}
                        >
                          <div
                            className="d-flex w-100"
                            style={{ height: "87%" }}
                          >
                            <div
                              className="h-100 mr-2"
                              style={{
                                width: "60%",
                                backgroundColor: "white",
                              }}
                            >
                              <img
                                className="w-100 h-100"
                                src="assets/4.jpg"
                                alt=""
                              />
                            </div>
                            <div className="h-100" style={{ width: "40%" }}>
                              <div className style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/6.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="mt-2" style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/3.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="position-relative h5"
                            style={{ color: "#888", top: 10 }}
                          >
                            Masker Kain Karakter
                          </span>
                        </div>
                        <div
                          className="col-4 h-100 pt-4"
                          style={{ borderRight: "2px solid #f2f2f2" }}
                        >
                          <div
                            className="d-flex w-100"
                            style={{ height: "87%" }}
                          >
                            <div
                              className="h-100 mr-2"
                              style={{
                                width: "60%",
                                backgroundColor: "white",
                              }}
                            >
                              <img
                                className="w-100 h-100"
                                src="assets/2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="h-100" style={{ width: "40%" }}>
                              <div className style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/4.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="mt-2" style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/3.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="position-relative h5"
                            style={{ color: "#888", top: 10 }}
                          >
                            Masker Kain Karakter
                          </span>
                        </div>
                        <div
                          className="col-4 h-100 pt-4"
                          style={{ borderRight: "2px solid #f2f2f2" }}
                        >
                          <div
                            className="d-flex w-100"
                            style={{ height: "87%" }}
                          >
                            <div
                              className="h-100 mr-2"
                              style={{
                                width: "60%",
                                backgroundColor: "white",
                              }}
                            >
                              <img
                                className="w-100 h-100"
                                src="assets/6.jpg"
                                alt=""
                              />
                            </div>
                            <div className="h-100" style={{ width: "40%" }}>
                              <div className style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="mt-2" style={{ height: "48%" }}>
                                <img
                                  className="w-100 h-100"
                                  src="assets/1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="position-relative h5"
                            style={{ color: "#888", top: 10 }}
                          >
                            Masker Kain Karakter
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls3"
                    role="button"
                    data-slide="prev"
                  >
                    <img
                      src="assets/222.png"
                      alt=""
                      style={{ width: 50, left: "-90px", position: "relative" }}
                    />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls3"
                    role="button"
                    data-slide="next"
                  >
                    <img
                      src="assets/333.png"
                      alt=""
                      style={{
                        width: 50,
                        right: "-90px",
                        position: "relative",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* rekomendasi */}
            <SearchFilter
              value={searchInput}
              data={productData}
              renderResults={(results) => (
                <Row className="justify-content-center">
                  {results.map((item, i) => (
                    <ProductCard data={item} key={i} />
                  ))}
                </Row>
              )}
            ></SearchFilter>
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
