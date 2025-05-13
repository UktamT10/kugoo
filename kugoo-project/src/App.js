import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from './components/Header/Header';
import Scooter from './components/Scooter/Scooter';
import Model from './components/Model/Model';
import axios from 'axios';
import Kirin from "./components/Kirin/Kirin";
import Category from "./components/Category/Category";
import Manager from "./components/Manager/Manager";
import Catalog from "./components/Catalog/Catalog";

function App() {
    const [bikes, setBikes] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [category, setCategory] = useState([]);
    const [bikesTwo, setBikesTwo] = useState([]);
    const [categoryez, setCategoryez] = useState([]);

    const filteredItems = selectedCategory === 'All' ? items : items.filter(item =>  item.for === selectedCategory);

    useEffect(() => {
        axios.get('http://localhost:3000/bikes').then((res) => {
            setBikes(res.data);
            setItems(res.data);
        })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/categories').then((res) => {
            setCategory(res.data);
        })
    }, []);

    const onAddToCart = (obj) => {
        const itemExists = cartItems.some(item => item.id === obj.id);
        if (!itemExists) {
            setCartItems((prev) => [...prev, obj]);
        }
    };

    const onRemoveFromCart = (id) => {
        setCartItems((prev) => prev.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price,'')

    useEffect(() => {
        axios.get('http://localhost:3000/bikesTwo').then((res) => {
            setBikesTwo(res.data);
        })
    }, []);

    const [more, setMore] = useState(false);

    function onClickToMore() {
        setMore(!more);
    }

    useEffect(() => {
        axios.get('http://localhost:3000/categoryz').then((res) => {
            setCategoryez(res.data);
        })
    }, []);

    return (
        <>
            <Header total={totalPrice} cartCount={cartItems.length} onRemove={onRemoveFromCart} items={cartItems} />
            <Kirin/>
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
                                    style={{cursor: "pointer"}}
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
                                onPlus={(obj) => onAddToCart(bike)}
                                onRemove={() => onRemoveFromCart(bike.id)}
                                isInCart={cartItems.some(item => item.id === bike.id)}
                            />
                        ))}
                        {more && filteredItems.map((bike) => (
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
                                onPlus={(obj) => onAddToCart(bike)}
                                onRemove={() => onRemoveFromCart(bike.id)}
                                isInCart={cartItems.some(item => item.id === bike.id)}
                            />
                        ))}
                    </div>
                    <button onClick={onClickToMore} className="moreBtn">
                        {more ? 'Закрыть' : 'Смотреть все'}
                    </button>
                    <div className="model-flex">
                        <Model
                            title='Подбор модели электросамоката'
                            subtitle='Пройдите тест и выберите электросамокат по своим критериям'
                            image='/images/remove.png'
                        />
                        <Model
                            title='СЕРВИСНОЕ ОБСЛУЖИВАНИЕ'
                            subtitle='Крупнейший сервисный центр в России для продуктов Kugoo'
                            image='/images/stupidWoman.png'
                        />
                    </div>
                    <div className="popular">
                        <h2 className="popular-category">
                            Популярные категории
                        </h2>
                        <Manager/>
                    </div>
                    <div className="categoriez">
                        {categoryez.map((item) => (
                            <Category
                                image={item.image}
                                title={item.name}
                                price={item.price}
                            />
                        ))}
                    </div>
                    <Catalog/>
                </main>
            </div>
        </>
    );
}

export default App;