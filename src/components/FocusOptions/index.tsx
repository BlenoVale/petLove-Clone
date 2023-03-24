import { FocusOption } from './FocusOption';
import * as C from './styles';

import { ReactComponent as PetCareIcon } from '../../svgs/pet-care.svg';

export const FocusOptions = () => {
    return (
        <C.Container>
            <FocusOption icon={<PetCareIcon width={20} height={20}/>}/>
            <FocusOption icon={<PetCareIcon width={20} height={20}/>}/>
            <FocusOption icon={<PetCareIcon width={20} height={20}/>}/>
            <FocusOption icon={<PetCareIcon width={20} height={20}/>}/>
            <FocusOption icon={<PetCareIcon width={20} height={20}/>}/>
        </C.Container>
    );
}