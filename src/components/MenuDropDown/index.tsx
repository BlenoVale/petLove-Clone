import { useState } from 'react';
import * as C from './styles';
import { ReactComponent as ArrowRightIcon } from '../../svgs/arrow-right.svg';
import { useEffect } from 'react';
import { getProductOptions } from '../../helpers/getProductOptions';
import { OptionTypes } from '../../types/OptionTypes';
import { getMarginLeftMenuDD } from '../../helpers/getMarginLeftMenuDD';

type Props = {
    option: string;
    showMenuDD: boolean;
    setShowMenuDD: (setShowMenuDD: boolean) => void;
}
export const MenuDropDown = ({ option, showMenuDD, setShowMenuDD }: Props) => {
    const [optionList, setOptionList] = useState<OptionTypes>();
    const [marginLeft, setMarginLeft] = useState(0);

    useEffect(() => {
        setMarginLeft(getMarginLeftMenuDD(option));
        setOptionList(getProductOptions(option));
    }, [option]);

    return (
        <C.Container
            showMenuDD={showMenuDD}
            onMouseOver={e => setShowMenuDD(true)}
            onMouseLeave={e => setShowMenuDD(false)}
            marginLeft={marginLeft}
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