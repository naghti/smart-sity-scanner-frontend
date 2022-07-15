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
import ChangePage from "../components/ChangePage";
import SmartCityScannerBusinessButtonsInfo from "../states/SmartCityScannerBusinessButtonsInfo";

const ScannerPage = () => {

    const params = useParams()
    const router = useNavigate()

    const title = params.role == 'administration'
        ?
            'Выберите внедренные решения'
        :
            'Выберите 3 системы*, которые вы хотели бы увидеть в вашем городе.'

    window.scrollTo(0, 0);

    let pages;
    if(params.role == 'administration'){
        pages = SmartCityScannerAdministrationButtonsInfo.info
    }else if (params.role == 'business') {
        pages = SmartCityScannerBusinessButtonsInfo.info
    }else if (params.role == 'citizen') {
        pages = SmartCityScannerCitizenButtonsInfo.info
    } else {
        alert('error')
    }
    console.log(pages)
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
                        <div className={CalculatorPageStyles.calculatorPage__inputsBox}>
                            {
                                activePage.inputs.map((item,index) => (
                                    <>
                                        <div className={CalculatorPageStyles.calculatorPage__inputBox}  key={Date.now()}>
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
                    <BlueButton
                        text={'Сохранить'}
                        className={CalculatorPageStyles.calculatorPage__button}
                    />
                    <WhiteButton2
                        text={'Скачать PDF'}
                        className={CalculatorPageStyles.calculatorPage__button}
                    />
                </div>

            </div>
            <div>
                <div style={{width:1400,maxWidth:'100vw',margin:'0 auto',display:'flex',justifyContent:'space-between'}}>
                    <ChangePage
                        title={'Перейти к предыдущей странице'}
                        deg={'0'}
                        click={() => router(`/scanner/${params.role}/${state.changePageUp(pages,activePage.title)}`)}
                    />

                    <ChangePage
                        title={'Перейти к следующей странице'}
                        style={{flexDirection: 'row-reverse'}}
                        deg={'180'}
                        click={() => router(`/scanner/${params.role}/${state.changePageDown(pages,activePage.title)}`)}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default ScannerPage;