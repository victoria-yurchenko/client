import Slider from 'react-slick';
import ProductCart from '../../HelperComponents/ProductCart';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';


export default function ProductsList({ products }) {

    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,    //count depends on screen size
        slidesToScroll: 1,  //count depends on screen size
        autoplay: true,
        autoplaySpeed: 6000,
    });

    function useWindowSize() {

        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            console.log(products)
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    function SetWindowDimensions(props) {
        const [width, height] = useWindowSize();
        let slidesToShow = 0;
        if (width < 768) {
            slidesToShow = 1;
        }
        else if (width < 992) {
            slidesToShow = 3;
        }
        else if (width < 1200) {
            slidesToShow = 4;
        }
        else {
            slidesToShow = 5;
        }
        let settingsTemp = settings;
        settingsTemp.slidesToShow = slidesToShow;
    }

    return (
        <>
            {
                products == null
                    ?
                    <></>
                    :
                    <div className="products-slick">
                        {SetWindowDimensions()}
                        <Slider {...settings}>
                            {
                                products.map(
                                    (item, index) =>
                                        <ProductCart
                                            key={index}
                                            productId={item.id}
                                            image={item.image}
                                            isNew={item.isNew}
                                            isSale={item.isSale}
                                            sale={item.sale}
                                            category={item.category}
                                            productName={item.productName}
                                            newPrice={item.newPrice}
                                            oldPrice={item.oldPrice}
                                        />
                                )
                            }
                        </Slider>
                    </div>}
        </>
    )
}
