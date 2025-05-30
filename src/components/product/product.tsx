import { FunctionComponent } from 'react';
import styles from './product.module.css';
import { Link, useParams } from 'react-router';
import { SecondaryButton } from '../ui-kit/secondary-button/secondary-button';
import { useSelector } from '../../utils/hooks';
import { AddToCartButton } from '../ui-kit/product-card/add-to-cart-button/add-to-cart-button';

// const product = {
//     category: "coloring",
//     realGroupUrl: "https://www.cosmedel.ru/shop/filter/mlk_brand-is-nishlady/apply/?PAGEN_2=",
//     sku: "NISL00019",
//     name: "Бессульфатный шампунь для вьющихся волос «Манифест локонов», 503 мл",
//     brandName: "NISHLADY",
//     image: "https://www.cosmedel.ru/upload/iblock/fe0/38hkzvnkjtoe3lehxzelegnfczrdswvm.jpg",
//     description: "Бессульфатный шампунь разработан для вьющихся и непослушных волос. Придает волосам «Anti Frizz» эффект, питает, увлажняет волосы и кожу головы.\n\nИдеально в сочетании с кондиционером для вьющихся волос.",
//     price: "1943",
//     priceCrossedOut: "2043",
//     variants: [
//         {
//             color: "#FFA9A9",
//             sku: "666"
//         }, 
//         {
//             color: "#C86060",
//             sku: "555"
//         }, 
//     ]
// }

export const Product: FunctionComponent = () => {
    const { id } = useParams();
    const { data } = useSelector(store => store.productReducer);
    
    const product = data.products.find(item => item.sku === id);

    return (
        product ? <div className={styles.product}>
            <span>Артикул: {product.sku}</span>

            <div className={styles.product_content}>
                <div className={styles.product_content_media}>
                    <div className={styles.product_content_media_image}
                        style={{
                            background: `url('${product.image}') center/cover no-repeat`
                        }}>

                    </div>
                    <div className={styles.product_content_media_variants}>
                        {
                            product.variants && product.variants.map(variant => <Link to={{
                                pathname: `/product/${variant.sku}`
                            }}>
                                <div className={`${styles.product_variant} ${variant.sku === id && styles.product_variant_active }`}
                                    style={{
                                        backgroundColor: variant.color
                                    }}>

                                </div>
                            </Link>)
                        }
                    </div>
                </div>

                <div className={styles.product_content_text}>
                    <div>
                        <h3>{ product.name }</h3>
                        <span>{ product.brandName }</span>
                    </div>
                    <div>
                        <h2>{product.price} ₽ {product.priceCrossedOut && <span>{product.priceCrossedOut} ₽</span>}</h2>
                        <SecondaryButton sku={product.sku} price={product.price} />
                    </div>
                    <div>
                        <h4>Описание</h4>
                        <p>{ product.description }</p>
                    </div>
                </div>
            </div>
        </div> : <h1>404: Не найдено</h1>
    )
}