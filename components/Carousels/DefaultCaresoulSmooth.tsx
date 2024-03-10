import React, { useState, ReactNode, useRef, useEffect, useCallback } from 'react';

const buttonClass = "btn btn-circle border-1 border-white text-white hover:bg-white hover:text-black active:bg-white active:text-black bg-opacity-20 sm:bg-opacity-0 hidden sm:flex shadow-lg border border-base-200 group-hover:bg-white group-hover:text-black";
const mobileButtonClass = "w-2 h-2 rounded-full sm:hidden -py-2 shadow-lg border border-base-200 group-hover:bg-white group-hover:text-black";

const DefaultCaresoulSmooth = ({ children }: { children?: ReactNode[] }) => {
    const [active, setActive] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const timer = useRef<NodeJS.Timeout>();

    //create a timer to scroll the slider smoothly

    const handleRight = useCallback(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const scrollAmount = slider.scrollLeft;
            if (!children || children.length === 0) {
                return;
            }

            const slideWidth = slider.scrollWidth / children?.length;
            const slideCount = Math.round(scrollAmount / slideWidth);
            const nextSlide = slideCount + 1;
            const nextScroll = nextSlide * slideWidth;
            if (nextSlide >= children?.length) {
                slider.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
            else {
                slider.scrollTo({
                    left: nextScroll,
                    behavior: 'smooth'
                });
            }

            setActive(nextSlide);
           
        }
    }, [children]);

    const handleLeft = useCallback(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const scrollAmount = slider.scrollLeft;
            if (!children || children.length === 0) {
                return;
            }
            const slideWidth = slider.scrollWidth / children?.length;
            const slideCount = Math.round(scrollAmount / slideWidth);
            const nextSlide = slideCount - 1;
            const nextScroll = nextSlide * slideWidth;
            if (nextSlide < 0) {
                slider.scrollTo({
                    left: slider.scrollWidth - slideWidth,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollTo({
                    left: nextScroll,
                    behavior: 'smooth'
                });
            }

            setActive(nextSlide);
        }
    }, [children]);

    const setSlide = useCallback((index: number) => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            if (!children) {
                return;
            }

            const slideWidth = slider.scrollWidth / children?.length;
            const nextScroll = index * slideWidth;
            slider.scrollTo({
                left: nextScroll,
                behavior: 'smooth'
            });
            setActive(index);
        }
    }
    , [children]);

    useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            if (!children) {
                return;
            }
            const slideWidth = slider.scrollWidth / children?.length;
            const nextScroll = active * slideWidth;
            slider.scrollTo({
                left: nextScroll,
                behavior: 'smooth'
            });
        }
    }, [active]);


    return (
        <>
            <div className="group carousel w-full max-h-[400px]" style={{ top: '0', left: '0'}} ref={sliderRef}>
                {children?.map((child, index) => (
                    <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index}>
                        {child}
                        <a className={buttonClass} style={{ zIndex: 100, position: 'absolute', top: '50%', left: '5', marginLeft: '30px' }} onClick={handleLeft}>&#10094;</a>
                        <a className={buttonClass} style={{ zIndex: 100, position: 'absolute', top: '50%', right: '0', marginRight: '30px' }} onClick={handleRight}> &#10095;</a>
                    </div>
                ))}
            </div>
            <div className="flex gap-2" style={{ zIndex: 50, position: 'relative', left: '0', right: '0', transform: 'translateY(-10%)', margin: 'auto',
                        bottom: '40px', height: '10px', display: 'flex', justifyContent: 'center' }}>
                {children?.map((_, index) => (
                    <div className={`${mobileButtonClass} ${index === active ? 'active bg-primary' : 'bg-gray-300'} overflow-text`}
                    key={index} onClick={() => setSlide(index)}>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DefaultCaresoulSmooth;
