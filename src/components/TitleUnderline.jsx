import React from 'react';
import styles from './styles/TitleUnderline.module.css'

const TitleUnderline = ({name,color,...props}) => {
    return (
        <div className={styles.titleUnderline} {...props}>
            <h3
                className={styles.titleUnderline__title}
            >
                {name}
            </h3>

            <div
                style={{background: color}}
                className={styles.titleUnderline__underline}
            ></div>
        </div>
    );
};

export default TitleUnderline;