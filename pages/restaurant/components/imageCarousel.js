'use client'
import { useRef } from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fadeLate } from '@/helpers/transitions';


/* const images = [
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
]; */

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
import image17 from '../../../public/images/gallery/food/17.webp'
import image18 from '../../../public/images/gallery/food/18.webp'
import image19 from '../../../public/images/gallery/food/19.webp'
import image20 from '../../../public/images/gallery/food/20.webp'
import image21 from '../../../public/images/gallery/food/21.webp'
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
import image39 from '../../../public/images/gallery/food/40.webp'
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
import image61 from '../../../public/images/gallery/team/1.webp'
import image62 from '../../../public/images/gallery/team/2.webp'
import image63 from '../../../public/images/gallery/team/3.webp'
import image64 from '../../../public/images/gallery/team/4.webp'
import image65 from '../../../public/images/gallery/team/5.webp'
import image66 from '../../../public/images/gallery/team/6.webp'
import image67 from '../../../public/images/gallery/team/7.webp'
import image68 from '../../../public/images/gallery/team/8.webp'
import image69 from '../../../public/images/gallery/team/9.webp'
import image70 from '../../../public/images/gallery/team/10.webp'
import image71 from '../../../public/images/gallery/team/11.webp'
import image72 from '../../../public/images/gallery/team/12.webp'
import image73 from '../../../public/images/gallery/team/13.webp'
import image74 from '../../../public/images/gallery/team/14.webp'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, image51, image52, image53, image54, image55, image56, image57, image58, image59, image60, image61, image62, image63, image64, image65, image66, image67, image68, image69, image70, image71, image72, image73, image74]



export default function ImageGallery() {
    const swiperRef = useRef(null);
    const handleChange = (i) => {
        swiperRef.current.swiper.slideTo(i);
    };

    return (
        <m.div variants={fadeLate} className="h-full w-full md:w-4/5">
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
                                src={item}
                                fill
                                alt="images"
                                placeholder='blur'
                                style={{ objectFit: 'contain' }}
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
                            <Image src={item} alt="images"
                                fill
                                style={{ objectFit: 'cover' }}
                                placeholder='blur'
                                sizes='70px' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </m.div>
    );
}
