import { useState } from 'react';
import { ReactNode } from 'react';
import { Header } from '../Header';
import { OptionsBar } from '../OptionsBar';
import * as C from './styles';

import { MenuDropDown } from '../MenuDropDown';
import { OptioTypes } from '../../types/OptionTypes';

type Props = {
    children: ReactNode;
}
export const Theme = ({ children }: Props) => {
    const [showMenuDD, setShowMenuDD] = useState(false);
    const [optionList, setOptionList] = useState<OptioTypes | []>([]);
    const [menuName, setMenuName] = useState('');

    return (
        <C.Container>
            <C.Area>
                <Header />
                <OptionsBar
                    setShowMenuDD={setShowMenuDD}
                    setMenuName={setMenuName}
                    setOptionList={setOptionList} />
                <MenuDropDown option={menuName} showMenuDD={showMenuDD} />
                <C.Page>
                    {children}
                </C.Page>
            </C.Area>
        </C.Container>
    );
}