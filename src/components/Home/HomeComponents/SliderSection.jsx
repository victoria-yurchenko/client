import React from 'react';
import TabNavigation from './TabNavigation';
import ProductsList from './ProductsList';

export default function SliderSection({title, products}) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <TabNavigation title={title} />
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <ProductsList
                                products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
