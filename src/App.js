import './App.css';
import React from 'react';
import Header from './components/HeaderComponents/Header/Header';
import Banner from './components/Sections/Banner/Banner';
import Navigation from './components/HeaderComponents/Navigation/Navigation';
import NewProductsList from './components/Sections/NewProductsList/NewProductsList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>

      <Header />
      <Navigation />
      <Banner />
      <NewProductsList />
      {/* <div className='screen-container'>
        <Screen />
        Now under wanetd
        <CatalogueItem/>
      </div> */}
    </div>
  );
}

export default App;