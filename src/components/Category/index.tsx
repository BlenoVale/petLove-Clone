import { BrandType } from '../../types/BrandsType';
import { BreedType } from '../../types/BreedType';
import * as C from './styles';

type Props = {
    title: string
    categories: BreedType[];
}
export const Category = ({ title, categories }: Props) => {
    return (
        <C.Container>
            <h2>{title}</h2>
            <ul className='category-items'>
                {categories.map((item, index) => (
                    <li>
                        <a key={index} href='/'>
                            <img src={item.img} />
                            <p>{item.name}</p>
                        </a></li>
                ))}
            </ul>
        </C.Container>
    );
}
