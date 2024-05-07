'use client'
import { useContext, useEffect, useState } from 'react'
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import Div100vh from 'react-div-100vh'
import { LangContext } from '@/context/lang'


export default function Contact() {

  const [langContext, setLangContext] = useContext(LangContext);

  const [introContext, setIntroContext] = useContext(IntroContext);

  const reveal = {
    initial: { y: '100%' },
    enter: {
      y: 0,
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
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

  return (
    <Layout>
      <NextSeo title="Contact" />


      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"

        ><Div100vh className='w-full bg-off-white'>
            <m.div variants={fade} className="h-full bg-off-white text-light-brown selection:bg-off-white selection:text-light-brown flex flex-wrap ">
              <m.main variants={fade} className="pb-0 p-4 md:p-6 relative w-full relative flex bg-off-white">

                <article className="flex flex-wrap w-full">

                  <div className="w-full relative z-10  flex justify-center items-center mt-[-10px]">

                    <p className="w-full md:w-11/12 font-serif font-bold text-[3rem] lg:text-[5rem] text-center" >
                      {langContext === 'es' ? 'CONTACTO' : 'CONTACT'}
                    </p>

                  </div>

                  <div className="w-full mt-auto">
                    <div className="flex flex-wrap-reverse">
                      <div className="w-full md:w-1/2  md:pr-12 xl:pr-24">
                        <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-5 relative ">
                          <m.span variants={reveal} className="block">
                            {langContext === 'es' ? 'Todas las consultas' : 'All Enquiries'}
                          </m.span>
                        </span>

                        <a href="mailto:info@pampagrillmalaga.com" className="inline-block group font-serif text-light-brown relative text-lg lg:text-2xl font-normal leading-[1.15] md:leading-[1.2] mr-8  transition-colors ease-in-out duration-500  group">
                          <m.span variants={reveal} className="block">
                            info@pampagrillmalaga.com


                          </m.span>
                        </a>
                        <a href="tel:0034657602690" className="inline-block group font-serif text-light-brown relative text-lg lg:text-2xl font-normal leading-[1.15] md:leading-[1.2] mr-8  transition-colors ease-in-out duration-500  group">
                          <m.span variants={reveal} className="block">
                            +34 951439974


                          </m.span>
                        </a>

                        <hr className="border-b border-t-0 border-current my-6 md:my-8 xl:my-12 opacity-50" />

                        <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-5 relative ">
                          <m.span variants={reveal} className="block">
                            {langContext === 'es' ? 'Ubicación' : 'Location'}
                          </m.span>
                        </span>

                        <div><a href="https://maps.app.goo.gl/dMJyDeobhFWNYkE7A" target="_blank" rel="noopener noreferrer" className="group inline-block font-serif mb-3 text-light-brown relative text-lg lg:text-2xl font-normal leading-[1.15] md:leading-[1.2] tr  transition-colors ease-in-out duration-500 ">
                          <m.span variants={reveal} className="block">C. Sánchez Pastor, 10, Málaga


                          </m.span>
                        </a>

                        </div>
                        <hr className="border-b border-t-0 border-current my-6 md:my-8 xl:my-12 opacity-50" />
                        <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-5 relative ">
                          <m.span variants={reveal} className="block">Social</m.span>
                        </span>

                        <a href="https://www.instagram.com/pampagrillmalaga/" target="_blank" className="inline-block group font-serif text-light-brown relative text-lg lg:text-2xl font-normal leading-[1.15] md:leading-[1.2] mr-8  transition-colors ease-in-out duration-500  group">
                          <m.span variants={reveal} className="block">
                            Instagram

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>

                        <a href="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341" target="_blank" className="inline-block group font-serif text-light-brown relative text-lg lg:text-2xl font-normal leading-[1.15] md:leading-[1.2] mr-8  transition-colors ease-in-out duration-500  group">
                          <m.span variants={reveal} className="block">
                            The Fork

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>
                        <a href="https://www.tripadvisor.es/Restaurant_Review-g187438-d13200317-Reviews-Pampa_Grill_Malaga-Malaga_Costa_del_Sol_Province_of_Malaga_Andalucia.html" target="_blank" className="inline-block group font-serif text-light-brown relative text-lg lg:text-2xl font-normal leading-[1.15] md:leading-[1.2] mr-8  transition-colors ease-in-out duration-500  group">
                          <m.span variants={reveal} className="block">
                            Tripadvisor

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>


                      </div>
                      <div className="w-full md:w-1/2  flex justify-center items-center ">

                        <a href="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341" target="_blank" className="inline-block group font-serif text-light-brown relative text-3xl font-normal leading-[1.15] md:leading-[1.2] md:pt-0 pb-16 md:pb-0  transition-colors ease-in-out duration-500  group">
                          <m.span variants={reveal} className="block">
                            {langContext === 'es' ? 'Reserva una mesa' : 'Book a table'}

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>

                      </div>
                    </div>
                  </div>
                </article>
              </m.main>

              <m.footer variants={fade} className="p-4 md:p-6 bg-off-white relative w-full flex items-end">
                <div className="flex flex-row w-full">
                  <span className="block w-full md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-0">© Pampa Grill 2024</span>

                  <span className="block w-1/2  text-right  ml-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0">
                    <Link legacyBehavior href="/"><a className="group relative">
                      {langContext === 'es' ? 'Volver' : 'Back to home'}
                      <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
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
