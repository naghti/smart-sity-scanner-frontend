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
import {useNavigate} from "react-router-dom";

const SmartCityScanner = () => {

    let [active,setActive] = useState(false)
    const router = useNavigate()

    return (
        <div>
            <Header/>
            <HeaderTitle
                background={backgroundImage}
                text={'Области цифровизации'}
            />
            <div className={styles.smartCityScanner__box}>
                <p className={styles.smartCityScanner__title}>
                    Данный раздел позволяет ознакомиться с существующими цифровыми инструментами в различных областях, а также эффектами их внедрения, провести цифровое сканирование по текущему статусу использования цифровых продуктов, сформировать дорожную карту с рекомендациями по приоритетам прохождения цифровых этапов.
                </p>
                <div style={{margin:'20px 0',display:'flex', justifyContent:'flex-end'}}>
                    <AccountStatus status={'Городская администрация'} />
                </div>

                <TitleUnderline
                    name={'Социальная сфера'}
                    color={'rgba(255, 157, 64, 1)'}
                />

                    <div className={styles.smartCityScanner__selectionSocialSphere}>

                        {
                            state.scanerSelections.socialSphere.map((selection,index) => (
                               <div
                                   className={styles.smartCityScanner__item}
                                   style={{
                                       gridArea:`socialSphere${++index}`,
                                       background:`
                                           no-repeat center/103% 103% url(${selection.photo})`
                                   }}
                                   onMouseEnter={() => setActive(selection.name)}
                                   onMouseLeave={() => setActive(false)}
                                   onClick={() => router(`/scanner/administration/${selection.name}`)}
                               >
                                   <div
                                       className={styles.smartCityScanner__selectShadow}
                                       style={{background:'linear-gradient(180deg, rgba(255, 124, 0, 0) 0%, #FF7C00 87.81%, #FF7C00 100%)'}}
                                   ></div>
                                   <p
                                       className={styles.smartCityScanner__selectTitle}
                                   >
                                       {selection.name}
                                   </p>
                               </div>
                            ))
                        }

                    </div>

                <TitleUnderline
                    name={'Городское хозяйство'}
                    color={'rgba(10, 58, 215, 1)'}
                />

                <div className={styles.smartCityScanner__selectionUrbanEconomy}>
                    {
                        state.scanerSelections.urbanEconomy.map((selection,index) => (
                            <div
                                className={styles.smartCityScanner__item}
                                style={{
                                    gridArea:`urbanEconomy${++index}`,
                                    background:`
                                               no-repeat center/103% 103% url(${selection.photo})`
                                }}
                                onMouseEnter={() => setActive(selection.name)}
                                onMouseLeave={() => setActive(false)}
                                onClick={() => router(`/scanner/administration/${selection.name}`)}
                            >
                                <div
                                    className={styles.smartCityScanner__selectShadow}
                                    style={{background:'linear-gradient(180deg, rgba(10, 58, 215, 0) 0%, #0A3AD7 87.81%, #0A3AD7 100%)'}}
                                ></div>
                                <p
                                    className={styles.smartCityScanner__selectTitle}
                                >
                                    {selection.name}
                                </p>
                            </div>
                        ))
                    }
                </div>

                <TitleUnderline
                    name={'Бизнес'}
                    color={'rgba(0, 225, 50, 1)'}
                />
                <div className={styles.smartCityScanner__selectionBusiness}>
                    {
                        state.scanerSelections.business.map((selection,index) => (
                            <div
                                className={styles.smartCityScanner__item}
                                style={{
                                    gridArea:`business${++index}`,
                                    background:`
                                               no-repeat center/103% 103% url(${selection.photo})`
                                }}
                                onMouseEnter={() => setActive(selection.name)}
                                onMouseLeave={() => setActive(false)}
                                onClick={() => router(`/scanner/administration/${selection.name}`)}
                            >
                                <div
                                    className={styles.smartCityScanner__selectShadow}
                                    style={{background:'linear-gradient(180deg, rgba(0, 225, 50, 0) 0%, #00E132 87.81%, #00E132 100%)'}}
                                ></div>
                                <p
                                    className={styles.smartCityScanner__selectTitle}
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

export default SmartCityScanner;