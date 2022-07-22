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
import ReCAPTCHA from "react-google-recaptcha";

const SignIn = () => {
    const router = useNavigate()
    const params = useParams()

    // возможность скрыть пароль и открыть
    const [passwordHide,setPasswordHide] = useState(true)

    // ключенность и отключенность кнопки
    const [disabled,setDisabled] = useState(false)

    // пройдена ли капча
    const [captcha,setCaptcha] = useState(true)

    // получаю из url роль и понимаю ее права доступа
    let roles = {
        'administration': 2,
        'business': 1,
        'citizen': 0
    }

    // информация из формы регистрации
    const [info,setInfo] = useState({
        login: '',
        city: '',
        phone: '',
        email: '',
        password: '',
        permissions: roles[params.role] ? roles[params.role] : 1
    })

    // информация раннее заполненой формы регистрации на случай перезагрузки страницы и тд...
    let StorageInfo = localStorage.getItem('info');

    async function register(){
        // проверка капчи
        if (captcha){
            return alert('пройдите капчу')
        }
        // делаю кнопку отправки регистрации неактивной после клика
        setDisabled(true)

        // отправляю информацию о регистрации на сервер
        const Registration = await PostService.postRegistrationForm(info)

        console.log(Registration)

        // если ошибок нету то
        if (Registration?.error == undefined) {
            // state.info = info
            localStorage.setItem('password', info.password);
            localStorage.setItem('token', Registration.token);
            localStorage.setItem('info', JSON.stringify(info));

            let StorageToken = localStorage.getItem('token');
            let StoragePassword = localStorage.getItem('password');
            console.log([StorageToken,StoragePassword])

            // перенаправляю на страницу подтверждения почты
            router(`/mailconfirmation`)
        }
        // если ошибки есть то вывожу на страницу
        else alert(`error: ${Registration?.error}`)

        // активирую кнопку регистрации
        setDisabled(false)
    }

    function funcNull() {
    }
    function funcSuccess(result) {
        if (result.email == 0) {
            if (state.info == undefined) router(`/mailconfirmation`)
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
        // если форма регистрации еще не была заполнена
        // то делаю проверку на существование юзера
        if (StorageInfo == null){
            PostService.checkStorage(funcNull, funcSuccess)
        }
        // если форма регистрации уже была заполнена
        // топ олучаю старые данные из куки и пихаю в форму
        else{
            setInfo(JSON.parse(StorageInfo))
        }
    },[])


    return (
        // <button onClick={() => router(`/section`)} >buttonbuttonbutton</button>
        <div className={styles.index}>
            <div className={styles.index__box} style={{padding:'40px 10px'}}>
                <img
                    src={townImage}
                    alt="town"
                    className={styles.index__image}
                    onClick={() => router('/selectrole')}
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
                    <div style={{margin:'0 0 5px'}}>
                        <ReCAPTCHA
                            sitekey="6Lf7fQMhAAAAAKnyHeyUrt74Ljj_Ux2suMnEePXt"
                            onChange={() => setCaptcha(false)}
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