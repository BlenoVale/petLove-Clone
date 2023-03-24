import { useEffect, useState } from 'react';
import { Theme } from '../../components/Theme';
import * as C from './styles';

import { ReactComponent as CouponIcon } from '../../svgs/coupon.svg';
import { ReactComponent as DoctorIcon } from '../../svgs/doctor.svg';
import { ReactComponent as PetCareIcon } from '../../svgs/pet-care.svg';
import { ReactComponent as CheckHeartIcon } from '../../svgs/check-heart.svg';
import { FocusOptions } from '../../components/FocusOptions';

export const Home = () => {
    const [cPosition, setCPosition] = useState(true);

    setInterval(() => {
        if (cPosition) {
            setCPosition(false);
        } else {
            setCPosition(true);
        }
        //cPosition ? setCPosition(false) : setCPosition(true);
    }, 4000);

    return (
        <Theme>
            <C.Container>
                <C.BannerArea>
                    <C.Principal></C.Principal>
                    <C.Second>
                        {!cPosition &&
                            <div className='Infos-firstPosition'>
                                <div className='infoArea'>
                                    <CouponIcon width={30} height={30} />
                                    <div className='infoText'>
                                        <h3>10%OFF</h3>
                                        <p>em todos os pedidos</p>
                                    </div>
                                </div>

                                <div className='infoArea'>
                                    <DoctorIcon width={30} height={30} />
                                    <div className='infoText'>
                                        <h3>10%OFF</h3>
                                        <p>em todos os pedidos</p>
                                    </div>
                                </div>

                                <div className='infoArea'>
                                    <PetCareIcon width={30} height={30} />
                                    <div className='infoText'>
                                        <h3>10%OFF</h3>
                                        <p>em todos os pedidos</p>
                                    </div>
                                </div>

                                <button>Saiba Mais</button>
                            </div>

                        }

                        {cPosition &&
                            <div className='Infos-secondPosition'>
                                <CheckHeartIcon width={30} height={30} />
                                <div className='infoText'>
                                    <h3>Economize</h3>
                                    <p className='subtitle'>Na primeira compra <br />recorrente</p>
                                </div>

                                <p>15%OFF + FRETE GRÁTIS</p>

                                <button>Saiba Mais</button>
                            </div>
                        }

                        <C.Circle cPosition={cPosition}></C.Circle>
                    </C.Second>
                </C.BannerArea>

                <FocusOptions/>
            </C.Container>
        </Theme>
    );
}