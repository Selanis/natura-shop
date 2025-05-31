import { FunctionComponent, useRef } from 'react';
import styles from './cart.module.css';
import { CartItem } from '../ui-kit/cart-item/cart-item';
import { PrimaryButton } from '../ui-kit/primary-button/primary-button';
import { useSelector } from '../../utils/hooks';
import { motion, useInView } from 'framer-motion'

export const Cart: FunctionComponent = () => {
    const { order } = useSelector(store => store.orderReducer);

    const totalQuantity = order.reduce((acc, cur) => acc + cur.quantity, 0);
    const totalPrice = order.reduce((acc, cur) => acc + Number(cur.price)*cur.quantity, 0);

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
        <div className={ styles.cart }>
            <h2>Корзина</h2>

            <div className={ styles.cart_content } ref={elementRef}>
                <div>
                { order.length ?
                    order.map((item, index) => 
                        <motion.div
                                custom={index}
                                animate={isInView ? "visible" : "hidden"}
                                variants={variants}
                                key={index}
                        >
                            <CartItem sku={item.sku} count={item.quantity} />
                        </motion.div>
                    ) : <h3>Корзина пуста</h3>
                }
                </div>
                <div>
                    <form>
                        <div className={ styles.cart_content_formInfo }>
                            <div>
                                <p>Итого <br />
                                    <span>{ totalQuantity } товаров</span>    
                                </p>

                                <h3>{ totalPrice } ₽</h3>
                            </div>

                            <div>
                                <p>Итого</p>

                                <span>бесплатно</span>
                            </div>
                        </div>
                        
                        <label className={styles.cart_content_promo}>
                            <input name="promo" type="text" placeholder='Промокод' />
                        </label>
                        
                        <input name="name" type="text" placeholder='Ваше ФИ' />

                        <input name="address" type="text" placeholder='Адрес доставки' />
                    </form>

                    <PrimaryButton text="Перейти к оформлению" />
                </div>
                
            </div>
        </div>
    )
}