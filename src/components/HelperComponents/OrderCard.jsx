import React from 'react'
import ProductCart from './ProductCart'
import { useEffect } from 'react'

export default function OrderCard(order) {

    useEffect(() => {
        // console.log(order.order.products[0]);
    }, [])

    return (
        <div className='container'>
            <div className="col-12">
                {
                    order.order.products.map(p =>
                        <div className="row" style={{margin: '30px'}}>
                            <table>
                                <thead>
                                    <tr>
                                        <th width="10%"></th>
                                        <th width="70%"></th>
                                        <th width="30%"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={`data:image/jpeg;base64,${p.image}`} height={100} alt='product image' />
                                        </td>
                                        <td>
                                            <label>{p.product.name}</label>
                                        </td>
                                        <td>
                                            <label>${p.product.newPrice}</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
