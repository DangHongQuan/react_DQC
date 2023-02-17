import React, { useState } from "react";

const Shopcart = (props) => {
  return (
    <>
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row d-flex">
                  <div className="col-4">
                    <img src="assets/logoshopee.png" alt />
                  </div>
                  <div className="col mt-3">
                    <div className="hr1 text-end" />
                  </div>
                  <div
                    className="col-7 mt-3 fs-4 text-start fw-bold"
                    style={{ color: "#ee4d2d" }}
                  >
                    <p>Giỏ Hàng</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="input-group mt-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="XẢ HÀNG SALE 50%"
                  />
                  <button
                    className="btn"
                    style={{ backgroundColor: "#ee4d2d" }}
                  >
                    <i className="bi bi-search text-white " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="container bg-white mt-5">
            <div className="row">
              <div className="col">
                <p>Sản Phẩm</p>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <p>Đơn Giá</p>
                  </div>
                  <div className="col">
                    <p>Số Lượng</p>
                  </div>
                  <div className="col">
                    <p>Số Tiền</p>
                  </div>
                  <div className="col">
                    <p>Thao Tác</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container bg-white mt-5">
            <div className="row">
              <div className="col">
                <img
                  src="assets/asd.png"
                  
                  className="float-start img-small"
                />
                <p>
                  (Hàng sẵn giao ngay) Đồ chơi ông già Noel leo dây, lộn nhào,
                  leo than(Hàng sẵn giao ngay) Đồ chơi ông già Noel leo dây, lộn
                  nhào, leo than
                </p>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">₫150.000</div>
                  <div className="col">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn border btn-outline-danger"
                        style={{ width: 40, height: 40 }}
                        id="tru"
                        onclick="tru()"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="num"
                        defaultValue={1}
                        className="btn border"
                        style={{ width: 40, height: 40 }}
                      />
                      <button
                        type="button"
                        className="btn border btn-outline-danger"
                        style={{ width: 40, height: 40 }}
                        id="cong"
                        onclick="cong()"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <p>Số Tiền</p>
                  </div>
                  <div className="col">
                    <p>Xóa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className="container text-end">
            <p className="d-inline mx-3">Tổng thanh toán (0 Sản phẩm): ₫0</p>
            <button type="submit" className="btn-color btn">
              Mua Hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopcart;
