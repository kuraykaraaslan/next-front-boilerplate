import React, { useState, ReactNode, useRef, useEffect, useCallback } from 'react';

const buttonClass = "btn btn-circle border-1 border-white text-white hover:bg-white hover:text-black active:bg-white active:text-black bg-opacity-20 sm:bg-opacity-0 hidden sm:flex shadow-lg border border-base-200";
const mobileButtonClass = "btn rounded-full dark:text-black dark:hover:text-white sm:hidden rounded-full -py-2 w-10 h-10  shadow-lg border border-base-200";

const Carousel = ({ children }: { children?: ReactNode[] }) => {
    const [active, setActive] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleSlideClick = useCallback((index: number) => () => setActive(index), []);

    useEffect(() => {
        const timer = setInterval(() => {
            const carouselItems = carouselRef.current?.querySelectorAll('.carousel-item');
            carouselItems?.forEach((element, i) => {
                if (element.getBoundingClientRect().left === 0) {
                    setActive(i);
                }
            });
        }, 5);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="carousel w-full max-h-[400px]" style={{ top: '0', left: '0'}} ref={carouselRef}>
                {children?.map((child, index) => (
                    <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index} onClick={handleSlideClick(index)}>
                        {child}
                        <a href={`#slide${index === 0 ? children?.length || 0 : index}`} className={buttonClass} style={{ zIndex: 100, position: 'absolute', top: '50%', left: '5', marginLeft: '30px' }}>&#10094;</a>
                        <a href={`#slide${index < children.length - 1 ? index + 2 : 1}`} className={buttonClass} style={{ zIndex: 100, position: 'absolute', top: '50%', right: '0', marginRight: '30px' }}> &#10095;</a>
                    </div>
                ))}
            </div>
            <div className="flex carousel-indicators gap-2" style={{ zIndex: 50, position: 'relative', left: '0', right: '0', transform: 'translateY(-50%)', margin: 'auto',
                        bottom: '70px', height: '20px', display: 'flex', justifyContent: 'center' }}>
                {children?.map((_, index) => (
                    <a className={`${mobileButtonClass} ${index === active ? 'active bg-primary' : 'bg-gray-300'} rounded-full overflow-text`} style={{ height: '50px', width: '10px' }}
                       href={`#slide${index + 1}`} onClick={handleSlideClick(index)} key={index}>
                        <span>{index + 1}</span>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Carousel;
