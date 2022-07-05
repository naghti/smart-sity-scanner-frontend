import React from 'react';
import Header from "../components/headers/Header";
import HeaderTitle from "../components/headers/HeaderTitle";
import backgroundImage from '../images/background.png'
import styles from './styles/SmartCityScanner.module.css'
import AccountStatus from "../components/boxs/AccountStatus";
import state from '../states/state'

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
                           <div className={styles.smartCityScanner__item} style={{gridArea:`rei${++index}`}}>
                               <p className={styles.smartCityScanner__selectTitle}>
                                   {selection}
                               </p>
                           </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SmartCityScanner;