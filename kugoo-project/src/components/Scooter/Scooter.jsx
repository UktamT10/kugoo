import React from 'react';
import './scooter.scss'

const Scooter = ({title,acc,power,mileage,weight,price,image,onPlus, isInCart, onRemove, category, forWho, }) => {
    const [basket,setBasket] = React.useState(false);

    function onClickToBasket(){
        setBasket(!basket)
    }

    const handleCartClick = () => {
        if (isInCart) {
            onRemove(); // если в корзине — удалить
        } else {
            onPlus();   // если нет — добавить
        }
    };

    return (
        <>
            <div className="container">
                <div className="scooter">
                    <h4 className="scooter__forWho">
                        {forWho}
                    </h4>
                    <h5 className="scooter__category">
                        {category}
                    </h5>
                    <img className='scooter__icon' src={image} alt=""/>

                    <div className="scooter__content">
                        <h1 className='scooter__title'>
                            {title}
                        </h1>
                        <div className="scooter__describe">
                            <div className="scooter__block">
                                <p className="scooter__blockText">{power}</p>
                                <p className="scooter__blockText">{acc}</p>
                            </div>
                            <div className="scooter_block">
                                <p className="scooter__blockText">{weight}</p>
                                <p className="scooter__blockText">{mileage}</p>
                            </div>

                        </div>
                        <div className="scooter__price">
                            <p className="scooter__priceText">
                                {price} Сом
                            </p>
                            <div className="scooter__priceIcons">
                                <img  onClick={() => {
                                    onClickToBasket(); // меняет состояние basket
                                    handleCartClick();     // добавляет в корзину
                                }} className={isInCart ? 'scooter__iconsss' : 'scooter__iconss'} src="/images/cartt.svg" alt=""/>
                                <img className='scooter__iconss' src="/images/heart.svg" alt=""/>
                            </div>
                        </div>
                        <button className="scooter__btn">
                            купить в один клик
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Scooter;