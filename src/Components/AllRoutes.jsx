

import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails';
import PaymentPage from '../Pages/PaymentPage';
import { ProductList } from '../Pages/ProductList';



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product_details/:id' element={<ProductDetails />} />
        <Route path='/Paymentpage' element={<PaymentPage/>} />
        <Route path='/ProductList' element={<ProductList/>} />
      </Routes>
    </div>
  )
}
export default AllRoutes;
 
