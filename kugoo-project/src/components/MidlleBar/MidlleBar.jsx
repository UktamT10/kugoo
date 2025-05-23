import React from 'react';
import './midlle.scss'
import {Link} from 'react-router-dom';

const MidlleBar = ({onCatalog, onCart}) => {

    return (
        <>
            <div className="midlleBar">

                <div className="midlleBar__left">
                    <Link to='/'>
                        <h1 className="midlleBar__title">
                            KUGOO
                        </h1>
                    </Link>
                    <button onClick={onCatalog} className="midlleBar__btn">
                        Каталог
                    </button>
                </div>
                <div className="midlleBar__middle">
                    <button className="midlleBar__catalogBtn">
                        Везде
                    </button>
                    <input placeholder='Искать Самокат в Kugoo' className='midlleBar__input' type="text"/>
                    <div className="midlleBar__catalogBtnSearch">
                        <img src="/images/search.svg" alt="" className="topBar__icon"/>
                    </div>
                </div>
                <div className="midlleBar__icons">
                    <img src="/images/vesy.svg" alt=""/>
                    <img src="/images/heart.svg" alt=""/>
                    <div onClick={onCart} className="midlleBar__iconsCart">
                        <img src="/images/cart.svg" alt=""/>
                        <p className="midlleBar__subtitle">
                            Корзина
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MidlleBar;