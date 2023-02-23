import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './product-details.css';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    const [productData, setProductData] = useState([]);
    const { addItem } = useCart();
    const {productId} = useParams();
    
    useEffect(()=>{
        getResponse(productId);
    },[productId]);

    const getResponse = async(productId)=>{
        const res = await fetch(`http://localhost:8000/products/${productId}`)
                          .then(res=> res.json());
                          setProductData(await res);
    }
    const addToCart = (item) => {
        addItem(item);
      };
    
    return (
        <Container className="py-5">
            <Row className="justify-content-center mt-5">
                <Col xs={10} md={7} lg={5} className="p-0">
                  <Lightbox
                        images={[
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 1'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 2'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 3'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 4'
                            }
                        ]}
                  />
                </Col>
                <Col xs={10} md={7} lg={7} >
                    <h1>{productData.title}</h1>
                    <Button 
                        onClick={()=>addToCart(productData)}
                        style={{borderRadius: '0', border: 0}}
                    >
                        <BsCartPlus size="1.8rem"/>
                        Add to cart
                    </Button>
                    <br/>
                    <b >
                        Rs. {productData.price}
                    </b>
                    <br/>
                    <b className="h5">4.1 ⭐</b>
                    <p className="mt-3 h5" style={{opacity: '0.8', fontWeight: '400'}}>
                        {productData.description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;