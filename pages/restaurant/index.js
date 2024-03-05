'use client'
import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade, revealNoDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { LangContext } from '@/context/lang'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import Div100vh from 'react-div-100vh'


export default function Restaurant(initialData) {

  const [langContext, setLangContext] = useContext(LangContext);
  const [introContext, setIntroContext] = useContext(IntroContext);

  const revealImage = {
    initial: { y: 0 },
    enter: {
      y: '100%',
      transition: { duration: 1.25, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      y: '100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 0);
  }, []);

  const restaurant = [
    {
      slug: "the-menu",
      title: langContext === 'es' ? "El Menú" : "The Menu",
    },
    {
      slug: "gallery",
      title: langContext === 'es' ? "Galería" : "Gallery",
    },


  ];

  return (
    <Layout>
      <NextSeo title="Restaurant" />
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
                  <div className="w-full relative z-10  flex justify-center items-start mt-[-10px]">

                    <p className="w-full md:w-11/12 font-serif font-bold text-[3rem] text-center" >
                      {langContext === 'es' ? 'RESTAURANTE' : 'RESTAURANT'}
                    </p>

                  </div>

                  <div className="w-full mt-auto">
                    <div className="font-serif leading-none tracking-tight mt-12 md:mt-16 xl:mt-24">

                      <ul className="journal-list">
                        {

                          restaurant?.map((item, i) => {
                            return (
                              <li className={`block border-b border-light-brown ${i == 0 && 'border-t'}`} key={i}>
                                <Link legacyBehavior href={`/restaurant/${item.slug}`}>
                                  <a className="block relative py-4 md:py-6 xl:py-7">
                                    <div className="flex flex-wrap items-end overflow-hidden w-full">
                                      <m.span variants={revealNoDelay} className="block w-full pb-1 md:pb-0 md:w-[110px] xl:w-[200px] text-xs md:text-sm xl:text-base">P/{i < 9 && (0)}{i + 1}</m.span>
                                      <m.span variants={revealNoDelay} className="block text-2xl md:text-3xl md:leading-tight xl:text-4xl xl:leading-tight">{item.title}</m.span>
                                      <m.span variants={revealNoDelay} className="block ml-auto">
                                        <svg className="w-[20px] md:w-[24px] xl:w-[28px] mb-[5px]" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 13.906h23.296l-8.454 8.454 2.259 2.259 12.31-12.31L17.1 0l-2.258 2.258 8.453 8.454H0v3.194Z" fill="currentColor" /></svg>
                                      </m.span>
                                    </div>
                                  </a>
                                </Link>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  </div>
                </article>
              </m.main>

              <m.footer variants={fade} className="p-4 md:p-6 bg-off-white relative w-full flex items-end">
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

    </Layout>
  )
}
