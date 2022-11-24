import React from 'react';
import cl from './modalWimdow.module.css'

const ModalWindow = ({ children, visible, setVisible }) => {

    const classes = [cl.modal]
    if (visible) {
        classes.push(cl.active)
    }

    return (
        <div className={classes.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>

    );
};

export default ModalWindow;