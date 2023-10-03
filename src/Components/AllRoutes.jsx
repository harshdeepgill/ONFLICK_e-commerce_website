

import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails';
import PaymentPage from '../Pages/PaymentPage';
import { ProductList } from '../Pages/ProductList';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from './LoginPage';

import CheckoutPage from '../Pages/CheckoutPage';

import AdminPage from '../Pages/AdminPage';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product_details/:id' element={<ProductDetails />} />
        <Route path="/product_details/:id/checkout" element={<CheckoutPage />} />

        <Route path='/product_details/:id/checkout/payment' element={<PaymentPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/ProductList' element={<ProductList />} />

        <Route path="/admin" element={<AdminPage />}></Route>


      </Routes>
    </div>
  )
}
export default AllRoutes;

