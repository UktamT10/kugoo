import React from 'react';
import './footerBottom.scss'

const FooterBottom = () => {
    return (
        <div className='footerBottom'>
            <div className="footerBottom__first">
                <h1 className="footerBottom__title">
                    KUGOO
                </h1>
                <img src="/images/google.svg" alt=""/>
                <img src="/images/apple.svg" alt=""/>
            </div>
            <div className="footerBottom__second">
                <img className='footerBottom__socialIcon' src="/images/wk.svg" alt=""/>
                <img className='footerBottom__socialIcon' src="/images/instagram.svg" alt=""/>
                <img className='footerBottom__socialIcon' src="/images/youtube.svg" alt=""/>
                <img className='footerBottom__socialIcon' src="/images/telegram.svg" alt=""/>
            </div>
        </div>
    );
};

export default FooterBottom;