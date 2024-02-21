import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade, revealNoDelay } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ThemeContext } from '@/context/theme'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import Image from "next/legacy/image"
import { useRouter } from 'next/router'
import TheMenu from './components/the-menu'


export default function RestaurantSlug() {
  const containerRef = useRef(null)
  const [themeContext, setThemeContext] = useContext(ThemeContext);
  const [introContext, setIntroContext] = useContext(IntroContext);
  const router = useRouter();

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

  return (
    <Layout>
      <NextSeo title={"Restaurant"} />

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
                <m.main variants={fade} className="p-4 md:p-6 relative pb-16 md:pb-24 xl:pb-32 bg-off-white text-black selection:bg-black selection:text-off-white">

                  <article className="flex flex-wrap">
                    <div className="w-full relative z-10">
                      <Link legacyBehavior href="/">
                        <a className="block w-full xl:w-[89%]">
                          <svg className="w-full" viewBox="0 0 1530.47 307.99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 126.24c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 25.37-20.38 42.01-68.01 41.8v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24Zm44.3-50.12c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08v63.43zm202.36 28.07c5.41 14.97 8.94 21.01 22.67 22.05v6.24c-21.01-.42-43.88-.42-64.89 0v-6.24c12.48-.62 18.72-4.16 14.77-15.39l-6.24-17.26H169.3l-5.82 17.26c-3.74 11.23 4.99 14.77 19.34 15.39v6.24q-26.205-.63-51.78 0v-6.24c14.56-1.04 20.17-6.03 24.12-17.47L192.6 2.29h17.05l37.02 101.91Zm-74.87-17.9h38.68L190.5 31.18l-18.72 55.11Zm130.81 39.94c11.65-1.04 21.42-3.74 21.42-13.52v-86.3c0-11.23-7.7-16.01-18.09-16.85V3.33c13.93.62 31.4.62 46.38 0l34.52 84.65 31-84.65c15.18.62 29.12.62 43.88 0v6.24c-10.4.83-14.35 5.62-14.35 16.85v86.31c0 9.36 3.95 12.69 14.35 13.52v6.24c-18.72-.62-39.31-.62-59.06 0v-6.24c11.44-.83 15.39-4.16 15.39-13.52v-85.9l-38.68 105.65h-2.29L332.36 26.83v85.89c0 9.78 9.98 12.48 23.09 13.52v6.24c-17.89-.62-36.4-.62-52.83 0v-6.24h-.01Zm194.46 0c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 25.37-20.38 42.01-68.01 41.8v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24h.01Zm44.3-50.12c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08v63.43zm202.35 28.07c5.41 14.97 8.94 21.01 22.67 22.05v6.24c-21.01-.42-43.88-.42-64.89 0v-6.24c12.48-.62 18.72-4.16 14.77-15.39l-6.24-17.26h-43.67l-5.82 17.26c-3.74 11.23 4.99 14.77 19.34 15.39v6.24c-17.47-.42-34.73-.42-51.79 0v-6.24c14.56-1.04 20.17-6.03 24.12-17.47L689.65 2.29h17.05l37.02 101.91Zm-74.87-17.9h38.68l-19.97-55.11-18.72 55.11Zm205.69-19.12c0-39.1 24.54-67.18 60.31-67.18 15.6 0 22.46 4.99 34.52 4.99 2.5 0 6.03-.21 9.36-1.66.83 12.27 2.7 24.13 7.28 37.44h-7.9C969.78 20.99 955.85 8.1 938.79 8.1c-19.13 0-33.48 17.68-33.48 53.66s13.73 65.1 38.06 65.1c13.52 0 18.93-8.73 18.93-26.62s-4.78-23.08-18.09-24.54v-5.82c19.13.42 37.23.42 56.15 0v5.82c-9.36 1.87-12.27 6.24-12.27 24.54 0 16.85 2.5 22.67 7.69 25.16v4.58c-4.37-.62-8.53-1.04-13.31-1.04-19.34 0-27.87 6.66-45.96 6.66-36.19 0-61.98-28.49-61.98-68.42zm252.06 30.57c11.65 17.68 22.46 29.12 32.86 30.16l-6.03 7.07c-15.18 0-34.52-2.29-51.58-28.7l-15.18-23.5c-2.5.21-4.99.21-7.69.21v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 17.89-10.19 31.4-32.65 37.85l12.27 18.72Zm-47.63-21.63c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08V76.1zm115.84 50.12c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 3.95 10.81 15.39 11.65v6.24c-19.76-.62-40.35-.62-60.1 0v-6.24Zm97.54-.01c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 2.7 10.61 10.4 10.61h5.41c16.43 0 21.21-4.78 35.77-29.95h5.61c-4.37 13.1-6.45 25.58-6.66 37.23-33.48-.83-62.81-.83-95.25 0v-6.24h.01Zm136.22 0c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 2.7 10.61 10.4 10.61h5.41c16.43 0 21.21-4.78 35.77-29.95h5.61c-4.37 13.1-6.45 25.58-6.66 37.23-33.48-.83-62.81-.83-95.25 0v-6.24h.01Zm-855.38 181-.09-47.7-23.66 39.75h-4.3l-23.66-39.47v47.42h-8.98v-65.47h7.67l27.31 46.02 26.94-46.02h7.67l.09 65.47zm91.65-16.37h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25zm51.34-41.62h9.35v57.33h35.45v8.14h-44.8zm118.88 49.1h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25zm95.76-9.26h8.98v25.53c-6.55 5.52-15.62 8.32-24.78 8.32-20.11 0-34.89-14.12-34.89-33.48s14.78-33.48 35.07-33.48c10.38 0 19.17 3.46 25.16 10.1l-5.8 5.8c-5.42-5.24-11.6-7.58-18.99-7.58-15.15 0-26.09 10.57-26.09 25.16s10.94 25.16 26 25.16c5.52 0 10.66-1.22 15.34-4.21zm89.88 16.74h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25z" fill="currentColor" /></svg>
                        </a>
                      </Link>

                      <span className="hidden xl:block w-1/2 md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg ml-auto font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 fixed top-0 right-0 m-6 overflow-hidden pb-[4px]">
                        <Link legacyBehavior href="/restaurant"><a className="group ">
                          <m.span variants={revealNoDelay} className="block">Back<span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a></Link>
                      </span>
                    </div>

                    <div className="w-full flex flex-wrap items-start">
                      <div className="w-full md:w-5/12 lg:w-1/2 xl:w-7/12 mt-[13px] md:mt-[-13vw] mb-6 md:mb-0 overflow-hidden" data-scroll data-scroll-speed={1.3}>
                        <div className="relative overflow-hidden">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 bg-off-white`}></m.span>

                          <Image
                            alt="Hand model"
                            src="/images/01.webp"
                            className="scale-105 w-full inset-0 object-cover object-center"
                            priority={true}
                            layout="responsive"
                            objectFit
                            width={900}
                            height={1300}
                          />
                        </div>

                      </div>
                      {router.asPath == '/restaurant/the-menu' ? <TheMenu /> : ''}
                    </div>
                  </article>
                </m.main>

                <m.footer variants={fade} className="p-4 md:p-6 relative bg-off-white text-black">
                  <div className="flex flex-wrap">
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
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
