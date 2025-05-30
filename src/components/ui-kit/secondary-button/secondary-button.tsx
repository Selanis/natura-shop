import { FunctionComponent, SyntheticEvent } from 'react';
import styles from './secondary-button.module.css';
import { useDispatch, useSelector } from '../../../utils/hooks';
import { Link } from 'react-router';
import { addToOrderAction } from '../../../services/actions/order-action';

type TPropsType = {
    sku: string;
    price: string;
}

export const SecondaryButton: FunctionComponent<TPropsType> = ({ sku, price }) => {
    const { order } = useSelector(store => store.orderReducer);
    const dispatch = useDispatch();

    const inOrder = order.find(item => item.sku === sku) ? true : false;

    const addToCart = (e: SyntheticEvent) => {
        dispatch(addToOrderAction(sku, price));
        e.preventDefault();
    }


    return (
        !inOrder ? <button className={ styles.secondaryButton } onClick={addToCart}>
            В корзину
        </button> : 
        <Link to={{
            pathname: '/order'
        }}>
            <button className={ styles.secondaryButton_InOrder }>
                В корзине
            </button>
        </Link>
    )
}