import { Service } from '../../../types/Service';
import * as C from './styles';

type Props = {
    service: Service;
}
export const ServiceItem = ({service}: Props) => {
    return (
        <C.Container>
            <img src={service.img} />
            <h3>{service.title}</h3>
            <span>{service.desc}</span>
            <a href='/' className='AgendarBtn'>Agendar</a>
            <a href='/' className='SaibaBtn'>Saiba Mais</a>
        </C.Container>
    );
}