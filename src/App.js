import './App.css';
import React from 'react';
import Header from './components/HeaderComponents/Header/Header';
import Navigation from './components/HeaderComponents/Navigation/Navigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div >

      <Header />
      <Navigation />

      {/* <BreadCrumb /> */}
      {/* <Product /> */}
      {/* product */}


      {/* HOME_PAGE */}
      <Home />
      {/* HOME_PAGE */}


      {/* <Checkout /> */}


      {/* SHOP */}
      {/* <Store />  */}
      {/* SHOP */}

      <NewsLetter />
      <Footer />
      {/* <div className='screen-container'>
        <Screen />
        Now under wanetd
        <CatalogueItem/>
      </div> */}
    </div>
  );
}

export default App;