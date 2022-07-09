import React from 'react';
import styles from './styles/LightBlueButton.module.css'

const LightBlueButton = ({text,click}) => {
    return (
        <button className={styles.button} onClick={() => click()}>
            <p className={styles.button__p}>
                {text}
            </p>
        </button>
    );
};

export default LightBlueButton;