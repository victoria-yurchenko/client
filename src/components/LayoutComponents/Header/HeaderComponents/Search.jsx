import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Search() {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5089/api/maestro/categories`)
            .then(responce => responce.json().then(data => {
                console.log(data);
                setCategories(data);
            }))
            .catch(error => console.log(error));
    }, []);

    const handleSubmitSearch = (event) => {
        event.preventDefault();
        const element = document.getElementById('input-select');
        const category = element.options[element.selectedIndex].text;
        const search = document.getElementById('input-id').value;

        if (category === element.options[0].text && search === '')
            window.location.replace(`http://localhost:3000/store`);
        if (category !== element.options[0].text && search === '')
            window.location.replace(`http://localhost:3000/store/${category}/categoryonly/categoryonly`);
        if (category === element.options[0].text && search !== '')
            window.location.replace(`http://localhost:3000/store/${search}/queryonly/queryonly/queryonly`);
        if (category !== element.options[0].text && search !== '')
            window.location.replace(`http://localhost:3000/store/${category}/${search}`);

        // window.location.reload();
    };

    return (
        <div className="header-search">
            <form>
                <select className="input-select" id='input-select'>
                    <option value="0">All Categories</option>
                    {
                        categories.map((category, index) => (
                            <option key={category.id} value={index + 1}>{category}</option>
                        ))
                    }
                </select>
                <input className="input" placeholder="Search here" id='input-id' />
                <button className="search-btn" onClick={handleSubmitSearch}>Search</button>
            </form>
        </div>
    )
}
