import React from 'react';
import Banner from './HomeComponents/Banner';
import HotDeal from './HomeComponents/HotDeal';
import SliderSection from './HomeComponents/SliderSection';

export default function Home() {
    return (
        <div>
            <Banner />
            <SliderSection
                title='New Products'
            />
            <HotDeal />
            <SliderSection
                title='Top Selling'
            />
        </div>
    )
}
