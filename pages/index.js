'use client'
import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from '@/context/intro'
import { ThemeContext } from '@/context/theme'
import { LangContext } from '@/context/lang'
import Link from 'next/link'
import Image from "next/legacy/image"
import image1 from '../public/images/01.webp'
import image2 from '../public/images/02.webp'
import image3 from '../public/images/04.webp'
import image4 from '../public/images/05.webp'
import image5 from '../public/images/06.webp'
import Div100vh from 'react-div-100vh'


export default function Home() {
  <NextSeo title="Pampa Grill" />
  const containerRef = useRef(null)

  const [introContext, setIntroContext] = useContext(IntroContext);
  const [themeContext, setThemeContext] = useContext(ThemeContext);
  const [langContext, setLangContext] = useContext(LangContext);

  const handleLangChange = () => {
    langContext === 'es' ? setLangContext('en') : setLangContext('es');
    console.log(langContext);
  }



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
                      {langContext === 'es' ? 'Sabor' : 'Flavors'}
                    </m.span>
                  </span>
                  <span className="block flex-1 text-rotate text-center overflow-hidden">
                    <m.span variants={revealX} className="block">
                      {langContext === 'es' ? 'placer' : 'joy'}
                    </m.span>
                  </span>
                  <span className="block flex-1 text-rotate text-center overflow-hidden">
                    <m.span variants={revealX} className="block">
                      {langContext === 'es' ? 'llamas' : 'flames'}
                    </m.span>
                  </span>
                  <span className="block flex-1 text-rotate text-center overflow-hidden">
                    <m.span variants={revealX} className="block">
                      {langContext === 'es' ? 'maestría' : 'and'}
                    </m.span>
                  </span>
                  <span className="block flex-1 text-rotate text-center overflow-hidden">
                    <m.span variants={revealX} className="block">
                      {langContext === 'es' ? 'en' : 'Argentine'}
                    </m.span>
                  </span>
                  <span className="block flex-1 text-rotate text-center overflow-hidden">
                    <m.span variants={revealX} className="block">
                      {langContext === 'es' ? 'parrilla' : 'Grill'}
                    </m.span>
                  </span>
                  <span className="block w-auto mt-[4vh] text-rotate text-center overflow-hidden">
                    <m.span variants={revealX} className="block">
                      {langContext === 'es' ? 'argentina' : 'Mastery'}
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

              <article className="md:flex md:flex-wrap h-full max-w-[1920px]">
                <div className="mb-[12.5vw] md:mb-auto w-full xl:w-[80%] z-40 mix-blend-multiply">
                  <svg className="w-full md:w-11/12" viewBox="0 0 1530.5 532.36" fill="#242423" xmlns="http://www.w3.org/2000/svg"><path d="m80.4 144.04-9.42 1.45v63.45c0 6.37 1.88 10.86 5.65 13.62 3.77 2.61 10.58 4.35 20.43 5.07v10.72a1354 1354 0 0 0-97.06 0v-10.86c9.85-.72 16.66-2.32 20.57-4.78 3.62-2.61 5.5-7.1 5.5-13.62V31.77c0-5.65-1.88-10-5.5-12.6-3.62-2.75-10-4.49-19.12-5.22V3.53c9.13.43 19.99.72 32.59.72 7.53 0 19.27-.14 35.2-.43s23.9-.43 24.19-.43c66.64 0 99.96 20.72 99.96 62 0 20.28-8.98 37.09-26.8 50.27-17.82 13.33-46.5 22.74-86.19 28.39ZM70.98 14.78v118.64l9.42-1.16c25.35-3.33 43.31-10.58 54.03-21.73s16.08-25.5 16.08-43.31c0-16.37-4.2-29.26-12.75-38.68-8.55-9.27-21.01-14.05-37.66-14.05H70.98zM312.9.14l72.77 197.01c3.18 8.11 5.64 13.62 7.23 16.51 4.63 8.4 14.61 13.04 30.09 13.91V238c-34.62-1.3-69.39-1.3-104.3 0v-10.58c12.31-.87 19.99-3.04 23.32-6.52 3.04-3.19 3.04-8.69-.43-16.37l-16.08-43.75h-79.67l-15.21 45.3q-3.045 9.765 5.22 14.76c5.65 3.33 15.36 5.5 29.26 6.51v10.57c-29.55-1.3-59.1-1.3-88.37 0v-10.57c12.02-.87 21.01-3.33 26.94-7.67 5.94-3.91 10.43-10.42 13.62-19.54L286.1 0h26.8zm-28.39 45.92-33.75 101.69h70.98zm402.14-12.93v173.78c0 7.68 1.88 12.75 5.79 15.5 3.91 2.9 11.15 4.64 21.73 5.36v10.58c-33.9-1.3-67.8-1.3-101.4 0V227c11.01-.72 18.54-2.46 22.74-5.36s6.23-7.97 6.23-15.5V40.71L565.4 237.58h-3.77L485.29 40.71v165.43c0 7.1 2.75 12.02 8.11 14.92s14.78 4.93 28.1 6.08v11.35c-30.57-1.3-60.55-1.3-89.82 0v-10.72c13.47-1.16 22.74-3.04 28.1-5.94s8.11-7.82 8.11-14.78V37.86c0-14.63-10.58-22.74-31.87-24.34V2.61c25.07 1.3 50.15 1.3 75.22 0L579.07 169 640.26 2.61c24.06.87 48.26.87 72.47 0v11.14c-10.05.73-17.04 2.48-20.69 5.1-3.5 2.77-5.39 7.57-5.39 14.28m123.86 110.91-9.42 1.45v63.45c0 6.37 1.88 10.86 5.65 13.62 3.77 2.61 10.58 4.35 20.43 5.07v10.72a1354 1354 0 0 0-97.06 0v-10.86c9.85-.72 16.66-2.32 20.57-4.78 3.62-2.61 5.5-7.1 5.5-13.62V31.77c0-5.65-1.88-10-5.5-12.6-3.62-2.75-10-4.49-19.12-5.22V3.53c9.13.43 19.99.72 32.59.72 7.53 0 19.27-.14 35.2-.43s23.9-.43 24.19-.43c66.64 0 99.96 20.72 99.96 62 0 20.28-8.98 37.09-26.8 50.27-17.82 13.33-46.5 22.74-86.19 28.39Zm-9.42-129.27v118.64l9.42-1.16c25.35-3.33 43.31-10.58 54.03-21.73s16.08-25.5 16.08-43.31c0-16.37-4.2-29.26-12.75-38.68-8.55-9.27-21.01-14.05-37.66-14.05h-29.12zM1043.02.14l43.13 116.76 29.64 80.25c3.18 8.11 5.64 13.62 7.23 16.51 4.63 8.4 14.61 13.04 30.09 13.91V238c-34.62-1.3-69.39-1.3-104.3 0v-10.58c12.31-.87 19.99-3.04 23.32-6.52 3.04-3.19 3.04-8.69-.43-16.37l-16.08-43.75h-78.23l-15.21 45.3q-3.045 9.765 5.22 14.76c5.65 3.33 15.36 5.5 29.26 6.51v10.57c-29.55-1.3-59.1-1.3-88.37 0v-10.57c12.02-.87 21.01-3.33 26.94-7.67 5.94-3.91 10.43-10.42 13.62-19.54L1017.66 0h25.35v.14Zm-28.54 45.92-33.75 101.69h70.98zM700.43 427.77l.05-13.04c31.74.72 63.07.92 94.08.2l.03 13.04-8.09 1.01c-4.31.81-6.1 2.25-7.99 4.14-1.88 1.88-3.33 4.64-4.2 8.4-.72 3.19-1.16 6.66-1.3 10.29-.14 1.88-.14 6.66-.14 14.05v5.08c0 22.74 4.35 35.64 13.04 38.68v11.73c-6.66-1.01-13.91-1.45-21.44-1.45-10.86 0-23.9 2.17-38.97 6.23-14.92 4.2-28.54 6.23-40.85 6.23-35.2 0-63.31-11.59-84.6-34.62-21.15-23.18-31.73-53.31-31.73-90.25s10.43-64.9 31.29-87.79c20.86-23.03 47.95-34.48 81.27-34.48 9.13 0 19.12 1.45 30.42 4.2 10.86 2.75 19.85 4.06 27.23 4.06 4.64 0 9.85-.58 15.65-1.88 4.2 26.94 9.85 48.67 16.8 65.19h-22.04c-16.38-38.44-39.71-57.59-70-57.59-19.56 0-34.93 7.77-46.23 23.32-11.3 15.69-16.96 40.02-16.96 73.13 0 36.14 6.81 65.5 20.29 87.82 13.62 22.17 33.04 33.26 57.97 33.26 14.2 0 23.77-4.17 28.99-12.52 5.36-8.35 7.97-22.46 7.97-42.47 0-13.96-1.45-23.03-4.49-27.21-4.47-5.52-4.83-6.76-17.87-6.76h-8.17Zm234.1-2.47 32.16 45.34c21.73 31.15 41.58 47.52 59.39 49.11l-8.11 12.17c-36.22.43-65.91-15.79-88.95-48.67l-34.77-49.4c-.14 0-.58 0-1.3.14s-1.3.14-1.88.14l-9.56 1.45v62.58c0 6.37 1.88 10.86 5.65 13.62 3.77 2.61 10.58 4.35 20.43 5.07v10.72c-32.59-1.3-65.48-1.3-98.51 0v-10.86c9.85-.72 16.66-2.32 20.57-4.78 3.62-2.61 5.5-7.1 5.5-13.62V321c0-5.65-1.88-10-5.5-12.6-3.62-2.75-10-4.49-19.12-5.22v-12.46c9.42.43 20.43.72 33.32.72 7.68 0 19.7-.14 35.93-.43 16.22-.29 24.48-.43 24.77-.43 68.09 0 102.13 21.15 102.13 63.31 0 33.75-24.05 57.51-72.14 71.42Zm-23.76-120.66h-29.26v118.64l9.42-1.16c25.35-3.33 43.31-10.58 54.03-21.73s16.08-25.5 16.08-43.31c0-16.37-4.2-29.26-12.75-38.68-8.4-9.13-20.86-13.76-37.52-13.76m199.63 16.65v177.02c0 6.52 2.03 11.15 6.08 13.91 4.06 2.75 11.15 4.49 21.44 5.22v10.14c-32.59-1.16-65.48-1.16-98.51 0v-11.59c10.43-.72 17.53-2.46 21.58-5.07 3.91-2.75 5.94-7.24 5.94-13.76V322.45c0-6.52-2.03-11.01-5.94-13.62s-11.15-4.35-21.58-5.07v-11.73c32.59 1.16 65.48 1.16 98.51 0v10.29c-10.29.72-17.38 2.46-21.44 5.22-4.06 2.75-6.08 7.24-6.08 13.76Zm206.57 168.92 14.05-24.77h4.49s-10.14 39.84-11.59 62c-56.5-.87-112.12-.87-165.72 0v-10.58c9.13-.72 16.08-2.46 19.99-5.07 3.77-2.75 6.08-14.05 6.08-14.05V321.58c0-6.52-2.03-11.01-5.94-13.62s-11.15-4.35-21.58-5.07v-10.86q49.755 1.95 99.96 0v12.03c-10.86.72-18.4 2.46-22.6 5.22-4.2 2.75-6.37 7.24-6.37 13.62v174.99c0 6.81 1.01 11.3 2.9 13.47 1.88 2.32 5.79 3.33 11.59 3.33h22.16c14.63 0 25.64-1.74 33.32-5.36 7.53-3.62 13.91-10 19.27-19.12Zm192.52 0 13.33-24.77h7.68s-10.14 39.84-11.59 62c-56.5-.87-112.12-.87-166.59 0v-10.58c10-.72 17.09-2.46 21.01-5.07 3.77-2.75 5.07-14.05 5.07-14.05V321.01c0-6.23-1.88-10.58-5.65-13.04s-10.58-4.2-20.43-4.78v-11.16q49.755 1.95 99.96 0v12.03c-10.29.72-17.38 2.46-21.44 5.22s-6.08 7.24-6.08 13.62v174.99c0 6.81.87 11.3 2.75 13.47 1.74 2.32 5.5 3.33 11.01 3.33h21.01c13.91 0 24.48-1.74 31.58-5.36s13.18-10 18.4-19.12Z" /><path d="M0 414.73h614.33v13.04H0z" /></svg>
                </div>

                <div className="2xl:flex 2xl:flex-wrap 2xl:items-end 2xl:w-[53vw] md:mt-auto relative z-[100] mix-blend-multiply">
                  <div className="max-w-[280px] md:max-w-[550px] mb-6 xl:mb-10 2xl:mb-0 ml-[-2px] md:ml-0 -mt-5 md:mt-0">
                    <h1 className="font-serif text-[32px] md:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-[1.35]  md:leading-none tracking-tighter mb-[-8px]">


                      <span className="block overflow-hidden">
                        <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                          <span className="block translate-y-[-8px]">
                            {langContext === 'es' ? 'El arte de' : 'The art of'}
                          </span>
                        </m.span>
                      </span>

                      <span className="block overflow-hidden">
                        <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                          <span className="block translate-y-[-8px]">
                            {langContext === 'es' ? 'la parrilla Argentina' : 'Argentine grill'}

                          </span>
                        </m.span>
                      </span>

                      <span className="block overflow-hidden">
                        <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                          <span className="block translate-y-[-8px]">
                            {langContext === 'es' ? 'en el corazón' : 'in the heart'}

                          </span>
                        </m.span>
                      </span>

                      <span className="block overflow-hidden">
                        <m.span variants={reveal} className="block mb-[-10px]">
                          <span className="block translate-y-[-8px]">
                            {langContext === 'es' ? 'de Málaga' : 'of Málaga'}
                          </span>
                        </m.span>
                      </span>
                    </h1>
                  </div>

                  <div className="2xl:ml-auto flex space-x-4 md:space-x-6 mix-blend-display ">
                    <a href="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341?cc=16768-fbd&gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqjiOXnPSN0N7bU4HpOtGitNOLy3O8EUTIgBcn_7MLL9nIOl2J8f1MxoC5BIQAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer" className="block uppercase text-[13.5px] md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                      <m.span variants={reveal} className="block">
                        {langContext === 'es' ? 'Reservas' : 'Bookings'}

                        <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                      </m.span>
                    </a>
                    <Link legacyBehavior href="/restaurant">
                      <a className="block uppercase text-[13.5px] md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                        <m.span variants={reveal} className="block">
                          {langContext === 'es' ? 'Restaurante' : 'Restaurant'}

                          <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                        </m.span>
                      </a>
                    </Link>

                    <Link legacyBehavior href="/contact">
                      <a className="block uppercase  text-[13.5px] md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                        <m.span variants={reveal} className="block">
                          {langContext === 'es' ? 'Contacto' : 'Contact'}

                          <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                        </m.span>
                      </a>
                    </Link>

                    <a className="block uppercase  text-[13.5px] md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden cursor-pointer"
                      onClick={() => {

                        handleLangChange()
                      }}>
                      <m.span variants={reveal} className="block">
                        {langContext === 'es' ? 'en' : 'es'}


                      </m.span>
                    </a>
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
