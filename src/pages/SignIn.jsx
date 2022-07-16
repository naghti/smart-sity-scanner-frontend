import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./styles/index.module.css"
import townImage from "../images/town.png"
import LightBlueButton from "../components/buttons/LightBlueButton";
import WhiteButton from "../components/buttons/WhiteButton";
import TitleInput from "../components/Inputs/TitleInput";
import peopleImage from '../images/people.png'
import crossedEyeImage from '../images/crossedEye.png'
import state from "../states/state";
import UnknowPage from "./UnknowPage";
import PostService from "../API/PostServise";

const SignIn = () => {
    const router = useNavigate()
    const params = useParams()

    const [info,setInfo] = useState({
        login: '',
        password: '',
    })

    // возможность скрыть пароль и открыть
    const [passwordHide,setPasswordHide] = useState(true)

    // проверка валидности роли в url
    if(
        !state.roles
        .filter((e) => e == params.role)
        .length
    ){
        return <UnknowPage/>
    }

    async function login() {
        const Authorization = await PostService.postAuthorization(info)

        if (Authorization?.error == undefined) {
            router('/scanner/citizen')
        }
        else alert(Authorization.error)
    }

    return (
        // <button onClick={() => router(`/section`)} >buttonbuttonbutton</button>
        <div className={styles.index}>
            <div className={styles.index__box}>
                <img src={townImage} alt="town" className={styles.index__image}/>
                <h2 className={styles.index__title}>Сканер Умного Города</h2>

                <div className={styles.index__form}>
                    <h5 className={styles.index__formTitle}>Войти на сайт</h5>

                    <div style={{width:300,margin:'40px 0 10px'}}>
                        <TitleInput
                            text={'логин'}
                            value={info.login}
                            changeValue={(e) => {
                                setInfo({...info,login: e })
                            }}
                            image={peopleImage}
                            type={"text"}
                        />
                        <TitleInput
                            text={'пароль'}
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