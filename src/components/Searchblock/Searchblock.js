import React from 'react';
import './Searchblock.scss';

const Searchblock = () => {
    return (
        <div className="searchblock">
            <div className="text"><h2>Travel Type</h2></div>
            <div className="forms">
                <input className='field' type="text" placeholder='Where to go' />
                <input className='field' type="date" />
                <select className='field'>
                    <option value="">Please choose your destination</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Australia">Australia</option>
                    <option value="Africa">Africa</option>
                </select>
                <button className='btn'>Search</button>
            </div>
        </div>
    )
}

export default Searchblock
