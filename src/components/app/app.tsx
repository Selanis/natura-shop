import React from 'react';
import styles from './app.module.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from '../app-header/app-header';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { Cart } from '../cart/cart';
import { Product } from '../product/product';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/order" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
