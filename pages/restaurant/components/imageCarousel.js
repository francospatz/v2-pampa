'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { fadeLate } from '@/helpers/transitions';


const images = [
    { width: 4, height: 6, src: '/images/gallery/food/1.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/2.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/3.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/4.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/5.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/6.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/7.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/8.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/9.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/10.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/11.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/12.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/13.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/14.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/15.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/16.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/17.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/18.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/19.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/20.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/21.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/22.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/23.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/24.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/25.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/26.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/27.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/28.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/29.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/30.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/32.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/33.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/34.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/35.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/36.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/37.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/38.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/39.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/40.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/41.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/42.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/43.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/44.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/45.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/46.webp' },
    { width: 6, height: 4, src: '/images/gallery/food/47.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/48.webp' },
    { width: 4, height: 6, src: '/images/gallery/food/49.webp' },
    { width: 4, height: 6, src: '/images/gallery/restaurant/1.webp' },
    { width: 4, height: 6, src: '/images/gallery/restaurant/2.webp' },
    { width: 6, height: 4, src: '/images/gallery/restaurant/3.webp' },
    { width: 4, height: 6, src: '/images/gallery/restaurant/4.webp' },
    { width: 4, height: 6, src: '/images/gallery/restaurant/5.webp' },
    { width: 6, height: 4, src: '/images/gallery/restaurant/6.webp' },
    { width: 6, height: 4, src: '/images/gallery/restaurant/7.webp' },
    { width: 6, height: 4, src: '/images/gallery/restaurant/8.webp' },
    { width: 6, height: 4, src: '/images/gallery/restaurant/9.webp' },
    { width: 6, height: 4, src: '/images/gallery/restaurant/10.webp' },
    { width: 6, height: 4, src: '/images/gallery/restaurant/11.webp' },
    { width: 4, height: 6, src: '/images/gallery/restaurant/12.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/1.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/2.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/3.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/4.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/5.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/6.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/7.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/8.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/9.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/10.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/11.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/12.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/13.webp' },
    { width: 4, height: 6, src: '/images/gallery/team/14.webp' },
];


export default function ImageGallery() {
    const swiperRef = useRef(null);
    const handleChange = (i) => {
        swiperRef.current.swiper.slideTo(i);
    };

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <>
            {images && <m.div variants={fadeLate} className="h-full w-full md:w-4/5">
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    navigation={true}

                    className="thumbShow h-[60vh] mb-2 mt-[-10px]"
                    ref={swiperRef}
                >
                    {images.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='object-center'>
                                <Image
                                    src={item.src}
                                    fill
                                    alt="images"



                                    className='z-[10001] object-center big-image object-contain' />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <Swiper

                    loop={true}
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    freeMode={{ enabled: true, momentum: true, momentumRatio: 1.5, sticky: true }}
                    modules={[Navigation, Thumbs, FreeMode]}
                    className="thumbBtn h-[20%]"
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}
                            onClick={() => handleChange(index)}>
                            <div className="thumbContainer"
                            >
                                <Image src={item.src} alt="images"
                                    fill
                                    style={{ objectFit: 'cover' }}

                                    sizes='60px' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </m.div>}
        </>
    );
}
