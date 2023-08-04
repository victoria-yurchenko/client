import React from 'react';
import Slider from 'react-slick';
import ProductCart from '../../ProductCart';


export default function ProductsList() {

    var mediaQueryList = window.matchMedia('(min-width: 729px)');

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4, //count depends on screen size
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    const products = [
        {
            image: 'https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg',
            isNew: true,
            isSale: true,
            sale: 20,
            category: 'Guitars',
            productName: 'Fender Stratocaster',
            price: 1200
        },
        {
            image: 'https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg',
            isNew: true,
            isSale: true,
            sale: 20,
            category: 'Guitars',
            productName: 'Fender Stratocaster',
            price: 1200
        },
        {
            image: 'https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg',
            isNew: true,
            isSale: true,
            sale: 20,
            category: 'Guitars',
            productName: 'Fender Stratocaster',
            price: 1200
        },
        {
            image: 'https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg',
            isNew: true,
            isSale: true,
            sale: 20,
            category: 'Guitars',
            productName: 'Fender Stratocaster',
            price: 1200
        },
    ];

    return (
        <div className="products-slick">
            <Slider {...settings}>
                {
                    products.map(
                        (item, index) =>
                            <ProductCart 
                                key={index}
                                image={item.image}
                                isNew={item.isNew}
                                isSale={item.isSale}
                                sale={item.sale}
                                category={item.category}
                                productName={item.productName}
                                price={item.price}
                            />
                    )
                }
            </Slider>
        </div>
    )
}
