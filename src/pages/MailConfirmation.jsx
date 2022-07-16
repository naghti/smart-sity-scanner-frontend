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

    const [code,setCode] = useState("")
    const [disabled,setDisabled] = useState(false)

    async function mailConfirmation(){
        setDisabled(true)
        let StorageToken = localStorage.getItem('token');
        const MailConfirmation = await PostService.postMailConfirmation(StorageToken,code)

        if (MailConfirmation?.error == undefined) {
            localStorage.removeItem('info');
            router('/control')
        }
        else alert(MailConfirmation.error)
        console.log(MailConfirmation)
        setDisabled(false)

    }

    function funcNull() {
        router('/signin')
    }
    function funcSuccess(result) {
        if (result.email == 0) router('/mailconfirmation')
        else if(result.permissions == 2){
            state.permissions = 2
            router('/control')
        }
        else{
            router('/scanner')
        }
    }
    useEffect(() => {
        PostService.checkStorage(funcNull,funcSuccess)
    },[])

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
                        style={{color:'rgb(2,174,208)'}}
                        onClick={() => router('/signup')}
                    >
                        назад
                    </p>

                </div>

            </div>
        </div>
    );
};

export default MailConfirmation;