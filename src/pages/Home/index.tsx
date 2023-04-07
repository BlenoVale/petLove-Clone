import { useState } from 'react';
import { Theme } from '../../components/Theme';
import * as C from './styles';

import { ReactComponent as CouponIcon } from '../../svgs/coupon.svg';
import { ReactComponent as DoctorIcon } from '../../svgs/doctor.svg';
import { ReactComponent as PetCareIcon } from '../../svgs/pet-care.svg';
import { ReactComponent as CheckHeartIcon } from '../../svgs/check-heart.svg';
import { FocusOptions } from '../../components/FocusOptions';
import { MainAdd } from '../../components/MainAdd';
import { MainBanner } from '../../components/MainBanner';
import { ServiceCarousel } from '../../components/ServiceCarousel';
import { ProducCarousel } from '../../components/ProductCarousel';
import { Offers } from '../../components/Offers';
import { BrandCarousel } from '../../components/BrandCarousel';
import { BreedType } from '../../types/BreedType';
import { getBreedsCat, getBreedsDog } from '../../helpers/getBreeds';
import { Category } from '../../components/Category';
import { Tips } from '../../components/Tips';
import { HomeRegister } from '../../components/HomeRegister';

export const Home = () => {
    const [bannerItems, setBannerItems] = useState([
        { url: './assets/carrouselBanner/banner01.webp' },
        { url: './assets/carrouselBanner/banner02.webp' },
        { url: './assets/carrouselBanner/banner03.webp' }
    ]);

    const [dogBreeds, setDogsBreeds] = useState<BreedType[]>(getBreedsDog);
    const [catBreeds, setCatBreeds] = useState<BreedType[]>(getBreedsCat);

    return (
        <Theme>
            <C.Container>
                <C.BannerArea>
                    <MainBanner slides={bannerItems} />
                    <MainAdd />
                </C.BannerArea>
                <FocusOptions />
                <ServiceCarousel />
                <ProducCarousel title={'Seu pet também pode gostar 💜'} />
                <Offers title={'Ofertas em Destaque'} />
                <ProducCarousel title={'Produtos que você só encontra na Petlove!'} />
                <BrandCarousel title={'Principais marcas'} />
                <C.BreedArea>
                    <div className='breed-categories-area'>
                        <Category title={'Raças de cachorro'} categories={dogBreeds} />
                        <Category title={'Raças de gato'} categories={catBreeds} />
                    </div>
                </C.BreedArea>
                <Tips />
                <HomeRegister />
            </C.Container>
        </Theme>
    );
}