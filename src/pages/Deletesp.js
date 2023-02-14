import React, { useState, useEffect } from 'react';
import Admin from '../components/Admin';

const Deletesp = (props) => {
    return ( <>
    <div className='row'>
        <div className='col-3'>
            <Admin/>
        </div>
        <div className='col-8 ms-5 mt-5'>
            <h1 >Xóa sảm phẩm</h1>
        </div>
    </div>
    
    </> );
}
 
export default Deletesp;