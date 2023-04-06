import { useState, useRef } from 'react';
import * as C from './styles';
import { ReactComponent as ArrowLeft } from '../../svgs/ProductArrow-left.svg';
import { ReactComponent as ArrowRight } from '../../svgs/ProductArrow-right.svg';
import { getProducts } from '../../helpers/getProducts';
import { ProductItemType } from '../../types/ProductItemType';
import { ProductItem } from './ProductItem';

export const ProducCarousel = () => {
    const carousel = useRef<HTMLInputElement>(null);
    const [productList, setProductLis] = useState<ProductItemType[]>(getProducts);

    const goPrevious = () => {
        if (carousel.current){
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
    }

    const goNext = () => {
        if (carousel.current){
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
    }

    return (
        <C.Container>
            <div className='productCarousel-top-area'>
                <h2>Seu pet também pode gostar 💜</h2>
                <div className='productCarousel-arrows'>
                    <div className='Arrow-circle' onClick={goPrevious}><ArrowLeft /></div>
                    <div className='Arrow-circle' onClick={goNext}><ArrowRight /></div>
                </div>
            </div>
            <div className='productCarousel-bottom-area' ref={carousel}>
                {productList.map((item, index)=>(
                    <ProductItem product={item}/>
                ))}
            </div>
        </C.Container>
    );
}