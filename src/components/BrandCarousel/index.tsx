import { useState, useRef } from 'react';
import * as C from './styles';
import { BrandType } from '../../types/BrandsType';
import { getBrands } from '../../helpers/getBrands';

import { ReactComponent as ArrowLeft } from '../../svgs/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../svgs/arrow-right.svg';


type Props = {
    title: string;
}
export const BrandCarousel = ({ title }: Props) => {
    const brandCarousel = useRef<HTMLInputElement>(null);
    const [brandList, setBrandList] = useState<BrandType[]>(getBrands);

    const goPrevious = () => {
        if (brandCarousel.current) {
            brandCarousel.current.scrollLeft -= brandCarousel.current.offsetWidth;
        }
    }

    const goNext = () => {
        if (brandCarousel.current) {
            brandCarousel.current.scrollLeft += brandCarousel.current.offsetWidth;
        }
    }

    return (
        <C.Conatainer>
            <h2>{title}</h2>

            <div className='brand-carousel'>
                <div className='brand-carousel-arrow' onClick={goPrevious}>
                    <ArrowLeft />
                </div>
                <div className='brand-carousel-items' ref={brandCarousel}>
                    {brandList.map((item, index) => (
                        <img key={index} src={item.img} />
                    ))}
                </div>
                <div className='brand-carousel-arrow' onClick={goNext}>
                    <ArrowRight />
                </div>
            </div>
        </C.Conatainer>
    );
}