import React from 'react';
import './category.scss'

const Category = ({image,title,price}) => {


    return (
        <div style={{backgroundImage: `url("${image}")`}} className='category'>
            <div className="category__text">
                <h1 className='category__title'>
                    {title}
                </h1>
                <p className="category__subtitle">
                    От {price} ₽
                </p>
            </div>
        </div>
    );
};

export default Category;