import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import axios from 'axios';
import Service from "./Pages/Service";

function App() {
    const [bikes, setBikes] = useState([]);
    const [bikesTwo, setBikesTwo] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [category, setCategory] = useState([]);
    const [categoryez, setCategoryez] = useState([]);
    const [reviews, setReviews] = useState([]);


    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const onAddToCart = async (obj) => {
        const itemExists = cartItems.some(item => item.id === obj.id);
        if (!itemExists) {
            setCartItems(prev => [...prev, obj]);
            try {
                await axios.post('http://localhost:3000/cart', obj);
            } catch (err) {
                console.error("Ошибка при добавлении в корзину:", err);
            }
        }
    };

    const onRemoveFromCart = async (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
        try {
            await axios.delete(`http://localhost:3000/cart/${id}`);
        } catch (err) {
            console.error("Ошибка при удалении из корзины:", err);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3000/bikes').then(res => setBikes(res.data));
        axios.get('http://localhost:3000/bikesTwo').then(res => setBikesTwo(res.data));
        axios.get('http://localhost:3000/cart').then(res => setCartItems(res.data));
        axios.get('http://localhost:3000/categories').then(res => setCategory(res.data));
        axios.get('http://localhost:3000/categoryz').then(res => setCategoryez(res.data));
        axios.get('http://localhost:3000/reveiews').then(res => setReviews(res.data));
    }, []);

    return (
        <>
            <Header total={totalPrice} cartCount={cartItems.length} onRemove={onRemoveFromCart} items={cartItems} />

            <Routes>
                <Route path="/" element={
                    <Home
                        bikes={bikes}
                        bikesTwo={bikesTwo}
                        cartItems={cartItems}
                        category={category}
                        categoryez={categoryez}
                        reviews={reviews}
                        onAddToCart={onAddToCart}
                        onRemoveFromCart={onRemoveFromCart}
                    />
                } />
                <Route path='/service' element={
                    <Service/>
                }/>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
