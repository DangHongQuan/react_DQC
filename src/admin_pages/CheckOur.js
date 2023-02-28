import React, { useState, useEffect } from "react";
import axios from "axios";

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/checkout")
      .then((response) => {
        setCheckoutData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/checkout/${id}`)
      .then((response) => {
        setCheckoutData(checkoutData.filter((data) => data.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
<table class="table">
  <thead>
    <tr>
      <th>Tên khách hàng</th>
      <th>Địa chỉ giao hàng</th>
      <th>Số điện thoại</th>
      <th>Sản phẩm</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {checkoutData.map((data) => (
      <tr key={data.id}>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.phone}</td>
        <td>
          {data.items &&
            data.items.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            ))}
        </td>
        <td>
          {data.items &&
            data.items.map((item) => (
              <div key={item.id}>
                <p>{item.price}</p>
              </div>
            ))}
        </td>
        <td>
          {data.items &&
            data.items.map((item) => (
              <div key={item.id}>
                <p>{item.quantity}</p>
              </div>
            ))}
        </td>
        <td>
          <button class="btn btn-primary" onClick={() => handleDelete(data.id)}>Hoàn tất</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  );
};

export default Checkout;
