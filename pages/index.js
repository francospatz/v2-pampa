import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from '@/context/intro'
import { ThemeContext } from '@/context/theme'
import Link from 'next/link'
import Image from 'next/image'

import image1 from '../public/images/01.webp'
import image2 from '../public/images/02.webp'
import image3 from '../public/images/04.webp'
import image4 from '../public/images/05.webp'
import image5 from '../public/images/06.webp'


export default function Home() {
  const containerRef = useRef(null)

  const [introContext, setIntroContext] = useContext(IntroContext);
  const [themeContext, setThemeContext] = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 4000);
  }, []);

  let colorThemes = ['bg-off-white text-black selection:bg-black selection:text-white'];


  const reveal = {
    initial: { y: '100%' },
    enter: {
      y: 0,
      transition: { delay: introContext ? 0 : 3, duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      y: '100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const revealImage = {
    initial: { y: 0 },
    enter: {
      y: '-100%',
      transition: { delay: introContext ? 0 : 3, duration: 1, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      y: '-100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const revealX = {
    initial: { x: '100%' },
    enter: {
      x: 0,
      transition: { delay: introContext ? 0 : 3, duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      x: '100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  return (
    <Layout>
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <m.main variants={fade} className={`p-4 md:p-6 h-screen relative ${colorThemes[themeContext]}`}>

                  <div className="absolute top-0 right-0 left-0 md:left-auto md:bottom-0 z-[10000] px-6 md:px-[20px] py-3 md:py-6 hidden md:block">
                    <span className="h-full flex flex-row md:flex-col font-sans uppercase text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight">
                      <span className="block w-auto mb-[4vh] text-rotate text-center overflow-hidden">
                        <m.span variants={revealX} className="block">
                          Flavors
                        </m.span>
                      </span>
                      <span className="block flex-1 text-rotate text-center overflow-hidden">
                        <m.span variants={revealX} className="block">
                          joy
                        </m.span>
                      </span>
                      <span className="block flex-1 text-rotate text-center overflow-hidden">
                        <m.span variants={revealX} className="block">
                          flames
                        </m.span>
                      </span>
                      <span className="block flex-1 text-rotate text-center overflow-hidden">
                        <m.span variants={revealX} className="block">
                          and
                        </m.span>
                      </span>
                      <span className="block flex-1 text-rotate text-center overflow-hidden">
                        <m.span variants={revealX} className="block">
                          Argentine
                        </m.span>
                      </span>
                      <span className="block flex-1 text-rotate text-center overflow-hidden">
                        <m.span variants={revealX} className="block">
                          grill
                        </m.span>
                      </span>
                      <span className="block w-auto mt-[4vh] text-rotate text-center overflow-hidden">
                        <m.span variants={revealX} className="block">
                          mastery
                        </m.span>
                      </span>
                    </span>
                  </div>

                  {/* Mobile */}
                  <div className="block md:hidden absolute z-100 bottom-0 right-0 w-[100vw] mb-[5vw]">
                    <div className="relative flex flex-row space-x-[20px] md:space-x-[50px] overflow-x-hidden">
                      <div className="animate-marqueeH whitespace-nowrap flex flex-row space-x-[20px] md:space-x-[50px]">
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image4}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image5}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                      </div>

                      <div className="absolute top-0 animate-marqueeH2 whitespace-nowrap flex flex-row space-x-[20px] md:space-x-[50px]">
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image4}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image5}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop */}

                  <div className="hidden md:block absolute z-100 top-0 right-0 md:bottom-0 w-[100vw] md:w-[38%] xl:w-[40%] 3xl:w-[42%] h-[100vh] overflow-hidden mr-[60px]">
                    <div className="relative flex flex-col space-y-[20px] md:space-y-[50px] overflow-y-hidden">
                      <div className="transform animate-marquee whitespace-nowrap flex flex-col space-y-[20px] md:space-y-[50px] w-full">
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image4}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image5}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                      </div>

                      <div className="absolute top-0 transform animate-marquee2 whitespace-nowrap flex flex-col space-y-[20px] md:space-y-[50px] w-full">
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image4}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image5}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <article className="md:flex md:flex-wrap h-full">
                    <div className="mb-[12.5vw] md:mb-auto w-full z-40">
                      <svg className="w-full md:w-11/12" viewBox="0 0 1530.47 307.99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 126.24c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 25.37-20.38 42.01-68.01 41.8v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24Zm44.3-50.12c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08v63.43zm202.36 28.07c5.41 14.97 8.94 21.01 22.67 22.05v6.24c-21.01-.42-43.88-.42-64.89 0v-6.24c12.48-.62 18.72-4.16 14.77-15.39l-6.24-17.26H169.3l-5.82 17.26c-3.74 11.23 4.99 14.77 19.34 15.39v6.24q-26.205-.63-51.78 0v-6.24c14.56-1.04 20.17-6.03 24.12-17.47L192.6 2.29h17.05l37.02 101.91Zm-74.87-17.9h38.68L190.5 31.18l-18.72 55.11Zm130.81 39.94c11.65-1.04 21.42-3.74 21.42-13.52v-86.3c0-11.23-7.7-16.01-18.09-16.85V3.33c13.93.62 31.4.62 46.38 0l34.52 84.65 31-84.65c15.18.62 29.12.62 43.88 0v6.24c-10.4.83-14.35 5.62-14.35 16.85v86.31c0 9.36 3.95 12.69 14.35 13.52v6.24c-18.72-.62-39.31-.62-59.06 0v-6.24c11.44-.83 15.39-4.16 15.39-13.52v-85.9l-38.68 105.65h-2.29L332.36 26.83v85.89c0 9.78 9.98 12.48 23.09 13.52v6.24c-17.89-.62-36.4-.62-52.83 0v-6.24h-.01Zm194.46 0c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 25.37-20.38 42.01-68.01 41.8v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24h.01Zm44.3-50.12c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08v63.43zm202.35 28.07c5.41 14.97 8.94 21.01 22.67 22.05v6.24c-21.01-.42-43.88-.42-64.89 0v-6.24c12.48-.62 18.72-4.16 14.77-15.39l-6.24-17.26h-43.67l-5.82 17.26c-3.74 11.23 4.99 14.77 19.34 15.39v6.24c-17.47-.42-34.73-.42-51.79 0v-6.24c14.56-1.04 20.17-6.03 24.12-17.47L689.65 2.29h17.05l37.02 101.91Zm-74.87-17.9h38.68l-19.97-55.11-18.72 55.11Zm205.69-19.12c0-39.1 24.54-67.18 60.31-67.18 15.6 0 22.46 4.99 34.52 4.99 2.5 0 6.03-.21 9.36-1.66.83 12.27 2.7 24.13 7.28 37.44h-7.9C969.78 20.99 955.85 8.1 938.79 8.1c-19.13 0-33.48 17.68-33.48 53.66s13.73 65.1 38.06 65.1c13.52 0 18.93-8.73 18.93-26.62s-4.78-23.08-18.09-24.54v-5.82c19.13.42 37.23.42 56.15 0v5.82c-9.36 1.87-12.27 6.24-12.27 24.54 0 16.85 2.5 22.67 7.69 25.16v4.58c-4.37-.62-8.53-1.04-13.31-1.04-19.34 0-27.87 6.66-45.96 6.66-36.19 0-61.98-28.49-61.98-68.42zm252.06 30.57c11.65 17.68 22.46 29.12 32.86 30.16l-6.03 7.07c-15.18 0-34.52-2.29-51.58-28.7l-15.18-23.5c-2.5.21-4.99.21-7.69.21v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 17.89-10.19 31.4-32.65 37.85l12.27 18.72Zm-47.63-21.63c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08V76.1zm115.84 50.12c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 3.95 10.81 15.39 11.65v6.24c-19.76-.62-40.35-.62-60.1 0v-6.24Zm97.54-.01c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 2.7 10.61 10.4 10.61h5.41c16.43 0 21.21-4.78 35.77-29.95h5.61c-4.37 13.1-6.45 25.58-6.66 37.23-33.48-.83-62.81-.83-95.25 0v-6.24h.01Zm136.22 0c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 2.7 10.61 10.4 10.61h5.41c16.43 0 21.21-4.78 35.77-29.95h5.61c-4.37 13.1-6.45 25.58-6.66 37.23-33.48-.83-62.81-.83-95.25 0v-6.24h.01Zm-855.38 181-.09-47.7-23.66 39.75h-4.3l-23.66-39.47v47.42h-8.98v-65.47h7.67l27.31 46.02 26.94-46.02h7.67l.09 65.47zm91.65-16.37h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25zm51.34-41.62h9.35v57.33h35.45v8.14h-44.8zm118.88 49.1h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25zm95.76-9.26h8.98v25.53c-6.55 5.52-15.62 8.32-24.78 8.32-20.11 0-34.89-14.12-34.89-33.48s14.78-33.48 35.07-33.48c10.38 0 19.17 3.46 25.16 10.1l-5.8 5.8c-5.42-5.24-11.6-7.58-18.99-7.58-15.15 0-26.09 10.57-26.09 25.16s10.94 25.16 26 25.16c5.52 0 10.66-1.22 15.34-4.21zm89.88 16.74h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25z" fill="currentColor" /></svg>
                    </div>

                    <div className="2xl:flex 2xl:flex-wrap 2xl:items-end 2xl:w-[53vw] md:mt-auto relative z-[100]">
                      <div className="max-w-[280px] md:max-w-[550px] mb-6 xl:mb-10 2xl:mb-0 ml-[-2px] md:ml-0 -mt-5 md:mt-0">
                        <h1 className="font-serif text-[32px] text-brown md:text-[38px] xl:text-[44px] 2xl:text-[50px] leading-[1.35]  md:leading-none tracking-tighter mb-[-8px]">
                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                A premier culinary
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                haven devoted
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                to elevating the art
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                of Argentinean grilling
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                celebrating the <span className="">rich</span>
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                <span className="">flavors</span> & <span className="">traditions </span>
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px]">
                              <span className="block translate-y-[-8px]">
                                of gourmet barbecue.
                              </span>
                            </m.span>
                          </span>
                        </h1>
                      </div>

                      <div className="2xl:ml-auto flex space-x-4 md:space-x-6">
                        <Link legacyBehavior href="/journal">
                          <a className="block uppercase text-[12px] text-brown md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden drop-shadow-xl">
                            <m.span variants={reveal} className="block">
                              The Restaurant

                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                            </m.span>
                          </a>
                        </Link>

                        <Link legacyBehavior href="/contact">
                          <a className="block uppercase  text-[12px] text-brown md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                            <m.span variants={reveal} className="block">
                              Contact

                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                            </m.span>
                          </a>
                        </Link>

                        <a href="https://www.instagram.com/pampagrillmalaga" target="_blank" rel="noopener noreferrer" className="block uppercase text-[12px] text-brown md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                          <m.span variants={reveal} className="block">
                            Instagram

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>

                        <Link legacyBehavior href="/terms">
                          <a className="block uppercase  text-[12px] text-brown md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                            <m.span variants={reveal} className="block">
                              Terms

                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                            </m.span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </article>
                </m.main>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
