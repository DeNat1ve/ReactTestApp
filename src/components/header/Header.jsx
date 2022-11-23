import React from 'react';
import LoginPanel from '../UI/loginPanel/LoginPanel';
import Navbar from '../UI/navbar/Navbar';
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                TestPROJECT
            </div>
            <Navbar />
            <LoginPanel />
        </header>
    );
};

export default Header;