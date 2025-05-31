import { FunctionComponent, RefObject } from 'react';
import styles from './footer.module.css';
import logo from './logo-dark.svg';

type TPropsType = {
    componentRef: RefObject<null>;
}

export const Footer: FunctionComponent<TPropsType> = (props) => {

    return (
        <footer className={ styles.footer } ref={props.componentRef}>
            <div className={ styles.footer_content }>
                <img src={logo} alt="natura-shop" />

                <ul>
                    <li>Личный кабинет</li>
                    <li>Возврат и обмен</li>
                    <li>Регистрация на сайте</li>
                    <li>Пользовательское соглашение</li>
                </ul>

                <ul>
                    <li>О компании</li>
                    <li>Новости</li>
                    <li>Адреса магазинов</li>
                    <li>Работа у нас</li>
                </ul>

                <div className={ styles.footer_content_info }>
                    <p>Контактная информация: 
                        <span> 78888(800)5553535</span>
                    </p>

                    <p>Служба клиентов работает: 
                        <span> Ежедневно с 09:00 до 21:00</span>
                    </p>
                </div>
            </div>

            <div className={ styles.footer_info }>
                <p>
                    !!! Данный “Интернет-магазин” является Pet-проектом все данные о товарах взяты из интернет-магазина Космедэль и не являются действительными для данного сайта. Просьба не воспринимать этот сайт как реальный интернет-магазин
                </p>
            </div>
        </footer>
    )
}