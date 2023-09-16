import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import OrderCard from '../HelperComponents/OrderCard';

export default function Orders() {

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        // console.log(localStorage.getItem('UserLoggedId'));
        fetch('http://localhost:5089/api/maestro/orders?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                console.log(data);
                setOrders(data.filter(o => o.orderStatus == "InProcess"));
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
                // picture.addEventListener('click', () => {
                //     const img = document.createElement('img');
                //     img.src = p.image;
                //     img.after(picture);
                // });
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

    const handleRecieveOrder = (event) => {
        const id = event.target.parentElement.parentElement.children[0].value;

        fetch('http://localhost:5089/api/maestro/recieveorder?' + new URLSearchParams({
            id: id
        }))
            .then(responce => responce.json().then(data => {
                console.log(data);
                document.location.reload();
            }))
            .catch(error => console.log(error));
    };

    const handleCancelOrder = (event) => {
        const id = event.target.parentElement.parentElement.children[0].value;
        console.log(id)

        fetch('http://localhost:5089/api/maestro/cancelorder?' + new URLSearchParams({
            id: id
        }))
            .then(responce => responce.json().then(data => {
                console.log(data);
                document.location.reload();
            }))
            .catch(error => console.log(error));
    };

    const handleSubmit = () => {
        window.location.replace(`http://localhost:3000/store`);
    };

    return (
        <div className="container" >
            {
                orders == null || orders.length == 0
                    ?
                    <>
                        <h4 style={{ marginTop: '50px' }}>You do not have any order, it is time to fix this!</h4>
                        <a
                            href="#"
                            type='submit'
                            className="primary-btn order-submit"
                            style={{ textDecoration: 'none', marginTop: '50px' }}
                            onClick={handleSubmit}
                        >
                            Shop Now
                        </a>
                    </>
                    :
                    orders.filter(o => o.orderStatus == "InProcess").map((o, index) =>
                        <div style={{ marginTop: '30px' }}>
                            <input type="hidden" value={o.orderId} />
                            <label style={{ marginLeft: '80px' }}>Order: </label>
                            <label style={{ fontWeight: 600, marginLeft: '20px' }}># {o.orderId}</label>
                            <label style={{ marginLeft: '20px' }}> / </label>
                            <label style={{ fontWeight: 600, marginLeft: '20px' }}> {o.orderStatus}</label>
                            <hr />
                            <OrderCard order={o} />
                            <a style={{ marginLeft: '80px', cursor: 'pointer' }} onClick={handleCancelOrder}>
                                <i><Icon icon="fa:trash" style={{ marginRight: '10px' }} /></i>
                                <span>Cancel</span>
                            </a>
                            <a style={{ marginLeft: '80px', cursor: 'pointer' }} onClick={handleRecieveOrder}>
                                <i><Icon icon="fa:check" style={{ marginRight: '10px' }} /></i>
                                <span>Recieved</span>
                            </a>
                            <hr />
                            <label style={{ marginLeft: '80px' }}>Total: </label>
                            <label style={{ fontWeight: 600, marginLeft: '20px' }}>$ {o.totalPrice}</label>
                        </div>
                    )
            }
        </div>
    )
}
