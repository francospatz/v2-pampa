'use client'
import { useContext, useEffect } from 'react'
import Layout from '@/components/layout'
import { fade, revealNoDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import { LangContext } from '@/context/lang'


export default function Terms() {

  const [introContext, setIntroContext] = useContext(IntroContext);
  const [langContext, setLangContext] = useContext(LangContext);

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
      <NextSeo title={"Terms"} />


      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className='h-full'
        >
          <m.main variants={fade} className="p-4 md:p-6 relative pb-16 md:pb-24 xl:pb-32 bg-off-white text-light-brown selection:bg-off-white selection:text-light-brown">

            <article className="flex flex-wrap">
              <div className="w-full relative z-10">
                <Link legacyBehavior href="/">
                  <a className="block w-full xl:w-[89%]">
                    <svg className="w-full md:w-11/12" viewBox="0 0 1528.99 170.58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.46 102.46 49 103.47v43.82c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.21-.84-44.54-.84-67 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75S7.32 13.12 1 12.63V5.44c6.33.34 13.85.51 22.54.51 5.23 0 13.34-.08 24.32-.25 10.97-.17 16.55-.25 16.72-.25 46.02 0 69.02 14.27 69.02 42.81 0 14.02-6.16 25.58-18.49 34.7-12.41 9.12-32.3 15.62-59.65 19.5M49 13.48v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96s11.12-17.64 11.12-29.91c0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65zM215.89 3.47l50.27 135.99c2.23 5.56 3.9 9.36 5.01 11.41 3.17 5.81 10.11 9.02 20.83 9.61v7.31q-35.865-1.41-72 0v-7.31c8.49-.6 13.84-2.09 16.07-4.49 2.14-2.22 2.06-5.98-.26-11.28l-11.06-30.25h-55.16l-10.46 31.27c-1.45 4.53-.24 7.93 3.64 10.19 3.87 2.27 10.61 3.78 20.23 4.55v7.31c-20.42-.85-40.75-.85-61 0v-7.31q12.375-.9 18.63-5.25c4.08-2.73 7.23-7.22 9.44-13.46L197.55 3.47zm-19.57 31.82-23.27 70.18h48.96l-25.7-70.18ZM474 25.91v119.97c0 5.27 1.32 8.84 3.95 10.71 2.72 1.96 7.73 3.19 15.05 3.7v7.31a939 939 0 0 0-70 0v-7.42c7.6-.51 12.84-1.75 15.7-3.71s4.3-5.54 4.3-10.74V31.58l-52.75 135.9h-2.57L335 31.58v114.16q0 7.29 5.61 10.29c3.74 2 10.2 3.39 19.39 4.15v7.41c-21.14-.94-41.8-.94-62 0v-7.38c9.26-.76 15.74-2.12 19.44-4.1s5.56-5.37 5.56-10.16V29.15c0-10.15-7.33-15.73-22-16.76V4.94c17.31.94 34.63.94 51.94 0l46.82 114.75L441.98 4.94c16.63.6 33.3.6 50.02 0v7.75c-6.94.49-11.67 1.65-14.2 3.49s-3.8 5.08-3.8 9.73m85.46 76.55-6.46 1.01v43.82c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.21-.84-44.54-.84-67 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75s-6.92-3.08-13.24-3.57V5.44c6.33.34 13.85.51 22.54.51 5.23 0 13.34-.08 24.32-.25 10.97-.17 16.55-.25 16.72-.25 46.02 0 69.02 14.27 69.02 42.81 0 14.02-6.16 25.58-18.49 34.7-12.41 9.12-32.3 15.62-59.65 19.5M553 13.48v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96s11.12-17.64 11.12-29.91c0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65zM719.89 3.47l50.27 135.99c2.23 5.56 3.9 9.36 5.01 11.41 3.17 5.81 10.11 9.02 20.83 9.61v7.31q-35.88-1.41-72 0v-7.31c8.49-.6 13.84-2.09 16.07-4.49 2.14-2.22 2.06-5.98-.26-11.28l-11.06-30.25h-54.16l-10.46 31.27c-1.45 4.53-.24 7.93 3.64 10.19 3.87 2.27 10.61 3.78 20.23 4.55v7.31c-20.42-.85-40.75-.85-61 0v-7.31q12.375-.9 18.63-5.25c4.08-2.73 7.23-7.22 9.44-13.46L702.55 3.47zm-19.62 31.82L677 105.47h48.96l-25.7-70.18ZM956 97.16v-7.54c21.92.51 43.59.51 65 0v9.37l-5.55.94c-2.36.32-4.19 1.1-5.49 2.36s-2.26 3.19-2.89 5.79c-.47 2.21-.79 4.57-.94 7.09q-.12 2.01-.12 9.69v3.24c0 15.68 3 24.59 9 26.72v8.05q-6.945-1.02-14.79-1.02c-7.54 0-16.5 1.45-26.87 4.35-10.29 2.9-19.67 4.35-28.16 4.35q-36.39 0-58.38-23.91c-14.57-16.02-21.86-36.77-21.86-62.26s7.2-44.83 21.6-60.6C900.95 7.93 919.64 0 942.61 0c6.26 0 13.24.98 20.96 2.94 7.46 1.88 13.71 2.81 18.77 2.81 3.17 0 6.77-.43 10.8-1.28 2.91 18.58 6.77 33.58 11.57 45h-15.19c-11.3-26.67-27.4-40.01-48.3-40.01-13.51 0-24.13 5.41-31.86 16.24-7.82 10.91-11.73 27.83-11.73 50.75 0 25.14 4.67 45.47 14.02 60.98 9.43 15.43 22.77 23.14 40.02 23.14 9.77 0 16.44-2.9 20.01-8.69 3.65-5.79 5.48-15.64 5.48-29.53 0-9.72-1.02-16.02-3.06-18.92-1.87-3.07-6.25-4.99-13.13-5.75l-4.97-.51Zm161.59-.15 22.24 31.29q22.5 32.325 40.98 33.87l-5.56 8.4c-25 .34-45.47-10.86-61.41-33.61l-24.05-34.13c-.09 0-.39.04-.91.13s-.95.13-1.29.13l-6.59 1.03v43.17c0 4.42 1.29 7.54 3.88 9.37 2.58 1.83 7.29 3 14.12 3.5v7.43c-22.54-.85-45.2-.85-68 0v-7.52c6.82-.49 11.55-1.6 14.18-3.33 2.55-1.81 3.82-4.93 3.82-9.37V24.95c0-3.94-1.25-6.86-3.76-8.75s-6.92-3.08-13.24-3.57V4.05c6.47.35 14.13.52 23.01.52 5.34 0 13.62-.08 24.82-.26 11.2-.17 16.89-.26 17.07-.26 46.97 0 70.46 14.57 70.46 43.7q0 34.905-49.77 49.26m-16.39-83.53H1081v81.95l6.52-.77c17.47-2.3 29.91-7.29 37.33-14.96 7.41-7.67 11.12-17.64 11.12-29.91 0-11.33-2.94-20.22-8.82-26.66-5.88-6.43-14.53-9.65-25.95-9.65m137.8 11.7V147.4q0 6.81 4.17 9.63c2.78 1.88 7.72 3.08 14.83 3.59v6.97c-22.54-.84-45.21-.84-68 0v-7.97c7.18-.51 12.14-1.69 14.88-3.55s4.12-5.02 4.12-9.5V26c0-4.47-1.37-7.62-4.12-9.44-2.75-1.81-7.71-2.98-14.88-3.48V4.99c22.54.84 45.21.84 68 0v7.1c-7.1.51-12.05 1.71-14.83 3.59s-4.17 5.05-4.17 9.5m143.49 116.42 9.73-17.13h3.12s-7.04 27.49-7.97 42.83c-39.04-.6-77.4-.6-114.37 0v-7.29c6.28-.51 11.13-1.66 13.83-3.45 2.61-1.87 4.17-9.72 4.17-9.72V25.38c0-4.47-1.37-7.62-4.12-9.44-2.75-1.81-7.71-2.98-14.88-3.48V4.98q34.305 1.275 69 0v8.1c-7.48.51-12.68 1.69-15.61 3.55s-4.39 4.99-4.39 9.39V146.8c0 4.65.65 7.76 1.96 9.32 1.3 1.57 3.99 2.35 8.04 2.35h15.27c10.09 0 17.75-1.22 22.97-3.68 5.14-2.54 9.55-6.93 13.24-13.19Zm131.92 0 9.24-17.13h5.34s-7.04 27.49-7.97 42.83c-39.04-.6-77.4-.6-115.03 0v-7.29c6.94-.51 11.79-1.66 14.49-3.45 2.61-1.87 3.51-9.72 3.51-9.72V24.82c0-4.29-1.3-7.3-3.9-9.04s-7.3-2.85-14.1-3.34V4.98q34.305 1.275 69 0v8.1c-7.1.51-12.05 1.69-14.83 3.55q-4.17 2.79-4.17 9.39V146.8c0 4.65.62 7.76 1.86 9.32 1.24 1.57 3.79 2.35 7.64 2.35H1480c9.58 0 16.86-1.22 21.82-3.68 4.88-2.54 9.07-6.93 12.58-13.19Z" fill="#151009" /></svg>
                  </a>
                </Link>

                <span className="hidden xl:block w-1/2 md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg ml-auto font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 fixed top-0 right-0 m-6 overflow-hidden pb-[4px]">
                  <Link legacyBehavior href="/"><a className="group ">
                    <m.span variants={revealNoDelay} className="block">
                      {langContext === 'es' ? 'Volver' : 'Back to home'}
                      <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a></Link>
                </span>
              </div>

              <div className="w-full flex flex-wrap items-start">
                {langContext === 'es' ?


                  <div className="w-11/12 md:w-full md:max-w-[380px] xl:max-w-[550px] 2xl:max-w-[620px] 3xl:max-w-[700px] md:mx-auto font-serif text-xl xl:text-[22px] leading-tight tracking-tight content mt-12 md:mt-16 xl:mt-24">
                    <h1 className="title uppercase">Aviso de Privacidad - Pampa Grill Málaga</h1>

                    <h2>1. ¿Quiénes somos?</h2>

                    <p>Este es el aviso de privacidad (“Aviso de Privacidad”) de Pampa Grill (referido en este Aviso de Privacidad como “nosotros”, “nos” o “nuestro”). Estamos comprometidos a proteger tu privacidad,</p>

                    <p>Este Aviso de Privacidad aplica cuando utilizas nuestro sitio web y servicios.</p>

                    <p>Recopilamos información que te identifica personalmente como individuo, tal como tu nombre, fotografía, detalles de contacto e información que puede ser vinculada con esta, u otra información, para identificarte (“Datos Personales”).</p>

                    <h2>2. Guía rápida de contenidos</h2>
                    <ul>
                      <li>¿Qué información personal recopilamos sobre ti?</li>
                      <li>¿Cómo utilizamos tu información personal?</li>
                      <li>¿Cuánto tiempo conservamos tu información personal?</li>
                      <li>¿Con quién compartimos tu información personal?</li>
                      <li>¿Qué sucede si no nos proporcionas la información que solicitamos?</li>
                      <li>¿Tomamos decisiones automatizadas con respecto a ti?</li>
                      <li>¿Transferimos tu información personal fuera del EEE?</li>
                      <li>¿Cuáles son tus derechos?</li>
                      <li>¿Cómo nos contactamos contigo?</li>
                      <li>¿Cómo nos contactas?</li>
                    </ul>

                    <h2>3. ¿Qué información personal recopilamos sobre ti?</h2>

                    <p>Recopilamos y procesamos tu información de las siguientes maneras:</p>

                    <p>1. Información que nos proporcionas</p>

                    <p>1.1. Procesamos los Datos Personales que necesitamos para contactarte, incluyendo tu nombre, dirección de correo electrónico y número de teléfono. Podrías compartir esta información con nosotros por teléfono, a través de nuestro sitio web o por correo electrónico. Utilizamos la información personal que nos has proporcionado para responder con la información que nos has solicitado. Es tu responsabilidad informarnos sobre cualquier cambio en tus Datos Personales.</p>

                    <p>1.2. Procesamos información relacionada con transacciones, como compras de bienes y/o servicios, que realizas con nosotros o completas a través de nuestro sitio web, incluidos los detalles de la transacción, tu nombre, tus detalles de contacto y tus detalles de pago.</p>

                    <p>1.3. Procesamos los datos de tu cuenta de usuario en nuestro sitio web, incluyendo tu identificador de cuenta (como tu nombre, nombre de usuario, dirección de correo electrónico o nombre de la empresa), junto con tus preferencias de marketing cuando te registras para una cuenta con nosotros.</p>

                    <p>1.4. También procesamos datos sobre tu uso de nuestro sitio web y servicios. Para más información, por favor, consulta nuestra Política de Cookies.</p>

                    <p>2. Información que recopilamos automáticamente</p>
                    <p>2.1. Podemos agregar datos anónimos, como datos estadísticos o demográficos para cualquier propósito. Los datos anónimos son datos que no te identifican como individuo. Los datos agregados pueden derivarse de tus Datos Personales, pero no se consideran información personal en la ley porque no revelan tu identidad. Por ejemplo, podemos agregar datos de perfil para evaluar el interés en un producto o servicio. Sin embargo, si combinamos o conectamos datos agregados con tu información personal de manera que pueda identificarte de alguna manera, será tratado como Datos Personales y usado según se establece en este Aviso de Privacidad.</p>

                    <p>3. Información que recibimos de terceros</p>

                    <p>3.1. Terceros pueden publicitar en nuestro sitio web. Al hacerlo, esos partidos, sus agentes u otras compañías que trabajan para ellos pueden usar tecnología que recopila automáticamente información sobre ti cuando su publicidad se muestra en nuestro sitio web. También pueden usar otras tecnologías como cookies o tecnologías de seguimiento para personalizar el contenido de y medir el rendimiento de sus anuncios. No controlamos estas tecnologías ni los datos que estos terceros recopilan. Este Aviso de Privacidad no cubre las prácticas de estos terceros y recomendamos que leas sus avisos de privacidad y cookies.</p>

                    <h2>4. ¿Cómo utilizamos tu información personal?</h2>

                    <p>1. Para proporcionarte un servicio que estás solicitando o ejecutar nuestro contrato contigo.</p>

                    <p>1.1. Cuando creas una cuenta en nuestro sitio web, compras un producto o servicio de nosotros, o de otra manera aceptas nuestros términos y condiciones, se forma un contrato entre tú y nosotros.</p>

                    <p>1.2. Procesamos los Datos Personales que nos das para cumplir con nuestras obligaciones contigo bajo ese contrato.</p>

                    <p>1.3. Podemos usar estos Datos Personales para:</p>

                    <ul>
                      <li>verificar tu identidad por motivos de seguridad</li>

                      <li>venderte productos y/o proporcionarte nuestros servicios</li>

                      <li>proporcionarte sugerencias y consejos sobre productos, servicios y cómo obtener el máximo provecho de usar nuestro sitio web y servicios.</li>
                    </ul>

                    <p>2. Donde tenemos tu consentimiento</p>

                    <p>2.1. Cuando navegas y usas nuestro sitio web y usas nuestros servicios o nos pides que te proporcionemos más información sobre nuestro negocio, incluidos nuestros productos y servicios, proporcionas tu consentimiento para que procesemos tus Datos Personales.</p>

                    <p>2.2. Donde sea posible, y donde lo necesitemos, buscamos tu consentimiento para procesar esta información, por ejemplo, pidiéndote que aceptes nuestro uso de cookies.</p>

                    <p>2.3. Donde nos has dado permiso para hacerlo, podemos de vez en cuando pasar tu nombre e información de contacto a terceros seleccionados que consideramos pueden proporcionar servicios o productos que podrías encontrar útiles.</p>

                    <p>2.4. Puedes retirar tu consentimiento (incluyendo para fines de marketing) en cualquier momento instruyéndonos en info@pampagrillmalaga.com. Sin embargo, si lo haces, en algunas circunstancias es posible que no podamos proporcionarte nuestros servicios.</p>

                    <p>3. Donde tenemos un interés legítimo</p>

                    <p>3.1. También procesamos Datos Personales sobre la base de interés legítimo.</p>

                    <p>3.2. Cuando nos basamos en interés legítimo para procesar tu información, realizamos una ‘prueba de equilibrio’ para asegurarnos de que nuestro procesamiento es necesario y que tus derechos fundamentales de privacidad no son superados por nuestros intereses legítimos, antes de proceder con dicho procesamiento. Puedes obtener más información sobre la información en estas pruebas de equilibrio contactándonos usando los detalles a continuación.</p>

                    <p>3.3. Por ejemplo, procesamos tus Datos Personales sobre esta base para los fines de:</p>
                    <ul>
                      <li>dirigir nuestro negocio</li>
                      <li>responder a comunicaciones de ti</li>
                      <li>afirmar y defender derechos legales</li>
                    </ul>

                    <p>4. Donde tenemos una obligación legal</p>

                    <p>4.1. A veces, debemos procesar tu información Personal para cumplir con un requisito legal. Por ejemplo, podemos estar legalmente obligados a dar información, incluida tu información personal, a otros si así lo solicitan o si tienen la autorización adecuada, como una orden de registro o una orden judicial.</p>

                    <h2>5. ¿Cuánto tiempo conservamos tu información personal?</h2>

                    <p>Solo retenemos tu información durante el tiempo que sea necesario para que usemos tu información como se describe anteriormente, donde esté en nuestro interés legítimo, o para cumplir con nuestras obligaciones legales. Retendremos algo de tu información después de que dejes de usar nuestros servicios, por ejemplo, si esto es necesario para cumplir con nuestras obligaciones legales, o es necesario para fines fiscales y contables.
                      Al determinar los períodos de retención relevantes, tomaremos en cuenta factores que incluyen:</p>

                    <ul>
                      <li>(a)	nuestras obligaciones contractuales y derechos en relación con la información involucrada;</li>
                      <li>(b)	obligación(es) legal(es) bajo la ley aplicable para retener datos por un cierto período de tiempo;</li>
                      <li>(c)         nuestro interés legítimo donde hemos realizado una prueba de equilibrio;</li>
                      <li>(d)	el plazo de prescripción bajo la(s) ley(es) aplicable(s);</li>
                      <li>(e)	(posibles) disputas;</li>
                      <li>(f)	si has hecho una solicitud para que tu información sea borrada; y</li>
                      <li>(g)	directrices emitidas por autoridades de protección de datos relevantes.</li>
                    </ul>

                    <p>De lo contrario, borramos de forma segura tu información una vez que ya no es necesaria.</p>

                    <h2>6. ¿Con quién compartimos tu información personal?</h2>

                    <p>[Compartimos tu información personal con terceros de confianza donde los hemos retenido para proporcionar servicios que tú o nuestros clientes han solicitado, como Marcas, Empresas y Organizaciones. Estos terceros cumplen con compromisos similares y igualmente estrictos de privacidad y confidencialidad.]</p>

                    <p>[Compartimos tu información personal con terceros que realizan funciones en nuestro nombre y que también nos proporcionan servicios, como asesores profesionales, consultores de TI que realizan trabajos de prueba y desarrollo en nuestros sistemas de TI y casas de investigación y correo. Estos terceros están obligados a acordar obligaciones de privacidad y confidencialidad.]</p>

                    <p>[Compartimos tu información personal con nuestras otras compañías del Grupo por razones internas, principalmente por motivos de negocio y operacionales. A medida que continuamos desarrollando nuestro negocio, podemos vender o comprar activos. Si otra entidad nos adquiere o se fusiona con nosotros, tu información personal será divulgada a dicha entidad. Además, si se presenta un procedimiento de bancarrota o reorganización por o contra nosotros, toda esa información será considerada un activo nuestro y, como tal, es posible que sea vendida o transferida a terceros.]</p>

                    <p>[Donde sea necesario compartimos tu información personal con terceros para cumplir con una obligación legal; cuando creemos de buena fe que una ley aplicable lo requiere; a solicitud de autoridades gubernamentales que realizan una investigación; para verificar o hacer cumplir nuestros Términos de Uso u otras políticas aplicables; para detectar y proteger contra fraude, o cualquier vulnerabilidad técnica o de seguridad; para responder a una emergencia; o de lo contrario para proteger los derechos, propiedad, seguridad o seguridad de terceros, visitantes a nuestro sitio web, nuestro negocio o el público.]</p>

                    <p>[No tenemos la intención de recopilar Datos Personales de nadie menor de 13 años. Si eres un padre o tutor y te das cuenta de que hemos recopilado Datos Personales de tu hijo, por favor notifícanos por correo electrónico.]</p>

                    <h2>7. ¿Qué sucede si no nos proporcionas la información que solicitamos o pides que dejemos de procesar tu información?</h2>

                    <p>Si no proporcionas Datos Personales donde los solicitamos o retiras tu consentimiento para el procesamiento de tu información personal, donde esta información es necesaria para que podamos proporcionarte servicios, no podremos proporcionarte estos servicios.</p>

                    <h2>8. ¿Tomamos decisiones automatizadas con respecto a ti?</h2>

                    <p>No, no realizamos toma de decisiones automatizada.</p>

                    <h2>9. ¿Usamos Cookies para recopilar Datos Personales sobre ti?</h2>

                    <p>Usamos cookies para recopilar tus Datos Personales cuando navegas por nuestro sitio web.</p>

                    <h2>10. ¿Transferimos tu información personal fuera del Reino Unido?</h2>

                    <p>No, no transferimos información personal fuera del Reino Unido.</p>

                    <h2>11. ¿Cuáles son tus derechos?</h2>

                    <p>Por ley, tienes una serie de derechos cuando se trata de tu información personal. Por favor contáctanos usando los detalles de contacto a continuación para ejercer cualquiera de tus derechos. Se puede obtener más información y asesoramiento sobre tus derechos de la ICO, el regulador de protección de datos del Reino Unido.</p>

                    <table>
                      <thead>
                        <tr>
                          <td>Derechos</td>
                          <td>¿Qué significa esto?</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>El derecho a oponerse al procesamiento</td>
                          <td>Tienes el derecho de oponerte a ciertos tipos de procesamiento, incluido el procesamiento para marketing directo (es decir, si ya no quieres ser contactado con oportunidades potenciales).</td>
                        </tr>
                        <tr>
                          <td>El derecho a ser informado</td>
                          <td>Tienes el derecho a ser provisto con información clara, transparente y fácilmente comprensible sobre cómo usamos tu información y tus derechos. Por eso te estamos proporcionando la información en este Aviso de Privacidad.</td>
                        </tr>
                        <tr>
                          <td>El derecho de acceso</td>
                          <td>Tienes el derecho de obtener acceso a tu información (si la estamos procesando), y cierta otra información (similar a la proporcionada en este Aviso de Privacidad). Esto es para que estés consciente y puedas verificar que estamos usando tu información de acuerdo con la ley de protección de datos.</td>
                        </tr>
                        <tr>
                          <td>El derecho a la rectificación</td>
                          <td>Tienes derecho a que tu información sea corregida si es inexacta o incompleta.</td>
                        </tr>
                        <tr>
                          <td>El derecho al borrado</td>
                          <td>Esto también se conoce como ‘el derecho a ser olvidado’ y, en términos simples, te permite solicitar la eliminación o eliminación de tu información donde no hay una razón convincente para que sigamos usándola. Este no es un derecho general al borrado; hay excepciones.</td>
                        </tr>
                        <tr>
                          <td>El derecho a restringir el procesamiento</td>
                          <td>Tienes derechos a ‘bloquear’ o suprimir el uso adicional de tu información. Cuando el procesamiento está restringido, aún podemos almacenar tu información, pero no podemos usarla más. Mantenemos listas de personas que han pedido que el uso adicional de su información sea ‘bloqueado’ para asegurarnos de que la restricción se respete en el futuro.</td>
                        </tr>
                        <tr>
                          <td>El derecho a la portabilidad de los datos</td>
                          <td>Tienes derechos a obtener y reutilizar tu información personal para tus propios fines en diferentes servicios. Por ejemplo, si decides cambiar a un nuevo proveedor, esto te permite mover, copiar o transferir tu información fácilmente entre nuestros sistemas de TI y los suyos de manera segura y segura, sin afectar su usabilidad.</td>
                        </tr>
                        <tr>
                          <td>El derecho a retirar el consentimiento</td>
                          <td>Si has dado tu consentimiento a cualquier cosa que hagamos con tu información personal, tienes el derecho de retirar tu consentimiento en cualquier momento (aunque si lo haces, no significa que cualquier cosa que hayamos hecho con tu información personal con tu consentimiento hasta ese momento sea ilegal). Esto incluye tu derecho a retirar el consentimiento para que usemos tu información personal para fines de marketing.</td>
                        </tr>
                        <tr>
                          <td>El derecho a presentar una queja</td>
                          <td>Tienes el derecho de presentar una queja sobre la forma en que manejamos o procesamos tu información personal con tu regulador nacional de protección de datos.</td>
                        </tr>
                      </tbody>

                    </table>

                    <h2>12. Nuestros Detalles de Contacto</h2>

                    <p> Si tienes alguna consulta puedes contactarnos en: info@pampagrillmalaga.com o escribiéndonos a:
                      <br /><br />
                      Dirección:<br />
                      Pampa Grill<br />
                      Calle Sánchez Pastor, 10,<br />
                      29015,<br />
                      Málaga,<br />
                      España</p>
                  </div>

                  :
                  <div className="w-11/12 md:w-full md:max-w-[380px] xl:max-w-[550px] 2xl:max-w-[620px] 3xl:max-w-[700px] md:mx-auto font-serif text-xl xl:text-[22px] leading-tight tracking-tight content mt-12 md:mt-16 xl:mt-24">

                    <h1 className="title uppercase">Privacy Notice - Pampa Grill Málaga</h1>

                    <h2>1. Who We Are?</h2>

                    <p>This is the privacy notice (“Privacy Notice”) of Pampa Grill (referred to in this Privacy Notice as “we”, “us” or “our”).We are committed to protecting your privacy,</p>

                    <p>This Privacy Notice applies when you use our website and services.</p>

                    <p>We collect information that identifies you personally as an individual, such as your name, photograph, contact details, and information that can be linked with this, or other information, in order to identify you (“Personal Data”).</p>

                    <h2>2. Quick Guide to Contents</h2>
                    <ul>
                      <li>What personal information do we collect about you?</li>
                      <li>How do we use your personal information?</li>
                      <li>How long do we keep your personal information for?</li>
                      <li>Who do we share your personal information with?</li>
                      <li>What happens if you do not provide us with the information we request?</li>
                      <li>Do we make automated decisions concerning you?</li>
                      <li>Do we transfer your personal information outside the EEA?</li>
                      <li>What are your rights?</li>
                      <li>How do we contact you?</li>
                      <li>How do you contact us?</li>
                    </ul>

                    <h2>3. What personal information do we collect about you?</h2>

                    <p>We collect and process your information in the following ways:</p>

                    <p>1. Information you give us</p>

                    <p>1.1. We process Personal Data that we need to contact you including your name, email address and telephone number. You might share this information with us by telephone, through our website or by e-mail. We use the personal information you have provided to us to reply with the information you have asked us for. It is your responsibility to inform us of any changes to your Personal Data.</p>

                    <p>1.2. We process information relating to transactions, such as purchases of goods and/or services, that you enter into with us or complete through our website including the transaction details, your name, your contact details, and your payment details.</p>

                    <p>1.3. We process your website user account data including your account identifier (such as your name, username, email address or business name), along with your marketing preferences when you register for an account with us. </p>

                    <p>1.4. We also process data about your use of our website and services. For more information, please see our Cookie Policy.</p>

                    <p>2. Information we collect automatically</p>
                    <p>2.1. We may aggregate anonymous data such as statistical or demographic data for any purpose. Anonymous data is data that does not identify you as an individual. Aggregated data may be derived from your Personal Data but is not considered personal information in law because it does not reveal your identity. For example, we may aggregate profile data to assess interest in a product or service. However, if we combine or connect aggregated data with your personal information so that it can identify you in any way, it will be treated as Personal Data and used as set out in this Privacy Notice.</p>

                    <p>3. Information we receive from third parties</p>

                    <p>3.1. Third parties may advertise on our website. In doing so, those parties, their agents or other companies working for them may use technology that automatically collects information about you when their advertisement is displayed on our website. They may also use other technology such as cookies or tracking technologies to personalise the content of, and to measure the performance of their adverts. We do not control these technologies or the data that these third parties collect. This Privacy Notice does not cover the practices of these third parties and we recommend that you read their privacy and cookie notices.</p>

                    <h2>4. How do we use your personal information?</h2>

                    <p>1. To provide you with a service you are requesting or perform our contract with you.</p>

                    <p>1.1. When you create an account on our website, buy a product or service from us, or otherwise agree to our terms and conditions, a contract is formed between you and us.</p>

                    <p>1.2. We process the Personal Data you give us in order to carry out our obligations to you under that contract.</p>

                    <p>1.3. We may use this Personal Data to:</p>

                    <ul>
                      <li>verify your identity for security purposes</li>

                      <li>sell products to you and/or provide you with our services</li>

                      <li>provide you with suggestions and advice on products, services and how to obtain the most from using our website and services.</li>
                    </ul>

                    <p>2. Where we have your consent</p>

                    <p>2.1. When you browse and use our website and use our services or ask us to provide you with more information about our business, including our products and services, you provide your consent for us to process your Personal Data.</p>

                    <p>2.2. Wherever possible, and where we need it, we seek your consent to process this information, for example, by asking you to agree to our use of cookies.</p>

                    <p>2.3. Where you have given us permission to do so, we may from time to time pass your name and contact information to selected parties whom we consider may provide services or products you might find useful.</p>

                    <p>2.4. You may withdraw your consent (including for marketing purposes) at any time by instructing us at info@pampagrillmalaga.com . However, if you do so, in some circumstances we may not be able to provide our services to you.</p>

                    <p>3. Where we have a legitimate interest</p>

                    <p>3.1. We also process Personal Data on the basis of legitimate interest.</p>

                    <p>3.2. Where we rely on legitimate interest for processing your information, we carry out a ‘balancing test’ to ensure that our processing is necessary and that your fundamental rights of privacy are not outweighed by our legitimate interests, before we go ahead with such processing. You can find out more about the information in these balancing tests by contacting us using the details below.</p>

                    <p>3.3. For example, we process your Personal Data on this basis for the purposes of:</p>
                    <ul>
                      <li>running our business</li>
                      <li>responding to communications from you</li>
                      <li>asserting and defending legal rights</li>
                    </ul>

                    <p>4. Where we have a legal obligation</p>

                    <p>4.1. Sometimes, we must process your Personal Data information in order to comply with a legal requirement. For example, we may be legally required to give information, including your personal information, to others if they so request or if they have the proper authorisation such as a search warrant or court order. </p>

                    <h2>5. How long do we keep your personal information for?</h2>

                    <p>We only retain your information for as long as is necessary for us to use your information as described above, where it is in our legitimate interest, or to comply with our legal obligations. We will retain some of your information after you cease to use our services, for instance if this is necessary to meet our legal obligations, or is needed for tax and accounting purposes.
                      When determining the relevant retention periods, we will take into account factors including:</p>

                    <ul>
                      <li>(a)	our contractual obligations and rights in relation to the information involved;</li>
                      <li>(b)	legal obligation(s) under applicable law to retain data for a certain period of time;</li>
                      <li>(c)         our legitimate interest where we have carried out a balancing test;</li>
                      <li>(d)	statute of limitations under applicable law(s);</li>
                      <li>(e)	(potential) disputes;</li>
                      <li>(f)	if you have made a request to have your information deleted; and</li>
                      <li>(g)	guidelines issued by relevant data protection authorities.</li>
                    </ul>

                    <p>Otherwise, we securely erase your information once this is no longer needed.</p>

                    <h2>6. Who do we share your personal information information with?</h2>

                    <p>[We share your personal information with trusted third parties where we have retained them to provide services that you or our clients have requested, such as Brands, Companies and Organisations. These third parties comply with similar and equally stringent undertakings of privacy and confidentiality.]</p>

                    <p>[We share your personal information with third parties who perform functions on our behalf and who also provide services to us, such as professional advisors, IT consultants carrying out testing and development work on our IT systems and research and mailing houses. These third parties are required to agree to privacy and confidentiality obligations.]</p>

                    <p>[We share your personal information with our other Group companies for internal reasons, primarily for business and operational purposes. As we continue to develop our business, we may sell or purchase assets. If another entity acquires us or merges with us your personal information will be disclosed to such entity. Also, if any bankruptcy or reorganisation proceeding is brought by or against us, all such information will be considered an asset of ours and as such it is possible they will be sold or transferred to third parties.]</p>

                    <p>[Where required we share your personal information with third parties to comply with a legal obligation; when we believe in good faith that an applicable law requires it; at the request of governmental authorities conducting an investigation; to verify or enforce our Terms of Use or other applicable policies; to detect and protect against fraud, or any technical or security vulnerabilities; to respond to an emergency; or otherwise to protect the rights, property, safety, or security of third parties, visitors to the our website, our business or the public.]</p>

                    <p>[We do not intend to collect Personal Data from anyone under the age of 13.  If you are a parent or guardian and you become aware that we have collected Personal Data from your child then please notify us by email.]</p>

                    <h2>7. What happens if you do not provide us with the information we request or ask that we stop processing your information?</h2>

                    <p>If you do not provide Personal Data where we ask for it or withdraw your consent for the processing of your personal information, where this information is necessary for us to provide services to you, we will not be able to provide these services to you.</p>

                    <h2>8. Do we make automated decisions concerning you?</h2>

                    <p>No, we do not carry out automated decision making.</p>

                    <h2>9. Do we use Cookies to collect Personal Data on you?</h2>

                    <p>We use cookies to collect your Personal Data when you browse our website.</p>

                    <h2>10. Do we transfer your personal information outside the UK?</h2>

                    <p>No, we do not transfer personal information out of the UK.</p>

                    <h2>11. What are your rights?</h2>

                    <p>By law, you have a number of rights when it comes to your personal information. Please contact us using the contact details below to exercise any of your rights. Further information and advice about your rights can be obtained from the ICO, the UK data protection regulator. </p>

                    <table>
                      <thead>
                        <tr>
                          <td>Rights</td>
                          <td>What does this mean?</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The right to object to processing</td>
                          <td>You have the right to object to certain types of processing, including processing for direct marketing (i.e. if you no longer want to be contacted with potential opportunities).</td>
                        </tr>
                        <tr>
                          <td>The right to be informed</td>
                          <td>You have the right to be provided with clear, transparent and easily understandable information about how we use your information and your rights. This is why we’re providing you with the information in this Privacy Notice.</td>
                        </tr>
                        <tr>
                          <td>The right of access</td>
                          <td>You have the right to obtain access to your information (if we’re processing it), and certain other information (similar to that provided in this Privacy Notice). This is so you’re aware and can check that we’re using your information in accordance with data protection law.</td>
                        </tr>
                        <tr>
                          <td>The right to rectification</td>
                          <td>You are entitled to have your information corrected if it’s inaccurate or incomplete.</td>
                        </tr>
                        <tr>
                          <td>The right to erasure</td>
                          <td>This is also known as ‘the right to be forgotten’ and, in simple terms, enables you to request the deletion or removal of your information where there’s no compelling reason for us to keep using it. This is not a general right to erasure; there are exceptions.</td>
                        </tr>
                        <tr>
                          <td>The right to restrict processing</td>
                          <td>You have rights to ‘block’ or suppress further use of your information. When processing is restricted, we can still store your information, but may not use it further. We keep lists of people who have asked for further use of their information to be ‘blocked’ to make sure the restriction is respected in future.</td>
                        </tr>
                        <tr>
                          <td>The right to data portability</td>
                          <td>You have rights to obtain and reuse your personal information for your own purposes across different services. For example, if you decide to switch to a new provider, this enables you to move, copy or transfer your information easily between our IT systems and theirs safely and securely, without affecting its usability.</td>
                        </tr>
                        <tr>
                          <td>The right to withdraw consent</td>
                          <td>If you have given your consent to anything we do with your personal information, you have the right to withdraw your consent at any time (although if you do so, it does not mean that anything we have done with your personal information with your consent up to that point is unlawful). This includes your right to withdraw consent to us using your personal information for marketing purposes.</td>
                        </tr>
                        <tr>
                          <td>The right to lodge a complaint</td>
                          <td>You have the right to lodge a complaint about the way we handle or process your personal information with your national data protection regulator.</td>
                        </tr>
                      </tbody>

                    </table>

                    <h2>12. Our Contact Details</h2>

                    <p> If you have any enquires you can contact us at: info@pampagrillmalaga.com or by writing to us at:
                      <br /><br />
                      Address:<br />
                      Pampa Grill<br />
                      Calle Sánchez Pastor, 10,<br />
                      29015,<br />
                      Málaga,<br />
                      España</p>
                  </div>}

              </div>
            </article>
          </m.main>

          <m.footer variants={fade} className="p-4 md:p-6 bg-off-white relative w-full flex items-end">
            <div className="flex flex-row w-full">
              <span className="block w-full md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-0">© Pampa Grill 2024</span>

              <span className="block xl:hidden w-1/2  text-right  ml-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0">
                <Link legacyBehavior href="/"><a className="group relative">{langContext === 'es' ? 'Volver' : 'Back to home'}<span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
              </span>
            </div>
          </m.footer>
        </m.div>
      </LazyMotion>

    </Layout>
  )
}