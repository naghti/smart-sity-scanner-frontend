import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./styles/index.module.css"
import MailConfirmationStyles from "./styles/MailConfirmation.module.css"
import townImage from "../images/town.png"
import LightBlueButton from "../components/buttons/LightBlueButton";
import TitleInput from "../components/Inputs/TitleInput";


const MailConfirmation = () => {
    const router = useNavigate()
    const params = useParams()

    // возможность скрыть пароль и открыть
    const [passwordHide,setPasswordHide] = useState(true)

    // проверка валидности роли в url
    // if(
    //     !state.roles
    //         .filter((e) => e == params.role)
    //         .length
    // ){
    //     return <UnknowPage/>
    // }

    function login() {
        if (params.role == "administration") {
            router('/control')
        }
        if (params.role == "citizen") {
            router('/scanner/citizen')
        }
    }

    return (
        // <button onClick={() => router(`/section`)} >buttonbuttonbutton</button>
        <div className={styles.index}>
            <div className={styles.index__box}>
                <img src={townImage} alt="town" className={styles.index__image}/>
                <h2 className={styles.index__title}>Сканер Умного Города</h2>

                <div className={styles.index__form}>
                    <h5 className={styles.index__formTitle}>Подтверждение email</h5>

                    <div style={{width:300,margin:'40px 0 10px'}}>
                        <TitleInput
                            text={'код'}
                            type={"text"}
                        />
                            <p className={MailConfirmationStyles.p}>
                                Введите код который был отправлен на вашу почту
                            </p>
                    </div>

                    <LightBlueButton
                        text={'Подтвердить email'}
                        click={() => login()}
                    />

                </div>

            </div>
        </div>
    );
};

export default MailConfirmation;