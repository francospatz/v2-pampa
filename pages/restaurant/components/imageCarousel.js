'use client'
import { useRef } from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fade } from '@/helpers/transitions';

import image1 from '../../../public/images/gallery/food/1.webp'
import image2 from '../../../public/images/gallery/food/2.webp'
import image3 from '../../../public/images/gallery/food/3.webp'
import image4 from '../../../public/images/gallery/food/4.webp'
import image5 from '../../../public/images/gallery/food/5.webp'
import image6 from '../../../public/images/gallery/food/6.webp'
import image7 from '../../../public/images/gallery/food/7.webp'
import image8 from '../../../public/images/gallery/food/8.webp'
import image9 from '../../../public/images/gallery/food/9.webp'
import image10 from '../../../public/images/gallery/food/10.webp'
import image11 from '../../../public/images/gallery/food/11.webp'
import image12 from '../../../public/images/gallery/food/12.webp'
import image13 from '../../../public/images/gallery/food/13.webp'
import image14 from '../../../public/images/gallery/food/14.webp'
import image15 from '../../../public/images/gallery/food/15.webp'
import image16 from '../../../public/images/gallery/food/16.webp'
import image18 from '../../../public/images/gallery/food/18.webp'
import image19 from '../../../public/images/gallery/food/19.webp'
import image22 from '../../../public/images/gallery/food/22.webp'
import image23 from '../../../public/images/gallery/food/23.webp'
import image24 from '../../../public/images/gallery/food/24.webp'
import image25 from '../../../public/images/gallery/food/25.webp'
import image26 from '../../../public/images/gallery/food/26.webp'
import image27 from '../../../public/images/gallery/food/27.webp'
import image28 from '../../../public/images/gallery/food/28.webp'
import image29 from '../../../public/images/gallery/food/29.webp'
import image30 from '../../../public/images/gallery/food/30.webp'
import image31 from '../../../public/images/gallery/food/32.webp'
import image32 from '../../../public/images/gallery/food/33.webp'
import image33 from '../../../public/images/gallery/food/34.webp'
import image34 from '../../../public/images/gallery/food/35.webp'
import image35 from '../../../public/images/gallery/food/36.webp'
import image36 from '../../../public/images/gallery/food/37.webp'
import image37 from '../../../public/images/gallery/food/38.webp'
import image38 from '../../../public/images/gallery/food/39.webp'
import image40 from '../../../public/images/gallery/food/41.webp'
import image41 from '../../../public/images/gallery/food/42.webp'
import image42 from '../../../public/images/gallery/food/43.webp'
import image43 from '../../../public/images/gallery/food/44.webp'
import image44 from '../../../public/images/gallery/food/45.webp'
import image45 from '../../../public/images/gallery/food/46.webp'
import image46 from '../../../public/images/gallery/food/47.webp'
import image47 from '../../../public/images/gallery/food/48.webp'
import image48 from '../../../public/images/gallery/food/49.webp'
import image49 from '../../../public/images/gallery/restaurant/1.webp'
import image50 from '../../../public/images/gallery/restaurant/2.webp'
import image51 from '../../../public/images/gallery/restaurant/3.webp'
import image52 from '../../../public/images/gallery/restaurant/4.webp'
import image53 from '../../../public/images/gallery/restaurant/5.webp'
import image54 from '../../../public/images/gallery/restaurant/6.webp'
import image55 from '../../../public/images/gallery/restaurant/7.webp'
import image56 from '../../../public/images/gallery/restaurant/8.webp'
import image57 from '../../../public/images/gallery/restaurant/9.webp'
import image58 from '../../../public/images/gallery/restaurant/10.webp'
import image59 from '../../../public/images/gallery/restaurant/11.webp'
import image60 from '../../../public/images/gallery/restaurant/12.webp'
import image62 from '../../../public/images/gallery/team/2.webp'
import image63 from '../../../public/images/gallery/team/3.webp'
import image64 from '../../../public/images/gallery/team/4.webp'
import image65 from '../../../public/images/gallery/team/5.webp'
import image66 from '../../../public/images/gallery/team/6.webp'
import image67 from '../../../public/images/gallery/team/7.webp'
import image69 from '../../../public/images/gallery/team/9.webp'
import image70 from '../../../public/images/gallery/team/10.webp'
import image71 from '../../../public/images/gallery/team/11.webp'
import image72 from '../../../public/images/gallery/team/12.webp'
import image73 from '../../../public/images/gallery/team/13.webp'
import image74 from '../../../public/images/gallery/team/14.webp'

const images = [image73, image1, image2, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image18, image19, image22, image23, image24, image25, image26, image27, image28, image29, image30, image3, image4, image5, image31, image32, image33, image34, image35, image36, image37, image38, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, image51, image52, image53, image54, image55, image56, image57, image58, image59, image60, image62, image63, image64, image65, image66, image67, image69, image70, image71, image72, image74]



export default function ImageGallery() {
    const swiperRef = useRef(null);
    const handleChange = (i) => {
        swiperRef.current.swiper.slideToLoop(i, 0, false);
    };

    return (
        <m.div variants={fade} className="h-full w-full md:w-4/5 flex flex-col justify-center relative z-[10005]">
            <Swiper
                modules={[Navigation]}
                loop={true}
                slidesPerView={1}
                lazy={true}
                grabCursor={true}
                navigation={true}
                spaceBetween={30}
                className="thumbShow fade"
                ref={swiperRef}
            >
                {images.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className='object-center'>
                            <div className='flex h-full items-center justify-center'>
                                <Image
                                    src={item}
                                    priority={index === 0 ? true : false}
                                    alt="images"

                                    /* width={'100%'} */
                                    /* placeholder='blur' */
                                    style={{ objectFit: 'contain' }}
                                    sizes="50vw"
                                    className='h-full object-contain ' />
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Swiper

                loop={true}
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
                freeMode={{ enabled: true, momentum: true, momentumRatio: 1.5 }}
                modules={[Navigation, FreeMode]}
                className="thumbBtn min-h-[3em] h-[3em] w-full"
            >
                {images.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => handleChange(index)}
                        className='h-full'>

                        <Image src={item} alt="images"
                            fill
                            style={{ objectFit: 'cover' }}
                            placeholder='blur'
                            sizes='(min-width: 1200px) 5em, 3em'
                            className='object-cover'
                            quality={20}
                        />

                    </SwiperSlide>
                ))}
            </Swiper>
        </m.div>
    );
}
