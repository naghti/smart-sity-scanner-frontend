import React from 'react';
import styles from './styles/AccountStatus.module.css'
import changeStatusImage from '../../images/changeStatus.svg'
import PostService from "../../API/PostServise";
import { useNavigate } from 'react-router-dom';

const AccountStatus = ({status, permissions}) => {
    console.log(permissions)
    const navigate = useNavigate();

    async function changeStatus() {
        let StoragePassword = localStorage.getItem('password');
        let password = prompt('введите ваш пароль?', '');
        if (StoragePassword == password){
            let Result = await PostService.changePermissions(1)

            if (Result?.error == undefined) {
                alert('вы теперь бизнес!')
                navigate(0)
            }
            else alert(Result.error)
        }else{
            alert('неправильный пароль')
        }
    }

    return (
        <div  className={styles.accountStatus__box}>
            <div onClick={() => changeStatus()} style={{display: permissions != 0 ? 'none' : 'block'}}>
                <img
                    className={styles.accountStatus__changeStatus}
                    src={changeStatusImage}
                    alt=""
                />
            </div>
            <div className={styles.accountStatus}>
                <p className={styles.accountStatus__text + ' ' + styles.accountStatus__text_bold}>
                    Статус аккаунта:
                </p>
                <p className={styles.accountStatus__text}>
                    {status}
                </p>
            </div>
        </div>
    );
};

export default AccountStatus;