import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
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

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"

        >
          <Div100vh>
            <m.main variants={fade} className={`p-4 md:p-6 h-full relative ${colorThemes[themeContext]}`}>

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
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image1}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image2}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image3}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image4}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image5}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                  </div>

                  <div className="absolute top-0 animate-marqueeH2 whitespace-nowrap flex flex-row space-x-[20px] md:space-x-[50px]">
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image1}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image2}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image3}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image4}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
                        layout="responsive"
                        priority={true}
                        width={1334}
                        height={1613}
                      />
                    </div>
                    <div className="h-full w-[60vw] overflow-hidden">
                      <Image
                        alt="Pampa Grill"
                        src={image5}
                        className="w-[60vw] object-cover object-center scale-105 opacity-100"
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
                  <svg className="w-full md:w-11/12" viewBox="0 0 1530.5 307.57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m55.5 99.1-6.5 1v43.8c0 4.4 1.3 7.5 3.9 9.4 2.6 1.8 7.3 3 14.1 3.5v7.4c-22.2-.8-44.5-.8-67 0v-7.5c6.8-.5 11.5-1.6 14.2-3.3 2.5-1.8 3.8-4.9 3.8-9.4V21.6c0-3.9-1.3-6.9-3.8-8.7Q10.45 10.05 1 9.3V2.1c6.3.3 13.8.5 22.5.5q7.8 0 24.3-.3c11-.2 16.5-.3 16.7-.3 46 0 69 14.3 69 42.8 0 14-6.2 25.6-18.5 34.7-12.3 9.2-32.1 15.7-59.5 19.6m-6.5-89V92l6.5-.8c17.5-2.3 29.9-7.3 37.3-15s11.1-17.6 11.1-29.9c0-11.3-2.9-20.2-8.8-26.7-5.9-6.4-14.5-9.7-26-9.7H49zM215.9.1l50.3 136c2.2 5.6 3.9 9.4 5 11.4 3.2 5.8 10.1 9 20.8 9.6v7.3q-35.85-1.35-72 0v-7.3c8.5-.6 13.8-2.1 16.1-4.5 2.1-2.2 2.1-6-.3-11.3l-11.1-30.2h-55.2L159 142.4q-2.1 6.75 3.6 10.2c3.9 2.3 10.6 3.8 20.2 4.5v7.3c-20.4-.9-40.8-.9-61 0v-7.3c8.3-.6 14.5-2.3 18.6-5.3 4.1-2.7 7.2-7.2 9.4-13.5L197.3 0h18.6zm-19.5 31.8-23.3 70.2h49zM474 22.5v120c0 5.3 1.3 8.8 4 10.7 2.7 2 7.7 3.2 15 3.7v7.3c-23.4-.9-46.8-.9-70 0v-7.4c7.6-.5 12.8-1.7 15.7-3.7s4.3-5.5 4.3-10.7V28.2l-52.7 135.9h-2.6L335 28.2v114.2c0 4.9 1.9 8.3 5.6 10.3s10.2 3.4 19.4 4.2v7.4c-21.1-.9-41.8-.9-62 0v-7.4c9.3-.8 15.7-2.1 19.4-4.1s5.6-5.4 5.6-10.2V25.8c0-10.1-7.3-15.7-22-16.8V1.5q25.95 1.35 51.9 0l46.8 114.8L441.9 1.5c16.6.6 33.3.6 50 0v7.7c-6.9.5-11.7 1.7-14.2 3.5-2.4 1.9-3.7 5.2-3.7 9.8m85.5 76.6-6.5 1v43.8c0 4.4 1.3 7.5 3.9 9.4 2.6 1.8 7.3 3 14.1 3.5v7.4c-22.2-.8-44.5-.8-67 0v-7.5c6.8-.5 11.5-1.6 14.2-3.3 2.5-1.8 3.8-4.9 3.8-9.4V21.6c0-3.9-1.3-6.9-3.8-8.7q-3.75-2.85-13.2-3.6V2.1c6.3.3 13.8.5 22.5.5q7.8 0 24.3-.3c11-.2 16.5-.3 16.7-.3 46 0 69 14.3 69 42.8 0 14-6.2 25.6-18.5 34.7-12.3 9.2-32.1 15.7-59.5 19.6m-6.5-89V92l6.5-.8c17.5-2.3 29.9-7.3 37.3-15s11.1-17.6 11.1-29.9c0-11.3-2.9-20.2-8.8-26.7-5.9-6.4-14.5-9.7-26-9.7H553zM719.9.1l50.3 136c2.2 5.6 3.9 9.4 5 11.4 3.2 5.8 10.1 9 20.8 9.6v7.3q-35.85-1.35-72 0v-7.3c8.5-.6 13.8-2.1 16.1-4.5 2.1-2.2 2.1-6-.3-11.3l-11.1-30.2h-54.2L664 142.4q-2.1 6.75 3.6 10.2c3.9 2.3 10.6 3.8 20.2 4.5v7.3c-20.4-.9-40.8-.9-61 0v-7.3c8.3-.6 14.5-2.3 18.6-5.3 4.1-2.7 7.2-7.2 9.4-13.5L702.3 0h17.6zm-19.6 31.8L677 102.1h49zm257.2 202.26v-7.5c21.9.5 43.6.5 65 0v9.4l-5.6.9c-2.4.3-4.2 1.1-5.5 2.4s-2.3 3.2-2.9 5.8c-.5 2.2-.8 4.6-.9 7.1-.1 1.3-.1 4.6-.1 9.7v3.2q0 23.55 9 26.7v8.1c-4.6-.7-9.6-1-14.8-1-7.5 0-16.5 1.5-26.9 4.3-10.3 2.9-19.7 4.3-28.2 4.3-24.3 0-43.7-8-58.4-23.9-14.6-16-21.9-36.8-21.9-62.3s7.2-44.8 21.6-60.6c14.4-15.9 33.1-23.8 56.1-23.8 6.3 0 13.2 1 21 2.9 7.5 1.9 13.7 2.8 18.8 2.8 3.2 0 6.8-.4 10.8-1.3 2.9 18.6 6.8 33.6 11.6 45H991c-11.3-26.7-27.4-40-48.3-40-13.5 0-24.1 5.4-31.9 16.2-7.8 10.9-11.7 27.8-11.7 50.8 0 25.1 4.7 45.5 14 61 9.4 15.4 22.8 23.1 40 23.1 9.8 0 16.4-2.9 20-8.7 3.7-5.8 5.5-15.6 5.5-29.5 0-9.7-1-16-3.1-18.9-1.9-3.1-6.2-5-13.1-5.8zm161.6-.2 22.2 31.3c15 21.5 28.7 32.8 41 33.9l-5.6 8.4c-25 .3-45.5-10.9-61.4-33.6l-24-34.1c-.1 0-.4 0-.9.1s-.9.1-1.3.1l-6.6 1v43.2c0 4.4 1.3 7.5 3.9 9.4 2.6 1.8 7.3 3 14.1 3.5v7.4c-22.5-.9-45.2-.9-68 0v-7.5c6.8-.5 11.5-1.6 14.2-3.3 2.5-1.8 3.8-4.9 3.8-9.4v-122.4c0-3.9-1.3-6.9-3.8-8.7q-3.75-2.85-13.2-3.6v-8.6c6.5.3 14.1.5 23 .5 5.3 0 13.6-.1 24.8-.3q16.8-.3 17.1-.3c47 0 70.5 14.6 70.5 43.7 0 23.3-16.6 39.7-49.8 49.3m-16.4-83.5h-20.2v81.9l6.5-.8c17.5-2.3 29.9-7.3 37.3-15s11.1-17.6 11.1-29.9c0-11.3-2.9-20.2-8.8-26.7-5.8-6.3-14.4-9.5-25.9-9.5m137.8 11.7v122.2q0 6.75 4.2 9.6c2.8 1.9 7.7 3.1 14.8 3.6v7c-22.5-.8-45.2-.8-68 0v-8c7.2-.5 12.1-1.7 14.9-3.5 2.7-1.9 4.1-5 4.1-9.5v-120.6c0-4.5-1.4-7.6-4.1-9.4s-7.7-3-14.9-3.5v-8.1c22.5.8 45.2.8 68 0v7.1c-7.1.5-12 1.7-14.8 3.6s-4.2 5-4.2 9.5m143.5 116.4 9.7-17.1h3.1s-7 27.5-8 42.8c-39-.6-77.4-.6-114.4 0v-7.3c6.3-.5 11.1-1.7 13.8-3.5 2.6-1.9 4.2-9.7 4.2-9.7v-121.4c0-4.5-1.4-7.6-4.1-9.4s-7.7-3-14.9-3.5v-7.5q34.35 1.35 69 0v8.1q-11.25.75-15.6 3.6c-4.35 2.85-4.4 5-4.4 9.4v120.8c0 4.7.7 7.8 2 9.3 1.3 1.6 4 2.3 8 2.3h15.3c10.1 0 17.7-1.2 23-3.7 5.2-2.5 9.6-6.9 13.3-13.2m132 0 9.2-17.1h5.3s-7 27.5-8 42.8c-39-.6-77.4-.6-115 0v-7.3c6.9-.5 11.8-1.7 14.5-3.5 2.6-1.9 3.5-9.7 3.5-9.7v-122q0-6.45-3.9-9c-3.9-2.55-7.3-2.9-14.1-3.3v-7.5q34.35 1.35 69 0v8.1c-7.1.5-12 1.7-14.8 3.6s-4.2 5-4.2 9.4v120.8c0 4.7.6 7.8 1.9 9.3 1.2 1.6 3.8 2.3 7.6 2.3h14.5c9.6 0 16.9-1.2 21.8-3.7s9.1-6.9 12.7-13.2" fill="#C89868" /></svg>
                </div>

                <div className=" md:mt-auto relative z-[100]">
                  <div className="max-w-[280px] md:max-w-[550px] mb-6 xl:mb-10  ml-[-2px] md:ml-0 -mt-5 md:mt-0">
                    <h1 className="font-serif text-[30px] text-light-brown md:text-[42px] xl:text-[46px] 2xl:text-[52px] leading-[1.35]  md:leading-none tracking-tighter mb-[-8px]">


                      <span className="block overflow-hidden">
                        <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                          <span className="block translate-y-[-8px]">
                            Devoted to
                          </span>
                        </m.span>
                      </span>

                      <span className="block overflow-hidden">
                        <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                          <span className="block translate-y-[-8px]">
                            elevating the art
                          </span>
                        </m.span>
                      </span>

                      <span className="block overflow-hidden">
                        <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                          <span className="block translate-y-[-8px]">
                            of Argentine grilling
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
                    <a href="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341#booking=" target="_blank" rel="noopener noreferrer" className="block uppercase text-[12px] text-light-brown md:text-base 2xl:text-[14px] 3xl:text-base xs:text-[8px]:text-[8px] group overflow-hidden">
                      <m.span variants={reveal} className="block">
                        Bookings

                        <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                      </m.span>
                    </a>
                    <Link legacyBehavior href="/restaurant">
                      <a className="block uppercase text-[12px] text-light-brown md:text-base 2xl:text-[14px] 3xl:text-base xs:text-[8px]:text-[8px] group overflow-hidden drop-shadow-xl">
                        <m.span variants={reveal} className="block">
                          The Restaurant

                          <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                        </m.span>
                      </a>
                    </Link>

                    <Link legacyBehavior href="/contact">
                      <a className="block uppercase  text-[12px] text-light-brown md:text-base 2xl:text-[14px] 3xl:text-base xs:text-[8px]:text-[8px] group overflow-hidden">
                        <m.span variants={reveal} className="block">
                          Contact

                          <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                        </m.span>
                      </a>
                    </Link>



                    <Link legacyBehavior href="/terms">
                      <a className="block uppercase  text-[12px] text-light-brown md:text-base 2xl:text-[14px] 3xl:text-base xs:text-[8px]:text-[8px] group overflow-hidden">
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
          </Div100vh>
        </m.div>
      </LazyMotion>

    </Layout>
  )
}
