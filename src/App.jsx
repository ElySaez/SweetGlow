import React from 'react'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner/Banner';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from './components/Index/Index';
import Products from './components/Products/Products';
import ItemDetail from  "./components/Products/ItemDetail/ItemDetail"
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Banner />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/categoria/:idCategoria" element={<Products/>} />
          <Route path="/item/:idItem" element={<ItemDetail/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </ >
  )
}

export default App