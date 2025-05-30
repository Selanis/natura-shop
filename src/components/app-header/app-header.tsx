import { FunctionComponent } from "react";
import { NavIcon } from "../ui-kit/nav-icon/nav-icon";
import styles from './app-header.module.css';
import logo from './logo.svg'
import heart from './heart.svg'
import shoppingCart from './shopping-cart.svg'
import userLogo from './circle-user-round.svg'
import { Link } from "react-router";


export const Header: FunctionComponent = () => {

    return (
        <header>
            <nav className={styles.navigation}>
                <Link to={{
                    pathname: '/'
                }}>
                    <img src={logo} alt='logo' />
                </Link>

                <ul className={styles.navigation_anchors}>
                    <li>О нас</li>
                    <li>Акции</li>
                    <li>Каталог</li>
                    <li>Контакты</li>
                </ul>

                <div className={ styles.navigation_profileLinks }>
                    <Link to={{
                        pathname: '/order'
                    }}>
                        <NavIcon icon={shoppingCart} text="Корзина" />
                    </Link>
                    <NavIcon icon={heart} text="Избранное" />
                    <NavIcon icon={userLogo} text="Профиль" />
                </div>
            </nav>
        </header>
    )
}