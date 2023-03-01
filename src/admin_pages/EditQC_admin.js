import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import SearchFilter from "react-filter-search";
import { Button, Form, Modal, Row } from "react-bootstrap";
import ProductListCard from "./ProducListCard";
import EditQc from "./EditQc";
import Menu from "./Menu";
import Headerchung from "./Headerchung";

const ProductAdmniList = (props) => {
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false);


  const handleEditProduct = () => {
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };
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
                <Button className="text-end mb-4 float-end" onClick={handleEditProduct} >Add Quảng Cáo</Button>
                <table className="table">
        <thead>
   
            <th>STT</th>
            <th>Hình ảnh</th>
            <th>Sửa</th>
            <th>Xóa</th>
         
        </thead>
                <SearchFilter
                  value={searchInput}
                  data={productData}
                  renderResults={(results) => (
                    <tbody className="text-center">
                      {results.map((item, i) => (
                        <EditQc data={item} key={i} />
                      ))}
                    </tbody>
                  )}
                ></SearchFilter>
                  </table>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* Thêm quảng cáo */}

            <Modal show={showEditPopup} onHide={handleCloseEditPopup}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm Quảng Cáo</Modal.Title>
          </Modal.Header>
          {/* edit */}
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>ID</Form.Label>
                <Form.Control
               
                  type="text"
                  placeholder="Enter id"
                 
                  
                />
              </Form.Group>

              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditPopup}>
              Close
            </Button>
            <Button variant="primary"  >
              Thêm Quảng Cáo
            </Button>
          </Modal.Footer>
        </Modal>
            {/* Kết thúc thêm quảng cáo */}
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
