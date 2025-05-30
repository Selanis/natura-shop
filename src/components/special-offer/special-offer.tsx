import { FunctionComponent } from 'react';
import styles from './special-offer.module.css';
import { ProductCard } from '../ui-kit/product-card/product-card';
import data from '../../assets/specialOffer.json';


export const SpecialOffer: FunctionComponent = () => {

    return (
        <div className={ styles.specialOffer }>
            <h2>Специальное предложение</h2>

            <div className={ styles.specialOffer_goods }>
                {
                    data.products.map((item, index) => <ProductCard product={ item } key={ index }  />)
                }
            </div>
        </div>
    )
}