import React, { useEffect, useRef, useState } from 'react';

const Persons = () => {
    const[search, setSearcher] =useState('');
    const[person, setPerson] =useState([]);
    const handleChange = event => {
        //console.log(event.target.value);
        setSearcher(event.target.value);
    }
    useEffect(() => {

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPerson(data.meals))
        
    },[search]);
    return (
        <div>
            <h2>Person amount: </h2>
            <input type="text" onChange={handleChange} placeholder="search" />
            <p>Searching: {search}</p>
            <p>{person?.length || 0}</p>
            <ul>
                {
                    person?.map(meal => <li>{meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Persons;