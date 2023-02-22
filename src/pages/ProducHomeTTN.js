import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';

const ProductList = (props) =>{
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        const data = response.data.filter(
          (item) => item.category === "thoitrangnam"
        );
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const {addItem} = useCart();
  const addToCart = () => {
    addItem(props.data);
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <Card
          style={{ width: "15rem", height: "auto" }}
          className="text-center p-0 overflow-hidden shadow mx-auto mb-4 mt-3"
        >
          <Link to={`/product-details/${item.id}`}>
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
                  src={item.image}
                  className="img-fluid w-100 h-100"
                />
              </div>
            </div>
          </Link>
          <Card.Body>
            <Card.Title
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <small>{item.title}</small>
            </Card.Title>
            <Card.Title>
              <small>
                Giá bán: <small>{item.price}.000đ</small>
              </small>
            </Card.Title>
            <Button
              className="d-flex align-items-center m-auto border-0"
              onClick={() => addToCart()}
            >
              <BsCartPlus size="1.8rem"  />
              Thêm giỏ hàng
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
