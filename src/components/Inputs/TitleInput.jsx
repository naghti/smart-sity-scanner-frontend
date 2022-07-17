import React, {useState} from 'react';
import styles from './styles/TitleInput.module.css'

const TitleInput = ({ text , image , type , placeholder , required , start , value , changeValue , ...props}) => {

    let [error,setError] = useState(false)
    let [errorMessage,setErrorMessage] = useState('')

    function requiredCheck(e) {
        if (required){

            if( e.target.value == '' ){
                setError(true)
                setErrorMessage(`${text} не может быть пустым`)
            }

        }
    }

    return (
        <div className={styles.titleInput}>
            <p className={styles.titleInput__title}>{text}</p>
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
                {
                    start &&
                    <p
                        className={styles.titleInput__start}
                    >
                        {start}
                    </p>
                }
                <input
                    type={type}
                    value={value}
                    onChange={(e) => changeValue(e.target.value)}
                    placeholder={
                        error
                        ?
                            errorMessage
                        :
                            `${placeholder ? placeholder : 'Введите ' + text}`
                    }

                    onBlur={
                        (e) => requiredCheck(e)
                    }

                    className={
                        error
                        ?
                            styles.titleInput__input
                            + ' ' +
                            styles.titleInput__input_error
                        :
                            styles.titleInput__input
                    }
                />
            </div>
        </div>
    );
};

export default TitleInput;