import { FunctionComponent } from 'react';
import styles from './like.module.css';

export const LikeButton: FunctionComponent = () => {

    return (
        <button className={ styles.likeButton }>
            <img src="./images/like-disabled.svg" width="21px" height="19px" alt="like-button" />
        </button>
    )
}