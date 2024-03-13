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
import image1 from '../public/images/gallery/home/1.jpg'
import image2 from '../public/images/gallery/home/2.jpg'
import image3 from '../public/images/gallery/home/4.jpg'
import image4 from '../public/images/gallery/home/5.jpg'
import image5 from '../public/images/gallery/home/6.jpg'
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
                  <svg className="w-full md:w-11/12" viewBox="0 0 1530.5 532.36" fill="#242423" xmlns="http://www.w3.org/2000/svg"><path d="m80.4 144.04-9.42 1.45v63.45c0 6.37 1.88 10.86 5.65 13.62 3.77 2.61 10.58 4.35 20.43 5.07v10.72c-32.34-1.16-64.72-1.16-97.06 0v-10.86c9.85-.72 16.66-2.32 20.57-4.78 3.62-2.61 5.5-7.1 5.5-13.62V31.77c0-5.65-1.88-10-5.5-12.6-3.62-2.75-10-4.49-19.12-5.22V3.53c9.13.43 19.99.72 32.59.72 7.53 0 19.27-.14 35.2-.43s23.9-.43 24.19-.43c66.64 0 99.96 20.72 99.96 62 0 20.28-8.98 37.09-26.8 50.27-17.82 13.33-46.5 22.74-86.19 28.39ZM70.98 14.78v118.64l9.42-1.16c25.35-3.33 43.31-10.58 54.03-21.73s16.08-25.5 16.08-43.31c0-16.37-4.2-29.26-12.75-38.68-8.55-9.27-21.01-14.05-37.66-14.05H70.98zM312.9.14l72.77 197.01c3.18 8.11 5.64 13.62 7.23 16.51 4.63 8.4 14.61 13.04 30.09 13.91V238c-34.62-1.3-69.39-1.3-104.3 0v-10.58c12.31-.87 19.99-3.04 23.32-6.52 3.04-3.19 3.04-8.69-.43-16.37l-16.08-43.75h-79.67l-15.21 45.3q-3.045 9.765 5.22 14.76c5.65 3.33 15.36 5.5 29.26 6.51v10.57c-29.55-1.3-59.1-1.3-88.37 0v-10.57c12.02-.87 21.01-3.33 26.94-7.67 5.94-3.91 10.43-10.42 13.62-19.54L286.1 0h26.8zm-28.39 45.92-33.75 101.69h70.98zm402.14-12.93v173.78c0 7.68 1.88 12.75 5.79 15.5 3.91 2.9 11.15 4.64 21.73 5.36v10.58c-33.9-1.3-67.8-1.3-101.4 0V227c11.01-.72 18.54-2.46 22.74-5.36s6.23-7.97 6.23-15.5V40.71L565.4 237.58h-3.77L485.29 40.71v165.43c0 7.1 2.75 12.02 8.11 14.92s14.78 4.93 28.1 6.08v11.35c-30.57-1.3-60.55-1.3-89.82 0v-10.72c13.47-1.16 22.74-3.04 28.1-5.94s8.11-7.82 8.11-14.78V37.86c0-14.63-10.58-22.74-31.87-24.34V2.61c25.07 1.3 50.15 1.3 75.22 0L579.07 169 640.26 2.61c24.06.87 48.26.87 72.47 0v11.14c-10.05.73-17.04 2.48-20.69 5.1-3.5 2.77-5.39 7.57-5.39 14.28m123.86 110.91-9.42 1.45v63.45c0 6.37 1.88 10.86 5.65 13.62 3.77 2.61 10.58 4.35 20.43 5.07v10.72c-32.34-1.16-64.72-1.16-97.06 0v-10.86c9.85-.72 16.66-2.32 20.57-4.78 3.62-2.61 5.5-7.1 5.5-13.62V31.77c0-5.65-1.88-10-5.5-12.6-3.62-2.75-10-4.49-19.12-5.22V3.53c9.13.43 19.99.72 32.59.72 7.53 0 19.27-.14 35.2-.43s23.9-.43 24.19-.43c66.64 0 99.96 20.72 99.96 62 0 20.28-8.98 37.09-26.8 50.27-17.82 13.33-46.5 22.74-86.19 28.39Zm-9.42-129.28V133.4l9.42-1.16c25.35-3.33 43.31-10.58 54.03-21.73s16.08-25.5 16.08-43.31c0-16.37-4.2-29.26-12.75-38.68-8.55-9.27-21.01-14.05-37.66-14.05h-29.12zM1043.02.14l43.13 116.76 29.64 80.25c3.18 8.11 5.64 13.62 7.23 16.51 4.63 8.4 14.61 13.04 30.09 13.91V238c-34.62-1.3-69.39-1.3-104.3 0v-10.58c12.31-.87 19.99-3.04 23.32-6.52 3.04-3.19 3.04-8.69-.43-16.37l-16.08-43.75h-78.23l-15.21 45.3q-3.045 9.765 5.22 14.76c5.65 3.33 15.36 5.5 29.26 6.51v10.57c-29.55-1.3-59.1-1.3-88.37 0v-10.57c12.02-.87 21.01-3.33 26.94-7.67 5.94-3.91 10.43-10.42 13.62-19.54L1017.66 0h25.35v.14zm-28.54 45.92-33.75 101.69h70.98zM700.43 427.77l.05-13.04c31.74.72 63.07.92 94.08.2l.03 13.04-8.09 1.01c-4.31.81-6.1 2.25-7.99 4.14s-3.33 4.64-4.2 8.4c-.72 3.19-1.16 6.66-1.3 10.29-.14 1.88-.14 6.66-.14 14.05v5.08c0 22.74 4.35 35.64 13.04 38.68v11.73c-6.66-1.01-13.91-1.45-21.44-1.45-10.86 0-23.9 2.17-38.97 6.23-14.92 4.2-28.54 6.23-40.85 6.23-35.2 0-63.31-11.59-84.6-34.62-21.15-23.18-31.73-53.31-31.73-90.25s10.43-64.9 31.29-87.79c20.86-23.03 47.95-34.48 81.27-34.48 9.13 0 19.12 1.45 30.42 4.2 10.86 2.75 19.85 4.06 27.23 4.06 4.64 0 9.85-.58 15.65-1.88 4.2 26.94 9.85 48.67 16.8 65.19h-22.04c-16.38-38.44-39.71-57.59-70-57.59-19.56 0-34.93 7.77-46.23 23.32-11.3 15.69-16.96 40.02-16.96 73.13 0 36.14 6.81 65.5 20.29 87.82 13.62 22.17 33.04 33.26 57.97 33.26 14.2 0 23.77-4.17 28.99-12.52 5.36-8.35 7.97-22.46 7.97-42.47 0-13.96-1.45-23.03-4.49-27.21-4.47-5.52-4.83-6.76-17.87-6.76zm234.1-2.47 32.16 45.34c21.73 31.15 41.58 47.52 59.39 49.11l-8.11 12.17c-36.22.43-65.91-15.79-88.95-48.67l-34.77-49.4c-.14 0-.58 0-1.3.14s-1.3.14-1.88.14l-9.56 1.45v62.58c0 6.37 1.88 10.86 5.65 13.62 3.77 2.61 10.58 4.35 20.43 5.07v10.72c-32.59-1.3-65.48-1.3-98.51 0v-10.86c9.85-.72 16.66-2.32 20.57-4.78 3.62-2.61 5.5-7.1 5.5-13.62V321c0-5.65-1.88-10-5.5-12.6-3.62-2.75-10-4.49-19.12-5.22v-12.46c9.42.43 20.43.72 33.32.72 7.68 0 19.7-.14 35.93-.43 16.22-.29 24.48-.43 24.77-.43 68.09 0 102.13 21.15 102.13 63.31 0 33.75-24.05 57.51-72.14 71.42Zm-23.76-120.67h-29.26v118.64l9.42-1.16c25.35-3.33 43.31-10.58 54.03-21.73s16.08-25.5 16.08-43.31c0-16.37-4.2-29.26-12.75-38.68-8.4-9.13-20.86-13.76-37.52-13.76m199.63 16.65V498.3c0 6.52 2.03 11.15 6.08 13.91 4.06 2.75 11.15 4.49 21.44 5.22v10.14c-32.59-1.16-65.48-1.16-98.51 0v-11.59c10.43-.72 17.53-2.46 21.58-5.07 3.91-2.75 5.94-7.24 5.94-13.76V322.44c0-6.52-2.03-11.01-5.94-13.62s-11.15-4.35-21.58-5.07v-11.73c32.59 1.16 65.48 1.16 98.51 0v10.29c-10.29.72-17.38 2.46-21.44 5.22-4.06 2.75-6.08 7.24-6.08 13.76Zm206.57 168.91 14.05-24.77h4.49s-10.14 39.84-11.59 62c-56.5-.87-112.12-.87-165.72 0v-10.58c9.13-.72 16.08-2.46 19.99-5.07 3.77-2.75 6.08-14.05 6.08-14.05V321.56c0-6.52-2.03-11.01-5.94-13.62s-11.15-4.35-21.58-5.07v-10.86q49.755 1.95 99.96 0v12.03c-10.86.72-18.4 2.46-22.6 5.22-4.2 2.75-6.37 7.24-6.37 13.62v174.99c0 6.81 1.01 11.3 2.9 13.47 1.88 2.32 5.79 3.33 11.59 3.33h22.16c14.63 0 25.64-1.74 33.32-5.36 7.53-3.62 13.91-10 19.27-19.12zm192.52 0 13.33-24.77h7.68s-10.14 39.84-11.59 62c-56.5-.87-112.12-.87-166.59 0v-10.58c10-.72 17.09-2.46 21.01-5.07 3.77-2.75 5.07-14.05 5.07-14.05V320.99c0-6.23-1.88-10.58-5.65-13.04s-10.58-4.2-20.43-4.78v-11.16q49.755 1.95 99.96 0v12.03c-10.29.72-17.38 2.46-21.44 5.22s-6.08 7.24-6.08 13.62v174.99c0 6.81.87 11.3 2.75 13.47 1.74 2.32 5.5 3.33 11.01 3.33h21.01c13.91 0 24.48-1.74 31.58-5.36s13.18-10 18.4-19.12z" /><path d="M0 414.73h614.33v13.04H0z" /><path d="M1264.66 27.9c2.16-1.54 3.54-3.61 4.42-6.11.42-1.18.42-2.35.57-3.54.11-.95.39-1.94.86-2.77.7-1.24 1.94-1.32 2.94-.25.5.53.98 1.25 1.09 1.94.4 2.48.39 4.98-.23 7.44-.66 2.58-1.61 5.03-3.37 7.05-1.07 1.23-2.37 2.27-3.57 3.39-.24.22-.54.39-1 .72 2.17.44 4.15.81 6.12 1.25 2.5.57 5.01.93 7.58.96 2.92.04 5.85.25 8.77.35 2.49.09 4.99.13 7.48.2 1.89.05 3.78.13 5.67.19 3.78.13 7.56.25 11.34.39 3.69.13 7.39.25 11.08.39 3.06.11 6.11.24 9.17.37 3.09.13 6.18.25 9.27.39 2.51.11 5.03.2 7.54.38 2.93.21 5.85.51 8.77.74 1.26.1 2.52.11 3.77.2 3.18.24 6.37.5 9.55.75.31.02.64.01.95 0 5.64-.19 11.29-.31 16.93-.6 2.9-.15 5.79-.52 8.66-.96 2.45-.37 4.87-.99 7.3-1.49 3.4-.7 6.85-1.2 10.18-2.15 5.71-1.63 11.36-3.48 16.99-5.35 4.75-1.58 9.41-3.43 14.18-4.94 2.69-.85 5.51-1.31 8.3-1.85 3.86-.75 7.76-1.11 11.7-.82 4.89.35 9.63 1.37 14.18 3.27 4.02 1.69 7.56 4.12 10.95 6.79 1.45 1.14 3.12 1.43 4.8 1.8 2.85.64 5.73 1.15 8.54 1.93 2.69.75 5.01 2.23 7.14 4.07 2.8 2.42 4.56 5.45 5.69 8.91.72 2.22 1.16 4.48 1.15 6.83 0 1.03.16 2.07.17 3.1.02 2.13 0 4.26-.03 6.39-.03 2.31-.09 4.63-.15 6.93-.06 2.21-.13 4.42-.19 6.63-.07 2.37-.13 4.74-.19 7.1-.06 2.27-.13 4.54-.19 6.82-.06 2.05-.12 4.1-.19 6.15-.06 1.86-.17 3.72-.18 5.58-.03 3.62-.16 7.24.03 10.85.19 3.76.65 7.52 1.87 11.12.87 2.57 1.77 5.14 2.77 7.66.62 1.58 1.7 2.87 3.09 3.9.47.35.88.78 1.32 1.17-.05.08-.1.16-.14.24-.36.03-.71.06-1.41.11.57.7.98 1.28 1.47 1.78.72.73 1.18 1.58 1.27 2.59.07.81 0 1.64.14 2.43.24 1.29.61 2.56.93 3.88-.95.33-1.12-.44-1.41-.87-.51-.76-.92-1.59-1.39-2.38-.07-.12-.22-.19-.52-.44.14 2 .27 3.81.39 5.61l-.17.07c-.48-.86-.93-1.73-1.44-2.58-.11-.19-.39-.29-.58-.44-.06.26-.22.54-.17.78.32 1.79.66 3.57 1.03 5.35.12.55.03.62-.47.4-1.24-.56-1.92-1.46-2.04-2.84-.13-1.51-.36-3.01-.56-4.51a.96.96 0 0 0-.19-.41c-.04-.06-.16-.07-.28-.12-.1.64-.21 1.25-.34 2.07-.94-1.61-1.79-3.02-2.6-4.45-.67-1.2-1.47-2.37-1.88-3.66-.51-1.6-.7-3.3-.99-4.96-.38-2.19-.74-4.38-1.08-6.58-.3-1.9-.57-3.8-.82-5.7-.28-2.09-.61-4.19-.74-6.29-.14-2.22-.05-4.46-.09-6.69 0-.42-.14-.84-.14-1.26-.07-9.5-.12-19-.19-28.5-.03-3.74-.03-7.48-.2-11.21-.31-6.56-1.25-13-4.37-18.92a11.5 11.5 0 0 0-1.71-2.38c.86 3.05 1.82 6.07 2.55 9.15.62 2.64 1.03 5.34 1.43 8.03.2 1.33.01 2.72.28 4.03.75 3.59.64 7.2.49 10.81-.08 2.05-.36 4.1-.57 6.14-.22 2.15-.42 4.3-.72 6.43-.26 1.82-.6 3.62-.99 5.42-.58 2.63-1.22 5.26-1.88 7.87-.51 2-1.03 3.99-1.68 5.94-.81 2.44-1.76 4.84-2.67 7.26-1.05 2.8-2.31 5.54-3.15 8.4-.82 2.79-.87 5.7-.58 8.64.34 3.4 1.42 6.55 2.73 9.65.75 1.77 1.82 3.42 2.48 5.22.48 1.32.63 2.8.72 4.22.24 3.51-.36 6.95-1.09 10.38-.7 3.3-1.17 6.65-1.75 9.98-.3 1.73-.49 3.5-1.01 5.17-.25.81-.12 1.59-.28 2.38-.57 2.88-.68 5.81-.82 8.74-.1 2.17-.33 4.33-.35 6.49-.05 5.07-.03 10.14-.01 15.21 0 1.79-.49 3.43-1.35 4.99-.81 1.47-1.65 2.94-2.23 4.51-.46 1.25-.55 2.64-.81 3.96-.43 2.19-1.04 4.3-3.23 5.38-.81.4-1.75.6-2.65.69-1.6.16-3.21.17-4.81.21-2.94.08-5.88.12-8.82.2-1.08.03-1.99-.33-2.8-1.01-.07-.05-.14-.1-.21-.14-1.17-1.01-1.5-2.3-.92-3.73.28-.68.62-1.33.94-2 .07-.05.14-.1.2-.15l1.93-1.75c.13-.09.25-.18.38-.27 2.53-2.51 4.71-5.27 6.2-8.53.05-.11.07-.23.1-.35l.15-.18c.71-2.24 1.63-4.45 2.07-6.74.49-2.52.55-5.12.78-7.69.09-1.03.25-2.07.18-3.09-.19-2.83-.48-5.65-.75-8.47-.17-1.76-.38-3.52-.56-5.29-.15-1.52-.31-3.03-.38-4.55-.05-1.17.4-2.2 1.11-3.15 1.62-2.19 2.73-4.6 3.28-7.29.4-2.01.21-3.99-.01-5.98-.14-1.28-.35-2.55-.52-3.82l-.21-.36c-.52-2.12-1.03-4.25-1.55-6.37-.1-.43-.22-.85-.33-1.28-.06-.12-.12-.24-.18-.37-.4-1.67-.93-3.33-1.16-5.03-.18-1.35 0-2.74.01-4.11.06-.12.13-.24.19-.36.19-1.38 1.05-2.4 1.89-3.42.35-.43.72-.84 1.09-1.26v.02c.92-.88 1.99-1.66 2.77-2.66 1.72-2.2 3.36-4.47 4.92-6.79.76-1.13 1.26-2.43 1.87-3.65l.15-.18c.14-.39.28-.77.42-1.16.05-.06.1-.13.15-.19 1.34-3.53 2.44-7.13 3.08-10.86-.09-.03-.18-.07-.27-.1-.55 1.24-1.05 2.5-1.67 3.7a518 518 0 0 1-4.75 9.04c-.48.9-1.08 1.74-1.62 2.6-.05.02-.09.06-.1.12-.35.47-.7.94-1.06 1.41-.05.02-.08.05-.09.11-1.73 1.85-3.43 3.71-5.19 5.53-.57.59-1.27 1.04-1.89 1.58-1.38 1.2-2.57 2.57-3.06 4.37-.42 1.55-.78 3.13-.39 4.78.46 1.93.74 3.9 1.2 5.82.56 2.36 1.34 4.68 1.84 7.05.64 3.06 1.66 6.07 1.39 9.26-.22 2.58-1.29 4.82-2.9 6.8-1.67 2.06-3.62 3.86-5.01 6.19-.98 1.64-1.62 3.41-2.58 5.05-1.26 2.17-2.31 4.45-3.48 6.67-2.09 3.96-4.25 7.89-6.31 11.88-1.34 2.6-2.62 5.23-3.76 7.92-.68 1.61-.96 3.37-1.54 5.02-.57 1.6-1.32 3.03-2.97 3.95-2.62 1.47-3.85 4-4.42 6.87-.33 1.65-.6 3.31-1.54 4.77-.96 1.48-2.41 2.19-4.04 2.33-2.94.25-5.9.33-8.86.4-2.41.06-4.83-.13-7.22.05-2.05.16-4.23-2.76-3.32-4.92.06-.14.04-.31.06-.47.04-.06.09-.12.13-.18.3-1.01 1-1.63 1.9-2.11.47-.26.88-.63 1.32-.94.07-.04.13-.08.2-.12.25-.15.5-.3.75-.46.07-.04.14-.09.21-.14 1.4-1.12 2.94-2.11 4.15-3.4 1.76-1.88 3.39-3.91 4.85-6.03 1.14-1.64 2.32-3.3 2.87-5.32.25-.91 1.07-1.65 1.55-2.52 1.13-2.04 2.25-4.09 3.29-6.17 1.41-2.85 2.74-5.75 4.1-8.63.05-.06.11-.12.16-.18.15-.45.29-.89.44-1.34.11-.18.22-.37.33-.55.45-1.45.92-2.89 1.35-4.35.39-1.32.86-2.63 1.07-3.98.26-1.73.33-3.5.43-5.26.1-1.73.24-3.46.17-5.18-.09-2.21-.17-4.45-.89-6.58-.06-.18.06-.43.09-.64l-.27-.33v-.59c-.07-.12-.14-.25-.21-.37-.38-1.43-.77-2.85-1.14-4.28-.26-.99-.49-1.99-.74-2.98-.06-.12-.12-.24-.18-.37-.54-2.19-1.11-4.37-1.62-6.57-.66-2.84-1.19-5.71-1.92-8.53-.72-2.81-1.62-5.57-2.44-8.35l-.15-.18c-.83-1.49-1.6-3.01-2.51-4.45-2-3.18-4.96-5.37-8.03-7.42-.06-.05-.12-.1-.18-.14-.07-.02-.14-.05-.21-.07-.07-.04-.13-.07-.2-.11-3.33-1.95-6.96-1.47-9.15.22 1.91.37 3.97.54 5.84 1.21 1.58.57 3.01 1.63 4.39 2.65 1.02.75 1.84 1.77 2.75 2.67.01.06.05.1.11.12l2.82 3.99c.18.25.35.51.59.87-1.07.97-2.09 1.97-3.18 2.9-2.26 1.91-4.54 3.79-6.82 5.67-.69.57-1.43 1.1-2.15 1.64-.06 0-.1.04-.14.09-1.84 1.18-3.67 2.35-5.51 3.53-.07.04-.13.07-.19.11-1.16.6-2.31 1.22-3.48 1.79-1.85.9-3.68 1.84-5.58 2.64-2.25.95-4.5 1.91-6.83 2.6-2.73.81-5.54 1.36-8.31 1.99-.99.23-1.99.49-2.99.55-2.79.15-5.56.77-8.38.26-.8-.14-1.67.17-2.51.13-3.76-.15-7.48-.61-11.15-1.44-2.59-.58-5.22-1.05-7.82-1.6-1.85-.39-3.67-.87-5.51-1.27-1.76-.38-3.53-.69-5.29-1.04a3 3 0 0 1-.2-.16c-1.64-.4-3.4-.31-4.94-1.19-.3-.17-.81.1-1.2.03-1.53-.26-3.13-.17-4.55-1-.31-.19-.87.09-1.31.05-.35-.03-.68-.23-1.02-.35-.1-.04-.23-.14-.29-.11-.93.55-1.84 0-2.75-.05-1.06-.04-2.12-.23-3.18-.23-3.57.03-7.14.09-10.7.19-1.6.04-3.2.18-4.84.27-.39-2.45.4-4.6 1.11-6.76.11-.18.22-.37.34-.55.07-.26.15-.53.22-.79l.16-.19c.39-.89.78-1.78 1.18-2.68.05-.06.1-.12.16-.18.72-2.03 1.45-4.07 2.17-6.1.05-.12.11-.25.16-.37.63-3.24 1.23-6.49 1.07-9.79-.13-2.58-.47-5.15-.75-7.72-.02-.16-.22-.31-.53-.72-.16 1.48-.28 2.67-.42 3.86-.37 3.13-.79 6.26-1.13 9.4-.41 3.84-1.98 7.21-3.9 10.51-1.62 2.79-2.74 5.85-2.97 9.12-.16 2.39-.29 4.81-.16 7.2.11 2.04.64 4.06.96 6.1.2 1.32.38 2.65.52 3.99.11 1.03.19 2.07.19 3.11 0 5.52-.98 10.87-2.7 16.1-1.11 3.37-1.91 6.82-2.26 10.36-.21 2.19-.47 4.37-.55 6.56-.09 2.89-.17 5.8.01 8.68.21 3.3.73 6.58 1.07 9.87.13 1.26.04 2.39-.88 3.52-1.62 2-2.16 4.54-2.7 7.01-.67 3.05-2.64 4.74-5.57 5.35-1.42.3-2.92.25-4.37.41-1.51.16-3.01.41-4.53.57-2.66.28-5.37.45-7.8-.86-2.1-1.13-2.88-3.26-.92-5.31 1.18-1.24 2.75-2.12 4.19-3.09 2.08-1.41 3.5-3.29 4.61-5.53 1.34-2.7 1.77-5.58 2.19-8.49.22-1.48.54-2.95.76-4.43.18-1.19.33-2.4.38-3.6.16-3.46.4-6.92.35-10.38-.04-2.79-.52-5.57-.72-8.36-.27-3.72-1.22-7.31-2.11-10.91-.3-1.21-.78-2.38-1.19-3.55-.05-.14-.23-.23-.51-.47.28 2.38.56 4.56.81 6.74.13 1.09.25 2.19.31 3.28.09 1.7.15 3.41.19 5.11.07 2.75.25 5.51.16 8.25-.1 2.91-.43 5.81-.74 8.71-.33 3.07-.73 6.14-1.14 9.21-.35 2.54-.64 5.09-1.19 7.59s-2.01 3.43-4.59 3.89c-1.92.34-3.83.69-5.77.93-2.42.3-4.7-.05-6.29-2.14-.31-.4-.36-1.14-.26-1.68.31-1.76 1.57-2.87 2.81-4.04 1.25-1.18 2.35-2.55 3.4-3.92 1.35-1.77 2.03-3.87 2.36-6.05.26-1.75.29-3.54.38-5.32.09-1.73.22-3.47.18-5.19-.05-2.67-.13-5.34-.37-8-.26-2.87-.61-5.73-1.12-8.56-.43-2.39-1.07-4.76-1.78-7.08-.76-2.47-1.77-4.85-2.59-7.3-.63-1.88-2.16-2.94-3.51-4.19-1.22-1.13-2.32-2.39-3.55-3.5-1.37-1.24-2.75-2.51-4.28-3.53-1.92-1.29-3.99-2.36-6.03-3.47-.95-.51-2.17-.66-2.94-1.35-1.36-1.21-2.49-2.69-3.68-4.07-1.01-1.17-2.01-2.29-3.57-2.77-1.4-.44-1.85-1.8-2.13-2.99-.43-1.79-.53-3.65-.78-5.48-.26-1.93-.56-3.86-.8-5.79-.22-1.75-.43-3.51-.57-5.27-.27-3.49-1.32-6.66-3.77-9.25-1.58-1.67-3.16-3.35-4.79-4.96-.97-.96-2.05-1.8-3.09-2.69-.07-.04-.13-.08-.2-.12-.93-.47-1.91-.74-2.96-.57-5.64.93-11.34.3-17 .56-1.52.07-2.87-.55-4.2-1.22-.64-.32-1.3-.6-1.95-.9-.06-.05-.12-.11-.18-.16l-.39-.06c-.06-.04-.12-.09-.19-.13-.32-.07-.64-.15-.96-.22-.06-.05-.12-.11-.18-.16-1.27-.67-2.58-1.27-3.79-2.04-1.01-.64-.96-1.88-1.15-2.91-.19-1.04-.17-2.12-.22-3.18-.1-2.31.75-4.29 2-6.17.64-.96 1.11-2.03 1.65-3.05.05-.06.1-.13.16-.19 1.28-3.19 1.55-6.53 1.32-9.89-.16-2.3-.63-4.58-.93-6.87-.1-.77-.16-1.55-.2-2.33-.08-1.47-.12-2.95-.2-4.43-.08-1.44-.2-2.88-.29-4.26-2.26-.21-4.51-.38-6.74-.63-2.11-.24-4.23-.46-6.31-.87-5.1-1.02-8.56-4.17-10.86-8.71-.44-.87-.88-1.75-1.26-2.65-.68-1.61-.14-3.06 1.49-4.28 1.76-1.31 3.62-2.42 5.73-3.04 2.02-.59 4.1-.7 6.14-.27 2.28.48 4.56 1.06 6.77 1.78 2.35.76 4.64 1.75 6.96 2.62.3.11.64.15 1.05.25-.28-.92-.44-1.73-.76-2.47-.39-.91-1.17-1.47-2.1-1.79-.63-.22-1.27-.41-1.91-.61-.06-.05-.13-.1-.19-.16-.38-.14-.76-.28-1.14-.41-.06-.05-.12-.11-.18-.16-.32-.15-.64-.29-.96-.44-.06-.04-.12-.09-.18-.13-.19-.09-.39-.17-.58-.26-.07-.04-.13-.08-.2-.12-.25-.15-.5-.31-.75-.46l-.21-.12c-3.47-2.08-6.08-4.98-7.86-8.58-1.01-2.03-1.97-4.14-1.82-6.5.07-1.04.29-2.07.53-3.09.22-.93 1.19-1.7 1.89-1.65.69.04 1.79 1.04 1.94 1.81.22 1.15.38 2.31.58 3.46.34 1.97 1.45 3.44 2.88 4.78 1.42 1.33 2.92 2.5 4.69 3.35 2.06 1 4.22 1.44 6.49 1.25.43-.04.93-.32 1.21-.64 2.23-2.53 4.95-4.18 8.3-4.66 2.21-.31 4.44-.64 6.67-.74 3.69-.17 7.4-.26 11.09-.18 2.48.05 5 .26 7.41.8 1.46.33 2.78 1.37 4.11 2.18.84.51 1.53 1.3 2.4 1.73.83.41 1.79.67 2.71.75 2.35.18 4.65-.03 6.74-1.28.16-.1.35-.14.52-.21.05-.04.11-.08.16-.12.07-.03.13-.05.2-.08.06-.05.12-.09.18-.14.12-.08.23-.16.35-.24.07-.05.15-.09.22-.14l-.03-.02Zm63.76 86.79h-.17v.57h.17zm172.75-.64c-.03-.05-.04-.13-.08-.14s-.1.03-.15.04c.03.06.07.13.1.19.04-.03.09-.06.13-.09m.12-.49s0-.05-.01-.06c-.02-.01-.05-.01-.07-.01 0 .04.01.07.02.1.02 0 .04-.02.07-.03Z" /></svg>
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
