import './App.css';
import React from 'react';
import Header from './components/LayoutComponents/Header/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsLetter from './components/LayoutComponents/NewsLetter';
import Footer from './components/LayoutComponents/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import AppRouter from './components/HelperComponents/AppRouter';

function App() {

  const [data, setData] = useState(null);
  const url = 'http://localhost:5089/api/maestro';

  useEffect(
    () => {
      fetch(url)
        .then(responce => responce.json().then(data => {
          // console.log(data);
          setData(data);
        }))
        .catch(error => console.log(error));
    }, []);

  return (
    <div >
      <Header />
      {
        data != null
          ? <AppRouter data={data} />
          : <></>

      }
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;

// TODO: Search, wishlist, update, hotdeals, track order