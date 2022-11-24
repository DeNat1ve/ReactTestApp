import React from 'react';
import CrossSvg from '../../svg/Cross';
import cl from './navbar.module.css'

const Navbar = ({ visible, setVisible }) => {

    const classes = [cl.navRoot]
    if (visible) {
        classes.push(cl.active)
    }

    return (
        <div className={classes.join(' ')} onClick={() => setVisible(false)}>
            <nav className={cl.nav} onClick={(e) => e.stopPropagation()}>
                <div className={cl.navTop}>
                    <span className={cl.title}>Navigation</span>
                    <button className={cl.close} onClick={() => setVisible(false)}><CrossSvg /></button>
                </div>
                <div className={cl.navItemContainer}><button className={cl.navItem}>HOME</button></div>
                <div className="line-horizontal-container"><div className="line-horizontal w240px"></div></div>
                <div className={cl.navItemContainer}><button className={cl.navItem}>SOME LINK</button></div>
                <div className="line-horizontal-container"><div className="line-horizontal w240px"></div></div>
                <div className={cl.navItemContainer}><button className={cl.navItem}>SOME LINK</button></div>
                <div className="line-horizontal-container"><div className="line-horizontal w240px"></div></div>
                <div className={cl.navItemContainer}><button className={cl.navItem}>ABOUT US</button></div>
            </nav>
        </div>
    );
};

export default Navbar;