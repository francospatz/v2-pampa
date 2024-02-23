'use client'
import Layout from '@/components/layout'
import { fade, fadeNoDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Div100vh from 'react-div-100vh'
import ImageGallery from './imageGallery'



export default function Gallery() {

    return (
        <Layout>
            <NextSeo title="Gallery" />
            <LazyMotion features={domAnimation}>
                <m.div
                    initial="initial"
                    animate="enter"
                    exit="exit"

                >
                    <Div100vh className="bg-off-white">

                        <m.main variants={fade} className="relative relative  bg-off-white text-light-brown selection:bg-off-white selection:text-light-brown h-full" >

                            <article className="flex flex-wrap w-full justify-center h-full">
                                {/* <m.span variants={fade} className=" z-50 font-sans uppercase text-sm md:text-base xl:text-lg  font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 fixed top-0 right-0 m-6  pb-[4px]">
                                    <Link legacyBehavior href="/restaurant"><a className="group ">
                                        <m.span variants={fade} className="block">BACK<span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a>
                                    </Link>
                                </m.span> */}


                                <LazyMotion features={domAnimation}>
                                    <m.div variants={fade} className="w-full font-serif text-xl xl:text-[22px] leading-tight tracking-tight content flex justify-center pt-20  h-full">


                                        <ImageGallery />


                                    </m.div>
                                </LazyMotion>

                            </article>
                        </m.main>

                        <m.footer variants={fade} className="absolute bottom-0 p-4 md:p-6 bg-off-white w-full flex">
                            <div className="flex flex-wrap w-full">
                                <span className="block w-full md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">© Pampa Grill 2024</span>



                                <span className="hidden md:block w-full md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">
                                    <Link legacyBehavior href="/"><a className="group relative">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
                                </span>

                                <span className="block w-1/2 md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight ml-auto"><Link legacyBehavior href="/contact"><a className="group relative">Contact Us <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link></span>

                                <span className="block w-1/2 md:w-auto text-right md:hidden ml-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0">
                                    <Link legacyBehavior href="/"><a className="group relative">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
                                </span>
                            </div>
                        </m.footer>

                    </Div100vh>
                </m.div>
            </LazyMotion>

        </Layout>
    )
}