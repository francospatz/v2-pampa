import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade, fadeNoDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ThemeContext } from '@/context/theme'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import Div100vh from 'react-div-100vh'


export default function Gallery() {

    const containerRef = useRef(null)
    /* const [introContext, setIntroContext] = useContext(IntroContext);


    useEffect(() => {
        setTimeout(() => {
            setIntroContext(true)
        }, 500);
    }, []); */
    return (
        <Layout>
            <NextSeo title="Gallery" />
            <LazyMotion features={domAnimation}>
                <m.div
                    initial="initial"
                    animate="enter"
                    exit="exit"

                >
                    <Div100vh>
                        <m.div variants={fade} className="bg-off-white text-light-brown selection:bg-light-brown selection:text-light-brown h-full relative flex flex-wrap">
                            <m.main variants={fade} className="p-4 md:p-6 relative w-full relative flex bg-off-white" >

                                <article className="flex flex-wrap w-full ">
                                    <m.span variants={fade} className=" z-50 font-sans overflow-hidden uppercase text-sm md:text-base xl:text-lg  font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 fixed top-0 right-0 m-6 overflow-hidden pb-[4px]">
                                        <Link legacyBehavior href="/restaurant"><a className="group ">
                                            <m.span variants={fade} className="block"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50"><path d="M9.156 6.313 6.312 9.156 22.157 25 6.22 40.969l2.81 2.811L25 27.844 40.938 43.78l2.843-2.843L27.844 25 43.687 9.156l-2.843-2.844L25 22.157Z" /></svg> <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a>
                                        </Link>
                                    </m.span>

                                    <div className="w-full flex flex-wrap items-start">
                                        <LazyMotion features={domAnimation}>
                                            <m.div variants={fade} className="w-10/12 md:w-full md:max-w-[380px] xl:max-w-[400px] 2xl:max-w-[440px] 3xl:max-w-[500px] md:mx-auto font-serif text-xl xl:text-[22px] leading-tight tracking-tight content mt-16 xl:mt-10">


                                                <h1 className="title uppercase">Gallery</h1>



                                            </m.div>
                                        </LazyMotion>
                                    </div>
                                </article>
                            </m.main>

                            <m.footer variants={fade} className="p-4 md:p-6 bg-off-white relative w-full flex items-end">
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
                        </m.div>
                    </Div100vh>
                </m.div>
            </LazyMotion>

        </Layout>
    )
}