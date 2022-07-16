import React from 'react';
import Loader1Image from '../images/loader1.svg'
import Loader2Image from '../images/loader2.svg'
import styles from './styles/Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={Loader1Image} alt="loader" className={styles.loader__item1}/>
            <img src={Loader2Image} alt="loader" className={styles.loader__item2}/>
        </div>
    );
};

export default Loader;