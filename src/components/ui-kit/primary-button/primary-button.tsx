import { FunctionComponent } from "react";
import styles from "./primary-button.module.css";

type TPropsType = {
    text: string;
}

export const PrimaryButton: FunctionComponent<TPropsType> = ({ text }) => {

    return (
        <button className={ styles.primaryButton }>
            { text }
        </button>
    )
}