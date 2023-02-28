import React from 'react'
import { Link } from 'react-router-dom'

const Danhmuc = () => {
  return (
   <>
               <div className="row mx-0 mt-5 pb-3 kategory">
              <h5 className="p-4">DANH MỤC</h5>
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/producTTN"}>
                    <img
                      className="w-100 h-100"
                      src="assets/thoitrangnam.png"
                      alt=""
                    />
                  </Link>
                  <span className="mb-0 flex-column mt-2">Thời Trang Nam</span>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/producTTnu"}>
                    <img
                      className="w-100 h-100"
                      src="assets/thoitrangnu.png"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 flex-column mt-2">Thời trang nữ</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/dienthoai"}>
                    <img
                      className="w-100 h-100"
                      src="assets/dienthoai.jpg"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 flex-column mt-2">Điện Thoại &amp;</p>
                  <p className="mb-0 flex-column">Phụ Kiện</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/thietbidien"}>
                    <img
                      className="w-100 h-100"
                      src="assets/thietbidientu.jpg"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 flex-column mt-2">Thiết Bị Điện Tử </p>
                </div>

                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/mayanh"}>
                    <img
                      className="w-100 h-100"
                      src="assets/mayanh.jpg"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 flex-column mt-2">Máy ảnh &amp; Máy Quay Phim</p>
             
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/dongho"}>
                    <img
                      className="w-100 h-100"
                      src="assets/dongho.jpg"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 flex-column mt-2">Đồng Hồ</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/giaydep"}>
                    <img
                      className="w-100 h-100"
                      src="assets/giaydepnam.jpg"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 flex-column mt-2">Giày Dép Nam</p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/thietbigiadung"}>
                    <img
                      className="w-100 h-100"
                      src="assets/images/thietbigiadung.jpg"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 text-center mt-2">
                    Thiết Bị Điện Gia Dụng
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/thethao"}>
                    <img
                      className="w-100 h-100"
                      src="assets/images/thethao.jpg"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 text-center mt-2">
                    Thể Thao &amp; Du Lịch
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center card-kategory">
                  <Link className="wrap-img" to={"/xemay"}>
                    <img
                      className="w-100 h-100"
                      src="assets/images/xemay.jpg"
                      alt=""
                    />
                  </Link>
                  <p className="mb-0 text-center mt-2">
                    Ô Tô &amp; Xe Máy &amp; Xe Đạp
                  </p>
                </div>
              </div>
            </div>
   </>
  )
}

export default Danhmuc