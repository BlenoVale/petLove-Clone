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

export const Home = () => {
    const [bannerItems, setBannerItems] = useState([
        {url: './assets/carrouselBanner/banner01.webp'},
        {url: './assets/carrouselBanner/banner02.webp'},
        {url: './assets/carrouselBanner/banner03.webp'}
    ]);

    return (
        <Theme>
            <C.Container>
                <C.BannerArea>
                    <MainBanner slides={bannerItems}/>
                    <MainAdd />
                </C.BannerArea>

                <FocusOptions />


            </C.Container>
        </Theme>
    );
}