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


    function exit() {
        state.mobileMenu = false
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        router('/signin')
    }

    return (
        <div className={styles.header}>
            <div style={{display: 'flex'}}>

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
                            <p className={styles.header__title}>Личный кабинет</p>
                            <p
                                className={styles.header__title}
                                onClick={() => router(`/control`)}
                            >Возможности</p>
                        </div>
                    </>
                }
            </div>
            <div>
                <div className={styles.header__titleBox}>
                    <p
                        className={ styles.header__title }
                        onClick={() => router(`/`)}
                    >
                        О Сканере Умного Города
                    </p>
                    <p
                        className={ styles.header__title }
                        onClick={() => router(`/feedback`)}
                    >
                        Обратная связь
                    </p>
                    <p
                        className={styles.header__title}
                        onClick={() => exit()}
                    >
                        Выйти
                    </p>
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
        </div>
    );
};

export default Header;