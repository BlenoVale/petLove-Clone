import { useState } from 'react';
import { getProductOptions } from '../../helpers/getProductOptions';
import { OptionTypes } from '../../types/OptionTypes';
import { MenuDropDown } from '../MenuDropDown';
import * as C from './styles';

type Props = {
    showMenuDD: boolean;
    setShowMenuDD: (showMenuDD: boolean) => void;
    menuName: string;
    setMenuName: (menuName: string) => void;
    setOptionList: (optionList: OptionTypes) => void;
}
export const OptionsBar = ({ showMenuDD, setShowMenuDD, menuName, setMenuName, setOptionList }: Props) => {

    const handleChangeShowMenuDropDown = (e: React.MouseEvent<HTMLLIElement>) => {
        setShowMenuDD(true);
        const target = e.currentTarget as HTMLLIElement;
        //console.log(target.id);
        setMenuName(target.id);

        let aux = getProductOptions(menuName);
        if (aux !== undefined) {
            setOptionList(aux);
        }
    }

    return (
        <C.Container>
            <ul>
                <li onMouseOver={handleChangeShowMenuDropDown} id='Cachorro'>
                    <a href='/'>Cachorro</a>
                    <div className='bottom-bar'></div>
                    <MenuDropDown
                        option={menuName}
                        showMenuDD={showMenuDD}
                        setShowMenuDD={setShowMenuDD}
                    />
                </li>
                <li onMouseOver={handleChangeShowMenuDropDown} id='Gato'>
                    <a href='/'>Gatos</a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
                    <a href='/'>Outros pets</a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
                    <a href='/'>Marcas</a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
                    <a href='/'>Outlet</a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
                    <a href='/'>Plano de Saúde <span>NOVO</span></a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
                    <a href='/'>Serviços</a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
                    <a href='/'>Indique e Ganhe</a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
                    <a href='/'>Mais</a>
                    <div className='bottom-bar'></div>
                </li>
            </ul>
        </C.Container>
    );
}