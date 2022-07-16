import React, {useEffect, useState} from 'react';
import Header from "../components/headers/Header";
import HeaderTitle from "../components/headers/HeaderTitle";
import backgroundImage from '../images/background.png'
import scannerStyles from './styles/SmartCityScanner.module.css'
import calculatorStyles from './styles/Calculator.module.css'
import AccountStatus from "../components/boxs/AccountStatus";
import state from '../states/state'
import Footer from "../components/footers/Footer";
import {useNavigate} from "react-router-dom";
import PostService from "../API/PostServise";

const Calculator = () => {

    const router = useNavigate()

    function funcNull() {
        alert(1)
    }
    function funcSuccess(result) {
        if (result.email == 0) router('/mailconfirmation')
        else if(result.permissions != 2){
            router('/scanner')
        }
        else{}
    }
    useEffect(() => {
        PostService.checkStorage(funcNull,funcSuccess)
    },[])


    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}}>
            <div>
                <Header/>
                <HeaderTitle
                    background={backgroundImage}
                    text={'Области цифровизации городского хозяйства'}
                />
            </div>
            <div className={scannerStyles.smartCityScanner__box}>
                <p className={scannerStyles.smartCityScanner__title}>
                    Данный раздел позволяет рассчитать показатели цифровизации городского хозяйства согласно стандарту Умного Города в
                    соответствии с приказом Минстроя №357/пр от 11.05.2022 г. </p>
                <div style={{margin:'20px 0',display:'flex', justifyContent:'flex-end'}}>
                    <AccountStatus status={'Городская администрация'} />
                </div>
                <div className={calculatorStyles.сalculator__selection}>
                    {
                        state.CalculatorSelections.map((selection,index) => (
                            <div
                                className={scannerStyles.smartCityScanner__item}
                                style={{
                                    gridArea:`rei${++index}`,
                                    background:`
                                        linear-gradient(
                                            180deg,
                                            rgba(67, 106, 235, 0) 0%,
                                            #436AEB 87.81%, #436AEB 100%),
                                            no-repeat center/103% 103%
                                            url(${selection.photo})
                                    `}}
                                onClick={() => {
                                    router(`${selection.name}`)
                                }}
                            >
                                <p
                                    className={scannerStyles.smartCityScanner__selectTitle}
                                >
                                    {selection.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Calculator;