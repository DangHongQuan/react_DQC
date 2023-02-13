import React from 'react'
import  styled  from 'styled-components';
import { Helmet } from 'react-helmet';
import { signup } from '../main';

const StyledSignin = styled.div` 
#background-login{
    background-image:url(https://cf.shopee.vn/file/sg-11134004-23010-qacwpnvb05lve3);
    background-repeat: no-repeat;
    background-position:left;
    height: 900px;
    background-size: contain;
    width: 100%;
    background-color: #ee4d2d;
    }
    
    /* form{
        margin-right: 250px;
        margin-top:50px ;
        width: 500px;
        height: 500px;
    }
    
    button{
        background-color: #ee4d2d;
        color: white;
    } */
    
    .form-container {
        width: 500px;
        height: 800px;
        float: right;
        margin-right: 15%;
        text-align: center;
        background-color: white;
        margin-top: 70px;
      }
    
      .form-group {
        margin: 20px 0;
      }
    
      label {
        font-weight: bold;
      }
    
      input[type="text"],
      input[type="password"] {
        width: 70%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid gray;
        border-radius: 5px;
      }
      input[type="submit"] {
        width: 70%;
        padding: 10px;
        margin: 20px 0;
        background-color: #ee4d2d;
        color: white;
        border: none;
        cursor: pointer;
      }
    
      .hr1{
        height: 1px;
    width: 100%;
    background-color: #dbdbdb;
    display: inline;
    align-items: center;
      }
    
      .hoac{
        color: #ccc;
    padding: 0 16px;
    text-transform: uppercase;
    font-size: .75rem;
      }
`;

const Signup = () => {
  return (
    <>
    <Helmet>
      <script src="../main.js"></script>
    </Helmet>
    <StyledSignin>
    <div>
  <header>
    <div className="container">
      <div className="row p-4">
        <div className="col">
          <img src="assets/logoshopee.png" alt="" className="img-fluid " />
          <div className="d-inline mt-3">
            <p className="d-inline fs-4 fw-bold p-4 mt-3">Đăng Kí</p>
          </div>
        </div>
        <div className="col">
          <p className="text-end mt-3" style={{color: '#ee4d2d'}}>Bạn cần giúp đỡ ?</p>
        </div>
      </div>
    </div>
  </header>
  <div id="background-login">
    <div className="form-container container-fluid">
      <div className="text-start fs-3 ms-5 mt-3">Đăng Kí</div>
      <form id="login-form">
        <div className="form-group">
          <input type="text" name="username" id="username" placeholder="Email/Số điện thoại/Tên Đăng Nhập" />
        </div>
        <div className="form-group">
          <input type="password" name="password" id="password" placeholder="Mật Khẩu" />
        </div>
        <div className="form-group">
          <input type="text" name="nameUser" id="nameUser" placeholder="Tên khách hàng" />
        </div>
        <div className="form-group">
          <input type="text" name="addres" id="address" placeholder="Địa chỉ" />
        </div>
        <div className="form-group">
          <input type="text" name="phone" id="telphone" placeholder="Số điện thoại" />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Ảnh đại diện: </label>
          <input type="file" name="avatar" id="avatar" />
        </div>
        <input onClick={signup} type="submit" defaultValue="Đăng Kí" />
        <a href="login.html" className="text-decoration-none">Đăng Nhập</a>
      </form>
    </div>
  </div>
</div>
    </StyledSignin>
        

    </>
  );
}

export default Signup