import React from 'react';
import styles from './styles/MobileMenu.module.css'
import state from "../states/state";
import burgerMenuImage from '../images/burgerMenu.png'

const MobileMenu = () => {
    return (
        <div className={styles.mobileMenu_box} onClick={() => state.mobileMenu = false}>
            <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.mobileMenu__header}>
                    <img
                        src={burgerMenuImage}
                        alt="menu"
                        className={styles.mobileMenu__image}
                        onClick={() => state.mobileMenu = false}
                    />
                </div>
                <div className={styles.mobileMenu__itemsBox}>
                    <h5 className={styles.mobileMenu__itemTitle}>Результаты</h5>
                    <h5 className={styles.mobileMenu__itemTitle}>Перейти в другой раздел</h5>
                    <h5 className={styles.mobileMenu__itemTitle}>Выйти</h5>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;