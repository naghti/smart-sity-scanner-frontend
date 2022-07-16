import React from 'react';
import styles from './styles/Header.module.css'
import logoImage from '../../images/logo.svg'
import {useNavigate} from "react-router-dom";
import burgerMenuImage from '../../images/burgerMenu.png'
import state from "../../states/state";

const Header = ({permissions,home}) => {

    const router = useNavigate()

    function menu() {
        state.mobileMenu = true
    }

    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <img
                    src={logoImage}
                    alt="logo"
                    onClick={() => router(`${home}`)}
                />
            </div>
            {
                permissions == 2 &&
                <>
                    <div className={styles.header__titleBox}>
                        <p className={styles.header__title}>Результаты</p>
                        <p
                            className={styles.header__title}
                            onClick={() => router(`/control`)}
                        >Перейти в другой раздел</p>
                    </div>
                </>
            }
            <div className={styles.header__iconBox}>
                <img
                    src={burgerMenuImage}
                    alt="icon"
                    className={styles.header__icon}
                    onClick={() => menu()}
                />
            </div>
        </div>
    );
};

export default Header;