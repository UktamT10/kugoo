import React, { useState } from 'react';
import './dropdown.scss';

const questions = [
    "Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?",
    "Как осуществляется доставка и сколько она занимает времени?",
    "Можно ли вернуть товар, если он мне не подойдет?",
    "Какие способы оплаты вы принимаете?"
];

const Dropdown = () => {
    const [openIndexes, setOpenIndexes] = useState({});

    const toggleDropdown = (index) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className='dropdown'>
            <h1 className="dropdown__mainTitle">
                Отвечаем на вопросы <br />покупателей
            </h1>
            <div className="dropdowm__block">
                {questions.map((question, index) => (
                    <div key={index} className="dropdown__questions">
                        <h2 onClick={() => toggleDropdown(index)} className="dropdown__title">
                            {question}
                        </h2>
                        {openIndexes[index] && (
                            <p className="dropdown__subtitle">
                                Это тестовый ответ на вопрос №{index + 1}.
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
