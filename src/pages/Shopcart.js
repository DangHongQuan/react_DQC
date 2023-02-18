import React from "react";
import styled from "styled-components";
import { BsCartX } from "react-icons/bs";
import { useCart } from "react-use-cart";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Shopcart = (props) => {
  const StyledCart = styled.div`
    .hr1 {
      width: 1px;
      height: 35px;
      background-color: #ee4d2d;
    }

    .form-control {
      border: 2px solid #ee4d2d;
    }
    .btn {
      width: 90px;
    }

    body {
      background-color: #f5f5f5;
    }
    #header {
      background-color: #ffffff;
      height: 100px;
    }
    .img-small {
      width: 100px;
      height: 100px;
    }
    .btn-color {
      background-color: #ee4d2d;
      width: 200px;
      color: white;
    }
  `;
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Container>
      <h1 className="text-center my-5">
        {isEmpty ? "Giỏ hàng trống" : "Sản phẩm trong giỏ hàng"}
      </h1>
      <Row className="justify-content-center">
        <Table responsive="sm" striped bordered hover className="mb-5">
          <tbody>
            {items.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <div
                      style={{
                        background: "white",
                        height: "8rem",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <div style={{ padding: '.5rem'}}><img src={item.image} style={{width: '4rem'}} alt={item.title}/></div>
                    </div>
                  </td>
                  <td>
                    <h6 style={{whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.title}</h6>
                  </td>
                  <td>{item.price}</td>
                  <td>Số Lượng {item.quantity}</td>
                  <td>
                      <Button className="ms-2" onClick={() => updateItemQuantity(item.id, item.quantity  -1)}>-</Button>
                      <Button className="ms-2" onClick={() => updateItemQuantity(item.id, item.quantity  +1)}>+</Button>
                      <Button onClick={() => removeItem(item.id)} variant="danger" className="ms-3">Xoá sản phẩm</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {!isEmpty && 
          <Row className="justify-content-center w-100" style={{position: 'fixed', bottom:0}}>
              <Col className="py-2">
                <h4>Thành tiền: {cartTotal}</h4>
              </Col>
              <Col className="p-0" md={4}>
                <Button variant="danger" className="m-2" onClick={() => emptyCart()}><BsCartX/> Xóa tất cả </Button>
              </Col>
          </Row>
        }
      </Row>
    </Container>
  );
};

export default Shopcart;
