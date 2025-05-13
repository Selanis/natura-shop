import React from 'react';
import styles from './app.module.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from '../app-header/app-header';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/product/:id" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
