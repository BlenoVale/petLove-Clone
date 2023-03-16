import { useState } from 'react';
import * as C from './styles';
import { CachorroOption } from '../../jsons/Options';
import { ReactComponent as ArrowRightIcon } from '../../svgs/arrow-right.svg';
import {useEffect} from 'react';
import { getProductOptions } from '../../helpers/getProductOptions';

type Props = {
    option: string;
    showMenuDD: boolean;
}
export const MenuDropDown = ({ option, showMenuDD }: Props) => {
    const [optionList, setOptionList] = useState(getProductOptions(option));

    useEffect(()=>{
        getProductOptions(option);
    },[option]);

    return (
        <C.Container showMenuDD={showMenuDD}>
            <ul>
                {optionList && optionList.map((item, index) => (
                    <li key={index}>
                        <a href='/'>{item.name}</a>
                        <ArrowRightIcon width={25} height={25} />
                    </li>
                ))}
            </ul>
        </C.Container>
    );
}