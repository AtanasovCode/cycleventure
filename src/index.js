import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, withRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './Cart';
import SelectedProduct from './pages/SelectedProduct';
import ShopApp from './ShopApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ShopApp />
);