

import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails';
import PaymentPage from '../Pages/PaymentPage';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product_details/:id' element={<ProductDetails />} />
        <Route path='/Paymentpage' element={<PaymentPage/>} />
      </Routes>
    </div>
  )
}
export default AllRoutes;
 
