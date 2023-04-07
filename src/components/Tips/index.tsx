import { useState } from 'react';
import * as C from './styles';
import { TipTypes } from '../../types/TipsTypes';
import { getTips } from '../../helpers/getTips';

export const Tips = () => {
    const [tipsList, setTipsList] = useState<TipTypes[]>(getTips);

    return (
        <C.Container>
            <h2>Dicas Petlove</h2>
            <div className='tips-articles'>
                {tipsList.map((item, index)=>(
                    <a key={index} href='/'>
                        <img src={item.img} />
                        <div className='tips-text'>
                            <p>{item.title}</p>
                            <p>{item.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </C.Container>
    );
}