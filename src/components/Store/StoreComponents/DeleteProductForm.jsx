import { Icon } from '@iconify/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DeleteProductForm({ products }) {

    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5089/api/maestro/${params.id}`)
            .then(responce => responce.json().then(data => {
                console.log(data);
                setProduct(data);
            }))
            .catch(error => console.log(error));
    }, [products]);

    const handleSubmit = () => {
        const options = {
            method: 'DELETE',
        };
        fetch(`http://localhost:5089/api/maestro/${product.productId}`, options)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        window.location.replace(`http://localhost:3000/store`);
    };

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    {
                        product == null
                            ? <></>
                            :
                            <form className='form-group'>
                                <div className="col-12">
                                    <h2>Are you sure you want to delete this product?</h2>
                                    <h4 style={{ marginTop: '40px' }}>{product.productName}</h4>
                                    <span>
                                        {
                                            product.categories.map(c =>
                                                <h6 style={{ marginRight: '20px' }}>{c}</h6>
                                            )
                                        }
                                    </span>
                                    <div>{product.newPrice} $</div>
                                    <div>{product.appearedDate}</div>
                                    <a
                                        href="#"
                                        type='submit'
                                        className="primary-btn order-submit"
                                        style={{ textDecoration: 'none', marginTop: '50px' }}
                                        onClick={handleSubmit}
                                    >
                                        Delete
                                    </a>
                                    <a
                                        href="#"
                                        type='submit'
                                        className="primary-btn order-submit"
                                        style={{
                                            textDecoration: 'none',
                                            marginTop: '50px',
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            border: '1px solid #D10024',
                                            marginLeft: '30px'
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Cancel
                                    </a>

                                </div>

                            </form>
                    }
                </div>
            </div>
        </div>
    )
}
