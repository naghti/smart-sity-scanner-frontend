import React from 'react';
import styles from './styles/Header.module.css'
import logoImage from '../../images/logo.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <img src={logoImage} alt="logo"/>
            </div>
        </div>
    );
};

export default Header;