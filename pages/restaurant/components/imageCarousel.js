'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';


const images = [
    { width: 400, height: 600, src: '/images/gallery/food/1.webp' },
    { width: 400, height: 600, src: '/images/gallery/food/2.webp' },
    { width: 400, height: 600, src: '/images/gallery/food/3.webp' },
    { width: 400, height: 600, src: '/images/gallery/food/4.webp' },
    { width: 400, height: 600, src: '/images/gallery/food/5.webp' },
    { width: 400, height: 600, src: '/images/gallery/food/6.webp' },
    { width: 400, height: 600, src: '/images/gallery/food/7.webp' },
    { width: 400, height: 600, src: '/images/gallery/food/8.webp' },
    { width: 400, height: 600, src: '/images/gallery/restaurant/1.webp' },
    { width: 400, height: 600, src: '/images/gallery/restaurant/2.webp' },
    { width: 400, height: 600, src: '/images/gallery/restaurant/3.webp' },
    { width: 400, height: 600, src: '/images/gallery/restaurant/4.webp' },
    { width: 400, height: 600, src: '/images/gallery/restaurant/5.webp' },
    { width: 600, height: 400, src: '/images/gallery/restaurant/6.webp' },
    { width: 600, height: 400, src: '/images/gallery/restaurant/7.webp' },
    { width: 600, height: 400, src: '/images/gallery/restaurant/8.webp' },


];


export default function ImageGallery() {
    const swiperRef = useRef(null);
    const handleChange = (i) => {
        swiperRef.current.swiper.slideTo(i);
    };

    /* const handleThumbnailClick = (index) => {
        swiperRef.current.toswiper.
    } */

    return (
        <>
            {images && <div className="h-full w-full md:w-4/5">
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    navigation={true}

                    className="thumbShow h-[74%] mb-2 mt-6"
                    ref={swiperRef}
                >
                    {images.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='object-center'>
                                <Image
                                    src={item.src}
                                    fill
                                    alt="images"


                                    priority={true}
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
                                    priority={true}
                                    sizes='100px' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>}
        </>
    );
}



/* const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = (page + images.length) % images.length;

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    const handleThumbnailClick = (index) => {
        setPage([index, index > page ? 1 : -1]);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
        <h1 className=" fixed top-0 text-4xl font-bold mt-5 pt-2">GALLERY</h1>
        
        <div className="relative w-[80vw] max-w-4xl mx-auto h-[70vw] max-h-4xl mb-14"> 
            
            <button
                className="absolute inset-y-0 left-0 z-20 m-2 text-xl p-2 z-[10002]"
                onClick={() => paginate(-1)}
            >
                &#8592; 
            </button>
            
            <button
                className="absolute inset-y-0 right-0 z-20 m-2 text-xl p-2 z-[10002]"
                onClick={() => paginate(1)}
            >
                &#8594; 
            </button>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: {
                            duration: 0.5,
                            
                        }
                    }}
                    className="absolute inset-0 flex justify-center items-center" 
                >
                    <Image
                        src={images[imageIndex].src}
                        width={images[imageIndex].width}
                        height={images[imageIndex].height}
                        alt={`Image ${imageIndex}`}
                        layout="intrinsic" 
                        objectFit="contain" 
                        priority={true} 
                        className='z-[10001]'
                    />
                </motion.div>
            </AnimatePresence>
        </div>
        <ThumbnailRow images={images && images}
            selectedImage={imageIndex}
            onThumbnailClick={handleThumbnailClick}></ThumbnailRow>
        </div>
    ); */


{/* <div className="w-[20rem] fixed top-0 mt-5">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 767.97 130.13"><path d="M69.97 73.36v-4.79c17.92.52 33.25.46 46-.2v4.97l-5.12.98c-1.97.26-3.5.89-4.58 1.87s-1.89 2.56-2.41 4.73c-.39 1.91-.66 3.84-.79 5.81-.07 1.05-.1 3.71-.1 7.98v3.13s2.24 19.37 6 21v4.98c-2.85-.39-5.91-.59-8.77-.59-4.88 0-11.23 1.14-19.04 3.42s-14.88 3.42-21.19 3.42c-18.36 0-32.94-6.15-43.75-18.46C5.4 99.25 0 83.59 0 64.65S5.24 30.7 15.72 18.46C26.27 6.15 40.14 0 57.32 0c4.43 0 9.38.68 14.84 2.05C77.76 3.35 82.41 4 86.12 4c1.56 0 3.77-.2 6.64-.59 2.93 15.17 9.18 33.9 9.18 33.9h-7.92C85.35 16.22 72.7 5.7 56.07 5.77c-10.35 0-18.79 4.17-25.33 12.5s-9.8 21.84-9.8 40.53 3.88 35.19 11.65 46.97c7.89 11.85 18.7 17.77 32.41 17.77 7.96 0 13.46-2.34 16.5-7.03q4.56-7.23 4.56-25.2c0-7.03-.74-11.56-2.23-13.57-1.42-2.02-4.98-3.35-10.68-4l-3.2-.39Zm113.1-71.04 39 107.64c1.22 3.58 2.13 5.93 2.71 7.03.84 1.37 2.55 2.65 5.13 3.86s5.94 1.97 10.06 2.3v4.4q-23.805-.975-48 0v-4.4c7.03-.45 11.1-1.69 12.19-3.71 1.03-1.95.55-4.92-1.45-8.89L194 86.33h-45.63l-8.58 25.59c-1.11 3.26-.28 5.78 2.48 7.57s7.32 3.01 13.69 3.66v4.4q-21.15-.975-42 0v-4.4c6.04-.45 10.56-1.79 13.55-4 2.99-2.08 5.26-5.57 6.82-10.45L171.07 2.32h11.99Zm-12.56 20.41-19.82 58.59h41.02l-21.19-58.59Zm160.43 86.29 6.15-12.69h5.88c-3.05 9.9-4.96 20.15-5.74 30.76q-42.975-.585-85.26 0v-4.39c5.25-.39 8.91-1.27 10.99-2.64 2.01-1.43 3.01-3.87 3.01-7.32V17.67c0-3.45-1.08-5.88-3.24-7.3-2.03-1.35-5.95-2.4-11.76-3.14V3.22q24 .99 48 0v4.54c-5.42.71-9.08 1.71-10.97 3-2.02 1.29-3.03 3.62-3.03 6.98v94.57c0 3.62.35 6.04 1.04 7.27.76 1.16 2.55 1.74 5.39 1.74h14.66c7.32 0 12.71-.9 16.18-2.71 3.66-1.87 6.56-5.07 8.7-9.59m98 0 6.15-12.69h5.88c-3.05 9.9-4.96 20.15-5.74 30.76q-42.975-.585-85.26 0v-4.39c5.25-.39 8.91-1.27 10.99-2.64 2.01-1.43 3.01-3.87 3.01-7.32V17.32q0-4.83-3.03-6.81c-1.89-1.26-5.55-2.24-10.97-2.93V3.23c15.67.64 31.33.64 47 0v4.53c-5.42.71-9.08 1.71-10.97 3-2.02 1.29-3.03 3.62-3.03 6.98v94.57c0 3.62.35 6.04 1.04 7.27.76 1.16 2.55 1.74 5.39 1.74h14.66c7.31 0 12.71-.9 16.18-2.71 3.66-1.87 6.56-5.07 8.7-9.59m100.66 0 6.48-12.69h4.81c-3.08 9.82-5.01 19.99-5.79 30.52q-43.41-.585-86.13 0v-2.76c5.25-.39 8.91-1.28 10.99-2.66 2.01-1.44 3.01-3.9 3.01-7.38V15.63c0-2.82-.97-4.76-2.92-5.81-2.01-1.12-5.7-1.87-11.08-2.26V3.32h81.86q1.845 0 2.43.69c.39.46.71 1.44.97 2.95l2.33 21.36h-2.66l-1.79-4.48c-2.59-5.7-5.81-9.72-9.65-12.04-3.85-2.32-9.05-3.48-15.62-3.48h-21c-2.59 0-3.88 1.43-3.88 4.28v48.72h25.43c4.36 0 7.46-1.01 9.3-3.04 1.83-2.15 3.42-5.47 4.74-9.96h5.11a166 166 0 0 0 0 32h-4.53c-.77-3.02-1.61-5.36-2.5-7.03-1.93-3.98-5.84-5.97-11.75-5.97h-25.81v44.99c0 3.62.36 6.04 1.08 7.27.79 1.16 2.65 1.74 5.6 1.74h15.22c7.59 0 13.19-.9 16.79-2.71 3.67-1.81 6.64-5.01 8.94-9.59Zm78.61-36.25 18.59 26.84c5.1 7.42 10.54 13.42 16.3 17.99q8.745 6.765 14.61 7.26l-3.48 5.27c-17.36.26-32.2-8.35-44.53-25.84l-19.58-27.83-2.29.4-5.86.8v35.43c0 3.46.99 5.89 2.99 7.29 1.99 1.4 5.66 2.3 11.01 2.69v4.38c-15.7-.52-31.37-.52-47 0v-4.42c5.25-.39 8.91-1.26 10.99-2.62 2.01-1.42 3.01-3.86 3.01-7.29V18.79c0-6.53-4.67-10.37-14-11.5V2.1c4.7.27 10.37.4 17 .4 3.91 0 10.17-.07 18.79-.2 8.75-.13 13.25-.2 13.52-.2 33.4 0 50.1 10.87 50.1 32.6 0 18.03-13.39 30.71-40.16 38.07ZM581.97 8.32v63.67l6.45-1.07c14.45-2.08 24.58-6.05 30.37-11.91 5.86-5.99 8.79-13.61 8.79-22.85s-2.31-15.71-6.93-20.56-11.52-7.28-20.7-7.28h-17.97Zm146-.06V3.22c13.46.39 26.8.39 40 0V7.3c-6.08.33-10.52 1.41-13.33 3.23-2.81 1.83-5.26 4.84-7.35 9.02l-28.32 54.78v36.57c0 4.38 1 7.37 2.99 8.98q2.985 2.22 11.01 2.7v4.85c-15.7-.65-31.37-.65-47 0v-4.46c5.21-.45 8.85-1.48 10.91-3.09 2.06-1.67 3.09-4.67 3.09-8.98V75.38l-30.86-56.47c-2.14-3.83-4.35-6.62-6.62-8.37-2.21-1.69-5.71-2.69-10.52-3.02v-4.3q24.15.6 48 0v5.04c-9.56.51-12.47 4.27-8.73 11.29l25.06 46.41 24.11-46.22c1.83-3.61 1.74-6.36-.28-8.26-2.03-1.9-6.07-2.97-12.15-3.23Z" /></svg>

</div> */}