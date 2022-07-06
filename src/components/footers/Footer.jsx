import React from 'react';
import styles from './styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footer__title}>
                2022 Сириус. Большие вызовы (Умный Город и безопасность)
            </p>
            <p className={styles.footer__title}>
                Сканер Умного Города
            </p>
        </div>
    );
};

export default Footer;