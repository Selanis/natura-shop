import { FunctionComponent } from 'react';
import styles from './pagination.module.css';

type TPropsType = {
    length: number;
}

export const Pagination: FunctionComponent<TPropsType> = () => {

    return (
        <div className={ styles.pagination }>

        </div>
    )
}