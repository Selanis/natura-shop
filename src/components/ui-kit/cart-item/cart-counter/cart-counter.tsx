import { FunctionComponent, SyntheticEvent } from 'react';
import styles from './cart-counter.module.css';
import { useDispatch } from '../../../../utils/hooks';
import { decreaseItemOrderAction, deleteFromOrderAction, increaseItemOrderAction } from '../../../../services/actions/order-action';

type TPropsType = {
    count: number;
    sku: string;
}

export const CartCounter: FunctionComponent<TPropsType> = ({ count, sku }) => {

    const dispatch = useDispatch();
    
        const decreaseItemOrder = (e: SyntheticEvent) => {
            if (count === 1) {
                dispatch(deleteFromOrderAction(sku));
            } else if (count > 1) {
                dispatch(decreaseItemOrderAction(sku));
            }
            
            e.preventDefault();
        }

        const deleteItemOrder = (e: SyntheticEvent) => {
            dispatch(deleteFromOrderAction(sku));
            e.preventDefault();
        }
    
        const increaseItemOrder = (e: SyntheticEvent) => {
            dispatch(increaseItemOrderAction(sku));
            e.preventDefault();
        }

    return (
        <div className={ styles.cartCounter }>
            <button onClick={deleteItemOrder}>
                <img src="./images/delete-button.svg" alt="delete" />
            </button>
            <button onClick={decreaseItemOrder}>
                <img src="./images/minus-button.svg" alt="minus" />
            </button>
            <p>{ count }</p>
            <button onClick={increaseItemOrder}>
                <img src="./images/plus-button.svg" alt="plus" />
            </button>
        </div>
    )
}