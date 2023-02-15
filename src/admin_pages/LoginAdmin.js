
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { useState } from 'react';
import Input from './../user_components/Input';
import './../admin_pages/login.css';
const Login = () => {
  return ( 
    <>
    <div  className='container position-absolute top-50 start-50 translate-middle' id='trangtri'>
  <div className="row justify-content-center">
    <div className="datgoldshop-main col-lg-6 col-md-6">
        <div className='row'>
            <div className='col'>
            <h2 className='text-center'>Administrator-DQC</h2>
      <form action method="post">
        <Input  id="ten_dn" placeholder="Nhập Tên Đăng Nhập" />
        <Input id="pass_dn" type="password" placeholder="Nhập Password" />

        <div className='row mt-3' id='quennho'>
          <div className='col-6'>
          <span><input type="checkbox" />Nhớ Tài Khoản</span>
          </div>
          <div className='col-6'>
          <h6><a href="/#" >Quên Mật Khẩu?</a></h6>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col text-center '>
          <button type="submit" className='btn text-white fw-bold'>Đăng Nhập</button>
          </div>
        </div>
        
      </form>
  
            </div>
        </div>
    
    </div>
  </div>
</div>

    </>
   );
}
 
export default Login;