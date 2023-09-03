import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import '../../../App.css';
import imageToBase64 from 'image-to-base64/browser';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';

export default function AddProductForm({ url, data }) {

    const [imagesBase64, setImagesBase64] = useState([]);
    const [categories, setCategories] = useState(data.categories);
    const [features, setFeatures] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        // console.log(imagesBase64);
    }, [imagesBase64]);

    useEffect(() => {
        console.log(`features: ${features}`);
    }, [features]);

    const handleSelect = (event) => {
        let images = [];
        let imagesB64 = [];
        let files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            images.push(URL.createObjectURL(files[i]));
        }

        for (let i = 0; i < files.length; i++) {
            imageToBase64(images[i])
                .then(responce => imagesB64.push(responce))
                .catch(error => console.log(error));
        };

        setImagesBase64(imagesB64);
    };

    const removeNode = (event) => {
        event.preventDefault();
        const currentNode = event.target;
        currentNode.parentElement.remove();
    };

    const handleAddFeature = (event) => {
        event.preventDefault();

        const form = document.getElementById('features');

        const div = document.createElement('div');

        const featureNameDiv = document.createElement('div');
        featureNameDiv.className = 'feature-name';

        const featureDiv = document.createElement('div');
        featureNameDiv.className = 'feature';

        const featureName = document.createElement('input');
        featureName.className = 'input feature-name';
        featureName.style.marginBottom = '10px';
        featureName.style.marginTop = '30px';
        featureName.placeholder = 'Feature Name';

        const feature = document.createElement('input');
        feature.className = 'input feature';
        feature.style.marginBottom = '10px';
        feature.placeholder = 'Feature';

        const removeButton = document.createElement('button');
        removeButton.className = 'btn';
        removeButton.style.marginBottom = '10px';
        removeButton.style.fontWeight = '600';
        removeButton.innerHTML = 'Remove';
        removeButton.addEventListener('click', event => removeNode(event));

        featureNameDiv.appendChild(featureName);
        featureDiv.appendChild(feature);
        div.appendChild(featureName);
        div.appendChild(featureDiv);
        div.appendChild(removeButton);
        form.appendChild(div);
    };

    const collectFeatures = () => {
        const separator = '____';

        const featuresNames = document.getElementsByClassName('input feature-name');
        const featuresValues = document.getElementsByClassName('input feature');

        console.log(featuresNames);
        console.log(featuresValues);
        const toSend = [];

        for (let i = 0; i < featuresNames.length; i++) {
            const featureToSend = `${featuresNames[i].value}${separator}${featuresValues[i].value}`;
            toSend.push(featureToSend);
        }
        setFeatures(toSend);
    };

    const handleSelectCategory = (event) => {
        const selected = [...event.target.selectedOptions];
        let toSend = [];
        selected.forEach(o => toSend.push(o.innerHTML));
        setSelectedCategories(toSend);
    };

    const handleSubmit = (event) => {
        collectFeatures();

        const _productName = document.getElementById('feature-name-id').value;
        const _categories = selectedCategories;
        const _price = document.getElementById('feature-price-id').value;
        const _description = document.getElementById('feature-description-id').value;
        const _countOnStock = document.getElementById('feature-stock-count-id').value;
        const _shortDescription = document.getElementById('feature-short-description-id').value;
        const _pictures = imagesBase64;
        const _features = features;

        let product = {
            productName: _productName,
            categories: _categories,
            price: _price,
            description: _description,
            shortDescription: _shortDescription,
            countOnStock: _countOnStock,
            pictures: _pictures,
            features: _features
        };
        console.log(url)
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(product)
        };
        fetch('http://localhost:5089/api/maestro', options)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    return (
        <form
            encType='multipart/form-data'
            className='form-group'
        >
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-md-7">
                        <div className="billing-details">
                            <div id='form-controls'>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Product Name"
                                    style={{ marginBottom: '10px' }}
                                    id='feature-name-id'
                                />
                                {
                                    data != null
                                        ?
                                        <Form.Select className='' multiple
                                            style={{ marginBottom: '10px' }}
                                            onChange={handleSelectCategory}
                                        >
                                            {
                                                categories.map(category =>
                                                    <option>{category}</option>
                                                )
                                            }
                                        </Form.Select>
                                        :
                                        <></>
                                }
                                <input
                                    type="number"
                                    className="input"
                                    placeholder="Price"
                                    style={{ marginBottom: '10px' }}
                                    id='feature-price-id'
                                />
                                <textarea
                                    type="text"
                                    className="input"
                                    placeholder="Short Description"
                                    style={{ marginBottom: '10px' }}
                                    id='feature-short-description-id'>
                                </textarea>
                                <textarea
                                    type="text"
                                    className="input"
                                    placeholder="Description"
                                    style={{ marginBottom: '10px' }}
                                    id='feature-description-id'>
                                </textarea>
                                <input
                                    type="number"
                                    className="input"
                                    placeholder="Count On Stock"
                                    style={{ marginBottom: '10px' }}
                                    id='feature-stock-count-id'
                                />
                                <div id='features'></div>
                            </div>
                            <button className='btn' style={{ marginBottom: '10px', fontWeight: 600 }}
                                onClick={handleAddFeature}>
                                <i style={{ marginRight: '10px' }}><Icon icon={"fa:plus"} /></i>
                                Add Feature
                            </button>
                            <span style={{ marginLeft: '80px' }}>
                                <label
                                    htmlFor='file-upload'
                                    className='custom-file-upload'
                                    style={{ marginBottom: '10px' }}
                                >
                                    <i><Icon icon={"fa:cloud-upload"} /></i>
                                    <span style={{ marginLeft: '10px', fontWeight: 600 }}>Add Pictures</span>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        multiple
                                        onChange={handleSelect}
                                    />
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-5 order-details">
                        <img src='data:image/png;base64,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' />
                        <a
                            href="#"
                            type='submit'
                            className="primary-btn order-submit"
                            style={{ textDecoration: 'none' }}
                            onClick={handleSubmit}
                        >
                            Add Product
                        </a>
                    </div>

                </div>
            </div>
        </form>
    )
}

