import React from 'react';
import Banner from './HomeComponents/Banner';
import HotDeal from './HomeComponents/HotDeal';
import SliderSection from '../HelperComponents/SliderSection';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5089/api/maestro')
            .then(responce => responce.json().then(data => {
                setProducts(data.productsDBO);
                console.log(data.productsDBO);
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
                            products={products.slice(0, 6)}
                        />
                    </div>
            }
        </>
    )
}
