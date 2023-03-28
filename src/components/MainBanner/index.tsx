import * as C from './styles';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';

import { ReactComponent as ArrowLeft } from '../../svgs/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../svgs/arrow-right.svg'

type slide = {
    url: string;
}

type Props = {
    slides: slide[];
}
export const MainBanner = ({ slides }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === (slides.length - 1);
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <C.Container slide={slides[currentIndex].url}>
            <div className='bannerImg' />
            <div className='arrowArea'>
                <div className='arrowIcon' onClick={goToPrevious}><ArrowLeft /></div>
                <div className='arrowIcon' onClick={goToNext}><ArrowRight /></div>
            </div>
        </C.Container>
    );
}