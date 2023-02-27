import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const EditQc = (props) => {
  const [productData, setProductData] = useState(props.data);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedProductData, setEditedProductData] = useState({
    id: productData.id,
    image: productData.image,
  });

  const handleEditProduct = () => {
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };

  const handleSaveEditedProduct = async () => {
    try {
      await axios.put(`http://localhost:8000/QCimg/${productData.id}`, {
        id: editedProductData.id,
        image: editedProductData.image,
        
      });
      setProductData(editedProductData);
      setShowEditPopup(false);
    } catch (error) {
      console.log("Failed to update product", error);
    }
  };

  

  if (!productData) {
    return <div></div>; // Don't render anything if the product has been deleted
  }

  const { image, id } = productData;

  return (
    <Card
      style={{ width: "15rem", height: "auto" }}
      className="text-center p-0 overflow-hidden shadow mx-auto mb-4 mt-3"
    >
      <div>{id}</div>
      <div
        style={{
          background: "white",
          height: "15rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "inherit",
        }}
      >
        <div style={{ width: "9rem" }}>
          <Card.Img
            variant="top"
            src={image}
            className="img-fluid w-100 h-100"
          />
        </div>
      </div>
      <Card.Body>
        <Button variant="primary" onClick={handleEditProduct}>
          Edit
        </Button>{" "}
       
        <Modal show={showEditPopup} onHide={handleCloseEditPopup}>
          <Modal.Header closeButton>
            <Modal.Title>Edit QC</Modal.Title>
          </Modal.Header>
          {/* edit */}
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>ID</Form.Label>
                <Form.Control
                disabled
                  type="text"
                  placeholder="Enter id"
                  value={editedProductData.id}
                  onChange={(event) =>
                    setEditedProductData({
                      ...editedProductData,
                      id: event.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                  value={editedProductData.image}
                  onChange={(event) =>
                    setEditedProductData({
                      ...editedProductData,
                      image: event.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditPopup}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveEditedProduct}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default EditQc;
