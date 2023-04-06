import * as C from './styles';
import { ProductItemType } from '../../../types/ProductItemType';
import { ReactComponent as Star } from '../../../svgs/star-svgrepo-com.svg';
import { ReactComponent as Refresh } from '../../../svgs/refresh.svg';

type Props = {
    product: ProductItemType;
}
export const ProductItem = ({ product }: Props) => {
    return (
        <C.Container href='/'>
            <img src={product.img} />
            <h4 className='product-title'>{product.title}</h4>
            <div className='product-subtitle'>
                <a href='/'>{product.brand}</a>
                <div className='product-rating'>
                    <Star /> {product.rating}
                </div>
            </div>
            <div className='product-price-area'>
                <div className='product-price'>R$ {product.price}</div>
                <div className='product-special-price'>R$ {product.specialPrice}</div>
                <div className='product-price-subtitle'>
                    <Refresh /> com recorrência
                </div>
            </div>
        </C.Container>
    );
}