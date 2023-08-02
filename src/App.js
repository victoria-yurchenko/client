import './App.css';
import React from 'react';
import Header from './components/HeaderComponents/Header/Header';
import Banner from './components/Sections/Banner/Banner';
import Navigation from './components/HeaderComponents/Navigation/Navigation';

function App() {
  return (
    <div>

      <Header />
      <Navigation />
      <Banner />
      {/* <div className='screen-container'>
        <Screen />
        Now under wanetd
        <CatalogueItem/>
      </div> */}
    </div>
  );
}

export default App;