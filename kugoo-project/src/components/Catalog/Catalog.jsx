import React from 'react';
import "./catalog.scss"
import {Link} from "react-router-dom";

const Catalog = () => {
    const [catalog, setCatalog] = React.useState(false);

    function handleToggle() {
        setCatalog(true);
    }
    function onClickToInternet() {
        setCatalog(false);
    }

    return (
        <div className="catalog">
            <h1 className="catalog__title">
                Предлагаем самые выгодные цены <br/>на продукты Kugoo за счет прямых поставок
            </h1>
            <p className="catalog__subtitle">
                и заботимся об удобстве покупателей
            </p>
            <div className="catalog__btns">
                <button onClick={onClickToInternet} className={catalog ? "catalog__btn catalog__btn__disactive"  : "catalog__btn" }>Интернет магазин</button>
                <button onClick={handleToggle} className={catalog ? "catalog__btn"  : "catalog__btn catalog__btn__disactive"}>Сервисный центр</button>
            </div>
            <div className="catalog__catalogs">
                {catalog ?
                    <>
                        <div className="catalog__catalog-card">
                            <img src="/images/catalog.svg" alt=""/>
                            <h2 className='catalog__cardTitle'>
                                Х товаров в каталоге
                            </h2>
                            <p className="catalog__cardDescription">Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении</p>
                        </div>
                        <div className="catalog__catalog-card">
                            <img src="/images/catalog.svg" alt=""/>
                            <h2 className='catalog__cardTitle'>
                                5 способов оплаты
                            </h2>
                            <p className="catalog__cardDescription">Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</p>
                        </div>
                        <div className="catalog__catalog-card">
                            <img src="/images/catalog.svg" alt=""/>
                            <h2 className='catalog__cardTitle'>
                                Больше в сервисе
                            </h2>
                            <Link to={'/service'}>
                                <p className="catalog__cardDescription">Перейти</p>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="catalog__catalog-card">
                            <img src="/images/catalog.svg" alt=""/>
                            <h2 className='catalog__cardTitle'>
                                Х товаров в каталоге
                            </h2>
                            <p className="catalog__cardDescription">Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении</p>
                        </div>
                        <div className="catalog__catalog-card">
                            <img src="/images/catalog.svg" alt=""/>
                            <h2 className='catalog__cardTitle'>
                                4 способов оплаты
                            </h2>
                            <p className="catalog__cardDescription">Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</p>
                        </div>
                        <div className="catalog__catalog-card">
                            <img src="/images/catalog.svg" alt=""/>
                            <h2 className='catalog__cardTitle'>
                                Полная документация и гарантия 1 год
                            </h2>
                            <p className="catalog__cardDescription">При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</p>
                        </div>
                    </>
                }

            </div>
        </div>
    );
};

export default Catalog;