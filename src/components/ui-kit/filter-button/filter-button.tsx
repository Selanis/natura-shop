import { FunctionComponent } from 'react';
import styles from './filter-button.module.css';
import { useDispatch } from '../../../utils/hooks';
import { changeCategoryAction } from '../../../services/actions/product-action';

type TPropsType = {
    text: string;
    type: string;
    active: string;
}

export const FilterButton: FunctionComponent<TPropsType> = ({ text, active, type }) => {
    const dispatch = useDispatch();

    const changeCategory = () => {
        dispatch(changeCategoryAction(type))
    }

    return (
        <p className={`${styles.filterButton} ${active === type && styles.active}`} onClick={changeCategory}>
            { text }
        </p>
    )
}