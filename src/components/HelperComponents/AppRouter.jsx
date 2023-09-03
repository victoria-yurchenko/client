import React, { useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Store from '../Store/Store';
import AddProductForm from '.././Store/StoreComponents/AddProductForm';
import ChangeProductForm from '../Store/StoreComponents/ChangeProductForm';
import Product from '../Store/Product';
import { useState } from 'react';
import { useEffect } from 'react';
import Checkout from '../Store/StoreComponents/Checkout';
import Login from '../Account/Login';
import DeleteProductForm from '../Store/StoreComponents/DeleteProductForm';
import Registration from '../Account/Registration';
import UserPage from '../Account/Account';
import ShoppingCard from '../Store/ShoppingCard';

export default function AppRouter({ url, data }) {

    const [selectedProductId, setSelectedProductId] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);


    //problem with home page now

    useEffect(() => {
        if (selectedProductId != 0) {
            fetch(`http://localhost:5089/api/maestro/${selectedProductId}`)
                .then(responce => responce.json().then(data => {
                    console.log(data);
                    setSelectedProduct(data);
                }))
                .catch(error => console.log(error));
        }
    }, [selectedProductId]);

    const getProductsByCategory = (categoryName) => {

        // error with valid data here

        let products = {
            productsDBO: [],
            categories: []
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
                <Route path='/login' element={<Login />} />
                <Route path='/myaccount' element={<UserPage />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/store' element={<Store data={data} />} />
                <Route path='/guitars' element={<Store data={data} />} />
                <Route path='/addnew' element={<AddProductForm url={url} data={data} />} />
                <Route path='/product/:id' element={<Product products={data.productsDBO} />} />
                <Route path='/changeproduct/:id' element={<ChangeProductForm url={url} />} />
                <Route path='/product/delete/:id' element={<DeleteProductForm products={data.productsDBO} />} />
                <Route path='/card' element={<ShoppingCard />} />
            </Routes>
        </BrowserRouter>
    )
}
