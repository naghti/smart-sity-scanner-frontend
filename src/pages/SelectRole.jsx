import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./styles/index.module.css"
import townImage from "../images/town.png"
import LightBlueButton from "../components/buttons/LightBlueButton";
const SelectRole = () => {
    const router = useNavigate()

    return (
        <div className={styles.index}>
            <div className={styles.index__box}>
                <img src={townImage} alt="town" className={styles.index__image}/>
                <h2 className={styles.index__title}>Сканер Умного Города</h2>

                <div className={styles.index__form}>

                        <div className={styles.index__selectRole}>
                            <LightBlueButton text={'Администрация'} click={() => router(`/signin/administration`)}/>
                            <LightBlueButton text={'Бизнес'} click={() => router(`/signin/business`)}/>
                            <LightBlueButton text={'Житель'} click={() => router(`/signin/citizen`)}/>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default SelectRole;