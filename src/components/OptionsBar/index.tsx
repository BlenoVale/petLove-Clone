import * as C from './styles';

export const OptionsBar = () => {
    return (
        <C.Container>
            <ul>
                <li>
                    <a href='/'>Cachorro</a>
                    <div className='bottom-bar'></div>
                </li>
                <li>
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