import React from 'react'

export default function AddHotDealForm() {

    const handleAddHotDeal = () => {

        const productCode = document.getElementById('product-code').value;
        const finishDate = new Date(document.getElementById('finish-date').value).toJSON();

        console.log(productCode);
        console.log(finishDate);

        console.log(
            JSON.stringify({
                productId: productCode,
                finishesAt: finishDate
            })
        );

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
                productId: productCode,
                finishesAt: finishDate
            })
        };
        fetch('http://localhost:5089/api/maestro/addtohotdeals', options)
            .then(response => {
                if (response.status === 200) {
                    window.location.replace(`http://localhost:3000/store`);
                }
                document.getElementById('validation-error').innerHTML = 'Data is incorrect, please try again';
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <input id='product-code' type="text" className="input" placeholder='Enter the product code' />
            <input id='finish-date' type="text" className="input" placeholder='Enter the finish date in format: YYYY-MM-DD' style={{ marginTop: '10px' }} />
            <input type="submit" className="input btn" value="Add Hot Deal" style={{ marginTop: '10px' }} onClick={handleAddHotDeal} />
            <label id='validation-error'  style={{ color: '#D10024', fontWeight: 600, marginTop: '50px' }}></label>
        </div>
    )
}
