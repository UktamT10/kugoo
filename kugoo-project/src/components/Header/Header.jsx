import React, {useEffect} from 'react';
import TopBar from '../TopBar/TopBar';
import './header.scss';
import MidlleBar from "../MidlleBar/MidlleBar";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const Header = ({items, onRemove, cartCount, total}) => {
    const [catalog, setCatalog] = React.useState(false);
    const [loading, setLoading] = React.useState([]);
    const [cart, setCart] = React.useState(false);
    const [active, setActive] = React.useState(null);
    const activeItem = loading.find(item => item.id === active);

    useEffect(() => {
        axios.get('http://localhost:3000/categoryz').then((res) => {
            setLoading(res.data);
        })
    }, []);

    function handleCatalogClick() {
        setCatalog(!catalog)
    }

    function handleCartClick() {
        setCart(!cart)
    }

    function handleBabelClick(id) {
        setActive(prevId => prevId === id ? null : id);
    }

    return (
        <header className="header">
            <div onClick={handleCatalogClick} style={{display: catalog ? 'flex' : 'none'}} className="midlleBar__overlay">
                <div onClick={(e) => e.stopPropagation()} className="midlleBar__catalog">
                    <div className="midlleBar__catalogLeft">
                        {loading.map((item) => (
                            <h1
                                onClick={() => handleBabelClick(item.id)}
                                className={active === item.id ? 'midlleBar__catalogTitleColor' : 'midlleBar__catalogTitle'}
                                key={item.id}
                            >
                                {item.name}
                            </h1>
                        ))}
                    </div>
                    <div className="midlleBar__catalogRight">
                        <div className="midlleBar__catalogFirst">
                            <h3 className="midlleBar__catalogRightTitle">Особенности</h3>
                            {activeItem && (
                                <p className='midlleBar__catalogRightSubtitle'>
                                    {activeItem.peculiarities}
                                </p>
                            )}
                        </div>
                    </div>
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
            <Navbar/>
        </header>
    );
};

export default Header;