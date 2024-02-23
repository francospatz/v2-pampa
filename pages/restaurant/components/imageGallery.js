'use client'
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    Suspense
} from 'react'
import Image from 'next/image'

const imagesData = [
    {
        name: 'Restaurant',

        imgURLs: [
            '/images/gallery/restaurant/1.webp',
            '/images/gallery/restaurant/2.webp',
            '/images/gallery/restaurant/3.webp',
            '/images/gallery/restaurant/4.webp',
        ],
    },
    {
        name: 'Food',

        imgURLs: [
            '/images/gallery/food/1.webp',
            '/images/gallery/food/2.webp',
            '/images/gallery/food/3.webp',
            '/images/gallery/food/4.webp',
            '/images/gallery/food/5.webp',
            '/images/gallery/food/6.webp',
            '/images/gallery/food/7.webp',
            '/images/gallery/food/8.webp',
            '/images/gallery/food/9.webp',

        ],
    },
    {
        name: 'Team',

        imgURLs: [
            '/images/gallery/team/1.webp',
            '/images/gallery/team/2.webp',
            '/images/gallery/team/3.webp',
            '/images/gallery/team/4.webp',
            '/images/gallery/team/5.webp',
            '/images/gallery/team/6.webp',
            '/images/gallery/team/7.webp',
            '/images/gallery/team/8.webp',
        ],
    },
]

const lerp = (a, b, t) => (1 - t) * a + t * b


const CARD_FOCUS = 'cardFocus'
const CARD_UNFOCUS = 'cardUnfocus'

const eventBus = {
    on(event, callback) {
        document.addEventListener(event, callback)
    },
    dispatch(event, data) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }))
    },
    off(event, callback) {
        document.removeEventListener(event, callback)
    },
}

const useAnimationFrame = (callback, immediate = false) => {
    const frameRef = useRef()
    const cancelRef = useRef(false)

    const cancel = useCallback(() => cancelAnimationFrame(frameRef.current), [])

    const start = useCallback(() => {
        cancelRef.current = false
        frameRef.current = requestAnimationFrame(animate)
    }, [])

    const stop = useCallback(() => {
        cancelRef.current = true
    }, [])

    const animate = useCallback(time => {
        if (cancelRef.current) {
            cancel()
        } else {
            start()

            try {
                callback(time, stop)
            } catch (e) {
                console.error('Animation frame error:', e)

                cancel()
            }
        }
    }, [])

    useEffect(() => {
        immediate && start(0, stop)

        return stop
    }, [])

    return {
        frameRef,
        start,
        stop,
    }
}

const useInterval = (callback, time, delay) => {
    const intervalRef = useRef()

    const stop = useCallback(() => clearInterval(intervalRef.current), [])
    const start = useCallback((delay) => {
        const _start = () => {
            intervalRef.current = setInterval(callback, time)
        }

        stop()

        if (+delay > 0) {
            setTimeout(_start, delay)
        } else {
            _start()
        }
    }, [])

    useEffect(() => {
        start(delay)

        return stop
    }, [])

    return {
        intervalRef,
        start,
        stop,
    }
}


const classNames = (map) => {
    return Object.entries(map)
        .reduce(
            (classList, [className, enabled]) =>
                classList.concat(enabled ? ` ${className}` : ''),
            ''
        )
        .trim()
}


const Card = ({
    className,
    heading,
    index,
    imgURLs,
}) => {
    const root = useRef()
    const imgContainer = useRef()
    const imgChangeInterval = useRef()
    const hover = useRef(false)
    const mouseDelta = useRef([0, 0])
    const targetOffset = useRef([0, 0])
    const cancelAnimationTimeout = useRef()
    const imgLoadCount = useRef(0)

    const [imgIndex, setImgIndex] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const cardClassNames = classNames({
        card: true,
        [className]: !!className,
        'card--active': isActive,
        'card--collapse': isCollapsed,
    })

    const animate = useCallback((time, stop) => {
        let mouseDeltaX = 0
        let mouseDeltaY = 0

        if (hover.current) {
            [mouseDeltaX, mouseDeltaY] = mouseDelta.current
        }

        targetOffset.current = [
            lerp(targetOffset.current[0], mouseDeltaX, 0.025),
            lerp(targetOffset.current[1], mouseDeltaY, 0.025),
        ]

        imgContainer.current.style.transform =
            `translateX(${targetOffset.current[0]}%) translateY(${targetOffset.current[1]}%)`
    }, [])

    const {
        frameRef,
        start: startAnimation,
        stop: stopAnimation,
    } = useAnimationFrame(animate)

    const onClickCard = useCallback(() => {
        eventBus.dispatch(CARD_FOCUS, index)

        setIsActive(true)
    }, [])

    const onClickClose = useCallback((e) => {
        e.stopPropagation()

        setIsActive(false)

        eventBus.dispatch(CARD_UNFOCUS, index)
    }, [])

    const onMouseEnter = useCallback(() => {
        cancelAnimationTimeout.current && clearTimeout(cancelAnimationTimeout.current)

        hover.current = true

        startAnimation()
    }, [])

    const onMouseMove = useCallback(({ clientX, clientY }) => {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = root.current
        const centerX = 0.5 * offsetWidth
        const centerY = 0.5 * offsetHeight

        mouseDelta.current = [
            -15 * (clientX - centerX - offsetLeft) / offsetWidth,
            -15 * (clientY - centerY - offsetTop) / offsetHeight,
        ]
    }, [])

    const onMouseLeave = useCallback(() => {
        hover.current = false

        cancelAnimationTimeout.current = setTimeout(() => {
            cancelAnimationTimeout.current = null

            stopAnimation()
        }, 2500)
    }, [])

    const cycleImgIndex = useCallback((direction = 'forward', reset = false) => {
        reset && startInterval()

        setImgIndex(currentIndex => {
            const newIndex = direction === 'forward'
                ? currentIndex + 1
                : currentIndex - 1

            return newIndex > imgURLs.length - 1
                ? 0
                : newIndex < 0
                    ? imgURLs.length - 1
                    : newIndex
        })
    }, [])



    const {
        start: startInterval,
        stop: stopInterval,
    } = useInterval(cycleImgIndex, 5000, index * 200)

    useEffect(() => {
        const onCardFocus = ({ detail }) => {
            const isInactive = detail !== index

            setIsCollapsed(isInactive)
            setIsActive(_isActive => {
                return isInactive && _isActive
                    ? false
                    : _isActive
            })

            isInactive && stopInterval()
        }
        const onCardUnfocus = ({ detail }) => {
            setIsCollapsed(false)
            startInterval(index * 200)
        }

        eventBus.on(CARD_FOCUS, onCardFocus)
        eventBus.on(CARD_UNFOCUS, onCardUnfocus)

        return () => {
            eventBus.off(CARD_FOCUS, onCardFocus)
            eventBus.on(CARD_UNFOCUS, onCardUnfocus)
        }
    }, [])

    useEffect(() => {
        const { offsetWidth, offsetHeight } = root.current
        const { offsetLeft, offsetTop } = root.current

        targetOffset.current = [0, 0]
    }, [])

    return (
        <div
            className={cardClassNames}
            ref={root}
            onClick={onClickCard}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <div
                className={classNames({
                    'card__imageContainer': true
                })}
                ref={imgContainer}
            >
                {imgURLs.map((imgURL, i) => (

                    <Image
                        className={`card__image${i === imgIndex ? ' card__image--visible' : ''}`}
                        src={imgURL}
                        alt=''
                        width={2000}
                        height={2000}

                        onLoad={() => {
                            imgLoadCount.current++

                            if (imgLoadCount.current === imgURLs.length) setIsLoading(false)
                        }}
                        key={i}
                    />

                ))}
            </div>
            <header className="card__header">
                <div className="card__headingContainer">
                    <h2 className="card__heading">{heading}</h2>

                </div>
                <button
                    className="card__btnClose"
                    onClick={onClickClose}
                >
                    <span className="material-icons card__iconClose pt-2"><svg viewBox="0 0 21 21" fill="currentColor" height="2em" width="2em"><path d="m15.5 15.5-10-10zm0-10-10 10" fill="none" stroke="currentColor" /></svg></span>
                </button>
            </header>
            <footer className="card__footer">
                <div className="card__controls">
                    <button
                        className="card__control ml-2"
                        onClick={() => cycleImgIndex('backward', true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.56 121.56" className='fill-off-white size-10'><path d="M60.56 0C43.83 21.53 24.8 42.7 6.31 62.82v-4.08c18.77 20.34 37.23 40.98 54.25 62.82-15.44-13.9-30.01-28.71-44.42-43.65C10.71 72.26 5.34 66.51 0 60.77c.45-.49 15.13-16.02 16.15-17.11C30.56 28.71 45.13 13.91 60.56 0" /></svg>
                    </button>

                    <button
                        className="card__control mr-2"
                        onClick={() => cycleImgIndex('forward', true)}
                    >
                        <svg className='fill-off-white size-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.56 121.56"><path d="M0 0c15.43 13.91 30 28.71 44.41 43.66 1.06 1.11 15.64 16.59 16.15 17.11-5.34 5.74-10.71 11.49-16.14 17.14C30.01 92.86 15.44 107.66 0 121.56c17.02-21.84 35.49-42.48 54.25-62.82v4.08C35.75 42.69 16.75 21.55 0 0" /></svg>
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default function ImageGallery() {
    return (
        <div className="gallery flex md:flex-row flex-col pb-[10rem] pt-0 h-full">
            {imagesData.map((city, i) => (

                <Card
                    className="m-4 z-40 overflow-hidden"
                    heading={city.name}

                    imgURLs={city.imgURLs}
                    index={i}
                    key={i}
                />

            ))}
        </div>
    )
}