import { FunctionComponent } from 'react';
import styles from './nav-icon.module.css';


type TPropsType = {
    icon: string;
    text: string;
}

export const NavIcon: FunctionComponent<TPropsType> = ({ icon, text }) => {
    return (
        <div className={styles.navIcon}>
            <img src={icon} width={34} alt='icon' />
            <h4>{text}</h4>
        </div>
    )
}