import * as C from './styles';

type Props = {
    icon: any;
    title: string;
    onAction: () => void;
}
export const HeaderBtn = ({icon, title, onAction}: Props) => {
    return(
        <C.Container>
            <div>{icon}</div>
            <button>{title}</button>
        </C.Container>
    );
}