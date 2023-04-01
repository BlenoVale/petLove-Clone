import * as C from './styles';
import Carousel from 'react-elastic-carousel';
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

    return (
        <C.Container>
            <div className='arrowIcon previous' onClick={goToPrevious}><ArrowLeft /></div>
            {slides.map((item, index)=>(
                <C.BannerImg key={index} slide={item.url}/>
            ))}
            <div className='arrowIcon next' onClick={goToNext}><ArrowRight /></div>
        </C.Container>
    );
}