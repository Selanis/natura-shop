import { FunctionComponent, RefObject, useState } from "react";
import { NavIcon } from "../ui-kit/nav-icon/nav-icon";
import styles from './app-header.module.css';
import logo from './logo.svg'
import heart from './heart.svg'
import shoppingCart from './shopping-cart.svg'
import userLogo from './circle-user-round.svg'
import burgerMenu from './burger_menu.svg'
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from 'framer-motion'

type TPropsType = {
    goToFrame: (ref: any) => void;
    aboutRef: RefObject<null>;
    specialOfferRef: RefObject<null>;
    catalogRef: RefObject<null>;
    contactRef: RefObject<null>;
}

export const Header: FunctionComponent<TPropsType> = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isMenuShown, setMenuShown] = useState(false);

    const goToFrameFunc = async (ref: any) => {
        location.pathname !== '/' && navigate('/');
        await new Promise(resolve => setTimeout(resolve, 300));
        props.goToFrame(ref);
    }

    return (
        <header>
            <nav className={styles.navigation}>
                <Link to={{
                    pathname: '/'
                }}>
                    <img src={logo} alt='logo' />
                </Link>

                <ul className={styles.navigation_anchors}>
                    <li onClick={ () => goToFrameFunc(props.aboutRef) }>О нас</li>
                    <li onClick={ () => goToFrameFunc(props.specialOfferRef) }>Акции</li>
                    <li onClick={ () => goToFrameFunc(props.catalogRef) }>Каталог</li>
                    <li onClick={ () => goToFrameFunc(props.contactRef) }>Контакты</li>
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

                <img src={burgerMenu} className={styles.navigation_burgerMenu} alt="menu" onClick={() => setMenuShown(!isMenuShown)} />
            </nav>
            {isMenuShown &&
                <motion.div
                    animate={{
                        opacity: [ 0, 2 ],
                        scale: [0, 1]
                    }}
                >
                    <ul className={styles.burgerMenu}>
                        <li onClick={ () => navigate('/order') }>
                            Корзина
                        </li>
                        <li>Профиль</li>
                        <li>Избранное</li>

                        <li onClick={ () => goToFrameFunc(props.aboutRef) }>О нас</li>
                        <li onClick={ () => goToFrameFunc(props.specialOfferRef) }>Акции</li>
                        <li onClick={ () => goToFrameFunc(props.catalogRef) }>Каталог</li>
                        <li onClick={ () => goToFrameFunc(props.contactRef) }>Контакты</li>
                    </ul>
                </motion.div>
            }
        </header>
    )
}