import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade, revealNoDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ThemeContext } from '@/context/theme'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import Image from "next/legacy/image"
import image1 from '../../public/images/03.webp'
import Div100vh from 'react-div-100vh'

/* import SanityPageService from '../../services/sanityPageService' */


export default function Restaurant(initialData) {

  const containerRef = useRef(null)
  const [themeContext, setThemeContext] = useContext(ThemeContext);
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
      title: "The Menu",
    },
    {
      slug: "our-team",
      title: "Our Team",
    },
    {
      slug: "gift-card",
      title: "Gift Card",
    },
    {
      slug: "gallery",
      title: "Gallery",
    }];

  return (
    <Layout>
      <NextSeo title="Restaurant" />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex flex-wrap "
        >
          <Div100vh className='w-full'>
            <m.div variants={fade} className="bg-off-white text-light-brown selection:bg-light-brown selection:text-light-brown w-full h-full flex flex-wrap">
              <m.main variants={fade} className="p-4 md:p-6 relative w-full flex">

                <article className="flex flex-wrap w-full">
                  <div className="w-full relative z-10">
                    <Link legacyBehavior href="/">
                      <a className="block w-full">
                        <svg className="w-full" viewBox="0 0 1766.37 306.69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M93.64 1.69h7.21l-6.18 25h-7.85c3.01-17.6-10.96-14.98-22.5-15v85.03c.55 8.37 6.22 7.71 15 8.74v8.79c-19.61-.46-39.28-.46-59 0v-8.79c8.97-1.01 14.41-.4 15-8.74V11.69c-14.11-.58-21.41-.6-27.5 15H0l5.56-25c20.33.8 67.44 2.18 88.07 0Zm154.67 1.17v7.18c-8.02.95-12.71 1.06-13 9.02v79.08c.26 7.86 5.07 8.04 13 8.93v7.18c-18.7-.58-37.36-.58-56 0v-6.9c8.08-.89 12.68-1.09 13-8.93V62.69h-33v35.73c.37 8.13 5.72 7.99 14 8.93v6.9q-28.455-.885-57 0v-7.18c8.08-.88 12.68-1.1 13-8.93V19.06c-.35-7.88-4.83-8.1-13-9.02V2.85q28.545.885 57 0v7.52c-8.38 1.01-13.6.79-14 9.02v35.29h33V19.4c-.35-7.88-4.83-8.1-13-9.02V2.86c18.75.58 37.42.58 56 0m116.38 78.83h7.08c-4.25 11.75-6.31 22.78-6.19 33.07-29.49-.82-58.25-.82-86.27 0v-6.47c8.22-.94 12.68-1.07 13-9.05V17.25c-.53-7.1-5.58-6.21-13-7.28V2.69h81.29c1.1 0 1.82.21 2.17.62 1.1.66 3.65 23.81 4.07 25.38h-6.12c-8.67-17.85-14.04-18.6-33.33-18-3.39 0-5.08 1.78-5.08 5.34v35.66c10.97-.97 30.48 4.62 32.54-11h3.9c-.83 10.36-.83 20.7 0 31h-5.44c-2.14-15.17-20.31-10.24-31.01-11 .78 4.55-1.97 41.47 1.86 44.25 5.51 3.74 19.15 1.27 23.45-1.14 6.69-3.02 12.83-15.83 17.08-22.11m169.06-14.47c11.93 13.96 23.19 37.62 40.9 40.54l-4.82 7.88c-32.39 1.72-43.97-18.5-60.95-42.96-.03-.05-3.43.34-3.57.35v25.31c.31 8.01 4.77 8 13 8.93v6.97c-18.7-.41-37.36-.41-56 0v-7.23c8.14-.93 12.65-.96 13-8.84V16.33c-.63-5.05-3.52-6.09-11-6.3V2.86C487.65 4.6 533.69-1.4 551.44 11c23.7 16.64 12.79 49.18-17.69 56.22m-18.99-56.53h-9.46v54.38c19.7-.43 31.92-10.11 31.52-29.07-.09-14.5-6.61-25.46-22.07-25.31Zm173.93 71h7.08c-4.25 11.75-6.31 22.78-6.19 33.07-29.49-.82-58.25-.82-86.27 0v-6.47c8.22-.94 12.68-1.07 13-9.05V17.25c-.53-7.1-5.58-6.21-13-7.28V2.69h81.29c1.1 0 1.82.21 2.17.62 1.1.66 3.65 23.81 4.07 25.38h-7.12c-8.67-17.85-14.04-18.6-33.33-18-3.39 0-5.08 1.78-5.08 5.34v35.66c10.97-.97 30.48 4.62 32.54-11h4.66c-.83 10.36-.83 20.7 0 31h-5.2c-2.14-15.17-20.31-10.24-31.01-11 .78 4.55-1.97 41.47 1.86 44.25 5.51 3.74 19.15 1.27 23.45-1.14 6.69-3.02 12.83-15.83 17.08-22.11m92.72 10.45c-.68-20.45-31.78-24.65-43.83-38.08-22.5-21.56-5.31-55.33 25.27-53.85 6.97-1.82 26.21 9.2 27.27 1.48h8.65l1.58 27h-7.05c-18.62-42.97-66.39-4.52-19.67 14.73 10.11 4.85 17.16 8.81 21.14 11.87 28.93 21.98 10.35 62.8-24.52 61.08-10.41 2.45-30.1-15.94-33.88-2.69h-8.63l-1.99-28h8.34c5.68 19.96 44.82 33.64 47.32 6.45ZM927.83 1.69h7.21l-6.18 25h-7.04c3.01-17.6-10.96-14.98-22.5-15v85.03c.55 8.37 6.22 7.71 15 8.74v8.79q-29.91-.705-60 0v-8.79c8.97-1.01 14.41-.4 15-8.74V11.69c-14.11-.58-21.41-.6-27.5 15h-7.62l5.56-25c20.33.8 67.44 2.18 88.07 0m87.02 0 32.19 86.11c5 12.21 7.42 17.71 20.26 19.01v7.18q-30.09-.705-60 0v-7.18c8.17-.96 15.72-.94 13.33-9.46l-6.84-18.66h-32.53c-5.67 18.99-15.03 27.68 14.04 28.12v7.18c-16.96-.58-33.63-.58-50 0v-7.18c11.41-1.08 17.67-2.67 21.4-12.7l31.67-92.42h16.47Zm-18.39 29.24-12.7 39.76h27.41zm212.85-28.08v5.98c-8.42.99-13.61.96-14 9.24v82.65c.75 6.8 6.61 6.59 14 7.54v5.98c-17.52-.41-32.85-.41-46 0v-7.18c.38-1.96 2.43-10.28 2-12.16-10 23.14-44.99 27.72-61.59 11.41-16.11-13.16-7.3-69.06-9.41-87.4-.41-7.74-4.87-7.84-13-8.75v-7.3c18.7.58 37.36.58 56 0v7.07c-8.43 1-13.61.96-14 9.24v60.82c0 17.95 5.7 26.92 17.1 26.92 12.84.16 20.53-12.22 24.9-23.15V18.92c-.41-7.74-4.87-7.84-13-8.75V2.85q28.455.885 57 0m98.94 64.37c11.93 13.96 23.19 37.62 40.89 40.54l-4.82 7.88c-32.39 1.72-43.98-18.5-60.95-42.96h.2l-3.27.35v25.31c.31 8.01 4.77 8 13 8.93v6.97c-18.7-.41-37.36-.41-56 0v-7.23c8.14-.93 12.66-.96 13-8.84V16.33c-1.13-4.99-4.08-6.16-12-6.3V2.86c23.71 1.77 69.56-4.33 87.63 8.14 23.69 16.64 12.79 49.18-17.69 56.22Zm-19.48-56.53h-9.46v54.38c19.7-.43 31.92-10.11 31.52-29.07-.09-14.5-6.61-25.46-22.07-25.31Zm154.08-9 32.19 86.11c5 12.21 7.42 17.71 20.26 19.01v7.18q-30.09-.705-60 0v-7.18c8.17-.96 15.71-.94 13.33-9.46l-6.84-18.66h-32.53c-5.67 18.99-15.03 27.68 14.04 28.12v7.18c-16.96-.58-33.63-.58-50 0v-7.18c11.41-1.08 17.67-2.67 21.4-12.7l31.67-92.42h16.47Zm-18.6 29.24-12.7 39.76h27.41zm165.06-20.79V2.85c17.7.59 34.36.59 50 0v7.62c-12.67 1.11-19 5.11-19 12v92.21h-8.81l-62.19-85.91v66.55c.94 10.76 11.09 10.78 22 12.17v6.74c-17.99-.59-34.65-.59-50 0v-7.13c12.67-1.18 19-5.27 19-12.28V25.49c.02-9.95-7.29-14.88-17-15.5V3c14.18.58 28.42.58 42.71 0l44.29 62.33v-43.4q0-10.245-21-11.79m169.85-8.45h7.21l-6.18 25h-7.37c3.01-17.6-10.96-14.98-22.5-15v85.03c.55 8.37 6.22 7.71 15 8.74v8.79q-29.91-.705-60 0v-8.79c8.97-1.01 14.41-.4 15-8.74V11.69c-14.11-.58-21.4-.59-27.5 15h-7.29l5.56-25c20.33.8 67.44 2.18 88.07 0M809.72 179.47c1.31-.93 2.14-2.19 2.68-3.7.25-.72.26-1.42.34-2.15.07-.57.23-1.18.52-1.68.43-.75 1.17-.8 1.78-.15.3.32.59.76.66 1.18.24 1.5.24 3.02-.14 4.51-.4 1.56-.98 3.05-2.04 4.27-.65.75-1.43 1.38-2.17 2.05-.15.14-.33.24-.61.43 1.32.27 2.52.49 3.71.76 1.51.35 3.04.56 4.6.58 1.77.02 3.54.15 5.32.22 1.51.05 3.02.08 4.54.12 1.15.03 2.29.08 3.44.11 2.29.08 4.58.15 6.88.23 2.24.08 4.48.15 6.72.24 1.85.07 3.7.15 5.56.22 1.87.08 3.74.15 5.62.24 1.52.07 3.05.12 4.57.23 1.77.13 3.55.31 5.32.45.76.06 1.53.07 2.29.12 1.93.14 3.86.31 5.79.46.19.01.39 0 .58 0 3.42-.11 6.84-.19 10.26-.36 1.76-.09 3.51-.31 5.25-.58 1.49-.23 2.95-.6 4.43-.9 2.06-.43 4.15-.73 6.17-1.3 3.46-.99 6.88-2.11 10.3-3.24 2.88-.96 5.7-2.08 8.59-2.99 1.63-.52 3.34-.79 5.03-1.12 2.34-.46 4.71-.67 7.09-.5 2.97.21 5.84.83 8.6 1.99 2.44 1.02 4.58 2.5 6.64 4.12.88.69 1.89.86 2.91 1.09 1.73.39 3.47.7 5.18 1.17 1.63.45 3.04 1.35 4.33 2.47 1.7 1.47 2.76 3.3 3.45 5.4.44 1.34.7 2.72.7 4.14 0 .63.1 1.25.1 1.88.01 1.29 0 2.58-.02 3.87-.02 1.4-.06 2.8-.09 4.2-.03 1.34-.08 2.68-.11 4.02l-.12 4.3-.12 4.13-.12 3.73c-.04 1.13-.1 2.25-.11 3.38-.02 2.19-.09 4.39.02 6.58.12 2.28.39 4.56 1.13 6.74.53 1.56 1.08 3.11 1.68 4.64.38.96 1.03 1.74 1.87 2.36.29.21.53.47.8.71-.03.05-.06.1-.09.14-.22.02-.43.03-.85.07.35.43.6.78.89 1.08.43.45.72.95.77 1.57.04.49 0 .99.08 1.47.14.78.37 1.55.56 2.35-.58.2-.68-.26-.86-.53-.31-.46-.56-.96-.84-1.44-.04-.07-.13-.12-.31-.27.08 1.21.16 2.31.24 3.4l-.1.04c-.29-.52-.57-1.05-.87-1.56-.07-.12-.23-.18-.35-.26-.04.16-.13.33-.11.47.19 1.08.4 2.17.62 3.24.07.33.02.38-.29.24-.75-.34-1.16-.88-1.24-1.72-.08-.91-.22-1.82-.34-2.73a.6.6 0 0 0-.11-.25c-.03-.04-.1-.04-.17-.07-.06.39-.13.76-.21 1.25-.57-.97-1.09-1.83-1.57-2.7-.41-.73-.89-1.44-1.14-2.22-.31-.97-.43-2-.6-3.01q-.345-1.995-.66-3.99c-.18-1.15-.35-2.3-.5-3.45-.17-1.27-.37-2.54-.45-3.81-.08-1.35-.03-2.7-.05-4.05 0-.26-.08-.51-.09-.77-.04-5.76-.07-11.52-.12-17.27-.02-2.27-.02-4.53-.12-6.8-.19-3.98-.76-7.88-2.65-11.47-.28-.52-.64-1.01-1.03-1.44.52 1.85 1.1 3.68 1.54 5.55.38 1.6.62 3.24.87 4.87.12.8 0 1.65.17 2.44.46 2.17.39 4.36.3 6.55-.05 1.24-.22 2.48-.34 3.72-.13 1.3-.26 2.6-.44 3.9-.16 1.1-.36 2.2-.6 3.28-.35 1.6-.74 3.19-1.14 4.77-.31 1.21-.62 2.42-1.02 3.6-.49 1.48-1.07 2.94-1.62 4.4-.64 1.7-1.4 3.36-1.91 5.09-.5 1.69-.53 3.46-.35 5.24.2 2.06.86 3.97 1.65 5.85.45 1.07 1.11 2.07 1.5 3.16.29.8.38 1.7.44 2.56.14 2.13-.22 4.21-.66 6.29-.42 2-.71 4.03-1.06 6.05-.18 1.05-.3 2.12-.61 3.13-.15.49-.07.96-.17 1.44-.35 1.74-.41 3.52-.5 5.3-.06 1.31-.2 2.62-.21 3.94-.03 3.07-.02 6.14 0 9.22 0 1.09-.3 2.08-.82 3.02-.49.89-1 1.78-1.35 2.73-.28.76-.33 1.6-.49 2.4-.26 1.32-.63 2.61-1.96 3.26-.49.24-1.06.36-1.6.42-.97.09-1.94.1-2.92.13-1.78.05-3.56.07-5.34.12-.65.02-1.21-.2-1.7-.61-.04-.03-.09-.06-.13-.09-.71-.61-.91-1.39-.56-2.26.17-.41.38-.81.57-1.21l.12-.09c.39-.35.78-.71 1.17-1.06.08-.05.15-.11.23-.16 1.53-1.52 2.86-3.19 3.76-5.17.03-.07.04-.14.06-.21.03-.04.06-.07.09-.11.43-1.36.99-2.69 1.26-4.08.3-1.53.33-3.1.47-4.66.06-.62.15-1.26.11-1.88-.12-1.71-.29-3.42-.45-5.13-.1-1.07-.23-2.14-.34-3.2-.09-.92-.19-1.84-.23-2.76-.03-.71.25-1.34.67-1.91.98-1.33 1.66-2.79 1.99-4.42.24-1.22.13-2.42 0-3.62-.09-.77-.21-1.54-.32-2.31-.04-.07-.08-.15-.13-.22-.31-1.29-.63-2.57-.94-3.86-.06-.26-.13-.52-.2-.77-.04-.07-.07-.15-.11-.22-.24-1.02-.56-2.02-.7-3.05-.11-.81 0-1.66 0-2.49.04-.07.08-.15.12-.22.12-.84.64-1.45 1.15-2.07.21-.26.44-.51.66-.76v.02c.57-.53 1.21-1.01 1.69-1.61a67 67 0 0 0 2.98-4.12c.46-.68.76-1.47 1.13-2.21.03-.04.06-.07.09-.11.08-.23.17-.47.25-.7.03-.04.06-.08.09-.11.81-2.14 1.48-4.32 1.86-6.58-.05-.02-.11-.04-.16-.06-.34.75-.64 1.51-1.01 2.24-.94 1.84-1.9 3.66-2.88 5.48-.29.55-.65 1.05-.98 1.58-.03.01-.05.04-.06.07l-.64.85c-.03.01-.05.03-.05.07-1.05 1.12-2.08 2.25-3.14 3.35-.34.36-.77.63-1.14.95-.84.73-1.56 1.56-1.86 2.65-.26.94-.47 1.9-.24 2.9.28 1.17.45 2.36.73 3.53.34 1.43.81 2.84 1.11 4.28.39 1.85 1 3.68.84 5.61-.13 1.57-.78 2.92-1.76 4.12-1.01 1.25-2.19 2.34-3.04 3.75-.59.99-.98 2.07-1.56 3.06-.76 1.31-1.4 2.7-2.11 4.04-1.27 2.4-2.58 4.78-3.82 7.2-.81 1.57-1.59 3.17-2.28 4.8-.41.97-.58 2.05-.94 3.04-.35.97-.8 1.83-1.8 2.4-1.59.89-2.34 2.43-2.68 4.16-.2 1-.36 2-.93 2.89-.58.9-1.46 1.33-2.45 1.41-1.78.15-3.58.2-5.37.24-1.46.04-2.93-.08-4.38.03-1.24.09-2.56-1.67-2.01-2.98.04-.08.02-.19.04-.28l.08-.11c.18-.61.61-.99 1.15-1.28.29-.16.54-.38.8-.57.04-.02.08-.05.12-.07.15-.09.3-.18.45-.28.04-.03.09-.06.13-.08.85-.68 1.78-1.28 2.52-2.06a33 33 0 0 0 2.94-3.65c.69-1 1.4-2 1.74-3.22.15-.55.65-1 .94-1.53.68-1.24 1.37-2.48 1.99-3.74.86-1.73 1.66-3.49 2.49-5.23.03-.04.06-.07.1-.11l.27-.81c.07-.11.13-.22.2-.33.27-.88.56-1.75.82-2.64.24-.8.52-1.6.65-2.41.16-1.05.2-2.12.26-3.19.06-1.05.15-2.1.1-3.14-.06-1.34-.1-2.69-.54-3.99-.04-.11.03-.26.05-.39l-.17-.2v-.36c-.04-.07-.08-.15-.12-.22-.23-.87-.47-1.73-.69-2.6-.16-.6-.3-1.2-.45-1.81-.04-.07-.07-.15-.11-.22-.33-1.33-.68-2.65-.98-3.98-.4-1.72-.72-3.46-1.16-5.17-.44-1.7-.98-3.37-1.48-5.06-.03-.04-.06-.07-.09-.11-.5-.9-.97-1.82-1.52-2.7-1.21-1.93-3-3.26-4.86-4.5-.04-.03-.07-.06-.11-.09-.04-.02-.08-.03-.12-.05s-.08-.05-.12-.07c-2.02-1.18-4.22-.89-5.55.13 1.16.22 2.4.33 3.54.73.96.34 1.83.99 2.66 1.6.62.46 1.12 1.07 1.67 1.62 0 .04.03.06.07.07.57.81 1.14 1.61 1.71 2.42.11.15.21.31.36.53-.65.59-1.27 1.2-1.93 1.76-1.37 1.16-2.75 2.3-4.13 3.43-.42.35-.87.66-1.3.99-.04 0-.06.02-.09.06-1.11.71-2.23 1.43-3.34 2.14-.04.02-.08.05-.12.07-.7.36-1.4.74-2.11 1.08-1.12.55-2.23 1.12-3.38 1.6-1.36.57-2.73 1.16-4.14 1.58-1.65.49-3.35.82-5.04 1.21-.6.14-1.2.3-1.81.33-1.69.09-3.37.47-5.08.16-.49-.09-1.02.1-1.52.08-2.28-.09-4.53-.37-6.76-.87-1.57-.35-3.16-.64-4.74-.97-1.12-.24-2.22-.53-3.34-.77-1.06-.23-2.14-.42-3.21-.63-.04-.03-.08-.06-.12-.1-1-.24-2.06-.19-2.99-.72-.18-.1-.49.06-.73.02-.93-.16-1.9-.1-2.76-.61-.19-.11-.53.05-.79.03-.21-.02-.41-.14-.62-.21-.06-.02-.14-.09-.17-.07-.56.34-1.11 0-1.67-.03-.64-.03-1.28-.14-1.92-.14-2.16.02-4.33.06-6.49.11-.97.02-1.94.11-2.93.16-.24-1.49.25-2.79.67-4.1.07-.11.14-.22.2-.33.04-.16.09-.32.13-.48.03-.04.06-.07.09-.11.24-.54.48-1.08.71-1.62.03-.04.06-.07.09-.11.44-1.23.88-2.47 1.31-3.7.03-.07.07-.15.1-.22.38-1.96.75-3.93.65-5.94-.08-1.56-.29-3.12-.45-4.68-.01-.1-.13-.19-.32-.44-.1.9-.17 1.62-.25 2.34-.23 1.9-.48 3.8-.68 5.7-.25 2.33-1.2 4.37-2.36 6.37-.98 1.69-1.66 3.54-1.8 5.53-.1 1.45-.18 2.91-.1 4.36.07 1.24.39 2.46.58 3.7.12.8.23 1.61.31 2.42.06.63.11 1.26.12 1.88 0 3.34-.59 6.59-1.63 9.76-.67 2.05-1.16 4.13-1.37 6.28-.13 1.32-.29 2.65-.33 3.98-.06 1.75-.1 3.51 0 5.26.13 2 .44 3.99.65 5.99.08.76.02 1.45-.53 2.13-.98 1.21-1.31 2.75-1.64 4.25-.4 1.85-1.6 2.87-3.37 3.24-.86.18-1.77.15-2.65.25-.92.1-1.83.25-2.74.34-1.61.17-3.25.27-4.73-.52-1.27-.68-1.74-1.98-.56-3.22.71-.75 1.67-1.28 2.54-1.87 1.26-.85 2.12-1.99 2.8-3.35.81-1.64 1.07-3.38 1.33-5.14.13-.9.33-1.79.46-2.69.11-.72.2-1.45.23-2.18.1-2.1.24-4.2.21-6.29-.03-1.69-.32-3.37-.44-5.07-.16-2.26-.74-4.43-1.28-6.61-.18-.73-.47-1.44-.72-2.15-.03-.08-.14-.14-.31-.29.17 1.44.34 2.76.49 4.08.08.66.15 1.32.19 1.99.06 1.03.09 2.06.12 3.1.05 1.67.15 3.34.1 5-.06 1.76-.26 3.52-.45 5.28-.2 1.86-.44 3.72-.69 5.58-.21 1.54-.39 3.09-.72 4.6-.34 1.52-1.22 2.08-2.78 2.36-1.16.21-2.32.42-3.49.56-1.47.18-2.85-.03-3.82-1.3-.19-.24-.22-.69-.16-1.02.19-1.07.95-1.74 1.71-2.45.76-.72 1.42-1.55 2.06-2.38.82-1.07 1.23-2.35 1.43-3.66.16-1.06.18-2.15.23-3.22.06-1.05.13-2.1.11-3.15-.03-1.62-.08-3.24-.23-4.85a60 60 0 0 0-.68-5.19c-.26-1.45-.65-2.89-1.08-4.29-.46-1.49-1.07-2.94-1.57-4.42-.38-1.14-1.31-1.78-2.13-2.54-.74-.69-1.41-1.45-2.15-2.12-.83-.75-1.66-1.52-2.59-2.14-1.17-.78-2.42-1.43-3.65-2.1-.58-.31-1.31-.4-1.78-.82-.83-.73-1.51-1.63-2.23-2.47-.61-.71-1.22-1.38-2.17-1.68-.85-.26-1.12-1.09-1.29-1.81-.26-1.08-.32-2.21-.47-3.32-.16-1.17-.34-2.34-.49-3.51-.13-1.06-.26-2.13-.35-3.19-.16-2.12-.8-4.03-2.29-5.61-.96-1.01-1.91-2.03-2.91-3.01-.59-.58-1.24-1.09-1.87-1.63-.04-.02-.08-.05-.12-.07-.56-.29-1.16-.45-1.79-.35-3.42.57-6.87.18-10.3.34-.92.04-1.74-.34-2.54-.74-.39-.19-.79-.36-1.18-.55-.04-.03-.07-.06-.11-.1-.08-.01-.16-.02-.24-.04-.04-.03-.08-.05-.11-.08-.19-.05-.39-.09-.58-.14-.04-.03-.07-.06-.11-.1-.77-.41-1.57-.77-2.3-1.23-.61-.39-.58-1.14-.7-1.76-.12-.63-.1-1.28-.13-1.93-.06-1.4.46-2.6 1.21-3.74.39-.58.67-1.23 1-1.85.03-.04.06-.08.09-.11.77-1.93.94-3.96.8-6-.09-1.39-.38-2.78-.56-4.17-.06-.47-.09-.94-.12-1.41-.05-.89-.07-1.79-.12-2.68-.05-.87-.12-1.75-.18-2.58-1.37-.13-2.73-.23-4.09-.38-1.28-.14-2.57-.28-3.83-.53-3.09-.62-5.19-2.53-6.58-5.28-.27-.53-.53-1.06-.77-1.61-.41-.97-.09-1.86.9-2.59 1.06-.79 2.19-1.47 3.48-1.84 1.22-.36 2.49-.43 3.72-.16 1.38.29 2.76.64 4.11 1.08 1.43.46 2.81 1.06 4.22 1.59.18.07.39.09.64.15-.17-.56-.27-1.05-.46-1.5-.24-.55-.71-.89-1.27-1.08-.38-.13-.77-.25-1.16-.37-.04-.03-.08-.06-.11-.1-.23-.08-.46-.17-.69-.25-.04-.03-.07-.07-.11-.1-.19-.09-.39-.18-.58-.27l-.11-.08c-.12-.05-.23-.1-.35-.16-.04-.02-.08-.05-.12-.07-.15-.09-.3-.19-.46-.28-.04-.02-.08-.05-.13-.07-2.1-1.26-3.68-3.02-4.76-5.2-.61-1.23-1.19-2.51-1.1-3.94.04-.63.17-1.26.32-1.87.14-.56.72-1.03 1.15-1 .42.03 1.08.63 1.17 1.1.13.7.23 1.4.35 2.1.2 1.19.88 2.09 1.74 2.9s1.77 1.51 2.84 2.03c1.25.61 2.56.87 3.93.76.26-.02.56-.19.74-.39 1.35-1.53 3-2.54 5.03-2.82 1.34-.19 2.69-.39 4.04-.45 2.24-.1 4.48-.16 6.72-.11 1.5.03 3.03.16 4.49.49.89.2 1.69.83 2.49 1.32.51.31.93.79 1.45 1.05.5.25 1.08.41 1.64.45 1.42.11 2.82-.02 4.09-.78.1-.06.21-.09.32-.13l.1-.07c.04-.02.08-.03.12-.05.04-.03.07-.06.11-.09l.21-.15c.04-.03.09-.06.13-.09Zm38.65 52.61h-.1v.35h.1zm104.71-.39s-.02-.08-.05-.09c-.02 0-.06.02-.09.03.02.04.04.08.06.11.03-.02.05-.04.08-.05m.07-.3v-.04h-.04c0 .02 0 .04.01.06.01 0 .03-.01.04-.02Z" fill="currentColor" /></svg>
                      </a>
                    </Link>
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

              <m.footer variants={fade} className="p-4 md:p-6 relative w-full flex items-end">
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

/* 
export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
} */