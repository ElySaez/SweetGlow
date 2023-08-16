import React from 'react'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner/Banner';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from './components/Index/Index';
import ProductList from './components/Products/ProductList';
import ItemDetail from "./components/Products/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Construction from './components/Construction/Construction';
import { CarritoProvider } from './context/CarritoContext';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Banner />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path="/productos" element={<ProductList />} />
            <Route path="/categoria/:idCategoria" element={<ProductList />} />
            <Route path="/item/:idItem" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Construction />} />
          </Routes>
          <Footer />
        </CarritoProvider>
      </BrowserRouter>
    </ >
  )
}

export default App