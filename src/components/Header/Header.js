import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="logo">TravelY</div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Destination</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Pages</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
