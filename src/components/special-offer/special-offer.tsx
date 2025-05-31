import { FunctionComponent, RefObject, useRef } from 'react';
import styles from './special-offer.module.css';
import { ProductCard } from '../ui-kit/product-card/product-card';
import data from '../../assets/specialOffer.json';
import { motion, useInView } from 'framer-motion'

type TPropsType = {
    componentRef: RefObject<null>;
}

export const SpecialOffer: FunctionComponent<TPropsType> = (props) => {

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
        <div className={ styles.specialOffer } ref={props.componentRef}>
            <h2>Специальное предложение</h2>

            <div className={ styles.specialOffer_goods } ref={ elementRef }>
                {
                    data.products.map((item, index) => 
                        <motion.div
                                custom={index}
                                animate={isInView ? "visible" : "hidden"}
                                variants={variants}
                                key={ index }
                            >
                            <ProductCard product={ item }  />
                        </motion.div>
                )
                }
            </div>
        </div>
    )
}