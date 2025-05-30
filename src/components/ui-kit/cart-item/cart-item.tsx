import { FunctionComponent } from 'react';
import styles from './cart-item.module.css';
import { CartCounter } from './cart-counter/cart-counter';
import { useSelector } from '../../../utils/hooks';
import { Link } from 'react-router';

type TPropsType = {
    sku: string,
    count: number
}

export const CartItem: FunctionComponent<TPropsType> = ({ sku, count }) => {
    
    const { data } = useSelector(store => store.productReducer);

    const product = data.products.find(item => item.sku === sku);

    return (
        product ? <div className={ styles.cartItem }>
            <div className={ styles.cartItem_image }
                style={{
                    background: `url("${ product.image }") center/cover no-repeat`
                }}>
            </div>

            <div className={ styles.cartItem_info }>
                <div className={ styles.cartItem_info_name }>
                    <Link to={{
                        pathname: `/product/${sku}`
                    }}>
                        <p>{ product.name }</p>
                    </Link>

                    <Link to={{
                        pathname: `/product/${sku}`
                    }}>
                        <img src="./images/like-disabled.svg" alt="" />
                    </Link>
                </div>

                <div className={ styles.cartItem_info_prices }>
                    <CartCounter count={ count } sku={ sku } />

                    <p>{ product.priceCrossedOut && <span>{ Number(product.priceCrossedOut) * count} ₽</span>} { Number(product.price) * count } ₽</p>
                </div>
            </div>
        </div> : <h3>Непредвиденная ошибка</h3>
    )
}