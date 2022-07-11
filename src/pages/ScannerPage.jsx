import React, {useEffect} from 'react';
import CalculatorPageStyles from './styles/CalculatorPage.module.css'
import ScannerPageStyles from './styles/ScannerPage.module.css'
import Header from "../components/headers/Header";
import WhiteButton2 from "../components/buttons/WhiteButton2";
import BlueButton from "../components/buttons/BlueButton";
import downloadImage from '../images/download.png'
import Footer from "../components/footers/Footer";
import {useNavigate, useParams} from "react-router-dom";
import CalculatorButtonsInfo from "../states/calculatorButtonsInfo";
import UnknowPage from "./UnknowPage";
import state from "../states/state";
import SmartCityScannerAdministrationButtonsInfo from "../states/SmartCityScannerAdministrationButtonsInfo";
import SmartCityScannerCitizenButtonsInfo from "../states/SmartCityScannerCitizenButtonsInfo";

const ScannerPage = () => {

    const params = useParams()
    const router = useNavigate()

    const title = params.role == 'administration'
        ?
            'Выберите внедренные решения'
        :
            'Выберите 3 системы*, которые вы хотели бы увидеть в вашем городе.'

    const pages = params.role == 'administration'
        ?
            SmartCityScannerAdministrationButtonsInfo.info
        :
            SmartCityScannerCitizenButtonsInfo.info

    const activePage = pages[params.page]

    // проверка валидности страницы из url
    if (activePage == undefined) return <UnknowPage/>

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}}>
            <div>
                <Header/>
                <div className={CalculatorPageStyles.calculatorPage__titleBox} >
                    <h3
                        className={CalculatorPageStyles.calculatorPage__title}
                    >
                        {activePage.title}
                    </h3>
                </div>
            </div>

            <div className={CalculatorPageStyles.calculatorPage__box} >
                <div className={CalculatorPageStyles.calculatorPage__content}>
                    <div className={CalculatorPageStyles.calculatorPage__contentInfo}>
                        <h4 className={CalculatorPageStyles.calculatorPage__contentTitle}>
                            {title}
                        </h4>
                        <div style={{paddingLeft:70}}>
                            {
                                activePage.inputs.map(item => (
                                    <>
                                        <div className={CalculatorPageStyles.calculatorPage__inputBox} >
                                            <div style={{display: 'flex', margin: '10px 0',alignItems:'center'}}>
                                                <input
                                                    type="checkbox"
                                                    placeholder={'Введите количество '}
                                                    className={ScannerPageStyles.scannerPage__checkbox}
                                                />
                                                <div>
                                                    <h4 className={ScannerPageStyles.scannerPage__checkboxTitle}>
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <p className={CalculatorPageStyles.calculatorPage__inputTitle}>
                                            {item.info}
                                        </p>
                                    </>
                                ))
                            }
                        </div>

                    </div>
                </div>
                <div className={CalculatorPageStyles.calculatorPage__buttons}>
                    <WhiteButton2
                        text={'Сохранить'}
                        className={CalculatorPageStyles.calculatorPage__button}
                    />
                    <BlueButton
                        text={'Сохранить и отправить'}
                        className={CalculatorPageStyles.calculatorPage__button}
                    />
                </div>

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default ScannerPage;