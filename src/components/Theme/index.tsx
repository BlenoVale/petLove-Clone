import { useState } from 'react';
import { ReactNode } from 'react';
import { Header } from '../Header';
import { OptionsBar } from '../OptionsBar';
import * as C from './styles';

import { getProductOptions } from '../../helpers/getProductOptions';
import { MenuDropDown } from '../MenuDropDown';
import { OptionTypes } from '../../types/OptionTypes';

type Props = {
    children: ReactNode;
}
export const Theme = ({ children }: Props) => {
    const [showMenuDD, setShowMenuDD] = useState(false);
    const [optionList, setOptionList] = useState<OptionTypes>();
    const [menuName, setMenuName] = useState('');

    return (
        <C.Container>
            <C.Area>
                <Header />
                <OptionsBar
                    showMenuDD={showMenuDD}
                    setShowMenuDD={setShowMenuDD}
                    menuName={menuName}
                    setMenuName={setMenuName}
                    setOptionList={setOptionList} />
                <C.Page>
                    {children}
                </C.Page>
            </C.Area>
        </C.Container>
    );
}