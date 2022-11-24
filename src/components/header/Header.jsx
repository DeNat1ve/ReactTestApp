import React, { useState } from 'react';
import LoginPanel from '../UI/loginPanel/LoginPanel';
import Navbar from '../UI/navbar/Navbar';
import NavSvg from '../svg/NavSvg'
import './header.css'

const Header = () => {
    const [isVisible, setVisible] = useState(false)

    return (
        <header>
            <div className="logo">
                TestPROJECT
            </div>
            <div className="options">
                <LoginPanel />
                <button className='nav-button' onClick={() => setVisible(true)}><NavSvg /></button>
            </div>
            <Navbar visible={isVisible} setVisible={setVisible} />
        </header>
    );
};

export default Header;