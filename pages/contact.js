import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import Div100vh from 'react-div-100vh'


export default function Contact() {
  const containerRef = useRef(null)
  const [formType, setFormType] = useState('client');
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
            <m.div variants={fade} className=" bg-off-white text-black selection:bg-black selection:text-black flex flex-wrap h-full">
              <m.main variants={fade} className="p-4 md:p-6 relative pb-0  w-full bg-off-white">

                <article className="flex flex-wrap">
                  <div className="w-full md:w-11/12 xl:w-10/12 relative z-10 mb-16 md:mb-28 xl:mb-40">
                    <svg className="w-full" viewBox="0 0 1354 205.33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M164.72 147.12h16.91c-4.06 16.66-12.6 30.53-25.6 41.6-13 10.97-31.14 16.46-54.4 16.46-30.17 0-54.65-9.7-73.45-29.1C9.4 156.46 0 131.52 0 101.25S9.19 46.8 27.58 28.72C45.97 10.43 69.33 1.29 97.67 1.29c8.23 0 17.32 1.37 27.28 4.11 9.95 2.74 18.03 4.11 24.23 4.11 5.59 0 11.48-.96 17.68-2.9 1.12 19.2 5.08 37.54 11.89 55.01h-25.6c-13.71-29.76-31.8-44.65-54.25-44.65-29.97 0-44.95 24.74-44.95 74.21 0 28.24 4.98 51.61 14.93 70.09 10.06 18.39 24.74 27.58 44.04 27.58 10.67 0 20.62-3.2 29.87-9.6 9.45-6.6 16.76-17.32 21.94-32.15ZM295.84 0c28.13 0 51.15 9.41 69.06 28.24 18.11 18.72 27.16 44.1 27.16 76.12 0 29.36-9.21 53.56-27.62 72.59-18.41 18.93-41.38 28.39-68.9 28.39s-50.79-9.41-68.9-28.24c-18.11-18.93-27.16-44.3-27.16-76.12 0-29.46 9.21-53.61 27.62-72.43C245.5 9.51 268.42 0 295.84 0m5.68 189.83c11.56 0 20.49-6.75 26.78-20.26 6.29-13.5 9.44-32.58 9.44-57.24 0-27.32-4.3-50.28-12.89-68.9s-19.9-27.93-33.91-27.93c-11.77 0-20.92 6.8-27.47 20.41-6.45 13.61-9.67 32.79-9.67 57.55 0 27.52 4.35 50.44 13.04 68.75 8.69 18.41 20.26 27.62 34.68 27.62M520.07 17.57V5.07c30.7 1.02 59.61 1.02 86.74 0v12.24c-21.79 1.94-32.69 8.95-32.69 21.02v161.59h-16.6L450.92 49.38v116.63c0 6.86 3.12 11.89 9.35 15.12s15.69 5.29 28.36 6.22v12.93c-31.2-1.01-60.12-1.01-86.74 0V187.6c21.79-2.03 32.69-9.07 32.69-21.13V44.91c0-8.23-2.68-14.72-8.05-19.46s-12.74-7.43-22.12-8.05V4.99q37.5 1.545 75.3 0l78.07 109.88V38.75q0-18.39-37.71-21.18M780.92 2.55h12.65l-10.88 44H771.5c1.26-10.66 0-17.7-3.77-21.12-3.67-3.52-8.85-5.28-15.56-5.28h-22.16V169.8c0 5.33 1.94 9.1 5.81 11.31 3.98 2.11 11.26 3.47 21.84 4.07v15.08q-52.65-1.23-105.6 0v-15.08c10.32-.6 17.3-1.96 20.94-4.07q5.46-3.465 5.46-11.31V20.15h-18.05c-6.78 0-12.39 1.76-16.84 5.28q-6.375 5.28-13.5 21.12h-13.26l9.79-44h12.52s20.05 2.52 40.82 2.51h61.08c20.15 0 39.9-2.51 39.9-2.51M896.5 3.8l55.98 150.43c4.37 11.84 8.95 20.15 13.73 24.94 4.68 4.69 11.85 7.45 21.51 8.26v12.55q-52.32-1.23-104.34 0v-12.55c9.76-.61 16.55-2.14 20.36-4.59q5.715-3.675 2.82-11.94l-11.9-32.6H837.3l-10.5 31.52c-2.06 6.02-.21 10.36 5.56 13.01q8.64 3.975 29.64 4.59v12.55c-29.85-1.02-59.18-1.02-88 0v-12.55c11.63-.82 20.17-2.91 25.63-6.27 5.56-3.37 9.57-8.67 12.04-15.92L867.41 3.8zm-32.72 51.01-22.25 69.67h48.03zm286.91 92.31h16.91c-4.06 16.66-12.6 30.53-25.6 41.6-13 10.97-31.14 16.46-54.4 16.46-30.17 0-54.65-9.7-73.45-29.1-18.8-19.6-28.19-44.54-28.19-74.82s9.19-54.45 27.58-72.53c18.39-18.29 41.75-27.43 70.09-27.43 8.23 0 17.32 1.37 27.28 4.11 9.95 2.74 18.03 4.11 24.23 4.11 5.59 0 11.48-.96 17.68-2.9 1.12 19.2 5.08 37.54 11.89 55.01h-25.6c-13.71-29.76-31.8-44.65-54.25-44.65-29.97 0-44.95 24.74-44.95 74.21 0 28.24 4.98 51.61 14.93 70.09 10.06 18.39 24.74 27.58 44.04 27.58 10.67 0 20.62-3.2 29.87-9.6 9.45-6.6 16.76-17.32 21.94-32.15ZM1341.35 2.55H1354l-10.88 44h-12.83q1.8-15.99-3.6-21.12-5.25-5.28-14.85-5.28h-21.15V169.8q0 7.995 5.55 11.31c3.8 2.11 10.75 3.47 20.85 4.07v15.08q-52.65-1.23-105.6 0v-15.08c10.81-.6 18.12-1.96 21.93-4.07 3.81-2.31 5.72-6.08 5.72-11.31V20.15h-18.91q-10.65 0-17.64 5.28c-4.45 3.52-9.17 10.56-14.15 21.12h-11.21l9.79-44h12.52s20.05 2.52 40.82 2.51h61.08c20.15 0 39.9-2.51 39.9-2.51Z" fill="currentColor" /></svg>
                  </div>

                  <div className="w-full md:w-11/12 xl:w-10/12 overflow-hidden">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/2  md:pr-12 xl:pr-24">
                        <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-5 relative overflow-hidden">
                          <m.span variants={reveal} className="block">All enquiries</m.span>
                        </span>

                        <a href="mailto:info@pampagrillmalaga.com" className="inline-block group font-serif text-black relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] mr-8  transition-colors ease-in-out duration-500 overflow-hidden group">
                          <m.span variants={reveal} className="block">
                            info@pampagrillmalaga.com

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>

                        <hr className="border-b border-t-0 border-current my-6 md:my-8 xl:my-12 opacity-50" />

                        <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-5 relative overflow-hidden">
                          <m.span variants={reveal} className="block">Location</m.span>
                        </span>

                        <div><a href="https://maps.app.goo.gl/dMJyDeobhFWNYkE7A" target="_blank" rel="noopener noreferrer" className="group inline-block font-serif mb-3 text-black relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] tr  transition-colors ease-in-out duration-500 overflow-hidden">
                          <m.span variants={reveal} className="block">C. Sánchez Pastor, 10, Málaga

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>

                        </div>
                        <hr className="border-b border-t-0 border-current my-6 md:my-8 xl:my-12 opacity-50" />
                        <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-5 relative overflow-hidden">
                          <m.span variants={reveal} className="block">Social</m.span>
                        </span>

                        <div><a href="https://www.instagram.com/pampagrillmalaga" target="_blank" rel="noopener noreferrer" className="group inline-block font-serif mb-3 text-black relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] tr  transition-colors ease-in-out duration-500 overflow-hidden">
                          <m.span variants={reveal} className="block">Instagram

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>
                        </div>

                        <div><a href="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341#booking=" target="_blank" rel="noopener noreferrer" className="group inline-block font-serif mb-3 text-black relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] tracking-tight mr-8 transition-colors ease-in-out duration-500 overflow-hidden">
                          <m.span variants={reveal} className="block">The Fork

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>
                        </div>

                        <div><a href="https://www.tripadvisor.es/Restaurant_Review-g187438-d13200317-Reviews-Pampa_Grill_Malaga-Malaga_Costa_del_Sol_Province_of_Malaga_Andalucia.html" target="_blank" rel="noopener noreferrer" className="group inline-block font-serif  text-black relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] tracking-tight mr-8 transition-colors ease-in-out duration-500 overflow-hidden">
                          <m.span variants={reveal} className="block">Tripadvisor

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </article>
              </m.main>

              <m.footer variants={fade} className="p-4 md:p-6 relative bg-off-white text-brown w-full mt-auto mb-[-4px]">
                <div className="flex flex-wrap">


                  <span className="block w-1/2 md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 md:mr-24 overflow-hidden pb-[4px]">
                    <m.span variants={reveal} className="block">© Pampa Grill 2024</m.span>
                  </span>

                  <span className="hidden xl:block w-1/2 md:w-auto font-sans uppercase text-black text-sm md:text-base xl:text-lg ml-auto font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 fixed top-0 right-0 m-6 overflow-hidden pb-[4px]">
                    <Link legacyBehavior href="/"><a className="group ">
                      <m.span variants={reveal} className="block">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a></Link>
                  </span>

                  <span className="block w-auto md:w-auto text-right xl:hidden ml-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0">
                    <Link legacyBehavior href="/">
                      <a className="group relative overflow-hidden block pb-[4px]">
                        <m.span variants={reveal} className="block">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span>
                      </a>
                    </Link>
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
