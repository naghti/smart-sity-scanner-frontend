import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./styles/index.module.css"
import townImage from "../images/town.png"
import BlueButton from "../components/buttons/BlueButton";
import WhiteButton from "../components/buttons/WhiteButton";
import TitleInput from "../components/Inputs/TitleInput";
import peopleImage from '../images/people.png'
import crossedEyeImage from '../images/crossedEye.png'
import state from "../states/state";

const SignIn = () => {
    const router = useNavigate()
    const params = useParams()
    console.log(params.role)
    // if(  !state.roles.filter((e) => e == params.role).length  ){
    //     router(`registration/fr`)
    // }
    const [passwordHide,setPasswordHide] = useState(true)

    return (
        // <button onClick={() => router(`/section`)} >buttonbuttonbutton</button>
        <div className={styles.index}>
            <div className={styles.index__box} style={{padding:'50px 0'}}>
                <img src={townImage} alt="town" className={styles.index__image}/>
                <h2 className={styles.index__title}>Сканер Умного Города</h2>

                <div className={styles.index__form}>
                    <h5 className={styles.index__formTitle}>Зарегистрироваться на сайте</h5>

                    <div style={{width:300,margin:'40px 0 20px'}}>
                        <TitleInput
                            value={'ФИО'}
                            type={"text"}
                        />
                        <TitleInput
                            value={'компания'}
                            placeholder={'компанию'}
                            type={"text"}
                        />
                        <TitleInput
                            value={'должость'}
                            type={"text"}
                        />
                        <TitleInput
                            value={'телефон'}
                            type={"tel"}
                        />
                        <TitleInput
                            value={'email'}
                            type={"email"}
                        />
                        <TitleInput
                            value={'пароль'}
                            image={crossedEyeImage}
                            type={ passwordHide ? "password" : "text"}
                            onClick={() => setPasswordHide(!passwordHide)}
                        />
                    </div>

                    <BlueButton text={'Войти'}/>

                    <p className={styles.index__grayText}>У вас уже есть аккаунт?</p>
                    <p
                        className={styles.index__grayText + ' ' + styles.index__darkText}
                        onClick={() => router('/signin')}
                    >Войти</p>
                </div>

            </div>
        </div>
    );
};

export default SignIn;