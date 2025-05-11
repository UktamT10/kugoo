import React, {useState} from 'react';
import TopBar from '../TopBar/TopBar';
import './header.scss';
import MidlleBar from "../MidlleBar/MidlleBar";

const Header = ({items, onRemove, cartCount, total}) => {
    const [catalog, setCatalog] = React.useState(false)
    const [cart, setCart] = React.useState(false)


    function handleCatalogClick() {
        setCatalog(!catalog)
    }

    function handleCartClick() {
        setCart(!cart)
    }

    return (
        <header className="header">
            <div style={{display: catalog ? 'flex' : 'none'}} className="midlleBar__overlay">
                <div className="midlleBar__catalog">
                    asdads
                    <h1 onClick={handleCatalogClick}>
                        saddsaasd
                    </h1>
                </div>
            </div>
            <div onClick={handleCartClick} style={{display: cart ?'flex' : 'none'}} className="cart-overlay">
                        <div onClick={(e) => e.stopPropagation()} className="cart-content">
                    <span className='cart-spann'>
                        <div className="cart-top">
                        <h2 className="cart-title">
                            В вашей корзине
                        </h2>
                        <p className="cart-items">
                            {cartCount}
                        </p>
                    </div>
                        {items.map((item) =>
                            (
                            <div className="cart-middle">
                                <div className="cart-middleContent">
                                    <div className="cart-middleText">
                                        <img className='cart-middleImg' src={item.img} alt=""/>
                                        <span>
                                    <h3 className="cart-middleTitle">
                                    {item.title}
                                </h3>
                                <p className="cart-middleSubtitle">
                                    {item.price}
                                    <span className='cart-middleSpan'>1 шт</span>
                                </p>
                                </span>
                                    </div>
                                    <img onClick={() => onRemove(item.id)} src="/images/busket.svg" alt=""/>
                                </div>
                            </div>
                            )
                        )}
                    </span>
                            <div className="cart-bottom">
                                <div className="card-bottomLeft">
                                    <p className="card-bottomText">
                                        Сумма
                                    </p>
                                    <p className="card-bottomLeftText">
                                        {total} ₽
                                    </p>
                                </div>
                                <div className="cart-bottomRight">
                                    <button className="cart-bottomBtn">
                                        Оформить заказ
                                    </button>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="container">
                <TopBar />
                <MidlleBar onCart={handleCartClick} onCatalog = {handleCatalogClick} />
            </div>
        </header>
    );
};

export default Header;