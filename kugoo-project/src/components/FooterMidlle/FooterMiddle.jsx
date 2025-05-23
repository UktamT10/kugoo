import React from 'react';
import './footerMiddle.scss'

const FooterMiddle = () => {
    return (
        <div className='footerMiddle'>
            <div className="footerMiddle__left">
                <div className="footerMiddle__first">
                    <h1 className="footerMiddle__firstTitle">
                        Каталог Товаров
                    </h1>
                    <ul className="footerMiddle__firstUl">
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Электросамокаты
                            </a>
                        </li>
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Электроскутеры
                            </a>
                        </li>
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Электровелосипеды
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerMiddle__second">
                    <h1 className="footerMiddle__firstTitle">
                        Покупателям
                    </h1>
                    <ul className="footerMiddle__firstUl">
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Сервисный центр
                            </a>
                        </li>
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Доставка и оплата
                            </a>
                        </li>
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Рассрочка
                            </a>
                        </li>
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Тест-драйв
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerMiddle__third">
                    <h1 className="footerMiddle__firstTitle">
                        О нас
                    </h1>
                    <ul className="footerMiddle__firstUl">
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Блог
                            </a>
                        </li>
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Сотрудничество
                            </a>
                        </li>
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Контакты
                            </a>
                        </li>
                        <li className="footerMiddle__firstLi">
                            <a href="" className="footerMiddle__firstLink">
                                Акции
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footerMiddle__second">
                <div className="footerMiddle__secondFirst">
                    <h2 className="footerMiddle__secondTitle">
                        Контакты
                    </h2>
                    <p className="footerMiddle__secondSubtitle">
                        Заказать звонок
                    </p>
                </div>
                <div className="footerMiddle__secondSecondBlock">
                    <div className="footerMiddle__secondSecond">
                        <p className="footerMiddle__secondCall">
                            Call-центр
                        </p>
                        <h4 className="footerMiddle__secondSecondSubtitle">
                            +7 (800) 505-54-61
                        </h4>
                        <p className="footerMiddle__secondCallCenter">
                            Пн-Вс 10:00 - 20:00
                        </p>
                    </div>
                    <div className="footerMiddle__secondSecond">
                        <p className="footerMiddle__secondCall">
                            Call-центр
                        </p>
                        <h4 className="footerMiddle__secondSecondSubtitle">
                            +7 (800) 505-54-61
                        </h4>
                        <p className="footerMiddle__secondCallCenter">
                            Пн-Вс 10:00 - 20:00
                        </p>
                    </div>
                </div>
                <div className="footerMiddle__thirdBlock">
                    <div className="footerMiddle__thirdBlockFirst">
                        <h5 className="footerMiddle__thirdBlockTitle">
                            Магазин в Москве ул. <br/> Ткацкая, 5 стр. 16
                        </h5>
                        <p className="footerMiddle__thirdBlockSubtitle">
                            +7 (499) 406 15 87
                        </p>
                    </div>
                    <div className="footerMiddle__thirdBlockSecond">
                        <h5 className="footerMiddle__thirdBlockTitle">
                            Магазин в Москве ул. <br/> Ткацкая, 5 стр. 16
                        </h5>
                        <p className="footerMiddle__thirdBlockSubtitle">
                            +7 (499) 406 15 87
                        </p>
                    </div>
                    <div className="footerMiddle__thirdBlockThird">
                        <h5 className="footerMiddle__thirdBlockTitle">
                            Магазин в Москве ул. <br/> Ткацкая, 5 стр. 16
                        </h5>
                        <p className="footerMiddle__thirdBlockSubtitle">
                            +7 (499) 406 15 87
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMiddle;