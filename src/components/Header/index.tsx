import * as C from './styles';
import { ReactComponent as MapIcon } from '../../svgs/map.svg';
import { ReactComponent as RefreshIcon } from '../../svgs/refresh.svg';
import { ReactComponent as BoxIcon } from '../../svgs/box.svg';
import {ReactComponent as CartIcon} from '../../svgs/cart.svg';
import { HeaderBtn } from '../HeaderBtn';
import { RegisterBtn } from '../RegisterBtn';
import { Search } from '../Search';

export const Header = () => {
    const handleAction = () => {

    }

    return (
        <C.Container>
            <C.Area>
                <C.Logo src='./assets/logo.png' />
                <HeaderBtn
                    icon={<MapIcon fill='#7A7368' width={23} height={23} />}
                    title='Informar CEP'
                    onAction={handleAction}
                />

                <Search onAction={handleAction}/>
                
                <HeaderBtn
                    icon={<RefreshIcon fill='#7A7368' width={23} height={23} />}
                    title='Compras recorrentes'
                    onAction={handleAction}
                />
                <HeaderBtn
                    icon={<BoxIcon fill='#7A7368' width={23} height={23} />}
                    title='Meus pedidos'
                    onAction={handleAction}
                />
                <C.CartArea><CartIcon width={24} height={24}/></C.CartArea>
                <RegisterBtn />
            </C.Area>
        </C.Container>
    );
}