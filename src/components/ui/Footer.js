import React from 'react';
import xwing from './img/xwing.gif';
export const Footer = () => {
    return (
        <footer className="footer">
            <img src={xwing} alt="xwing" />
            <p>CREATED BY <i className="text-warning">PRANAv v P </i><i className="fa fa-copyright text-white" aria-hidden="true"></i> 2020</p>
            <p>CoNNECT To ME: <a href="https://github.com/pranavvp10"><i className="fa fa-github text-white" aria-hidden="true"></i></a><i>  </i><a href="https://linkedin.com/in/pranavvp"><i className="fa fa-linkedin text-white" aria-hidden="true"></i></a></p>
        </footer>
    )
}

export default Footer;
