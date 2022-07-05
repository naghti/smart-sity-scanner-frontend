import React from 'react';
import styles from './styles/HeaderTitle.module.css'

const HeaderTitle = ({background,text}) => {
    return (
        <div
            className={styles.headerTitle}
            style={{background: `url(${background})`}}
        >
            <h4
                className={styles.headerTitle__title}
            >{text}</h4>
        </div>
    );
};

export default HeaderTitle;