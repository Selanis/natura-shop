import { useRef } from 'react';
import styles from './app.module.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from '../app-header/app-header';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { Cart } from '../cart/cart';
import { Product } from '../product/product';

function App() {
  const aboutRef = useRef(null);
  const specialOfferRef = useRef(null);
  const catalogRef = useRef(null);
  const contactRef = useRef(null);

  const goToFrame = (ref: any) => {
    ref.current.scrollIntoView();
  }

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header 
          goToFrame={goToFrame} 
          aboutRef={aboutRef} 
          specialOfferRef={specialOfferRef}
          catalogRef={catalogRef}
          contactRef={contactRef}
        />
        <Routes>
          <Route path="/" element={<Main 
            goToFrame={goToFrame} 
            aboutRef={aboutRef} 
            specialOfferRef={specialOfferRef}
            catalogRef={catalogRef}
          />} />
          <Route path="/order" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>

        <Footer componentRef={contactRef} />
      </BrowserRouter>
    </div>
  );
}

export default App;
