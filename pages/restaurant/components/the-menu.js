'use client'
import { useContext } from 'react'
import Layout from '@/components/layout'
import { fade, revealNoDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { LangContext } from '@/context/lang'

export default function TheMenu() {

    const [langContext, setLangContext] = useContext(LangContext);

    return (
        <Layout>
            <NextSeo title={"The Menu"} />


            <LazyMotion features={domAnimation}>
                <m.div
                    initial="initial"
                    animate="enter"
                    exit="exit"

                ><>
                        <m.main variants={fade} className="p-4 md:p-6 relative pb-16 md:pb-24 xl:pb-32 bg-off-white text-light-brown selection:bg-off-white selection:text-light-brown">


                            <article className="flex flex-wrap">
                                <m.span variants={fade} className=" z-50 font-sans overflow-hidden uppercase text-sm md:text-base xl:text-lg  font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 fixed top-0 right-0 m-6 overflow-hidden pb-[4px]">
                                    <Link legacyBehavior href="/restaurant"><a className="group ">
                                        <m.span variants={fade} className="block"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50"><path d="M9.156 6.313 6.312 9.156 22.157 25 6.22 40.969l2.81 2.811L25 27.844 40.938 43.78l2.843-2.843L27.844 25 43.687 9.156l-2.843-2.844L25 22.157Z" /></svg> <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a>
                                    </Link>
                                </m.span>

                                <div className="w-full relative z-10">
                                    {/* <div>
                        <a className="block w-[80%]">
                          <svg className="w-full" viewBox="0 0 1530.47 307.99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 126.24c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 25.37-20.38 42.01-68.01 41.8v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24Zm44.3-50.12c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08v63.43zm202.36 28.07c5.41 14.97 8.94 21.01 22.67 22.05v6.24c-21.01-.42-43.88-.42-64.89 0v-6.24c12.48-.62 18.72-4.16 14.77-15.39l-6.24-17.26H169.3l-5.82 17.26c-3.74 11.23 4.99 14.77 19.34 15.39v6.24q-26.205-.63-51.78 0v-6.24c14.56-1.04 20.17-6.03 24.12-17.47L192.6 2.29h17.05l37.02 101.91Zm-74.87-17.9h38.68L190.5 31.18l-18.72 55.11Zm130.81 39.94c11.65-1.04 21.42-3.74 21.42-13.52v-86.3c0-11.23-7.7-16.01-18.09-16.85V3.33c13.93.62 31.4.62 46.38 0l34.52 84.65 31-84.65c15.18.62 29.12.62 43.88 0v6.24c-10.4.83-14.35 5.62-14.35 16.85v86.31c0 9.36 3.95 12.69 14.35 13.52v6.24c-18.72-.62-39.31-.62-59.06 0v-6.24c11.44-.83 15.39-4.16 15.39-13.52v-85.9l-38.68 105.65h-2.29L332.36 26.83v85.89c0 9.78 9.98 12.48 23.09 13.52v6.24c-17.89-.62-36.4-.62-52.83 0v-6.24h-.01Zm194.46 0c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 25.37-20.38 42.01-68.01 41.8v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24h.01Zm44.3-50.12c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08v63.43zm202.35 28.07c5.41 14.97 8.94 21.01 22.67 22.05v6.24c-21.01-.42-43.88-.42-64.89 0v-6.24c12.48-.62 18.72-4.16 14.77-15.39l-6.24-17.26h-43.67l-5.82 17.26c-3.74 11.23 4.99 14.77 19.34 15.39v6.24c-17.47-.42-34.73-.42-51.79 0v-6.24c14.56-1.04 20.17-6.03 24.12-17.47L689.65 2.29h17.05l37.02 101.91Zm-74.87-17.9h38.68l-19.97-55.11-18.72 55.11Zm205.69-19.12c0-39.1 24.54-67.18 60.31-67.18 15.6 0 22.46 4.99 34.52 4.99 2.5 0 6.03-.21 9.36-1.66.83 12.27 2.7 24.13 7.28 37.44h-7.9C969.78 20.99 955.85 8.1 938.79 8.1c-19.13 0-33.48 17.68-33.48 53.66s13.73 65.1 38.06 65.1c13.52 0 18.93-8.73 18.93-26.62s-4.78-23.08-18.09-24.54v-5.82c19.13.42 37.23.42 56.15 0v5.82c-9.36 1.87-12.27 6.24-12.27 24.54 0 16.85 2.5 22.67 7.69 25.16v4.58c-4.37-.62-8.53-1.04-13.31-1.04-19.34 0-27.87 6.66-45.96 6.66-36.19 0-61.98-28.49-61.98-68.42zm252.06 30.57c11.65 17.68 22.46 29.12 32.86 30.16l-6.03 7.07c-15.18 0-34.52-2.29-51.58-28.7l-15.18-23.5c-2.5.21-4.99.21-7.69.21v31.61c0 8.32 3.54 10.81 14.97 11.65v6.24a945 945 0 0 0-59.27 0v-6.24c11.44-.83 14.97-3.33 14.97-11.65V21.21c0-8.32-4.16-10.81-13.73-11.65V3.33c20.17.83 39.51 0 50.12 0 45.55 0 60.94 15.81 60.94 37.85 0 17.89-10.19 31.4-32.65 37.85l12.27 18.72Zm-47.63-21.63c26.41 0 40.14-12.27 40.14-35.15 0-16.22-7.49-30.36-28.28-30.36-4.37 0-8.94.62-11.85 2.08V76.1zm115.84 50.12c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 3.95 10.81 15.39 11.65v6.24c-19.76-.62-40.35-.62-60.1 0v-6.24Zm97.54-.01c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 2.7 10.61 10.4 10.61h5.41c16.43 0 21.21-4.78 35.77-29.95h5.61c-4.37 13.1-6.45 25.58-6.66 37.23-33.48-.83-62.81-.83-95.25 0v-6.24h.01Zm136.22 0c11.44-.83 15.39-3.33 15.39-11.65V21.21c0-8.32-3.95-10.81-15.39-11.65V3.33c19.76.62 40.35.62 60.1 0v6.24c-11.44.83-15.39 3.33-15.39 11.65v93.38c0 8.32 2.7 10.61 10.4 10.61h5.41c16.43 0 21.21-4.78 35.77-29.95h5.61c-4.37 13.1-6.45 25.58-6.66 37.23-33.48-.83-62.81-.83-95.25 0v-6.24h.01Zm-855.38 181-.09-47.7-23.66 39.75h-4.3l-23.66-39.47v47.42h-8.98v-65.47h7.67l27.31 46.02 26.94-46.02h7.67l.09 65.47zm91.65-16.37h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25zm51.34-41.62h9.35v57.33h35.45v8.14h-44.8zm118.88 49.1h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25zm95.76-9.26h8.98v25.53c-6.55 5.52-15.62 8.32-24.78 8.32-20.11 0-34.89-14.12-34.89-33.48s14.78-33.48 35.07-33.48c10.38 0 19.17 3.46 25.16 10.1l-5.8 5.8c-5.42-5.24-11.6-7.58-18.99-7.58-15.15 0-26.09 10.57-26.09 25.16s10.94 25.16 26 25.16c5.52 0 10.66-1.22 15.34-4.21zm89.88 16.74h-34.79l-7.2 16.37h-9.63l29.65-65.47h9.26l29.74 65.47h-9.82l-7.2-16.37zm-3.27-7.48-14.12-32.08-14.12 32.08h28.25z" fill="currentColor" /></svg>
                        </a>
                      </div> */}


                                </div>

                                <div className="w-full flex flex-wrap items-start">
                                    <LazyMotion features={domAnimation}>
                                        <m.div variants={fade} className="w-10/12 md:w-full md:max-w-[380px] xl:max-w-[400px] 2xl:max-w-[440px] 3xl:max-w-[500px] md:mx-auto font-serif text-xl xl:text-[22px] leading-tight tracking-tight content md:mt-16 xl:mt-24">


                                            <h1 className="title uppercase font-bold">
                                                {langContext === 'es' ? "El Menú" : "The Menu"}
                                            </h1>
                                            <p>
                                                <b>Pan horneado y mantequilla ahumada&nbsp;&nbsp;&nbsp;2.00</b>
                                                <br />
                                                <i>Baked bread and smoked butter</i>
                                                <br />
                                            </p>
                                            <h3>Entrantes</h3>
                                            <p>
                                                <b>Chorizo criollo&nbsp;&nbsp;&nbsp;4.90</b>
                                                <br />
                                                <i>Grilled Argentine Sausage</i>
                                                <br />
                                                <br />
                                                <b>Morcilla criolla&nbsp;&nbsp;&nbsp;4.90</b>
                                                <br />
                                                <i>Grilled Black Pudding</i>
                                                <br />
                                                <br />
                                                <b>Mollejas de ternera&nbsp;&nbsp;&nbsp;13.50</b>
                                                <br />
                                                <i>Grilled veal sweatbreads</i>
                                                <br />
                                                <br />
                                                <b>Provoleta a la parrilla&nbsp;&nbsp;&nbsp;12.50</b>
                                                <br />
                                                <i>Grilled Provolone Cheese</i>
                                                <br />
                                                <br />
                                                <b>Steak tartar de solomillo, aliño ahumado, encurtidos y galleta parrillera&nbsp;&nbsp;&nbsp;19.00</b>
                                                <br />
                                                <i>Beef tenderloin steak tartare, smoked dressing, pickles, and grilled cracker </i>
                                                <br />
                                                <br />
                                                <b>Vitel toné, roast beef bañado con salsa tonnata y alcaparras&nbsp;&nbsp;&nbsp;16.00</b>
                                                <br />
                                                <i>Vitel toné, roast beef in tuna sauce and capers</i>
                                                <br />
                                                <br />
                                                <b>Cecina de wagyu ahumada y galleta parrillera (50gr.)&nbsp;&nbsp;&nbsp;26.00</b>
                                                <br />
                                                <i>Smoked Wagyu beef cecina with grilled cracker (50gr.) </i>
                                                <br />
                                                <br />
                                            </p>
                                            <h3>Empanadas Argentinas</h3>
                                            <p>
                                                <b>Empanada criolla de ojo de bife
                                                    cortada a cuchillo y salsa llajua&nbsp;&nbsp;&nbsp;6.00</b>
                                                <br />
                                                <i>Traditional Criolla empanada filled with
                                                    hand-cut ojo de bife beef and llajua sauce</i>
                                                <br />
                                                <br />
                                                <b>Empanada de pollo asado y puerro&nbsp;&nbsp;&nbsp;4.90</b>
                                                <br />
                                                <i>Roasted chicken and leek empanada</i>
                                                <br />
                                                <br />
                                                <b>Empanada rellena de espinaca,
                                                    mozzarella y bechamel&nbsp;&nbsp;&nbsp;3.50</b>
                                                <br />
                                                <i>Empanada filled with spinach, mozzarella,
                                                    and béchamel</i>
                                                <br />
                                                <br />
                                            </p>
                                            <h3>Carnes a la brasa</h3>
                                            <p>
                                                <b>Ojo de bife Angus 300gr&nbsp;&nbsp;&nbsp;30.00</b>
                                                <br />
                                                <i>Ribeye Angus Steak 300gr </i>
                                                <br />
                                                <br />
                                                <b>Bife de chorizo Angus 300gr&nbsp;&nbsp;&nbsp;29.00</b>
                                                <br />
                                                <i>Sirloin Strip Angus Steak 300gr</i>
                                                <br />
                                                <br />
                                                <b>Asado de tira Angus corte argentino&nbsp;&nbsp;&nbsp;29.00</b>
                                                <br />
                                                <i>Grilled Beef Ribs Angus</i>
                                                <br />
                                                <br />
                                                <b>Media luna de Vacio Angus&nbsp;&nbsp;&nbsp;27.00</b>
                                                <br />
                                                <i>Grilled Flank Angus Steak</i>
                                                <br />
                                                <br />
                                                <b>Entraña Premium&nbsp;&nbsp;&nbsp;27.00</b>
                                                <br />
                                                <i>Premium grilled Skirt Steak </i>
                                                <br />
                                                <br />
                                                <b>Solomillo argentino Angus 250gr&nbsp;&nbsp;&nbsp;32.00</b>
                                                <br />
                                                <i>Beef Tenderloin, Angus Fillet Mignon 250gr</i>
                                                <br />
                                                <br />
                                                <b>Solomillo Pampa Grill Angus 300gr&nbsp;&nbsp;&nbsp;37.00</b>
                                                <br />
                                                <i>Beef Tenderloin, Angus Fillet Mignon 300gr</i>
                                                <br />
                                                <br />
                                                <b>Brocheta de solomillo Angus, ensalada y salsa
                                                    provenzal&nbsp;&nbsp;&nbsp;35.00</b>
                                                <br />
                                                <i>Angus Tenderloin skewer with salad
                                                    and Provencal sauce</i>
                                                <br />
                                                <br />
                                                <b>Cuarto de pollo deshuesado a la brasa
                                                    con limón quemado&nbsp;&nbsp;&nbsp;20.00</b>
                                                <br />
                                                <i>Grilled Quarter of boneless chicken</i>
                                                <br />
                                                <br />
                                                <b>Tomahawk de cerdo ibérico con crema de
                                                    manzana asada y salsa criolla&nbsp;&nbsp;&nbsp;25.00</b>
                                                <br />
                                                <i>Iberian pork tomahawk with roasted
                                                    apple cream and criolla sauce
                                                </i>
                                                <br />
                                                <br />
                                            </p>
                                            <h3>Cortes especiales</h3>
                                            <p>
                                                <b>Tomahawk de Angus&nbsp;&nbsp;&nbsp;110.00/kg</b>
                                                <br />
                                                <i>Quality Aged Tomahawk Ribeye Steak </i>
                                                <br />

                                                <br />
                                                <b>Chuletón Angus Aged Reserva (sin hueso)&nbsp;&nbsp;&nbsp;120.00/kg</b>
                                                <br />
                                                <i>Aged Angus Prime Rib of Beef (Bone-less) </i>
                                                <br />
                                                <br />
                                            </p>
                                            <h3>Guarniciones</h3>
                                            <p>
                                                <b>Patatas Pampa&nbsp;&nbsp;&nbsp;7.00</b>
                                                <br />
                                                <i>Pampa French Fries</i>
                                                <br />
                                                <br />
                                                <b>Patatas fritas provenzal&nbsp;&nbsp;&nbsp;8.00</b>
                                                <br />
                                                <i>Provencal french Fries</i>
                                                <br />
                                                <br />
                                                <b>Patata plomo con trio de queso
                                                    y crema agria&nbsp;&nbsp;&nbsp;7.50</b>
                                                <br />
                                                <i>Baked potato with a trio of cheese
                                                    and sour cream</i>
                                                <br />
                                                <br />
                                                <b>Espárragos frescos a la brasa
                                                    con emulsión cítrica y parmesano&nbsp;&nbsp;&nbsp;11.00</b>
                                                <br />
                                                <i>Grilled fresh asparagus with citrus
                                                    emulsion and Parmesan</i>
                                                <br />
                                                <br />
                                                <b>Vegetales al rescoldo y a la brasa
                                                    con hojas verdes y gremolata&nbsp;&nbsp;&nbsp;12.00</b>
                                                <br />
                                                <i>Wood-fired and grilled vegetables
                                                    with green leaves and gremolata</i>
                                                <br />
                                                <br />
                                                <b>Pimientos asados con salsa de sus jugos&nbsp;&nbsp;&nbsp;9.00</b>
                                                <br />
                                                <i>Roasted peppers with their own juice sauce </i>
                                                <br />
                                                <br />
                                                <b>Boniato al rescoldo con crema de yogurt
                                                    y melao de papelón&nbsp;&nbsp;&nbsp;9.00</b>
                                                <br />
                                                <i>Sweet potato on the ember with yogurt
                                                    cream and paperón molasses </i>
                                                <br />
                                                <br />
                                            </p>
                                            <h3>Ensaladas</h3>
                                            <p>
                                                <b>Ensalada mixta. Lechuga, tomate
                                                    y cebolla de temporada con vinagreta cítrica&nbsp;&nbsp;&nbsp;8.00</b>
                                                <br />
                                                <i>Mixed salad. Lettuce, tomato, and
                                                    seasonal onion with citrus vinaigrette
                                                </i>
                                                <br />
                                                <br />
                                                <b>Ensalada de espinaca, queso de cabra,
                                                    nueces caramelizadas y vinagreta balsámica
                                                    &nbsp;&nbsp;&nbsp;10.00</b>
                                                <br />
                                                <i>Spinach salad with goat cheese,
                                                    caramelized nuts, and balsamic vinaigrette</i>
                                                <br />
                                                <br />
                                                <b>Ensalada de rúcula, parmesano
                                                    y cherrys asados&nbsp;&nbsp;&nbsp;9.00</b>
                                                <br />
                                                <i>Arugula salad with Parmesan and
                                                    roasted cherry tomatoes</i>
                                                <br />
                                                <br />
                                            </p>
                                            <h3>De la cocina</h3>
                                            <p>
                                                <b>Milanesa con ensalada mixta y patatas fritas&nbsp;&nbsp;&nbsp;20.00</b>
                                                <br />
                                                <i>Breaded beef fillet with mixed salad
                                                    and french fries
                                                </i>
                                                <br />
                                                <br />
                                                <b>Milanesa a la napolitana con ensalada
                                                    y patatas fritas&nbsp;&nbsp;&nbsp;24.00</b>
                                                <br />
                                                <i>Neapolitan-style breaded beef fillet
                                                    with salad and french fries
                                                </i>
                                                <br />
                                                <br />
                                                <b>Suprema de pollo con ensalada mixta
                                                    y patatas fritas&nbsp;&nbsp;&nbsp;20.00</b>
                                                <br />
                                                <i>Chicken supreme with mixed salad
                                                    and french fries
                                                </i>
                                                <br />
                                                <br />
                                                <b>Suprema de pollo a la napolitana con
                                                    ensalada mixta y patatas fritas&nbsp;&nbsp;&nbsp;24.00</b>
                                                <br />
                                                <i>Neapolitan-style chicken supreme
                                                    with mixed salad and french fries

                                                </i>
                                                <br />
                                                <br />
                                                <b>Canelones de espinaca y ricota con salsa de
                                                    tomate casero&nbsp;&nbsp;&nbsp;18.00</b>
                                                <br />
                                                <i>Spinach and ricotta cannelloni
                                                    with homemade tomato sauce
                                                </i>
                                                <br />
                                                <br />
                                                <b>Rigatoni con salsa boloñesa de solomillo
                                                    y parmesano rallado&nbsp;&nbsp;&nbsp;24.00</b>
                                                <br />
                                                <i>Rigatoni with bolognese tenderloin sauce
                                                    and grated parmesan
                                                </i>
                                                <br />
                                                <br />
                                                <b>Rigatoni con salsa de tomate casera,
                                                    cherrys asados y parmesano rallado&nbsp;&nbsp;&nbsp;18.00</b>
                                                <br />
                                                <i>Rigatoni with homemade tomato sauce,
                                                    roasted cherry tomatoes, and grated Parmesan
                                                </i>
                                                <br />
                                                <br />
                                                <b>Lomo de salmón a la parrilla con pure
                                                    de chirivía, cherrys y ensalada fresca &nbsp;&nbsp;&nbsp;30.00</b>
                                                <br />
                                                <i>Grilled salmon fillet with parsnip puree,
                                                    cherry tomatoes, and fresh salad
                                                </i>
                                                <br />
                                                <br />
                                                <b>Pulpo a la plancha, yuca frita, pico de gallo
                                                    y aliño de pimientos asados&nbsp;&nbsp;&nbsp;32.00</b>
                                                <br />
                                                <i>Grilled octopus, fried yuca, pico de gallo,
                                                    and roasted pepper dressing
                                                </i>
                                                <br />
                                                <br />
                                            </p>
                                            <h3>Postres</h3>
                                            <p>
                                                <b>Brownie con helado de vainilla&nbsp;&nbsp;&nbsp;7.50</b>
                                                <br />
                                                <i>Brownie with vanilla ice cream </i>
                                                <br />
                                                <br />
                                                <b>Chocotorta con crema de dulce de leche
                                                    y helado de nata&nbsp;&nbsp;&nbsp;8.50</b>
                                                <br />
                                                <i>Chocotorta with dulce de leche
                                                    and cream ice cream</i>
                                                <br />
                                                <br />
                                                <b>Flan casero con dulce de leche
                                                    y nata montada&nbsp;&nbsp;&nbsp;7.50</b>
                                                <br />
                                                <i>Homemade flan with dulce de leche
                                                    and whipped cream</i>
                                                <br />
                                                <br />
                                                <b>Nuestra tarta de queso y dulce de leche
                                                    &nbsp;&nbsp;&nbsp;9.00</b>
                                                <br />
                                                <i>Our cheesecake of dulce de leche</i>
                                                <br />
                                                <br />
                                                <b>Tiramisú de la abuela&nbsp;&nbsp;&nbsp;8.00</b>
                                                <br />
                                                <i>Grandma's Tiramisu</i>
                                                <br />
                                                <br />
                                                <b>Panqueque tradicional de dulce de leche
                                                    con helado &nbsp;&nbsp;&nbsp;8.00</b>
                                                <br />
                                                <i>Traditional dulce de leche pancake
                                                    with ice cream </i>
                                                <br />
                                                <br />
                                                <b>Helado, dos sabores&nbsp;&nbsp;&nbsp;6.50</b>
                                                <br />
                                                <i>Ice cream, two flavors </i>
                                                <br />
                                                <br />
                                            </p>


                                        </m.div>
                                    </LazyMotion>
                                </div>
                            </article>
                        </m.main>

                        <m.footer variants={fade} className="align-bottom p-4 md:p-6 relative bg-off-white text-light-brown">
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
                    </></m.div>
            </LazyMotion>

        </Layout>
    )
}