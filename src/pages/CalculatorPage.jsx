import React, {useEffect} from 'react';
import styles from './styles/CalculatorPage.module.css'
import Header from "../components/headers/Header";
import WhiteButton2 from "../components/buttons/WhiteButton2";
import BlueButton from "../components/buttons/BlueButton";
import downloadImage from '../images/download.png'
import Footer from "../components/footers/Footer";
import {useNavigate, useParams} from "react-router-dom";
import CalculatorButtonsInfo from "../states/calculatorButtonsInfo";
import UnknowPage from "./UnknowPage";

const CalculatorPage = () => {

    const params = useParams()
    const router = useNavigate()

    const page = CalculatorButtonsInfo.info[params.page]

    // проверка валидности страницы из url
    if (page == undefined) return <UnknowPage/>

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}}>
            <div>
                <Header/>
                <div className={styles.calculatorPage__titleBox} >
                    <h3
                        className={styles.calculatorPage__title}
                    >
                        {page.title}
                    </h3>
                </div>
            </div>

            <div className={styles.calculatorPage__box} >
                {
                    page.content.map((item) => (
                        <div className={styles.calculatorPage__content}>
                            <div className={styles.calculatorPage__contentNumber}>
                                <div className={styles.calculatorPage__NumberBox}>
                                    <h4 className={styles.calculatorPage__number}>{item.number}</h4>
                                </div>
                            </div>
                            <div className={styles.calculatorPage__contentInfo}>
                                <h4 className={styles.calculatorPage__contentTitle}>
                                    {item.title}
                                </h4>
                                {
                                    item.inputs.map(input => (
                                        <div className={styles.calculatorPage__inputBox}>
                                            <p className={styles.calculatorPage__inputTitle}>
                                                {input.title}
                                            </p>
                                            <div style={{display: 'flex', margin: '10px 0'}}>
                                                <input
                                                    type="text"
                                                    placeholder={'Введите количество '}
                                                    className={styles.calculatorPage__input}
                                                />
                                                <div className={styles.calculatorPage__inputValue}>
                                                    <p className={styles.calculatorPage__valueTitle}>шт</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    ))
                }
                <div className={styles.calculatorPage__buttons}>
                    <WhiteButton2
                        text={'Сохранить'}
                        className={styles.calculatorPage__button}
                    />
                    <BlueButton
                        text={'Сохранить и перейти к результатам'}
                        className={styles.calculatorPage__button}
                    />
                    <BlueButton
                        img={downloadImage}
                        className={styles.calculatorPage__button_download}
                    />
                </div>

            </div>
            <div>
                <div style={{maxWidth:1400,margin:'0 auto',padding:'0 10px'}}>
                    {
                        page.info.length > 0 &&
                            <hr style={{background:'#ADA5A5'}}/>
                    }
                    {
                        page.info.map(item => (
                            <div className={styles.calculatorPage__info}>
                                <p className={styles.calculatorPage__infoTitle}>
                                    {item}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default CalculatorPage;