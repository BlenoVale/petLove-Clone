import {useState} from 'react';
import { getProductOptions } from '../../helpers/getProductOptions';
import { OptioTypes } from '../../types/OptionTypes';
import * as C from './styles';

type Props = {
    setShowMenuDD: (showMenuDD: boolean) => void;
    setMenuName: (menuName: string) => void;
    setOptionList: (optionList: OptioTypes) => void;
}
export const OptionsBar = ({setShowMenuDD, setMenuName, setOptionList}: Props) => {

    const handleChangeShowMenuDropDown = () => {
        setShowMenuDD(true);
        setMenuName('Cachorro');
        setOptionList(getProductOptions('Cachorro'));
    }

    return (
        <C.Container>
            <ul>
                <li onMouseOver={handleChangeShowMenuDropDown}>
                    <a href='/'>Cachorro</a>
                    <div className='bottom-bar'></div>
                </li>
                <li onMouseOver={handleChangeShowMenuDropDown}>
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