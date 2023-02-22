// import React from "react";
// import styled from "styled-components";
// import { BsCartX } from "react-icons/bs";
// import { useCart } from "react-use-cart";
// import { Button, Col, Container, Row, Table } from "react-bootstrap";

// const Shopcart = (props) => {
//   const StyledCart = styled.div`
//     .hr1 {
//       width: 1px;
//       height: 35px;
//       background-color: #ee4d2d;
//     }

//     .form-control {
//       border: 2px solid #ee4d2d;
//     }
//     .btn {
//       width: 90px;
//     }

//     body {
//       background-color: #f5f5f5;
//     }
//     #header {
//       background-color: #ffffff;
//       height: 100px;
//     }
//     .img-small {
//       width: 100px;
//       height: 100px;
//     }
//     .btn-color {
//       background-color: #ee4d2d;
//       width: 200px;
//       color: white;
//     }
//   `;
//   const {
//     isEmpty,
//     items,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();
//   return (
//     <Container>
//       <h1 className="text-center my-5">
//         {isEmpty ? "Giỏ hàng trống" : "Sản phẩm trong giỏ hàng"}
//       </h1>
//       <Row className="justify-content-center">
//         <Table responsive="sm" striped bordered hover className="mb-5">
//           <tbody>
//             {items.map((item, i) => {
//               return (
//                 <tr key={i}>
//                   <td>
//                     <div
//                       style={{
//                         background: "white",
//                         height: "8rem",
//                         overflow: "hidden",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center"
//                       }}
//                     >
//                       <div style={{ padding: '.5rem'}}><img src={item.image} style={{width: '4rem'}} alt={item.title}/></div>
//                     </div>
//                   </td>
//                   <td>
//                     <h6 style={{whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.title}</h6>
//                   </td>
//                   <td>{item.price}</td>
//                   <td>Số Lượng {item.quantity}</td>
//                   <td>
//                       <Button className="ms-2" onClick={() => updateItemQuantity(item.id, item.quantity  -1)}>-</Button>
//                       <Button className="ms-2" onClick={() => updateItemQuantity(item.id, item.quantity  +1)}>+</Button>
//                       <Button onClick={() => removeItem(item.id)} variant="danger" className="ms-3">Xoá sản phẩm</Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//         {!isEmpty &&
//           <Row className="justify-content-center w-100" style={{position: 'fixed', bottom:0}}>
//               <Col className="py-2">
//                 <h4>Thành tiền: {cartTotal.toFixed()}.000</h4>
//               </Col>
//               <Col className="p-0" md={4}>
//                 <Button variant="danger" className="m-2" onClick={() => emptyCart()}><BsCartX/> Xóa tất cả </Button>
//               </Col>
//           </Row>
//         }
//       </Row>
//     </Container>
//   );
// };

// export default Shopcart;
import React, { useState } from "react";
import styled from "styled-components";
import { BsCartX } from "react-icons/bs";
import { useCart } from "react-use-cart";
import axios from "axios";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";

const Shopcart = (props) => {
 
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // state để lưu thông tin người dùng nhập
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");



const handleCheckout = () => {
  const data = { name, address, phone, note, items };

  axios.post("http://localhost:8000/checkout", data)
    .then((response) => {
      console.log(response.data);
      // xử lý kết quả trả về
    })
    .catch((error) => {
      console.error(error);
      // xử lý lỗi
    });

  setShowModal(false);
};


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
                        alignItems: "center",
                      }}
                    >
                      <div style={{ padding: ".5rem" }}>
                        <img
                          src={item.image}
                          style={{ width: "4rem" }}
                          alt={item.title}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6
                      style={{
                        whiteSpace: "nowrap",
                        width: "14rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </h6>
                  </td>
                  <td>{item.price}</td>
                  <td>Số Lượng {item.quantity}</td>
                  <td>
                    <Button
                      className="ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <Button
                      className="ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => removeItem(item.id)}
                      variant="danger"
                      className="ms-3"
                    >
                      Xoá sản phẩm
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {!isEmpty && (
          <Row
            className="justify-content-center w-100"
            style={{ position: "fixed", bottom: 0 }}
          >
            <Col className="py-2">
              <h4>Thành tiền:{cartTotal} đ</h4>
            </Col>
            <Col className="py-2">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Thanh toán
              </Button>
            </Col>
          </Row>
        )}
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đặt hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Họ và tên:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Địa chỉ:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ của bạn"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Số điện thoại:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số điện thoại của bạn"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNote">
              <Form.Label>Ghi chú:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Nhập ghi chú (nếu có)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleCheckout}>
            Thanh toán
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Shopcart;
