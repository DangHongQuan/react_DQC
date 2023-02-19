import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    let {image, price, title,id} = props.data;


    const {addItem} = useCart();
    const addToCart = () => {
        addItem(props.data);
    };
  return (
    <Card style={{width: '18rem', height: 'auto'}} className="text-center p-0 overflow-hidden shadow mx-auto mb-4 mt-3">
         <Link to={`/product-details/${id}`}>
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
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>
        </div>
      </Link>
        <Card.Body>
            <Card.Title style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace:'nowrap'}}>{title}</Card.Title>
            <Card.Title>Giá bán: <small>{price}đ</small></Card.Title>
            <Button className='d-flex align-items-center m-auto border-0' onClick={() => addToCart()}><BsCartPlus size="1.8rem"/></Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard;