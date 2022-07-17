import React from 'react';
import styles from './styles/WhiteButton2.module.css'

const WhiteButton2 = ({text,className, ...props}) => {
    return (
        <button
            className={className ? className + ' ' + styles.button : styles.button}
            {...props}
        >
            <p className={styles.button__p}>
                {text}
            </p>
        </button>
    );
};

export default WhiteButton2;