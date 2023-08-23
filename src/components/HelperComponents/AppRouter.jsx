import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Store from '../Store/Store';
import AddProductForm from '../AddProductForm';

export default function AppRouter({ url, data }) {

    const getProductsByCategory = (categoryName) => {

        // error with valid data here

        let products = {
            productsDBO : [],
            categories : []
        };
        console.log(data);

        if (data != null) {
            data.productDBO.map(product => {
                if (product.category === categoryName)
                    products.productsDBO.push(product);
            });
        }
        products.categories = data.categories;
        console.log(products);

        return data;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/store' element={<Store data={data} />} />
                <Route path='/guitars' element={<Store data={data} />} />
                <Route path='/addnew' element={<AddProductForm url={url} data={data} />} />
            </Routes>
        </BrowserRouter>
    )
}
