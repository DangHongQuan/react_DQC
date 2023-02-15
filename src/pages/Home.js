import React from 'react'
import styled from 'styled-components'

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
}
`;
const Home = () => {
  return (
    <>
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
                <img className="w-100 h-100" src={`${process.env.PUBLIC_URL}/assets/images/chuyentien.png`} alt="" />
              </div>
              <div className="h-50 pt-1">
                <img className="w-100 h-100" src={`${process.env.PUBLIC_URL}/assets/images/chuyentien.png`} alt="" />
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
                  <img className="w-100 h-100" src="assets/dienthoai.png" alt="" />
                </div>
                <p className="mb-0 flex-column mt-2">Điện Thoại &amp;</p>
                <p className="mb-0 flex-column">Phụ Kiện</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img
                    className="w-100 h-100"
                    src="assets/thietbidientu.png"
                    alt=""
                  />
                </div>
                <p className="mb-0 flex-column mt-2">Thiết Bị Điện Tử </p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/maytinh.png" alt="" />
                </div>
                <p className="mb-0 flex-column mt-2">Máy tính &amp;</p>
                <p className="mb-0 flex-column">Laptop</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/mayanh.png" alt="" />
                </div>
                <p className="mb-0 flex-column mt-2">Máy ảnh &amp; Máy</p>
                <p className="mb-0 flex-column">Quay Phim</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/dongho.png" alt="" />
                </div>
                <p className="mb-0 flex-column mt-2">Đồng Hồ</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img
                    className="w-100 h-100"
                    src="assets/giaydepnam.png"
                    alt=""
                  />
                </div>
                <p className="mb-0 flex-column mt-2">Giày Dép Nam</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img
                    className="w-100 h-100"
                    src="assets/images/thietbigiadung.png"
                    alt=""
                  />
                </div>
                <p className="mb-0 text-center mt-2">Thiết Bị Điện Gia Dụng</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/thethao.png" alt="" />
                </div>
                <p className="mb-0 text-center mt-2">Thể Thao &amp; Du Lịch</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/xemay.png" alt="" />
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
                  <img className="w-100 h-100" src="assets/mevaembe.png" alt="" />
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
                <p className="mb-0 text-center mt-2">Nhà Cửa &amp; Đời Sống</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/sacdep.png" alt="" />
                </div>
                <p className="mb-0 flex-column mt-2">Sắc Đẹp</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/suckhoe.png" alt="" />
                </div>
                <p className="mb-0 flex-column mt-2">Sức Khỏe</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/giaydepnu.png" alt="" />
                </div>
                <p className="mb-0 flex-column mt-2">Giày Dép Nữ</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/tuivinu.png" alt="" />
                </div>
                <p className="mb-0 flex-column mt-2">Túi Ví Nữ</p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img className="w-100 h-100" src="assets/phukiennu.png" alt="" />
                </div>
                <p className="mb-0 text-center mt-2">
                  Phụ Kiện &amp; Trang Sức Nữ
                </p>
              </div>
              <div className="d-flex flex-column align-items-center card-kategory">
                <div className="wrap-img">
                  <img
                    className="w-100 h-100"
                    src="assets/bachhoaonline.png"
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
          <div className="row mx-0 sale mt-4">
            <div className="d-flex px-4 pt-4">
              {/* <h5 class="mr-5">FLASH SALE</h5> */}
              <div className="fl-sale mr-3" />
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
                    <img className="w-100 h-100" src="assets/asdd.png" alt="" />
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
                    <img className="w-100 h-100" src="assets/asdd.png" alt="" />
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
                    <img className="w-100 h-100" src="assets/asdd.png" alt="" />
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
                    <img className="w-100 h-100" src="assets/asdd.png" alt="" />
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
                    <img className="w-100 h-100" src="assets/asdd.png" alt="" />
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
                    <img className="w-100 h-100" src="assets/asdd.png" alt="" />
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
          </div>
          <div
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
          </div>
          <div className="row flex-column mx-0 mt-4">
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
                    <img src="assets/222.png" alt="" style={{ width: "50%" }} />
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
          </div>
          {/* pencarian populer */}
          <div
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
          </div>
          {/* produk terlaris */}
          <div className="row mx-0 mt-4" style={{ backgroundColor: "#ffffff" }}>
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
                        <div className="d-flex w-100" style={{ height: "87%" }}>
                          <div
                            className="h-100 mr-2"
                            style={{ width: "60%", backgroundColor: "yellow" }}
                          >
                            <img
                              className="w-100 h-100"
                              src="assets/55.png"
                              alt=""
                            />
                          </div>
                          <div className="h-100" style={{ width: "40%" }}>
                            <div className style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
                                alt=""
                              />
                            </div>
                            <div className="mt-2" style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
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
                        <div className="d-flex w-100" style={{ height: "87%" }}>
                          <div
                            className="h-100 mr-2"
                            style={{ width: "60%", backgroundColor: "yellow" }}
                          >
                            <img
                              className="w-100 h-100"
                              src="assets/55.png"
                              alt=""
                            />
                          </div>
                          <div className="h-100" style={{ width: "40%" }}>
                            <div className style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
                                alt=""
                              />
                            </div>
                            <div className="mt-2" style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
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
                        <div className="d-flex w-100" style={{ height: "87%" }}>
                          <div
                            className="h-100 mr-2"
                            style={{ width: "60%", backgroundColor: "yellow" }}
                          >
                            <img
                              className="w-100 h-100"
                              src="assets/55.png"
                              alt=""
                            />
                          </div>
                          <div className="h-100" style={{ width: "40%" }}>
                            <div className style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
                                alt=""
                              />
                            </div>
                            <div className="mt-2" style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
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
                        <div className="d-flex w-100" style={{ height: "87%" }}>
                          <div
                            className="h-100 mr-2"
                            style={{ width: "60%", backgroundColor: "yellow" }}
                          >
                            <img
                              className="w-100 h-100"
                              src="assets/55.png"
                              alt=""
                            />
                          </div>
                          <div className="h-100" style={{ width: "40%" }}>
                            <div className style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
                                alt=""
                              />
                            </div>
                            <div className="mt-2" style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
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
                        <div className="d-flex w-100" style={{ height: "87%" }}>
                          <div
                            className="h-100 mr-2"
                            style={{ width: "60%", backgroundColor: "yellow" }}
                          >
                            <img
                              className="w-100 h-100"
                              src="assets/55.png"
                              alt=""
                            />
                          </div>
                          <div className="h-100" style={{ width: "40%" }}>
                            <div className style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
                                alt=""
                              />
                            </div>
                            <div className="mt-2" style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
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
                        <div className="d-flex w-100" style={{ height: "87%" }}>
                          <div
                            className="h-100 mr-2"
                            style={{ width: "60%", backgroundColor: "yellow" }}
                          >
                            <img
                              className="w-100 h-100"
                              src="assets/55.png"
                              alt=""
                            />
                          </div>
                          <div className="h-100" style={{ width: "40%" }}>
                            <div className style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
                                alt=""
                              />
                            </div>
                            <div className="mt-2" style={{ height: "48%" }}>
                              <img
                                className="w-100 h-100"
                                src="assets/55.png"
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
                    style={{ width: 50, right: "-90px", position: "relative" }}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* rekomendasi */}
          <div className="row mx-0 flex-column mt-4">
            <nav style={{ backgroundColor: "#ffffff" }}>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  style={{ color: "#f53d2d", borderRight: "none" }}
                >
                  <h6>REKOMENDASI</h6>
                </a>
                <a
                  className="
            nav-link
            d-flex
            justify-content-center
            align-items-center
          "
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  style={{ color: "#f53d2d", borderRight: "none", width: 100 }}
                >
                  <img src="assets/gratis.png" alt="" width={50} />
                </a>
              </div>
            </nav>
            <div className="tab-content mt-2" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row mx-0 mt-2" style={{ height: 200 }}>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-0 mt-2" style={{ height: 200 }}>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-center mt-4">
                  <button
                    className="btn w-50"
                    style={{
                      color: "#888",
                      border: "1px solid #888",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    Lihat Lainnya
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="row mx-0 mt-2" style={{ height: 200 }}>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-0 mt-2" style={{ height: 200 }}>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 pl-0">
                    <div
                      className="d-flex flex-column h-100"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-100 h-75 position-relative"
                        style={{ backgroundColor: "#f53d2d" }}
                      >
                        <img
                          className="w-100 h-100 position-absolute"
                          src="assets/55.png"
                          alt=""
                        />
                      </div>
                      <div className="w-100 d-flex flex-column px-2">
                        <span>Total Bag Alice Mini</span>
                        <div
                          className="
                    w-100
                    pb-2
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                  "
                        >
                          <span style={{ color: "#f53d2d", fontSize: 14 }}>
                            Rp 4.900
                          </span>
                          <span style={{ color: "#888", fontSize: 12 }}>
                            10+ Terjual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-center mt-4">
                  <button
                    className="btn w-50"
                    style={{
                      color: "#888",
                      border: "1px solid #888",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    Lihat Lainnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </StyledHome>
    </>
  )
}

export default Home