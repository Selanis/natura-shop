import { FunctionComponent } from 'react';
import styles from './product-card.module.css';
import { AddToCartButton } from './add-to-cart-button/add-to-cart-button';
import { LikeButton } from '../like/like';
import { TGoodsType } from '../../../services/types';
import { Link } from 'react-router';
import { useSelector } from '../../../utils/hooks';

type TPropsType = {
    product: TGoodsType;
}

// const testObject = {
//     name: "Палетка теней для глаз Harmonia 02",
//     description: "Ежедневный макияж может быть интересным — убедись в этом с палеткой Harmonia. Тени девяти идеально подобранных холодных бежевых и коричневых оттенков легко растушевываются и не осыпаются. С новой палеткой ты найдешь гармонию между привычной базой и креативностью — то, что нужно для проявления творчества в ежедневном макияже. С Harmonia получай удовольствие от трендового нюдового образа!",
//     sku: "D215227602",
//     price: 914,
//     priceCrossedOut: 1515,
//     category: "makeup",
//     image: "https://www.cosmedel.ru/upload/iblock/4e7/8s9s3eafysk28q3cgw03mzo0h684n53v.jpg"
// }

export const ProductCard: FunctionComponent<TPropsType> = ({ product }) => {
    const { name, price, priceCrossedOut, image, sku } = product;
    const { order } = useSelector(store => store.orderReducer);

    const itemQuantity = order.find(item => item.sku === sku) ? 
        order.find(item => item.sku === sku)!.quantity : 0; 

    return (
        <Link to={{
            pathname: `/product/${sku}`
        }} className={ styles.productCard }>
            <div className={ styles.productCard_header }>
                <div className={ styles.productCard_header_image }
                    style={{
                        background: `url("${ image }") center/cover no-repeat`
                    }}>
                    <LikeButton />
                </div>

                <p>{ name }</p>
            </div>

            <div className={ styles.productCard_prices }>
                <p>{ price } ₽ { priceCrossedOut && <span>{ priceCrossedOut } ₽</span> } </p>

                <AddToCartButton count={ itemQuantity } sku={sku} price={price} />
            </div>
        </Link>
    )
}