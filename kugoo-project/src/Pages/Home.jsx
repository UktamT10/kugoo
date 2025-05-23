import React, { useState } from 'react';
import Kirin from "../components/Kirin/Kirin";
import Scooter from "../components/Scooter/Scooter";
import Model from "../components/Model/Model";
import Manager from "../components/Manager/Manager";
import Category from "../components/Category/Category";
import Catalog from "../components/Catalog/Catalog";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import Dropdown from "../components/Dropdown/Dropdown";

const Home = ({ bikes, bikesTwo, cartItems, category, categoryez, reviews, onAddToCart, onRemoveFromCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [more, setMore] = useState(false);

    const allBikes = more ? [...bikes, ...bikesTwo] : bikes;

    const filteredItems = selectedCategory === 'All'
        ? allBikes
        : allBikes.filter(item => item.for === selectedCategory);

    const trueCategory = bikes.filter(item => item.category?.toLowerCase().includes('хит'));

    return (
        <div>
            <Kirin />
            <div className="container">
                <main>
                    <div className="scooter__select">
                        <h1 className="scooter-title">ЭЛЕКТРОСАМОКАТЫ</h1>
                        <div className="scooter__categories">
                            <h5
                                onClick={() => setSelectedCategory('All')}
                                className={selectedCategory === 'All' ? 'active' : ''}
                            >
                                Все
                            </h5>
                            {category.map((item) => (
                                <h5
                                    style={{ cursor: "pointer" }}
                                    key={item.id}
                                    onClick={() => setSelectedCategory(item.name)}
                                    className={selectedCategory === item.name ? 'active' : ''}
                                >
                                    {item.name}
                                </h5>
                            ))}
                        </div>
                    </div>

                    <div className="scooterE">
                        {filteredItems.map((bike) => (
                            <Scooter
                                key={bike.id}
                                title={bike.title}
                                power={bike.power}
                                acc={bike.acc}
                                weight={bike.weight}
                                mileage={bike.mileage}
                                price={bike.price}
                                image={bike.img}
                                category={bike.category}
                                forWho={bike.for}
                                onPlus={() => onAddToCart(bike)}
                                onRemove={() => onRemoveFromCart(bike.id)}
                                isInCart={cartItems.some(item => item.id === bike.id)}
                            />
                        ))}
                    </div>

                    <button onClick={() => setMore(!more)} className="moreBtn">
                        {more ? 'Закрыть' : 'Смотреть все'}
                    </button>

                    <div className="model-flex">
                        <Model title='Подбор модели электросамоката' subtitle='Пройдите тест...' image='/images/remove.png' />
                        <Model title='СЕРВИСНОЕ ОБСЛУЖИВАНИЕ' subtitle='Сервис Kugoo' image='/images/stupidWoman.png' />
                    </div>

                    <div className="popular">
                        <h2 className="popular-category">Популярные категории</h2>
                        <Manager />
                    </div>

                    <div className="categoriez">
                        {categoryez.map((item) => (
                            <Category key={item.id} image={item.image} title={item.name} price={item.price} />
                        ))}
                    </div>

                    <Catalog />

                    <div className="player-wrapper" style={{ maxWidth: '1100px', margin: '0 auto', height: '600px' }}>
                        <ReactPlayer
                            url="https://youtu.be/_b5e0GuBlUU?si=9RAhnQL390Xvu7tg"
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>

                    <h4 className="reviews-title">Отзывы и фото реальных покупателей</h4>
                    <p className="reviews-subtitle">Читать отзывы на Яндекс</p>

                    <Swiper className="swiper-photo" loop={true} slidesPerView={3} spaceBetween={30} centeredSlides={true}>
                        <div className="reviews">
                            {reviews.map((review) => (
                                <SwiperSlide key={review.id || review.review}>
                                    <img className="reviewImage" src={review.review} alt="Review" />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>

                    <Dropdown />

                    <div className="afton-title">ЧАСТО ПОКУПАЮТ</div>
                    <div className="aften">
                        {trueCategory.map((bike) => (
                            <Scooter
                                key={bike.id}
                                title={bike.title}
                                power={bike.power}
                                acc={bike.acc}
                                weight={bike.weight}
                                mileage={bike.mileage}
                                price={bike.price}
                                image={bike.img}
                                category={bike.category}
                                forWho={bike.for}
                                onPlus={() => onAddToCart(bike)}
                                onRemove={() => onRemoveFromCart(bike.id)}
                                isInCart={cartItems.some(item => item.id === bike.id)}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
