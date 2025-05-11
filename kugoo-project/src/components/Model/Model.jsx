import React from 'react';
import './model.scss'

const Model = ({title,subtitle, image}) => {
    return (
        <div className='model'>
            <div className="model__text">
                <h1 className="model__title">
                    {title}
                </h1>
                <p className="model__subtitle">
                    {subtitle}
                </p>
                <p className="model__link">
                    Подобрать модель
                </p>
            </div>
            <img className='model__img' src={image} alt=""/>
            <img className='model__elipse' src="/images/elipse.png" alt=""/>
        </div>
    );
};

export default Model;