import React, {useState,useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./styles/index.module.css"
import townImage from "../images/town.png"
import LightBlueButton from "../components/buttons/LightBlueButton";
import state from "../states/state";
import PostService from "../API/PostServise";
const SelectRole = () => {
    const router = useNavigate()


    function funcNull() {
        alert('SelectRole юзер не найден')
    }
    function funcSuccess(result) {
        alert('SelectRole юзер найден???')
        if (result.email == 0) router('/mailconfirmation')
        else{
            console.log(result)
            router('/scanner')
        }
    }
    useEffect(() => {
        PostService.checkStorage(funcNull,funcSuccess)
    },[])

    return (
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

                        <div className={styles.index__selectRole}>
                            <LightBlueButton text={'Администрация'} click={() => router(`/signup/administration`)}/>
                            <LightBlueButton text={'Бизнес'} click={() => router(`/signup/business`)}/>
                            <LightBlueButton text={'Житель'} click={() => router(`/signup/citizen`)}/>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default SelectRole;