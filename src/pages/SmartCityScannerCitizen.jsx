import React, {useState} from 'react';
import Header from "../components/headers/Header";
import HeaderTitle from "../components/headers/HeaderTitle";
import backgroundImage from '../images/background.png'
import styles from './styles/SmartCityScanner.module.css'
import AccountStatus from "../components/boxs/AccountStatus";
import state from '../states/state'
import Footer from "../components/footers/Footer";
import TitleUnderline from "../components/TitleUnderline";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import calculatorStyles from "./styles/Calculator.module.css";
import scannerStyles from "./styles/SmartCityScanner.module.css";
import scannerCitizenStyles from "./styles/SmartCityScannerCitizen.module.css";
import {useNavigate} from "react-router-dom";

const SmartCityScannerCitizen = () => {

    let [active,setActive] = useState(false)
    const router = useNavigate()

    return (
        <div>
            <Header/>
            <HeaderTitle
                background={backgroundImage}
                text={'Области цифровизации городского хозяйства'}
            />
            <div className={styles.smartCityScanner__box}>
                <p className={styles.smartCityScanner__title}>
                    В данном разделе Вы можете ознакомиться с перечнем умных решений для жителей города и проголосовать за внедрение наиболее востребованных цифровых технологий.
                </p>
                <div style={{margin:'20px 0',display:'flex', justifyContent:'flex-end'}}>
                    <AccountStatus status={'Житель'} />
                </div>

                <div className={scannerCitizenStyles.smartCityScannerCitizen__selection}>
                    {
                        state.CalculatorSelectionsCitizen.map((selection,index) => (
                            <div
                                className={scannerStyles.smartCityScanner__item}
                                style={{
                                    gridArea:`CalculatorSelectionsCitizen${++index}`,
                                    background:`
                                        linear-gradient(
                                            180deg,
                                            rgba(67, 106, 235, 0) 0%,
                                            #436AEB 87.81%, #436AEB 100%),
                                            no-repeat center/103% 103%
                                            url(${selection.photo})
                                    `}}
                                onClick={() => {
                                    // router(`${selection.name}`)
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

export default SmartCityScannerCitizen;