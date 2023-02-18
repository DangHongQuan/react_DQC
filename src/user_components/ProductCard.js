import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const ProductCard = (props) => {
    let {image, price, title} = props.data;


    const {addItem} = useCart();
    const addToCart = () => {
        addItem(props.data);
    };
  return (
    <Card style={{width: '18rem', height: 'auto'}} className="text-center p-0 overflow-hidden shadow mx-auto mb-4 mt-3">
        <div style={{background: "white", height: "15rem", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "inherit"}}>
            <div style={{width: "9rem"}}>
                 <Card.Img variant='top' src={image} className="img-fluid"/>
            </div>
        </div>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>Giá bán: <small>{price}đ</small></Card.Title>
            <Button variant='primary'>Thêm vào giỏ hàng</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard