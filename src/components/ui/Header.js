import React from 'react';
import logo from './img/starWars-logo.gif';

export const Header = () => {
    return (
        <header className="center" >
            <img src={logo} alt="./img/star-wars-logo.png" className="main-logo" />
        </header>
    )
}

export default Header;