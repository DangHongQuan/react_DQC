import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const ProductListCard = (props) => {
  const [productData, setProductData] = useState(props.data);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedProductData, setEditedProductData] = useState({
    id: productData.id,
    title: productData.title,
    price: productData.price,
    description: productData.description,
    category: productData.category,
    image: productData.image,
    rating: {
      rate: productData.rate,
      count: productData.count,
    },
  });

  const handleEditProduct = () => {
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };

  const handleSaveEditedProduct = async () => {
    try {
      await axios.put(`http://localhost:8000/products/${productData.id}`, {
        id: editedProductData.id,
        title: editedProductData.title,
        price: editedProductData.price,
        description: editedProductData.description,
        category: editedProductData.category,
        image: editedProductData.image,
        rating: {
          rate: editedProductData.rate,
          count: editedProductData.count,
        },
      });
      setProductData(editedProductData);
      setShowEditPopup(false);
    } catch (error) {
      console.log("Failed to update product", error);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:8000/products/${productData.id}`);
      setProductData(null);
      window.location.reload();
    } catch (error) {
      console.log("Failed to delete product", error);
    }
  };

  if (!productData) {
    return null; // Don't render anything if the product has been deleted
  }

  const { image, price, title, id } = productData;

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
        <Card.Title
          style={{
            fontWeight: "bold",
            height: "2.5rem",
            overflow: "hidden",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary" onClick={handleEditProduct}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={handleDeleteProduct}>
          Delete
        </Button>
        <Modal show={showEditPopup} onHide={handleCloseEditPopup}>
          <Modal.Header closeButton>
            <Modal.Title>Edit product</Modal.Title>
          </Modal.Header>
          {/* edit */}
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>ID</Form.Label>
                <Form.Control
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
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={editedProductData.title}
                  onChange={(event) =>
                    setEditedProductData({
                      ...editedProductData,
                      title: event.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  value={editedProductData.price}
                  onChange={(event) =>
                    setEditedProductData({
                      ...editedProductData,
                      price: event.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formTitle">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={editedProductData.description}
                  onChange={(event) =>
                    setEditedProductData({
                      ...editedProductData,
                      description: event.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formTitle">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={editedProductData.category}
                  onChange={(event) =>
                    setEditedProductData({
                      ...editedProductData,
                      category: event.target.value,
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
              <Form.Group controlId="formImage">
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Rate"
                  value={editedProductData.rate}
                  onChange={(event) =>
                    setEditedProductData({
                      ...editedProductData,
                      rate: event.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter count"
                  value={editedProductData.count}
                  onChange={(event) =>
                    setEditedProductData({
                      ...editedProductData,
                      count: event.target.value,
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

export default ProductListCard;
