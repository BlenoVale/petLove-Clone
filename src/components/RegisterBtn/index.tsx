import * as C from './styles';
import {ReactComponent as ArrowIcon} from '../../svgs/arrow-open-down.svg';

export const RegisterBtn = () => {
    return (
        <C.Container>
            <button>Entrar | Cadastrar</button>
            <ArrowIcon width={24} height={24}/>
        </C.Container>
    );
}