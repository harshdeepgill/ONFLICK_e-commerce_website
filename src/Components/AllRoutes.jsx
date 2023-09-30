

import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails';
import PaymentPage from '../Pages/PaymentPage';
import { ProductList } from '../Pages/ProductList';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from './LoginPage';
import Wishlist from '../Pages/Wishlist';



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product_details/:id' element={<ProductDetails />} />
        <Route path='/Paymentpage' element={<PaymentPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist/></ProtectedRoute>}/>
          <Route path='/ProductList' element={<ProtectedRoute><ProductList/></ProtectedRoute>} />
        
      </Routes>
    </div>
  )
}
export default AllRoutes;
 
