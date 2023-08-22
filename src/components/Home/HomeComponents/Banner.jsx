import React from 'react';
import CollectionCard from '../../CollectionCard';

export default function Banner() {

    const collections = [
        {
            imageUrl: 'https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg',
            productName: 'Guitar',
            catalogueLink: '#',
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagUM4AYdNCGq9DqVKx_ZImkgIafBsNZBU7Q&usqp=CAU',
            productName: 'Piano',
            catalogueLink: '#',
        },
        {
            imageUrl: 'https://www.drumbazar.net/media/catalog/product/cache/52836d5eb74e48d409889e4eb0cae335/s/1/s13h30_main_1.jpg',
            productName: 'Percussion',
            catalogueLink: '#',
        }
    ];

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    {
                        collections.map(
                            (item, index) =>
                                <div className="col-md-4 col-xs-6">
                                    <CollectionCard
                                        key={index}
                                        imageUrl={item.imageUrl}
                                        productName={item.productName}
                                        catalogueLink={item.catalogueLink}
                                    />
                                </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
