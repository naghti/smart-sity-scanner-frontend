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
import scannerBusinessStyles from "./styles/SmartCityScannerBusiness.module.css";
import {useNavigate} from "react-router-dom";
import SmartCityScannerBusinessButtonsInfo from "../states/SmartCityScannerBusinessButtonsInfo";

const SmartCityScannerBusiness = () => {

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
                    <AccountStatus status={'Бизнес'} />
                </div>

                <TitleUnderline
                    name={'Городское хозяйство'}
                    color={'rgba(10, 58, 215, 1)'}
                />
                <div className={scannerBusinessStyles.smartCityScannerBusiness__selectionUrbanEconomy}>
                    {
                        state.CalculatorSelectionsBusiness.urbanEconomy.map((selection,index) => (
                            <div
                                className={scannerStyles.smartCityScanner__item}
                                style={{
                                    gridArea:`businessUrbanEconomy${++index}`,
                                    background:`
                                        linear-gradient(
                                            180deg,
                                            rgba(67, 106, 235, 0) 0%,
                                            #436AEB 87.81%, #436AEB 100%),
                                            no-repeat center/cover
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

                <TitleUnderline
                    name={'Социальная сфера'}
                    color={'rgb(255, 157, 64)'}
                    style={{marginTop:60}}
                />
                <div className={scannerBusinessStyles.smartCityScannerBusiness__selectionSocialSphere}>
                    {
                        state.CalculatorSelectionsBusiness.socialSphere.map((selection,index) => (
                            <div
                                className={scannerStyles.smartCityScanner__item}
                                style={{
                                    gridArea:`businessSocialSphere${++index}`,
                                    background:`
                                            linear-gradient(
                                            rgba(255, 124, 0, 0) 0%,
                                            rgb(255, 124, 0) 87.81%,
                                            rgb(255, 124, 0) 100%),
                                            no-repeat center/cover
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

export default SmartCityScannerBusiness;