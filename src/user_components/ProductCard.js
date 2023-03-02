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
  
    <Card style={{height:'320px'}} className=" text-center p-0 overflow-hidden shadow mx-auto mb-4 mt-3">
         <Link to={`/product-details/${id}`}>
        <div
          style={{
            alignItems: "center",
            marginBottom: "inherit",
          }}
        >
          <div>
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>
        </div>
      </Link>
        <Card.Body>
            <Card.Title style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace:'nowrap'}}><small>{title}</small></Card.Title>
            <Card.Title><small style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace:'nowrap'}}>Giá bán: <small>{price}đ</small></small></Card.Title>
            <Button className='mb-1 ' onClick={() => addToCart()} style={{backgroundColor: '#fc5a31', border: '0'}}><BsCartPlus/></Button>
        </Card.Body>
    </Card>

  )
}

export default ProductCard;