import React from 'react';
import Banner from './HomeComponents/Banner';
import HotDeal from './HomeComponents/HotDeal';
import SliderSection from '../HelperComponents/SliderSection';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {

    const [products, setProducts] = useState();
    const [topSellingProducts, setTopSellingProducts] = useState([]);

    const getTopSellingProducts = (products) => {
        return products.sort((a, b) => a.rate < b.rate ? 1 : -1).splice(0, 6);
    };

    useEffect(() => {
        fetch('http://localhost:5089/api/maestro')
            .then(responce => responce.json().then(data => {
                setProducts(data.productsDBO);
                setTopSellingProducts(getTopSellingProducts(data.productsDBO));
            }))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            {
                products == null
                    ?
                    <></>
                    :
                    <div>
                        <Banner />
                        <SliderSection
                            title='New Products'
                            products={products.filter(product => product.isNew).slice(0, 6)}
                        />
                        <HotDeal />
                        <SliderSection
                            title='Top Selling'
                            products={topSellingProducts}
                        />
                    </div>
            }
        </>
    )
}
