import { FunctionComponent, RefObject } from "react";
import { SpecialOffer } from "../special-offer/special-offer";

import styles from './main.module.css'
import { PrimaryButton } from "../ui-kit/primary-button/primary-button";
import { Catalog } from "../catalog/catalog";

type TPropsType = {
    goToFrame: (ref: any) => void;
    aboutRef: RefObject<null>;
    specialOfferRef: RefObject<null>;
    catalogRef: RefObject<null>;
}

export const Main: FunctionComponent<TPropsType> = (props) => {

    return (
        <div className={ styles.mainContainer }>
            <div className={ styles.main } ref={props.aboutRef}>
                <div className={ styles.main_textContainer }>
                    <div className={ styles.main_textContainer_article }>
                        <h1>Натуральная косметика</h1>
                        <h3>Выбирая косметику в интернет-магазине Natura, вы можете быть уверены в ее качестве и безопасности для вашей кожи и волос. Приходите к нам за натуральной красотой!</h3>
                    </div>

                    <PrimaryButton text="Посмотреть каталог" />
                </div>

                <img src="./images/main-background.png" alt="main-background" />
            </div>

            <SpecialOffer componentRef={props.specialOfferRef} />

            <img src="./images/banner.png" alt="banner" />

            <Catalog componentRef={props.catalogRef} />
        </div>
    )
}