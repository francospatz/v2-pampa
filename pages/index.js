import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from '@/context/intro'
import { ThemeContext } from '@/context/theme'
import Link from 'next/link'
import Image from "next/legacy/image"

import image1 from '../public/images/01.webp'
import image2 from '../public/images/02.webp'
import image3 from '../public/images/04.webp'
import image4 from '../public/images/05.webp'
import image5 from '../public/images/06.webp'
import Div100vh from 'react-div-100vh'


export default function Home() {
  const containerRef = useRef(null)

  const [introContext, setIntroContext] = useContext(IntroContext);
  const [themeContext, setThemeContext] = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 4000);
  }, []);

  let colorThemes = ['bg-off-white text-light-brown selection:bg-off-white selection:text-light-brown'];


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
        <Div100vh data-scroll-container ref={containerRef} id="scroll-container">
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
                            alt="Pampa Grill"
                            src={image1}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Pampa Grill"
                            src={image2}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Pampa Grill"
                            src={image3}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Pampa Grill"
                            src={image4}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Pampa Grill"
                            src={image5}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
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
                            alt="Pampa Grill"
                            src={image1}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Pampa Grill"
                            src={image2}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Pampa Grill"
                            src={image3}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Pampa Grill"
                            src={image4}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Pampa Grill"
                            src={image5}
                            className="w-[65vw] object-cover object-center scale-105 opacity-100"
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
                            alt="Pampa Grill"
                            src={image1}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image2}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image3}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image4}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image5}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image1}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image2}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image3}
                            className="w-full object-cover object-center scale-105 opacity-100"
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
                            alt="Pampa Grill"
                            src={image1}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image2}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image3}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image4}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image5}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image1}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image2}
                            className="w-full object-cover object-center scale-105 opacity-100"
                            layout="responsive"
                            priority={true}
                            width={1334}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Pampa Grill"
                            src={image3}
                            className="w-full object-cover object-center scale-105 opacity-100"
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
                    <div className="mb-[12.5vw] md:mb-auto w-full z-40 mix-blend-lighter">
                      <svg className="w-full md:w-11/12" viewBox="0 0 1528.99 170.58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.46 102.46 49 103.47v43.82c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.21-.84-44.54-.84-67 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75S7.32 13.12 1 12.63V5.44c6.33.34 13.85.51 22.54.51 5.23 0 13.34-.08 24.32-.25 10.97-.17 16.55-.25 16.72-.25 46.02 0 69.02 14.27 69.02 42.81 0 14.02-6.16 25.58-18.49 34.7-12.41 9.12-32.3 15.62-59.65 19.5M49 13.48v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96s11.12-17.64 11.12-29.91c0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65zM215.89 3.47l50.27 135.99c2.23 5.56 3.9 9.36 5.01 11.41 3.17 5.81 10.11 9.02 20.83 9.61v7.31q-35.865-1.41-72 0v-7.31c8.49-.6 13.84-2.09 16.07-4.49 2.14-2.22 2.06-5.98-.26-11.28l-11.06-30.25h-55.16l-10.46 31.27c-1.45 4.53-.24 7.93 3.64 10.19 3.87 2.27 10.61 3.78 20.23 4.55v7.31c-20.42-.85-40.75-.85-61 0v-7.31q12.375-.9 18.63-5.25c4.08-2.73 7.23-7.22 9.44-13.46L197.55 3.47zm-19.57 31.82-23.27 70.18h48.96l-25.7-70.18ZM474 25.91v119.97c0 5.27 1.32 8.84 3.95 10.71 2.72 1.96 7.73 3.19 15.05 3.7v7.31a939 939 0 0 0-70 0v-7.42c7.6-.51 12.84-1.75 15.7-3.71s4.3-5.54 4.3-10.74V31.58l-52.75 135.9h-2.57L335 31.58v114.16q0 7.29 5.61 10.29c3.74 2 10.2 3.39 19.39 4.15v7.41c-21.14-.94-41.8-.94-62 0v-7.38c9.26-.76 15.74-2.12 19.44-4.1s5.56-5.37 5.56-10.16V29.15c0-10.15-7.33-15.73-22-16.76V4.94c17.31.94 34.63.94 51.94 0l46.82 114.75L441.98 4.94c16.63.6 33.3.6 50.02 0v7.75c-6.94.49-11.67 1.65-14.2 3.49s-3.8 5.08-3.8 9.73m85.46 76.55-6.46 1.01v43.82c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.21-.84-44.54-.84-67 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75s-6.92-3.08-13.24-3.57V5.44c6.33.34 13.85.51 22.54.51 5.23 0 13.34-.08 24.32-.25 10.97-.17 16.55-.25 16.72-.25 46.02 0 69.02 14.27 69.02 42.81 0 14.02-6.16 25.58-18.49 34.7-12.41 9.12-32.3 15.62-59.65 19.5M553 13.48v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96s11.12-17.64 11.12-29.91c0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65zM719.89 3.47l50.27 135.99c2.23 5.56 3.9 9.36 5.01 11.41 3.17 5.81 10.11 9.02 20.83 9.61v7.31q-35.88-1.41-72 0v-7.31c8.49-.6 13.84-2.09 16.07-4.49 2.14-2.22 2.06-5.98-.26-11.28l-11.06-30.25h-54.16l-10.46 31.27c-1.45 4.53-.24 7.93 3.64 10.19 3.87 2.27 10.61 3.78 20.23 4.55v7.31c-20.42-.85-40.75-.85-61 0v-7.31q12.375-.9 18.63-5.25c4.08-2.73 7.23-7.22 9.44-13.46L702.55 3.47zm-19.62 31.82L677 105.47h48.96l-25.7-70.18ZM956 97.16v-7.54c21.92.51 43.59.51 65 0v9.37l-5.55.94c-2.36.32-4.19 1.1-5.49 2.36s-2.26 3.19-2.89 5.79c-.47 2.21-.79 4.57-.94 7.09q-.12 2.01-.12 9.69v3.24c0 15.68 3 24.59 9 26.72v8.05q-6.945-1.02-14.79-1.02c-7.54 0-16.5 1.45-26.87 4.35-10.29 2.9-19.67 4.35-28.16 4.35q-36.39 0-58.38-23.91c-14.57-16.02-21.86-36.77-21.86-62.26s7.2-44.83 21.6-60.6C900.95 7.93 919.64 0 942.61 0c6.26 0 13.24.98 20.96 2.94 7.46 1.88 13.71 2.81 18.77 2.81 3.17 0 6.77-.43 10.8-1.28 2.91 18.58 6.77 33.58 11.57 45h-15.19c-11.3-26.67-27.4-40.01-48.3-40.01-13.51 0-24.13 5.41-31.86 16.24-7.82 10.91-11.73 27.83-11.73 50.75 0 25.14 4.67 45.47 14.02 60.98 9.43 15.43 22.77 23.14 40.02 23.14 9.77 0 16.44-2.9 20.01-8.69 3.65-5.79 5.48-15.64 5.48-29.53 0-9.72-1.02-16.02-3.06-18.92-1.87-3.07-6.25-4.99-13.13-5.75l-4.97-.51Zm161.59-.15 22.24 31.29q22.5 32.325 40.98 33.87l-5.56 8.4c-25 .34-45.47-10.86-61.41-33.61l-24.05-34.13c-.09 0-.39.04-.91.13s-.95.13-1.29.13l-6.59 1.03v43.17c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.54-.85-45.2-.85-68 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75s-6.92-3.08-13.24-3.57V4.05c6.47.35 14.13.52 23.01.52 5.34 0 13.62-.08 24.82-.26 11.2-.17 16.89-.26 17.07-.26 46.97 0 70.46 14.57 70.46 43.7q0 34.905-49.77 49.26m-16.39-83.53H1081v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96 7.41-7.67 11.12-17.64 11.12-29.91 0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65m137.8 11.7V147.4q0 6.81 4.17 9.63c2.78 1.88 7.72 3.08 14.83 3.59v6.97c-22.54-.84-45.21-.84-68 0v-7.97c7.18-.51 12.14-1.69 14.88-3.55s4.12-5.02 4.12-9.5V26c0-4.47-1.37-7.62-4.12-9.44-2.75-1.81-7.71-2.98-14.88-3.48V4.99c22.54.84 45.21.84 68 0v7.1c-7.1.51-12.05 1.71-14.83 3.59s-4.17 5.05-4.17 9.5m143.49 116.42 9.73-17.13h3.12s-7.04 27.49-7.97 42.83c-39.04-.6-77.4-.6-114.37 0v-7.29c6.28-.51 11.13-1.66 13.83-3.45 2.61-1.87 4.17-9.72 4.17-9.72V25.38c0-4.47-1.37-7.62-4.12-9.44-2.75-1.81-7.71-2.98-14.88-3.48V4.98q34.305 1.275 69 0v8.1c-7.48.51-12.68 1.69-15.61 3.55s-4.39 4.99-4.39 9.39V146.8c0 4.65.65 7.76 1.96 9.32 1.3 1.57 3.99 2.35 8.04 2.35h15.27c10.09 0 17.75-1.22 22.97-3.68 5.14-2.54 9.55-6.93 13.24-13.19Zm131.92 0 9.24-17.13h5.34s-7.04 27.49-7.97 42.83c-39.04-.6-77.4-.6-115.03 0v-7.29c6.94-.51 11.79-1.66 14.49-3.45 2.61-1.87 3.51-9.72 3.51-9.72V24.82c0-4.29-1.3-7.3-3.9-9.04s-7.3-2.85-14.1-3.34V4.98q34.305 1.275 69 0v8.1c-7.1.51-12.05 1.69-14.83 3.55q-4.17 2.79-4.17 9.39V146.8c0 4.65.62 7.76 1.86 9.32 1.24 1.57 3.79 2.35 7.64 2.35H1480c9.58 0 16.86-1.22 21.82-3.68 4.88-2.54 9.07-6.93 12.58-13.19Z" fill="#C89868" /></svg>
                    </div>

                    <div className=" md:mt-auto relative z-[100]">
                      <div className="max-w-[280px] md:max-w-[550px] mb-6 xl:mb-10  ml-[-2px] md:ml-0 -mt-5 md:mt-0">
                        <h1 className="font-serif text-[30px] text-light-brown md:text-[42px] xl:text-[46px] 2xl:text-[52px] leading-[1.35]  md:leading-none tracking-tighter mb-[-8px]">
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
                        <a href="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341#booking=" target="_blank" rel="noopener noreferrer" className="block uppercase text-[12px] text-light-brown md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                          <m.span variants={reveal} className="block">
                            Bookings

                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>
                        <Link legacyBehavior href="/restaurant">
                          <a className="block uppercase text-[12px] text-light-brown md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden drop-shadow-xl">
                            <m.span variants={reveal} className="block">
                              The Restaurant

                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                            </m.span>
                          </a>
                        </Link>

                        <Link legacyBehavior href="/contact">
                          <a className="block uppercase  text-[12px] text-light-brown md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                            <m.span variants={reveal} className="block">
                              Contact

                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                            </m.span>
                          </a>
                        </Link>



                        <Link legacyBehavior href="/terms">
                          <a className="block uppercase  text-[12px] text-light-brown md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
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
        </Div100vh>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
