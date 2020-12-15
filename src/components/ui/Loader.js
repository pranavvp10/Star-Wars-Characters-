import React from 'react';
import loader from './img/loader.gif';

export const Loader = () => {
    return (
        <div className="center">
            <img src={loader} alt="swload" />
        </div>
    )
}

export default Loader;
