import { useState } from 'react';
import * as C from './styles';
import { Offer } from '../../types/Offers';
import { getOffers } from '../../helpers/getOffers';

type Props = {
    title: string;
}
export const Offers = ({ title }: Props) => {
    const [offerList, setOfferList] = useState<Offer[]>(getOffers);

    return (
        <C.Container>
            <h2>{title}</h2>
            <div className='grid-area'>
                {offerList.map((item, index) => (
                    <a href='/'>
                        <img key={index} src={item.img} />
                    </a>
                ))}
            </div>
        </C.Container>
    );
}