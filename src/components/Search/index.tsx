import { useState } from 'react';
import * as C from './styles';
import { ReactComponent as SearchIcon } from '../../svgs/search.svg';

type Props = {
    onAction: () => void;
}
export const Search = ({ onAction }: Props) => {
    const [borderColor, setBorderColor] = useState('#d9d3cc');

    const handleChangeColor = () => {
        setBorderColor('#4e2096');
    }

    return (
        <C.Container borderColor={borderColor}>
            <input type='search' placeholder='O que seu pet precisa?' onClick={handleChangeColor}/>
            <SearchIcon width={24} height={24} />
        </C.Container>
    );
}