import * as C from './styles';
import { useState, useRef, useEffect } from 'react';

import { ReactComponent as CouponIcon } from '../../svgs/coupon.svg';
import { ReactComponent as DoctorIcon } from '../../svgs/doctor.svg';
import { ReactComponent as PetCareIcon } from '../../svgs/pet-care.svg';
import { ReactComponent as CheckHeartIcon } from '../../svgs/check-heart.svg';

export const MainAdd = () => {
    const timerRef = useRef(0);
    const [cPosition, setCPosition] = useState(true);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
            cPosition ? setCPosition(false) : setCPosition(true);
        }, 2000);

        return () => clearTimeout(timerRef.current);
    }, [cPosition]);

    return (
        <C.container>
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
        </C.container>
    );
}