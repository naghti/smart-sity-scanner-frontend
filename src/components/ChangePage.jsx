import React from 'react';
import styles from './styles/ChangePage.module.css'
import arrowImage from '../images/arrow.svg'
const ChangePage = ({title,deg,click,...props}) => {
    return (
        <div className={styles.changePage} onClick={() => click()} {...props}>
            <div className={styles.changePage__icon}>
                <img src={arrowImage} alt="arrow" style={{transform: `rotate(${deg}deg)`}}/>
            </div>
            <div className={styles.changePage__titleBox}>
                <p className={styles.changePage__title}>
                    {title}
                </p>
            </div>

        </div>
    );
};

export default ChangePage;