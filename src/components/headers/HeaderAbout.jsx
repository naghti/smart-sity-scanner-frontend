import React from 'react';
import styles from './styles/Header.module.css'
import logoImage from '../../images/logo.svg'
import {useNavigate} from "react-router-dom";
import burgerMenuImage from '../../images/burgerMenu.png'
import state from "../../states/state";

const HeaderAbout = () => {

    const router = useNavigate()

    function menu() {
        state.mobileMenu = true
    }
    return (
        <div className={styles.header} style={{justifyContent:'space-between'}}>
            <div className={styles.header__logo}>
                <img src={logoImage} alt="logo"/>
            </div>
            <div className={styles.header__titleBox}>
                <p className={styles.header__title_active}>О Сканере Умного Города</p>
                <p className={styles.header__title}>Обратная связь</p>
                <p className={styles.header__title}>Войти</p>
            </div>
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

export default HeaderAbout;