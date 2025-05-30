import { FunctionComponent, SyntheticEvent } from 'react';
import styles from './add-to-cart-button.module.css';
import { useDispatch } from '../../../../utils/hooks';
import { addToOrderAction, decreaseItemOrderAction, deleteFromOrderAction, increaseItemOrderAction } from '../../../../services/actions/order-action';

type TPropsType = {
    count: number;
    sku: string;
    price: string;
}

export const AddToCartButton: FunctionComponent<TPropsType> = ({ count, sku, price }) => {
    const dispatch = useDispatch();

    const addToCart = (e: SyntheticEvent) => {
        dispatch(addToOrderAction(sku, price));
        e.preventDefault();
    }

    const decreaseItemOrder = (e: SyntheticEvent) => {
        if (count === 1) {
            dispatch(deleteFromOrderAction(sku));
        } else if (count > 1) {
            dispatch(decreaseItemOrderAction(sku));
        }
        
        e.preventDefault();
    }

    const increaseItemOrder = (e: SyntheticEvent) => {
        dispatch(increaseItemOrderAction(sku));
        e.preventDefault();
    }

    return (
        count ? <div className={ styles.addToCartDiv }>
            <button onClick={decreaseItemOrder}>
                <img src="./images/minus-button.svg" alt="minus" />
            </button>

            <button className={ styles.addToCartButton }>
                { count }
            </button>

            <button onClick={increaseItemOrder}>
                <img src="./images/plus-button.svg" alt="plus" />
            </button>
        </div> : <button className={ styles.addToCartButton } onClick={addToCart}>
            Купить
        </button>
    )
}