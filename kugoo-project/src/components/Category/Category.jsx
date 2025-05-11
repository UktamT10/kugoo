import React from 'react';
import './category.scss'

const Category = ({image,title}) => {


    return (
        <div style={{backgroundImage: `url("${image}")`}} className='category'>
            <h1>
                {title}
            </h1>
        </div>
    );
};

export default Category;