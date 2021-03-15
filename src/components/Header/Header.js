import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div class="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="show">Shop</a>
                <a href="review">Order Review</a>
                <a href="manage">inventory here</a>
            </nav>
        </div>
    );
};

export default Header;