import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productpage from './pages/Productpage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StoreProvider } from './Store.tsx';
import CartPage from './pages/CartPage.tsx';
import SigninPage from './pages/SigninPage.tsx';
import Signuppage from './pages/Signuppage.tsx';
import ShhippingAdressPage from './pages/ShhippingAdressPage.tsx';
import PaymentMethodPage from './pages/PaymentMethodPage.tsx';


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>

    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/product/:slug' element={<Productpage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<Signuppage />} />
          <Route path="shipping" element={<ShhippingAdressPage />} />
          <Route path="payment" element={<PaymentMethodPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom"} />
    </QueryClientProvider>
  </StoreProvider>
)
