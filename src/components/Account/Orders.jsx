import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

export default function Orders() {

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        // console.log(localStorage.getItem('UserLoggedId'));
        fetch('http://localhost:5089/api/maestro/orders?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                console.log(data);
                setOrders(data);
            }))
            .catch(error => console.log(error));
    }, []);

    const handleToggle = (index) => {
        const currentNode = document.getElementById(index);
        const children = currentNode.children;
        if (children[2].style.display === 'none') {
            children[1].style.display = 'none';
            children[2].style.display = 'block';
            let totalPrice = 0;
            orders[index].products.map((p, indexChild) => {
                const div = document.createElement('div');
                div.className = 'row';
                div.style.marginTop = '5px';
                div.style.backgroundColor = '#e0e0e056';
                div.style.borderRadius = '5px';
                div.style.padding = '5px';
                div.id = `${index}${indexChild}`;
                div.height = '100px'

                const name = document.createElement('div');
                name.className = 'col-4';
                name.innerHTML = `${p.product.name}`;

                const price = document.createElement('div');
                price.className = 'col-4';
                price.innerHTML = `${p.product.newPrice}$`;

                const picture = document.createElement('btn');
                picture.className = 'col-4 btn btn-sm ';
                picture.innerHTML = `Show picture`;
                picture.addEventListener('click', () => {
                    const img = document.createElement('img');
                    img.src = p.image;
                    img.after(picture);
                });
                totalPrice += p.product.newPrice;

                div.appendChild(name);
                div.appendChild(price);
                div.appendChild(picture);
                // if (indexChild == orders[index].products.length) {
                //     const hr = document.createElement('hr');
                //     const total = document.createElement('div');
                //     total.innerHTML = `${totalPrice} $`;
                //     div.appendChild(hr);
                //     div.appendChild(total);

                // }
                currentNode.after(div);
            });
        }
        else {
            children[2].style.display = 'none';
            children[1].style.display = 'block';
            orders[index].products.map((p, indexChild) => {
                const div = document.getElementById(`${index}${indexChild}`);
                div.remove();
            });
        }
        // parent.children[2].style.display = 'block';
    };

    const handleTogglePicture = (p) => {

    }

    return (
        <div className="container" >
            {
                orders == null
                    ? <></>
                    :
                    orders.map((o, index) =>
                        index == 0
                            ?
                            <div id={index} className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '20px', cursor: 'pointer' }} onClick={() => handleToggle(index)}>
                                <div className="col-11">
                                    <a style={{ textDecoration: 'none', color: 'black' }}>
                                        <i><img src='' /></i>
                                        <span>Order #{o.orderId}</span>
                                    </a>
                                </div>
                                <div className="col-1">
                                    <i><Icon icon="fa:arrow-down" style={{ marginRight: '10px' }} /></i>
                                </div>
                                <div className="col-1" style={{ display: 'none' }}>
                                    <i><Icon icon="fa:arrow-up" style={{ marginRight: '10px' }} /></i>
                                </div>
                            </div>
                            :
                            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }}>
                                <div className="col-11">
                                    <a style={{ textDecoration: 'none', color: 'black' }}>
                                        <i><Icon icon="fa:shopping-cart" style={{ marginRight: '10px' }} /></i>
                                        <span>Card</span>
                                    </a>
                                </div>
                                <div className="col-1">
                                    <i><Icon icon="fa:arrow-down" style={{ marginRight: '10px' }} /></i>
                                </div>
                            </div>
                    )
            }
        </div>
    )
}
