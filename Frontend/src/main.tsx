import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productpage from './pages/Productpage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/product/:slug' element={<Productpage/>}/>
    </Routes>
    </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} position={"bottom"}/>
    </QueryClientProvider>
)
