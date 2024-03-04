'use client'
import { useRef, useContext } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout'
import { fade, fadeLate } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Div100vh from 'react-div-100vh'
import { ReactLenis } from '@studio-freight/react-lenis';
import ImageCarousel from './imageCarousel'
import Link from 'next/link';
import { LangContext } from '@/context/lang'

const images = [
    '/images/gallery/food/1.webp',
    '/images/gallery/food/2.webp',
    '/images/gallery/food/3.webp',
    '/images/gallery/food/4.webp',
    '/images/gallery/food/5.webp',
    '/images/gallery/food/6.webp',
    '/images/gallery/food/7.webp',
    '/images/gallery/food/8.webp',
    '/images/gallery/restaurant/1.webp',
    '/images/gallery/restaurant/2.webp',
    '/images/gallery/restaurant/3.webp',
    '/images/gallery/restaurant/4.webp',
    '/images/gallery/restaurant/5.webp',
    '/images/gallery/restaurant/6.webp',
    '/images/gallery/restaurant/7.webp',
    '/images/gallery/restaurant/8.webp',
];


export default function Gallery() {
    const [langContext, setLangContext] = useContext(LangContext);

    const lenisRef = useRef();


    return (
        <Layout >
            <ReactLenis ref={lenisRef}>
                <NextSeo title="Gallery" />
                <LazyMotion features={domAnimation}>
                    <m.div
                        initial="initial"
                        animate="enter"
                        exit="exit"


                    >
                        <Div100vh className='w-full bg-off-white'>
                            <m.div variants={fade} className="h-full bg-off-white text-light-brown selection:bg-off-white selection:text-light-brown flex flex-wrap ">

                                <m.main variants={fade} className="pb-0 p-4 md:p-6 relative w-full relative bg-off-white" >

                                    <article className="flex w-full justify-center items-start h-full">


                                        <m.div variants={fade} className="w-full font-serif text-xl xl:text-[22px] leading-tight tracking-tight content flex flex-col justify-center h-full">




                                            <div className="w-full relative z-10 mb-5">
                                                <a className="block w-full xl:w-[89%]">
                                                    <svg className="w-full md:w-11/12" viewBox="0 0 1528.99 170.58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.46 102.46 49 103.47v43.82c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.21-.84-44.54-.84-67 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75S7.32 13.12 1 12.63V5.44c6.33.34 13.85.51 22.54.51 5.23 0 13.34-.08 24.32-.25 10.97-.17 16.55-.25 16.72-.25 46.02 0 69.02 14.27 69.02 42.81 0 14.02-6.16 25.58-18.49 34.7-12.41 9.12-32.3 15.62-59.65 19.5M49 13.48v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96s11.12-17.64 11.12-29.91c0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65zM215.89 3.47l50.27 135.99c2.23 5.56 3.9 9.36 5.01 11.41 3.17 5.81 10.11 9.02 20.83 9.61v7.31q-35.865-1.41-72 0v-7.31c8.49-.6 13.84-2.09 16.07-4.49 2.14-2.22 2.06-5.98-.26-11.28l-11.06-30.25h-55.16l-10.46 31.27c-1.45 4.53-.24 7.93 3.64 10.19 3.87 2.27 10.61 3.78 20.23 4.55v7.31c-20.42-.85-40.75-.85-61 0v-7.31q12.375-.9 18.63-5.25c4.08-2.73 7.23-7.22 9.44-13.46L197.55 3.47zm-19.57 31.82-23.27 70.18h48.96l-25.7-70.18ZM474 25.91v119.97c0 5.27 1.32 8.84 3.95 10.71 2.72 1.96 7.73 3.19 15.05 3.7v7.31a939 939 0 0 0-70 0v-7.42c7.6-.51 12.84-1.75 15.7-3.71s4.3-5.54 4.3-10.74V31.58l-52.75 135.9h-2.57L335 31.58v114.16q0 7.29 5.61 10.29c3.74 2 10.2 3.39 19.39 4.15v7.41c-21.14-.94-41.8-.94-62 0v-7.38c9.26-.76 15.74-2.12 19.44-4.1s5.56-5.37 5.56-10.16V29.15c0-10.15-7.33-15.73-22-16.76V4.94c17.31.94 34.63.94 51.94 0l46.82 114.75L441.98 4.94c16.63.6 33.3.6 50.02 0v7.75c-6.94.49-11.67 1.65-14.2 3.49s-3.8 5.08-3.8 9.73m85.46 76.55-6.46 1.01v43.82c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.21-.84-44.54-.84-67 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75s-6.92-3.08-13.24-3.57V5.44c6.33.34 13.85.51 22.54.51 5.23 0 13.34-.08 24.32-.25 10.97-.17 16.55-.25 16.72-.25 46.02 0 69.02 14.27 69.02 42.81 0 14.02-6.16 25.58-18.49 34.7-12.41 9.12-32.3 15.62-59.65 19.5M553 13.48v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96s11.12-17.64 11.12-29.91c0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65zM719.89 3.47l50.27 135.99c2.23 5.56 3.9 9.36 5.01 11.41 3.17 5.81 10.11 9.02 20.83 9.61v7.31q-35.88-1.41-72 0v-7.31c8.49-.6 13.84-2.09 16.07-4.49 2.14-2.22 2.06-5.98-.26-11.28l-11.06-30.25h-54.16l-10.46 31.27c-1.45 4.53-.24 7.93 3.64 10.19 3.87 2.27 10.61 3.78 20.23 4.55v7.31c-20.42-.85-40.75-.85-61 0v-7.31q12.375-.9 18.63-5.25c4.08-2.73 7.23-7.22 9.44-13.46L702.55 3.47zm-19.62 31.82L677 105.47h48.96l-25.7-70.18ZM956 97.16v-7.54c21.92.51 43.59.51 65 0v9.37l-5.55.94c-2.36.32-4.19 1.1-5.49 2.36s-2.26 3.19-2.89 5.79c-.47 2.21-.79 4.57-.94 7.09q-.12 2.01-.12 9.69v3.24c0 15.68 3 24.59 9 26.72v8.05q-6.945-1.02-14.79-1.02c-7.54 0-16.5 1.45-26.87 4.35-10.29 2.9-19.67 4.35-28.16 4.35q-36.39 0-58.38-23.91c-14.57-16.02-21.86-36.77-21.86-62.26s7.2-44.83 21.6-60.6C900.95 7.93 919.64 0 942.61 0c6.26 0 13.24.98 20.96 2.94 7.46 1.88 13.71 2.81 18.77 2.81 3.17 0 6.77-.43 10.8-1.28 2.91 18.58 6.77 33.58 11.57 45h-15.19c-11.3-26.67-27.4-40.01-48.3-40.01-13.51 0-24.13 5.41-31.86 16.24-7.82 10.91-11.73 27.83-11.73 50.75 0 25.14 4.67 45.47 14.02 60.98 9.43 15.43 22.77 23.14 40.02 23.14 9.77 0 16.44-2.9 20.01-8.69 3.65-5.79 5.48-15.64 5.48-29.53 0-9.72-1.02-16.02-3.06-18.92-1.87-3.07-6.25-4.99-13.13-5.75l-4.97-.51Zm161.59-.15 22.24 31.29q22.5 32.325 40.98 33.87l-5.56 8.4c-25 .34-45.47-10.86-61.41-33.61l-24.05-34.13c-.09 0-.39.04-.91.13s-.95.13-1.29.13l-6.59 1.03v43.17c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.54-.85-45.2-.85-68 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75s-6.92-3.08-13.24-3.57V4.05c6.47.35 14.13.52 23.01.52 5.34 0 13.62-.08 24.82-.26 11.2-.17 16.89-.26 17.07-.26 46.97 0 70.46 14.57 70.46 43.7q0 34.905-49.77 49.26m-16.39-83.53H1081v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96 7.41-7.67 11.12-17.64 11.12-29.91 0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65m137.8 11.7V147.4q0 6.81 4.17 9.63c2.78 1.88 7.72 3.08 14.83 3.59v6.97c-22.54-.84-45.21-.84-68 0v-7.97c7.18-.51 12.14-1.69 14.88-3.55s4.12-5.02 4.12-9.5V26c0-4.47-1.37-7.62-4.12-9.44-2.75-1.81-7.71-2.98-14.88-3.48V4.99c22.54.84 45.21.84 68 0v7.1c-7.1.51-12.05 1.71-14.83 3.59s-4.17 5.05-4.17 9.5m143.49 116.42 9.73-17.13h3.12s-7.04 27.49-7.97 42.83c-39.04-.6-77.4-.6-114.37 0v-7.29c6.28-.51 11.13-1.66 13.83-3.45 2.61-1.87 4.17-9.72 4.17-9.72V25.38c0-4.47-1.37-7.62-4.12-9.44-2.75-1.81-7.71-2.98-14.88-3.48V4.98q34.305 1.275 69 0v8.1c-7.48.51-12.68 1.69-15.61 3.55s-4.39 4.99-4.39 9.39V146.8c0 4.65.65 7.76 1.96 9.32 1.3 1.57 3.99 2.35 8.04 2.35h15.27c10.09 0 17.75-1.22 22.97-3.68 5.14-2.54 9.55-6.93 13.24-13.19Zm131.92 0 9.24-17.13h5.34s-7.04 27.49-7.97 42.83c-39.04-.6-77.4-.6-115.03 0v-7.29c6.94-.51 11.79-1.66 14.49-3.45 2.61-1.87 3.51-9.72 3.51-9.72V24.82c0-4.29-1.3-7.3-3.9-9.04s-7.3-2.85-14.1-3.34V4.98q34.305 1.275 69 0v8.1c-7.1.51-12.05 1.69-14.83 3.55q-4.17 2.79-4.17 9.39V146.8c0 4.65.62 7.76 1.86 9.32 1.24 1.57 3.79 2.35 7.64 2.35H1480c9.58 0 16.86-1.22 21.82-3.68 4.88-2.54 9.07-6.93 12.58-13.19Z" fill="#151009" /></svg>
                                                </a>
                                            </div>
                                            <div className='w-full'>
                                                <div className='font-serif leading-none tracking-tight h-full w-full flex justify-center'>
                                                    <ImageCarousel images={images}></ImageCarousel>
                                                </div>
                                            </div>



                                        </m.div>

                                    </article>

                                </m.main>
                                <m.footer variants={fade} className="p-4 md:p-6 bg-off-white relative w-full flex items-end">
                                    <div className="flex flex-col md:flex-row w-full">

                                        <span className="block w-auto font-sans uppercase text-sm  xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">© Pampa Grill 2024</span>



                                        <div className='flex flex-row md:mr-0 md:ml-auto'>


                                            <span className="block w-auto font-sans uppercase text-sm  xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">
                                                <a href="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341" target='_blank' className="group relative">
                                                    {langContext === 'es' ? 'Reserva' : 'Bookings'}
                                                    <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a>
                                            </span>
                                            <span className="block w-auto font-sans uppercase text-sm  xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">
                                                <Link legacyBehavior href="/contact"><a className="group relative">{langContext === 'es' ? 'Contacto' : 'Contact'}  <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
                                            </span>
                                            <span className="block w-1/2  text-right  ml-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0">
                                                <Link legacyBehavior href="/"><a className="group relative">
                                                    {langContext === 'es' ? 'Volver' : 'Back to home'}
                                                    <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
                                            </span>


                                        </div>
                                    </div>
                                </m.footer>


                            </m.div>

                        </Div100vh>

                    </m.div>
                </LazyMotion>
            </ReactLenis>
        </Layout>
    )
}

const Column = ({ images, y }) => {
    return (
        <motion.div
            className="column"
            style={{ y }}
        >
            {
                images.map((src, i) => {
                    return <div key={i} className="imageContainer">
                        <Image
                            src={`${src}`}
                            alt='image'
                            fill
                            sizes='100%'
                            priority={true}
                        />
                    </div>
                })
            }
        </motion.div>
    )
}