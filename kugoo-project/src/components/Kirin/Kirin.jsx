import React, { useRef, useState, useEffect } from 'react';
import './kirin.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Kirin = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const slides = [1, 2, 3, 4, 5];

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <section className="kirin">
            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                className="kirin-swiper"
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="kirin__content">
                            <div className="kirin__left">
                                <button className="kirin__btn">Новинка</button>
                                <h1 className="kirin__title">
                                    Электросамокаты Kugoo Kirin <br /> от официального дилера
                                </h1>
                                <p className="kirin__subtitle">
                                    с бесплатной доставкой по РФ от 1 дня
                                </p>
                                <button className="kirin__btnColor">Перейти в каталог</button>
                            </div>
                            <img className='kirin__scooter' src="/images/scooter.png" alt="" />
                            <img className='kirin__kirin' src="/images/kirin.png" alt="" />
                            <img className='kirin__testDrive' src="/images/testDrive.png" alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="kirin__pagination">
                <button ref={prevRef} className="kirin__prev">{'<'}</button>
                <div className="kirin__counter">
                    <span>{currentSlide}</span>
                    <span className="kirin__line" />
                    <span>{slides.length}</span>
                </div>
                <button ref={nextRef} className="kirin__next">{'>'}</button>
            </div>
        </section>
    );
};

export default Kirin;