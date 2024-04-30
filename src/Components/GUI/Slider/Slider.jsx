'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';


export default function Slider({ childList }) {
    if (!Array.isArray(childList)) return false;

    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            loop
            navigation
            pagination={{
                clickable: true,
                //dynamicBullets: true,
                //dynamicMainBullets: 3,
            }}
        >
            {childList.map((child, index) => (
                <SwiperSlide key={index} >{child}</SwiperSlide>
            ))}
        </Swiper>
    );
}

