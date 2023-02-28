import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import SearchFilter from "react-filter-search";
import { Row } from "react-bootstrap";
import ProductListCard from "./ProducListCard";
import EditQc from "./EditQc";
import Menu from "./Menu";
import Headerchung from "./Headerchung";

const ProductAdmniList = (props) => {
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function getResponse() {
    const res = await fetch("http://localhost:8000/QCimg").then((res) =>
      res.json()
    );
    setProductData(await res);
  }

  useEffect(() => {
    getResponse();
  }, []);
  return (
    <>
      <div id="page-top">
        {/* Page Wrapper */}
        <div id="wrapper">
      <Menu/>
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
             <Headerchung/>
              <div className="container-fluid">
                <h1 className="text-center text-success">chỉnh sửa Quảng Cáo</h1> 
                <SearchFilter
                  value={searchInput}
                  data={productData}
                  renderResults={(results) => (
                    <Row className="justify-content-center">
                      {results.map((item, i) => (
                        <EditQc data={item} key={i} />
                      ))}
                    </Row>
                  )}
                ></SearchFilter>
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
};

export default ProductAdmniList;
