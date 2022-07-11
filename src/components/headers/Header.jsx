import React from 'react';
import styles from './styles/Header.module.css'
import logoImage from '../../images/logo.svg'
import {useNavigate} from "react-router-dom";

const Header = () => {

    const router = useNavigate()

    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <img src={logoImage} alt="logo"/>
            </div>
            <div className={styles.header__titleBox}>
                <p className={styles.header__title}>Результаты</p>
                <p
                    className={styles.header__title}
                    onClick={() => router(`/control`)}
                >Перейти в другой раздел</p>
            </div>
        </div>
    );
};

export default Header;