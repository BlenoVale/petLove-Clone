import { useState } from 'react';
import { MenuDropDown } from '../MenuDropDown';
import * as C from './styles';

export const OptionsBar = () => {
    const [menuName, setMenuName] = useState('');
    const [showMenuDD, setShowMenuDD] = useState(false);

    const handleChangeShowMenuDropDown = (e: React.MouseEvent<HTMLLIElement>) => {
        setShowMenuDD(true);
        const target = e.currentTarget as HTMLLIElement;
        setMenuName(target.id);
    }

    return (
        <C.Container>
            <ul>
                <li
                    onMouseOver={handleChangeShowMenuDropDown}
                    onMouseLeave={e => setShowMenuDD(false)}
                    id='Cachorro'
                >
                    <a href='/'>Cachorro</a>
                    <div className='bottom-bar'></div>
                    {menuName === 'Cachorro' &&
                        <MenuDropDown
                            option={menuName}
                            showMenuDD={showMenuDD}
                            setShowMenuDD={setShowMenuDD}
                        />
                    }
                </li>
                <li
                    onMouseOver={handleChangeShowMenuDropDown}
                    onMouseLeave={e => setShowMenuDD(false)}
                    id='Gato'
                >
                    <a href='/'>Gatos</a>
                    <div className='bottom-bar'></div>
                    {menuName === 'Gato' &&
                        <MenuDropDown
                            option={menuName}
                            showMenuDD={showMenuDD}
                            setShowMenuDD={setShowMenuDD}
                        />
                    }
                </li>
                <li
                    onMouseOver={handleChangeShowMenuDropDown}
                    onMouseLeave={e => setShowMenuDD(false)}
                    id='Outros'
                >
                    <a href='/'>Outros pets</a>
                    <div className='bottom-bar'></div>
                    {menuName === 'Outros' &&
                        <MenuDropDown
                            option={menuName}
                            showMenuDD={showMenuDD}
                            setShowMenuDD={setShowMenuDD}
                        />
                    }
                </li>
                <li>
                    <a href='/'>Marcas</a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
                    <a href='/'>Outlet</a>
                    <div className='bottom-bar'></div>
                </li>
                <li
                    onMouseOver={handleChangeShowMenuDropDown}
                    onMouseLeave={e => setShowMenuDD(false)}
                    id='Planos'
                >
                    <a href='/'>Plano de Saúde <span>NOVO</span></a>
                    <div className='bottom-bar'></div>
                    {menuName === 'Planos' &&
                        <MenuDropDown
                            option={menuName}
                            showMenuDD={showMenuDD}
                            setShowMenuDD={setShowMenuDD}
                        />
                    }
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