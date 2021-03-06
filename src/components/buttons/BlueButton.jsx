import React from 'react';
import styles from './styles/BlueButton.module.css'

const BlueButton = ({text,img,className,...props}) => {
    return (
        <button className={className ? styles.button + ' ' +  className: styles.button} {...props}>
            {
                text &&
                <p className={styles.button__p}>
                    {text}
                </p>
            }
            {
                img &&
                <img src={img}  className={styles.button__img}/>
            }
        </button>
    );
};

export default BlueButton;