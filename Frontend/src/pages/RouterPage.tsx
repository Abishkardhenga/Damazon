import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Productpage from './Productpage'
import CartPage from './CartPage'
import SigninPage from './SigninPage'
import Signuppage from './Signuppage'
import ProtectedRoute from '../components/ProtectedRoute'
import ShhippingAdressPage from './ShhippingAdressPage'
import PaymentMethodPage from './PaymentMethodPage'
import PlaceOrderPage from './PlaceOrderPage'
import OrderPage from './OrderPage'

const RouterPage = () => {
  return (
    <Routes>
    <Route path="/" element={<App />}/>    

      <Route path="product/:slug" element={<Productpage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<Signuppage />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="shipping" element={<ShhippingAdressPage />} />
        <Route path="payment" element={<PaymentMethodPage />} />
        <Route path="placeorder" element={<PlaceOrderPage />} />
        <Route path="order/:id" element={<OrderPage />} />
      </Route>
  </Routes> )
    
}

export default RouterPage