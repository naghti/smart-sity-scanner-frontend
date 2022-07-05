import React from 'react';
import styles from './styles/BlueButton.module.css'

const BlueButton = ({text,click}) => {
    return (
        <button className={styles.button} onClick={() => click()}>
            <p className={styles.button__p}>
                {text}
            </p>
        </button>
    );
};

export default BlueButton;