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
            {/* <ReactLenis ref={lenisRef}> */}
            <NextSeo title="Gallery" />
            <LazyMotion features={domAnimation}>
                <m.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <Div100vh className='w-full bg-off-white'>
                        <m.div variants={fade} className="h-full bg-off-white text-light-brown selection:bg-off-white selection:text-light-brown">

                            <m.main variants={fade} className="pb-0 p-4 md:p-6 relative w-full relative bg-off-white h-[85%] md:h-[91%] flex  flex-col items-start justify-start" >
                                <div className="w-full h-[8%] relative z-10  flex justify-center items-center">

                                    <p className="w-full md:w-11/12 font-serif text-[3rem] md:text-[4rem] text-center font-bold" >
                                        {langContext === 'es' ? 'GALERÍA' : 'GALLERY'}
                                    </p>

                                </div>

                                <article className="flex w-full justify-center items-start h-[92%]">

                                    <m.div variants={fade} className="w-full font-serif text-xl xl:text-[22px] leading-tight tracking-tight content flex flex-col justify-center items-center h-full">

                                        {/* <div className='w-full h-full flex flex-col items-center justify-center'> */}
                                        <div className='font-serif leading-none tracking-tight h-full w-full flex justify-around items-center'>
                                            <ImageCarousel images={images}></ImageCarousel>
                                        </div>
                                        {/* </div> */}



                                    </m.div>

                                </article>

                            </m.main>
                            <m.footer variants={fade} className="pt-0 h-[15%] md:h-[9%] p-4 md:p-6 bg-off-white 
                                 w-full flex items-end">
                                <div className="flex flex-col md:flex-row w-full">

                                    <span className="block w-auto font-sans uppercase text-sm  xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">© Pampa Grill 2024</span>



                                    <div className='flex flex-row md:mr-0 md:ml-auto'>


                                        <span className="block w-auto font-sans uppercase text-sm  xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">
                                            <a href="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341" target='_blank' className="group relative">
                                                {langContext === 'es' ? 'Reservas' : 'Bookings'}
                                                <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a>
                                        </span>
                                        <span className="block w-auto font-sans uppercase text-sm  xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">
                                            <Link legacyBehavior href="/contact"><a className="group relative">{langContext === 'es' ? 'Contacto' : 'Contact'}  <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
                                        </span>
                                        <span className="block w-1/2  text-right  ml-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0">
                                            <Link legacyBehavior href="/restaurant"><a className="group relative">
                                                {langContext === 'es' ? 'Volver' : 'Back'}
                                                <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
                                        </span>


                                    </div>
                                </div>
                            </m.footer>


                        </m.div>

                    </Div100vh>

                </m.div>
            </LazyMotion>
            {/* </ReactLenis> */}
        </Layout>
    )
}

