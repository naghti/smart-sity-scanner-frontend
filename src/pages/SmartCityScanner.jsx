import React from 'react';
import Header from "../components/headers/Header";
import HeaderTitle from "../components/headers/HeaderTitle";
import backgroundImage from '../images/background.png'
import styles from './styles/SmartCityScanner.module.css'
import AccountStatus from "../components/boxs/AccountStatus";
import state from '../states/state'
import Footer from "../components/footers/Footer";

const SmartCityScanner = () => {
    return (
        <div>
            <Header/>
            <HeaderTitle
                background={backgroundImage}
                text={'Области цифровизации городского хозяйства'}
            />
            <div className={styles.smartCityScanner__box}>
                <p className={styles.smartCityScanner__title}>
                    Данный раздел позволяет рассчитать показатели цифровизации городского хозяйства согласно стандарту Умного Города в
                    соответствии с приказом Минстроя №357/пр от 11.05.2022 г. </p>
                <div style={{margin:'20px 0',display:'flex', justifyContent:'flex-end'}}>
                    <AccountStatus status={'Городская администрация'} />
                </div>
                <div className={styles.smartCityScanner__selection}>
                    {
                        state.scanerSelections.map((selection,index) => (
                           <div
                               className={styles.smartCityScanner__item}
                               style={{
                                   gridArea:`rei${++index}`,
                                   background:`linear-gradient(
                                       180deg,
                                       rgba(67, 106, 235, 0) 0%,
                                       #436AEB 87.81%, #436AEB 100%),
                                       url(${selection.photo} )`
                               }}
                           >
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