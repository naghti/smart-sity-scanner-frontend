import React from 'react';
import styles from './styles/HeaderTitle.module.css'

const HeaderTitle = ({background,text}) => {
    return (
        <div
            className={styles.headerTitle}
            style={{background: `center/cover url(${background})`}}
        >
            <div
                style={{
                    width: '100%', maxWidth: 1300, margin: '0 auto'
                }}
            >
                <h4
                    className={styles.headerTitle__title}
                >{text}</h4>
            </div>
        </div>
    );
};

export default HeaderTitle;