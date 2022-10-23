import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, withRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './Cart';
import SelectedProduct from './pages/SelectedProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<SelectedProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);