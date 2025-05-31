import { FunctionComponent, RefObject, useRef } from 'react'
import styles from './catalog.module.css'
import { FilterButton } from '../ui-kit/filter-button/filter-button'
import data from '../../assets/data.json'
import { ProductCard } from '../ui-kit/product-card/product-card'
import { useSelector } from '../../utils/hooks'
import { motion, useInView } from 'framer-motion'

type TPropsType = {
    componentRef: RefObject<null>;
}

export const Catalog: FunctionComponent<TPropsType> = (props) => {
    const { category } = useSelector(store => store.productReducer);
    
    const elementRef = useRef(null);
    const isInView = useInView(elementRef);


    const variants = {
        visible: (index: number) => ({
            opacity: 1,
            transition: {
                delay: index * 0.08,
            },
        }),
        hidden: { opacity: 0 },
    }

    return (
        <motion.div
            // animate={{ scale:[ 2, 0] }}
            // transition={{ duration: 0.5, repeat: Infinity }}
        >
        <div className={ styles.catalog } ref={elementRef}>
            <h2 ref={props.componentRef}>Каталог</h2>

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
                        .map((item, index) => 
                            <motion.div
                                custom={index}
                                animate={isInView ? "visible" : "hidden"}
                                variants={variants}
                                key={ index }
                            >
                                <ProductCard product={ item } />
                            </motion.div>
                        )
                }
            </div>
        </div>
        </motion.div>
    )
}