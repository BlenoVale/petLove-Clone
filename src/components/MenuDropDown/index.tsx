import { useState } from 'react';
import * as C from './styles';
import { ReactComponent as ArrowRightIcon } from '../../svgs/arrow-right.svg';
import { useEffect } from 'react';
import { getProductOptions } from '../../helpers/getProductOptions';
import { OptionTypes } from '../../types/OptionTypes';

type Props = {
    option: string;
    showMenuDD: boolean;
    setShowMenuDD: (setShowMenuDD: boolean) => void;
}
export const MenuDropDown = ({ option, showMenuDD, setShowMenuDD }: Props) => {
    const [optionList, setOptionList] = useState<OptionTypes>();

    useEffect(() => {
        setOptionList(getProductOptions(option));
    }, [option]);

    return (
        <C.Container
            showMenuDD={showMenuDD}
            onMouseOver={e => setShowMenuDD(true)}
            onMouseLeave={e => setShowMenuDD(false)}
        >
            <ul className='menuDD-Options'>
                {optionList && optionList.products.map((item, index) => (
                    <li className='menuDD-Option' key={index}>
                        <a href='/'>{item.name}</a>
                        <ArrowRightIcon width={25} height={25} />
                    </li>
                ))}
            </ul>
        </C.Container>
    );
}