import React from 'react';
import './topBar.scss';

const TopBar = () => {
    return (
        <div className='topBar'>
            <ul className="topBar__ul">
                    <li className="topBar__li">
                        <a href="/about" className="topBar__link">
                            Сервис
                        </a>
                    </li>
                    <li className="topBar__li">
                        <a href="/about" className="topBar__link">
                            Сотрудничество
                        </a>
                    </li>
                    <li className="topBar__li">
                        <a href="/about" className="topBar__link">
                            Заказать звонок
                        </a>
                    </li>
                </ul>
            <div className="topBar__right">
                <p className="topBar__number">
                    +7 (800) 505-54-61
                </p>
                <img style={{ width: '11px', height: '11px' }} src='/images/plus.svg' alt=""/>
            </div>
        </div>
    );
};

export default TopBar;