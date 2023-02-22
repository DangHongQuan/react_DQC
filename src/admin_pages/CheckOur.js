import React, { useState, useEffect } from "react";
import axios from "axios";

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/checkout")
      .then((response) => {
        setCheckoutData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/checkout/${id}`)
      .then((response) => {
        setCheckoutData(checkoutData.filter((data) => data.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      {checkoutData.map((data) => (
        <div key={data.id} className="d-inline-block">
          <p className="d-inline me-2 ">
            Tên khách hàng: <strong>{data.name}</strong>
          </p>
          <p className="d-inline me-2">
            Địa chỉ giao hàng: <strong> {data.address}</strong>
          </p>
          <p className="d-inline me-2">
            Số điện thoại: <strong>{data.phone}</strong>
          </p>
          {data.items &&
            data.items.map((item) => (
              <div key={item.id} className="d-inline">
                <p className="d-inline me-2">
                  Sản phẩm: <strong>{item.title}</strong>
                </p>
                <p className="d-inline me-2">
                  Giá: <strong> {item.price}</strong>
                </p>
                <p className="d-inline me-5">
                  Số lượng: <strong>{item.quantity}</strong>
                </p>
              </div>
            ))}
          <button
            onClick={() => handleDelete(data.id)}
            className="btn btn-primary mb-2"
          >
            Hoàn tất
          </button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
