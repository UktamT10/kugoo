import React from 'react';
import './footerTop.scss'

const FooterTop = () => {
    return (
        <div className='footerTop'>
            <h1 className="footerTop__title">
                Оставьте свою почту и станьте первым, <br/>кто получит скидку на новые самокаты
            </h1>
            <form className="footerTop__form">
                <input className='footerTop__input' placeholder='Введите Ваш email' type="email"/>
                <button className="footerTop__btn">
                    Подписаться
                </button>
            </form>
        </div>
    );
};

export default FooterTop;