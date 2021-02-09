import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="logo">TravelY</div>
            <nav className="navbar">
                <ul>
                    <li><a href="index.js">Home</a></li>
                    <li><a href="#popular">Destinations</a></li>
                    <li><a href="#newsletter">Newsletter</a></li>
                    <li><a href="#stories">Stories</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
