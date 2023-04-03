import * as C from './styles';
import { useCallback, useEffect, useRef, useState } from 'react';

import { ReactComponent as ArrowLeft } from '../../svgs/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../svgs/arrow-right.svg'

type slide = {
    url: string;
}

type Props = {
    slides: slide[];
}
export const MainBanner = ({ slides }: Props) => {
    const timerRef = useRef(0);
    const bannerItems = useRef<HTMLInputElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === (slides.length - 1);
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
            goToNext();
        }, 2000);

        return () => clearTimeout(timerRef.current);
    }, [goToNext]);

    useEffect(()=>{
        if(currentIndex === 0) {
            bannerItems.current?.scrollTo(0, 0);
        } else if (currentIndex === 1) {
            bannerItems.current?.scrollTo(952, 0);
        } else if (currentIndex === 2) {
            bannerItems.current?.scrollTo(1904, 0);
        }
    },[currentIndex]);

    //bannerItems.current?.scrollTo(952, 0);

    return (
        <C.Container>
            <div className='arrowIcon previous' onClick={goToPrevious}><ArrowLeft /></div>
            <div className='bannerItems' ref={bannerItems}>
                {slides.map((item, index) => (
                    <img src={item.url} />
                ))}
            </div>
            <div className='arrowIcon next' onClick={goToNext}><ArrowRight /></div>
        </C.Container>
    );
}