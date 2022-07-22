import React from 'react';
import styles from './styles/Footer.module.css'
import logoImage from '../../images/logo.svg'
import logo2Image from '../../images/logo2.svg'

const Footer = ({...props}) => {
    return (
        <div className={styles.footer} {...props}>
            <div className={styles.footer__textBox}>
                <div style={{display:'flex',justifyContent:'center',marginBottom:10}}>
                    <p className={styles.footer__title}>Остались вопросы?</p>
                    <p className={styles.footer__link}>Напишите нам!</p>
                </div>
                <div>
                    <p className={styles.footer__title}>
                        2022 Сириус. Большие вызовы (Умный Город и безопасность)
                    </p>
                    <p className={styles.footer__title}>
                        Сканер Умного Города
                    </p>
                </div>
            </div>
            <div className={styles.footer__imageBox}>
                <img src={logoImage} alt="logo" className={styles.footer__image}/>
            </div>
        </div>
    );
};

export default Footer;