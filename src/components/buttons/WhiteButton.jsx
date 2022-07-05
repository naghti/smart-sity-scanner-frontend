import React from 'react';
import styles from './styles/WhiteButton.module.css'

const WhiteButton = ({text}) => {
    return (
        <button className={styles.button}>
            <p className={styles.button__p}>
                {text}
            </p>
        </button>
    );
};

export default WhiteButton;