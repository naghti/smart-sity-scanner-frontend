import React, {useState,useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./styles/index.module.css"
import MailConfirmationStyles from "./styles/MailConfirmation.module.css"
import townImage from "../images/town.png"
import LightBlueButton from "../components/buttons/LightBlueButton";
import TitleInput from "../components/Inputs/TitleInput";
import PostService from "../API/PostServise";
import state from "../states/state";


const MailConfirmation = () => {
    const router = useNavigate()
    const params = useParams()

    // информация поля с кодом
    const [code,setCode] = useState("")
    // отключаю и включаю кнопку отправки на сервер
    const [disabled,setDisabled] = useState(false)

    async function mailConfirmation(){
        // отключаю кнопку
        setDisabled(true)

        let StorageToken = localStorage.getItem('token');

        // отправляю подтвержденние почты на сервер
        const MailConfirmation = await PostService.postMailConfirmation(StorageToken,code)

        // если ошибок нету то
        if (MailConfirmation?.error == undefined) {
            localStorage.removeItem('info');
            router('/control')
        }
        // если есть, то вывожу
        else alert(`error: ${MailConfirmation.error}`)

        console.log(MailConfirmation)
        // включаю кнопку
        setDisabled(false)

    }

    // функция кнопки "назад" если пользователь ввел что-то неправильно
    async function toBack(){
        console.log(params)
        // удаляю ранее заполненого юзера
        await PostService.deleteUser()
        // перенаправляю на новый круг регистрации
        router(`/selectrole`)
    }

    function funcNull(result) {
        // если юзер пытается подтвердить почту но его нету
        // то кидаю на вход
        console.log(result)
        alert('MailConfirmation юзер не найден??? ')
        router('/signin')
    }
    function funcSuccess(result) {
        // если почта юзера не подтвержденна, то заканчиваю проверку на наличие юзера
        if (result.email == 0) {
            return false
        }
        // если почта подтвержденна
        // и юзер это администрация то кидаю на выбор действий
        else if(result.permissions == 2){
            state.permissions = 2
            router('/control')
        }
        // если почта подтвержденна
        // и юзер это житель то кидаю на сканнер
        else{
            router('/scanner')
        }
    }
    useEffect(() => {
        // проверяю наличие юзера в бд
        PostService.checkStorage(funcNull,funcSuccess)
    },[])

    return (
        // <button onClick={() => router(`/section`)} >buttonbuttonbutton</button>
        <div className={styles.index}>
            <div className={styles.index__box}>
                <img
                    src={townImage}
                    alt="town"
                    className={styles.index__image}
                    onClick={() => router('/')}
                />
                <h2 className={styles.index__title}>Сканер Умного Города</h2>

                <div className={styles.index__form}>
                    <h5 className={styles.index__formTitle}>Подтверждение email</h5>

                    <div style={{width:300,margin:'40px 0 10px'}}>
                        <TitleInput
                            text={'код'}
                            type={"text"}
                            value={code}
                            changeValue={(e) => {
                                setCode(e)
                            }}
                        />
                    </div>

                    <LightBlueButton
                        text={'Подтвердить email'}
                        click={() => mailConfirmation()}
                        disabled={disabled}
                    />
                    <p className={MailConfirmationStyles.p}>
                        Введите код, который был отправлен на Вашу почту
                    </p>
                    <p
                        className={MailConfirmationStyles.p}
                        style={{color:'rgb(2,174,208)',cursor: 'pointer'}}
                        onClick={() => toBack()}
                    >
                        назад
                    </p>

                </div>

            </div>
        </div>
    );
};

export default MailConfirmation;