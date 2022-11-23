import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-item-container"><button className="nav-item">HOME</button></div>
            <div className="nav-item-container"><button className="nav-item">SOME LINK</button></div>
            <div className="nav-item-container"><button className="nav-item">SOME LINK</button></div>
            <div className="nav-item-container"><button className="nav-item">ABOUT US</button></div>
        </nav>
    );
};

export default Navbar;