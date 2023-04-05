import { useState, useEffect, useRef } from 'react';
import * as C from './styles';
import { ReactComponent as Arrowleft } from '../../svgs/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../svgs/arrow-right.svg';
import { Service } from '../../types/Service';
import { getServices } from '../../helpers/getServices';
import { ServiceItem } from './ServiceItem';

export const ServiceCarousel = () => {
    const carousel = useRef<HTMLInputElement>(null);
    const [serviceList, setServiceList] = useState<Service[]>();

    useEffect(() => { 
        setServiceList(getServices);
    }, []);

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
            <div className='service-up-area'>
                <div className='service-title'>
                    <h3>Conheça nossos serviços</h3>
                    <p>por <span className='logo1'>Porto</span> e <span className='logo2'>dog hero</span></p>
                </div>
                <div className='service-arrows'>
                    <div className='Arrow-area' onClick={goPrevious}><Arrowleft /></div>
                    <div className='Arrow-area' onClick={goNext}><ArrowRight /></div>
                </div>
            </div>

            <div className='Service-items-area' ref={carousel}>
                {serviceList?.map((item, index) =>(
                    <ServiceItem key={index} service={item} />
                ))}
            </div>
        </C.Container>
    );
}