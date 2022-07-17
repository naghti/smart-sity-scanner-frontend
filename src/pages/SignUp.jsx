import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./styles/index.module.css"
import townImage from "../images/town.png"
import LightBlueButton from "../components/buttons/LightBlueButton";
import WhiteButton from "../components/buttons/WhiteButton";
import TitleInput from "../components/Inputs/TitleInput";
import peopleImage from '../images/people.png'
import crossedEyeImage from '../images/crossedEye.png'
import state from "../states/state";
import PostService from "../API/PostServise";

const SignIn = () => {
    const router = useNavigate()
    const params = useParams()

    // возможность скрыть пароль и открыть
    const [passwordHide,setPasswordHide] = useState(true)
    const [registration,setRegistration] = useState()
    const [disabled,setDisabled] = useState(false)

    const [info,setInfo] = useState({
        login: '',
        city: '',
        phone: '',
        email: '',
        password: '',
    })
    let StorageInfo = localStorage.getItem('info');

    async function register(){
        setDisabled(true)
        console.log(1)
        if (StorageInfo == null) {
            const Registration = await PostService.postRegistrationForm(info)
            await setRegistration(Registration)
            console.log(Registration)

            if (Registration?.error == undefined) {
                state.info = info
                localStorage.setItem('password', info.password);
                localStorage.setItem('token', Registration.token);
                localStorage.setItem('info', JSON.stringify(info));
                router('/mailconfirmation')
            }
            else alert(Registration.error)
        }else{
            router('/mailconfirmation')
        }
        setDisabled(false)
    }

    function funcNull() {
    }
    function funcSuccess(result) {
        if (result.email == 0) {
            if (state.info == undefined) router('/mailconfirmation')
        }
        else if(result.permissions == 2){
            state.permissions = 2
            router('/control')
        }
        else{
            router('/scanner')
        }
    }
    useEffect(() => {
        if (StorageInfo == null){
            PostService.checkStorage(funcNull, funcSuccess)
        }else{
            setInfo(JSON.parse(StorageInfo))
        }
    },[])


    return (
        // <button onClick={() => router(`/section`)} >buttonbuttonbutton</button>
        <div className={styles.index}>
            <div className={styles.index__box} style={{padding:'50px 10px'}}>
                <img
                    src={townImage}
                    alt="town"
                    className={styles.index__image}
                    onClick={() => router('/')}
                />
                <h2 className={styles.index__title}>Сканер Умного Города</h2>

                <div className={styles.index__form}>
                    <h5 className={styles.index__formTitle}>Зарегистрироваться на сайте</h5>

                    <div style={{width:300,margin:'40px 0 20px'}}>
                        <TitleInput
                            text={'ФИО'}
                            type={"text"}
                            required={true}
                            value={info.login}
                            changeValue={(e) => {
                                setInfo({...info,login: e })
                            }}
                        />
                        <TitleInput
                            text={'город'}
                            type={"text"}
                            required={true}
                            value={info.city}
                            changeValue={(e) => {
                                setInfo({...info,city: e })
                            }}
                        />

                        <TitleInput
                            text={'телефон'}
                            type={"tel"}
                            required={true}
                            start={'+7'}
                            value={info.phone}
                            changeValue={(e) => {
                                setInfo({...info,phone: e })
                            }}
                        />
                        <TitleInput
                            text={'email'}
                            type={"email"}
                            required={true}
                            value={info.email}
                            changeValue={(e) => {
                                setInfo({...info,email: e })
                            }}
                        />
                        <TitleInput
                            text={'пароль'}
                            required={true}
                            image={crossedEyeImage}
                            type={ passwordHide ? "password" : "text"}
                            onClick={() => setPasswordHide(!passwordHide)}
                            value={info.password}
                            changeValue={(e) => {
                                setInfo({...info,password: e })
                            }}
                        />
                    </div>

                    <LightBlueButton
                        text={'Зарегистрироваться'}
                        click={() => register()}
                        disabled={disabled}
                    />

                    <p className={styles.index__grayText}>У вас уже есть аккаунт?</p>
                    <p
                        className={styles.index__grayText + ' ' + styles.index__darkText}
                        onClick={() => {
                            router('/signin')
                        }}
                    >Войти</p>
                </div>

            </div>
        </div>
    );
};

export default SignIn;