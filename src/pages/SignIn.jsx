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
    if(
        !state.roles.filter((e) => e == params.role)
        .length
    ){
        router(`/`)
    }
    const [passwordHide,setPasswordHide] = useState(true)

    function login() {
        if (params.role == "administration") {
            router('/control')
        }
    }

    return (
        // <button onClick={() => router(`/section`)} >buttonbuttonbutton</button>
        <div className={styles.index}>
            <div className={styles.index__box}>
                <img src={townImage} alt="town" className={styles.index__image}/>
                <h2 className={styles.index__title}>Сканер Умного Города</h2>

                <div className={styles.index__form}>
                    <h5 className={styles.index__formTitle}>Войти на сайт</h5>

                    <div style={{width:300,margin:'40px 0 20px'}}>
                        <TitleInput
                            value={'логин'}
                            image={peopleImage}
                            type={"text"}
                        />
                        <TitleInput
                            value={'пароль'}
                            image={crossedEyeImage}
                            type={ passwordHide ? "password" : "text"}
                            onClick={() => setPasswordHide(!passwordHide)}
                        />
                    </div>

                    <BlueButton
                        text={'Войти'}
                        click={() => login()}
                    />
                    {
                        params.role == undefined || params.role == "citizen"
                            ?
                                <WhiteButton text={'Войти через Госуслуги'}/>
                            :
                                <></>
                    }

                    <p className={styles.index__grayText}>У вас все еще нет аккаунта?</p>
                    <p
                        className={styles.index__grayText + ' ' + styles.index__darkText}
                        onClick={() => router('/signup')}
                    >Зарегистрироваться</p>
                </div>

            </div>
        </div>
    );
};

export default SignIn;