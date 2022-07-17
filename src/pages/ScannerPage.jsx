import React, {useEffect, useState} from 'react';
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
import ScannerInfo from "../states/scannerInfo";
import PostService from "../API/PostServise";

const ScannerPage = () => {

    const params = useParams()
    const router = useNavigate()

    const [title,setTitle] = useState()
    const [pages,setPages] = useState()
    const [activePage,setActivePage] = useState()
    let [home,setHome] = useState('/')

    window.scrollTo(0, 0);


    function funcNull() {
        state.loader = false
        router('/signin')
    }
    function funcSuccess(result) {
        state.loader = false
        if (result.email == 0) router('/mailconfirmation')

        else if(result.permissions == 0){
            setTitle('Выберите 3 системы*, которые Вы хотели бы увидеть в вашем городе.')
            setPages(SmartCityScannerCitizenButtonsInfo.info)
            setActivePage(SmartCityScannerCitizenButtonsInfo.info[params.page])
            setHome('/scanner')
        }
        else if(result.permissions == 1){
            setTitle('Выберите внедренные решения')
            setPages(SmartCityScannerBusinessButtonsInfo.info)
            setActivePage(SmartCityScannerBusinessButtonsInfo.info[params.page])
            setHome('/scanner')
        }
        else if(result.permissions == 2){
            state.permissions = 2
            setTitle('Выберите внедренные решения')
            setPages(SmartCityScannerAdministrationButtonsInfo.info)
            setActivePage(SmartCityScannerAdministrationButtonsInfo.info[params.page])
            setHome('/control')
        }
        else{
        }
    }
    useEffect(() => {
        state.loader = true
        PostService.checkStorage(funcNull,funcSuccess)
    },[params.page])

    // проверка валидности страницы из url
    // if (activePage == undefined) return <UnknowPage/>

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}}>
            {
                activePage !== undefined ?
                    <>
                        <div>
                            <Header home={home}/>
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
                                    click={() => router(`/scanner/${state.changePageUp(pages,activePage.title)}`)}
                                />

                                <ChangePage
                                    title={'Перейти к следующей странице'}
                                    style={{flexDirection: 'row-reverse'}}
                                    deg={'180'}
                                    click={() => router(`/scanner/${state.changePageDown(pages,activePage.title)}`)}
                                />
                            </div>
                            <Footer/>
                        </div>
                    </>
                :
                    <UnknowPage/>
            }
        </div>
    );
};

export default ScannerPage;