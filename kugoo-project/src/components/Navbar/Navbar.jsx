import React from 'react';
import './navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
                О магазине
            <p className="navbar__text">
                Доставка и оплата
            </p>
            <p className="navbar__text">
                Тест-драйв
            </p>
            <p className="navbar__text">
                Блог
            </p>
            <p className="navbar__text">
                Контакты
            </p>
                <p className="navbar__text">
                    Акция
                </p>
        </div>
    );
};

export default Navbar;