import React from 'react';
import './footer.scss'
import FooterTop from "../FooterTop/FooterTop";
import FooterMiddle from "../FooterMidlle/FooterMiddle";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {
    return (
        <footer className='footer'>
            <FooterTop/>
            <FooterMiddle/>
            <FooterBottom/>
        </footer>
    );
};

export default Footer;