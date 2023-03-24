import * as C from './styles';

type Props = {
    icon: any
}
export const FocusOption = ({icon}: Props) => {
    return (
        <C.Container>
            <div className='iconArea'>{icon}</div>

            <div className='option-text'>
                <p className='title'>Compre com recorrência</p>
                <p className='desc'>e ganhe 15% off na primeira compra + frete grátis</p>
            </div>
        </C.Container>
    );
}