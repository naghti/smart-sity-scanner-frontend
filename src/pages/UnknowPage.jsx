import React from 'react';
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import styles from './styles/UnknowPage.module.css'

const UnknowPage = () => {
    return (
        <div className={styles.unknowPage}>
            <Header/>
            <div className={styles.unknowPage__content}>
                <h4 className={styles.unknowPage__title}>404</h4>
                <h6 className={styles.unknowPage__text}>Неизвестная страница</h6>
            </div>
            <Footer/>
        </div>
    );
};

export default UnknowPage;