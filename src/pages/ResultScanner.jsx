import React, {useEffect} from 'react';
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import styles from './styles/ResultScanner.module.css'
import state from "../states/state";
import PostService from "../API/PostServise";
import {useNavigate} from "react-router-dom";

    const ResultScanner = () => {

    const router = useNavigate()

    function funcNull() {
        state.loader = false
        router('/signin')
    }
    function funcSuccess(result) {
        state.loader = false
        if (result.email == 0) router('/mailconfirmation')
        else if(result.permissions != 2){
            router('/signin')
        }
        else{
            state.permissions = 2
        }
    }
    useEffect(() => {
        state.loader = true
        PostService.checkStorage(funcNull,funcSuccess)
    },[])

    return (
        <div className={styles.result}>
            <Header home={'/control'} permissions={2}/>
            <div className={styles.result__main}>
                <div className={styles.result__box}>
                    <h3 className={styles.result__titleMain} style={{margin:'0 0 40px'}}>
                        Отчет
                    </h3>
                    <p className={styles.result__title}>
                        В результате прохождения <span className={styles.result__title_bold}> Сканера Умного Города </span> актуализирован статус внедрения более <span className={styles.result__title_bold}> 200 цифровых инструментов </span> в следующих областях:
                    </p>
                    <div className={styles.result__directionsBox}>
                        <div className={styles.result__direction}>
                            <div className={styles.result__directionBox}>
                                <p className={styles.result__directionTitle}>
                                    Социальная сфера
                                </p>
                            </div>
                            <div
                                className={styles.result__directionLine}
                                style={{background:'#FF9D40'}}
                            ></div>
                            <div className={styles.result__directionBox}>
                                <p className={styles.result__directionParagraph}>Архиdddddddddddddddddddddddвы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                            </div>
                        </div>
                        <div className={styles.result__direction}>
                            <div className={styles.result__directionBox}>
                                <p className={styles.result__directionTitle}>
                                    Городское хозяйство
                                </p>
                            </div>
                            <div
                                className={styles.result__directionLine}
                                style={{background:'#0A3AD7'}}
                            ></div>
                            <div className={styles.result__directionBox}>
                                <p className={styles.result__directionParagraph}>Архиdddddddddddddddddddddddвы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                            </div>
                        </div>
                        <div className={styles.result__direction}>
                            <div className={styles.result__directionBox}>
                                <p className={styles.result__directionTitle}>
                                    Бизнес
                                </p>
                            </div>
                            <div
                                className={styles.result__directionLine}
                                style={{background:'#00E132'}}
                            ></div>
                            <div className={styles.result__directionBox}>
                                <p className={styles.result__directionParagraph}>Архиdddddddddddddddddddddddвы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                                <p className={styles.result__directionParagraph}>Архивы</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.result__hr}></div>
                        <div className={styles.result__digitalizationBox}>
                            <p className={styles.result__title}>
                                <span className={styles.result__title_bold}> Статус цифровизации </span> составляет: <span className={styles.result__digitalization}> 28% </span> (продвинутый уровень)
                            </p>
                        </div>
                    <div className={styles.result__hr}></div>

                    <h3 className={styles.result__titleMain} style={{margin:'40px 0',fontSize: 37}}>
                        Цифровые инструменты, рекомендуемые для внедрения:
                    </h3>

                    <div className={styles.result__toolsBox}>
                        <div className={styles.result__directionBox}>
                            <p className={styles.result__directionTitle}>
                                Социальная сфера
                            </p>
                        </div>
                        <div
                            className={styles.result__directionLine}
                            style={{background:'#FF9D40'}}
                        ></div>
                        <div className={styles.result__directionBox}>
                            <p className={styles.result__directionParagraph}>Архиdddddddddddddddddddddddвы</p>
                            <p className={styles.result__li}>Архиdddddddddddddddddddddddвы</p>
                        </div>
                    </div>


                    <div className={styles.result__toolsBox}>
                        <div className={styles.result__directionBox}>
                            <p className={styles.result__directionTitle}>
                                Социальная сфера
                            </p>
                        </div>
                        <div
                            className={styles.result__directionLine}
                            style={{background:'#FF9D40'}}
                        ></div>
                        <div className={styles.result__directionBox}>
                            <p className={styles.result__directionParagraph}>Архиdddddddddddddddddddddddвы</p>
                            <p className={styles.result__li}>Архиdddddddddddddddddddddddвы</p>
                        </div>
                    </div>

                    <h3 className={styles.result__titleMain} style={{margin:'40px 0',fontSize: 37}}>
                        Рекомендуемые этапы внедрения цифровых решений:
                    </h3>

                    <p className={styles.result__stage}>
                        <div className={styles.result__stageNumber}>
                            3
                        </div>
                        Определение задач и областей цифровизации
                    </p>
                    <p className={styles.result__stage}>
                        <div className={styles.result__stageNumber}>
                            3
                        </div>
                        Определение задач и областей цифровизации
                    </p>
                    <p className={styles.result__stage}>
                        <div className={styles.result__stageNumber}>
                            3
                        </div>
                        Определение задач и областей цифровизации
                    </p>
                    <p className={styles.result__stage}>
                        <div className={styles.result__stageNumber}>
                            3
                        </div>
                        Определение задач и областей цифровизации
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ResultScanner;