'use client'
import { useRef, useEffect } from "react";
import Image from "next/image";

const ThumbnailRow = ({ images, selectedImage, onThumbnailClick }) => {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const dragThreshold = 5; // Threshold to differentiate between click and drag
    const startPos = useRef(0);
    const lastPageX = useRef(0);
    const lastMoveTime = useRef(Date.now());
    const velocity = useRef(0);
    const movedDistance = useRef(0); // Track the moved distance to determine if it was a drag
    const animationFrameId = useRef(null);

    useEffect(() => {
        const scrollEl = scrollRef.current;
        if (scrollEl) {
            scrollEl.classList.add('scroll-smooth');
            const thumbnailEl = scrollEl.children[selectedImage];
            const offsetCenter = thumbnailEl.offsetLeft + thumbnailEl.offsetWidth / 2;
            const scrollCenter = scrollEl.offsetWidth / 2;
            scrollEl.scrollLeft = offsetCenter - scrollCenter;

            setTimeout(() => {
                scrollEl.classList.remove('scroll-smooth');
            }, 300);
        }
    }, [selectedImage]);

    const startDrag = (pageX) => {
        isDragging.current = true;
        startPos.current = pageX;
        lastPageX.current = pageX;
        velocity.current = 0;
        movedDistance.current = 0; // Reset moved distance on drag start
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
        scrollRef.current.style.cursor = 'grabbing';
    };

    const onDrag = (pageX) => {
        if (!isDragging.current) return;
        const dx = pageX - lastPageX.current;
        const dt = Date.now() - lastMoveTime.current;
        velocity.current = dx / dt;
        movedDistance.current += Math.abs(dx); // Accumulate moved distance
        scrollRef.current.scrollLeft -= dx;
        lastPageX.current = pageX;
        lastMoveTime.current = Date.now();
    };

    const decelerate = () => {
        if (Math.abs(velocity.current) < 0.001 || !scrollRef.current) {
            cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = null;
            return;
        }
        scrollRef.current.scrollLeft -= velocity.current * 20; // Adjust for deceleration effect
        velocity.current *= 0.95; // Deceleration factor
        animationFrameId.current = requestAnimationFrame(decelerate);
    };

    const endDrag = () => {
        isDragging.current = false;
        scrollRef.current.style.cursor = 'grab';
        if (Math.abs(velocity.current) > 0.001) {
            animationFrameId.current = requestAnimationFrame(decelerate);
        }
    };

    const handleClick = (index) => {
        // Only trigger if moved distance is less than threshold
        if (movedDistance.current < dragThreshold) {
            onThumbnailClick(index);
        }
    };

    // Mouse event handlers
    const onMouseDown = (e) => startDrag(e.pageX);
    const onMouseMove = (e) => onDrag(e.pageX);
    const onMouseUp = () => endDrag();
    const onMouseLeave = () => endDrag();

    // Touch event handlers
    const onTouchStart = (e) => startDrag(e.touches[0].pageX);
    const onTouchMove = (e) => {
        e.preventDefault(); // Prevent default page scrolling
        onDrag(e.touches[0].pageX);
    };
    const onTouchEnd = () => endDrag();

    return (
        <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide w-full fixed bottom-0"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ cursor: 'grab' }}
        >
            {images.map((image, index) => (
                <button key={index} onClick={() => handleClick(index)} className="flex-none">
                    <div className="w-[100px] h-[100px] relative">
                        <Image
                            src={image.src}
                            layout="fill"
                            objectFit="cover"
                            sizes="100px"
                            draggable="false"
                            className={`p-1`}
                            alt="Image"
                        />
                    </div>
                </button>
            ))}
        </div>
    );
};

export default ThumbnailRow;