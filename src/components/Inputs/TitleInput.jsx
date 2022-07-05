import React from 'react';
import styles from './styles/TitleInput.module.css'

const TitleInput = ({value,image,type,placeholder, ...props}) => {
    return (
        <div className={styles.titleInput}>
            <p className={styles.titleInput__title}>{value}</p>
            <div className={styles.titleInput__inputBox}>
                {
                    image != undefined &&
                        <img
                            src={image}
                            alt="image"
                            className={styles.titleInput__image}
                            {...props}
                        />
                }

                <input
                    type={type}
                    placeholder={`Введите ${placeholder ? placeholder : value}`}
                    className={styles.titleInput__input}
                />
            </div>
        </div>
    );
};

export default TitleInput;