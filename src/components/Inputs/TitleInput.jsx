import React, {useState} from 'react';
import styles from './styles/TitleInput.module.css'

const TitleInput = ({value,image,type,placeholder,required, ...props}) => {

    let [error,setError] = useState(false)
    let [errorMessage,setErrorMessage] = useState('')

    function requiredCheck(e) {
        if (required){

            if( e.target.value == '' ){
                setError(true)
                setErrorMessage(`${value} не может быть пустым`)
            }

        }
    }

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
                    placeholder={
                        error
                        ?
                            errorMessage
                        :
                            `Введите ${placeholder ? placeholder : value}`
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