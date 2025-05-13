import React from 'react';
import "./manager.scss"

const Manager = () => {
    return (
        <div className='manager'>
            <img src="/images/manager.png" alt=""/>
            <div className="manager__text">
                <h1 className="manager__title">Менеджер ответит на любой <br/> ваш вопрос о продуктах Kugoo</h1>
                <p className="manager__subtitle">
                    Задать вопрос
                </p>
            </div>
        </div>
    );
};

export default Manager;