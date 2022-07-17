import React, {useState,useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./styles/index.module.css"
import townImage from "../images/town.png"
import LightBlueButton from "../components/buttons/LightBlueButton";
import PostService from "../API/PostServise";
import state from "../states/state";
import ScannerInfo from "../states/scannerInfo";

const SelectControl = () => {
    const router = useNavigate()


    function funcNull() {
        state.loader = false
        router('/signin')
    }
    function funcSuccess(result) {
        state.loader = false
        if (result.email == 0) router('/mailconfirmation')
        else if(result.permissions == 0){
            router('/scanner')
        }
        else if(result.permissions == 1){
            router('/scanner')
        }
        else if(result.permissions == 2){
            state.permissions = 2
        }
        else{
        }
    }
    useEffect(() => {
        state.loader = true
        PostService.checkStorage(funcNull,funcSuccess)
    },[])

    return (
        <div className={styles.index}>
            <div className={styles.index__box}>
                <img src={townImage} alt="town" className={styles.index__image}/>
                <h2 className={styles.index__title}>Сканер Умного Города</h2>

                <div className={styles.index__form}>

                    <div className={styles.index__selectRole}>
                        <LightBlueButton
                            text={'Калькулятор определения уровня цифровизации городского хозяйства'}
                            click={() => router(`/calculator`)}
                        />
                        <LightBlueButton
                            text={'Сканер Умного Города'}
                            click={() => router(`/scanner`)}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SelectControl;