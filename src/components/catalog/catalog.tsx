import { FunctionComponent } from 'react'
import styles from './catalog.module.css'
import { FilterButton } from '../ui-kit/filter-button/filter-button'
import data from '../../assets/data.json'
import { ProductCard } from '../ui-kit/product-card/product-card'
import { useSelector } from '../../utils/hooks'

export const Catalog: FunctionComponent = () => {
    const { category } = useSelector(store => store.productReducer)

    return (
        <div className={ styles.catalog }>
            <h2>Каталог</h2>

            <div className={ styles.catalog_filterTabs }>
                <FilterButton text="Макияж" type="makeup" active={category} />
                <FilterButton text="Гигиена" type="hygiene" active={category} />
                <FilterButton text="Окрашивание" type="coloring" active={category} />
                <FilterButton text="Тело" type="body" active={category} />
            </div>

            <div className={ styles.catalog_products }>
                {
                    data.products
                        .filter(item => item.category === category)
                        .map((item, index) => <ProductCard product={ item } key={ index } />)
                }
            </div>
        </div>
    )
}