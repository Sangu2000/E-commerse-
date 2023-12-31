import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product/Product';
import Products from './modules/Products';
import Categories from './components/Categories';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart.js';
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products/:id' element={<Product />} />

        <Route path='/products' element={<Products />} />
        <Route path='/categories/:name' element={<CategoryProducts />} />
        <Route path='cart' element={<Cart />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>

      <Footer />
    </div>
  );
}
// Hello
export default App;
