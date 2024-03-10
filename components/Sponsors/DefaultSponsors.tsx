import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, ReactNode, useRef, useEffect, useCallback } from 'react';

const DefaultSponsors = ({ children }: { children?: ReactNode[] }) => {
   
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
            slider.scrollTo({
                left: nextScroll,
                behavior: 'smooth'
            });
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
            slider.scrollTo({
                left: nextScroll,
                behavior: 'smooth'
            });
        }
    }, [children]);



    return (
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mb-8">
            <div className='flex justify-between items-center'>
                <h2 className="text-3xl font-bold text-left mt-4 mb-4">Sponsors</h2>
                <div className='flex items-center transition-all duration-300 ease-in-out scroll-smooth	' style={{ width: 'fit-content' }}>
                    <button className='mr-2' onClick={handleLeft}>
                        <FontAwesomeIcon icon={faCaretLeft} style={{ height: '1rem', width: '1rem' }}/></button>
                    <button onClick={handleRight}><FontAwesomeIcon icon={faCaretRight} style={{ height: '1rem', width: '1rem' }}/></button>
                </div>
            </div>
            <div className="max-h-[400px] w-full grid grid-flow-col gap-0 overflow-hidden" ref={sliderRef}>
                {children?.map((child, index) => (
                    <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DefaultSponsors;
