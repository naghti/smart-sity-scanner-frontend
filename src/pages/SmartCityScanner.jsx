import React, {useState,useEffect} from 'react';
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
import PostService from "../API/PostServise";
import ScannerInfo from "../states/scannerInfo";
import Loader from "../components/Loader";

const   SmartCityScanner = () => {

    let [active,setActive] = useState(false)
    let [permissions,setPermissions] = useState(0)
    let [info,setInfo] = useState(ScannerInfo.info.base)
    let [home,setHome] = useState('/')
    const router = useNavigate()


    function funcNull() {
        state.loader = false
        router('/signin')
    }
    function funcSuccess(result) {
        state.loader = false
        setPermissions(result.permissions)
        if (result.email == 0) router('/mailconfirmation')
        else if(result.permissions == 0){
            setInfo(ScannerInfo.info.citizen)
            setHome('/scanner')
        }
        else if(result.permissions == 1){
            setHome('/scanner')
            setInfo(ScannerInfo.info.business)
        }
        else if(result.permissions == 2){
            state.permissions = 2
            setHome('/control')
            setInfo(ScannerInfo.info.admin)
        }
        else{
        }
    }
    useEffect(() => {
        state.loader = true
        PostService.checkStorage(funcNull,funcSuccess)
    },[])

    return (
        <div>
            {
                state.loader == false &&
                <>
                    <Header permissions={permissions} home={home}/>
                    <HeaderTitle
                        background={backgroundImage}
                        text={info.title}
                    />
                    <div className={styles.smartCityScanner__box}>
                        <p className={styles.smartCityScanner__title}>
                            {info.paragraph}
                        </p>
                        <div style={{margin: '20px 0', display: 'flex', justifyContent: 'flex-end'}}>
                            <AccountStatus status={info.status}/>
                        </div>

                        {
                            info.box.map(item => (
                                <div style={{marginTop: 40}}>
                                    {
                                        item.title != "" &&
                                        <TitleUnderline
                                            name={item.title}
                                            color={item.color}
                                        />
                                    }

                                    <div className={item.style}>

                                        {
                                            item.items.map((selection, index) => (
                                                <div
                                                    className={styles.smartCityScanner__item}
                                                    style={{
                                                        gridArea: `${item.gridArea}${++index}`,
                                                        background: `
                                                               no-repeat center/cover url(${selection.photo})`
                                                    }}
                                                    onMouseEnter={() => setActive(selection.name)}
                                                    onMouseLeave={() => setActive(false)}
                                                    onClick={() => router(`/scanner/${selection.name}`)}
                                                >
                                                    <div
                                                        className={styles.smartCityScanner__selectShadow}
                                                        style={{background: `${item.background}`}}
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
                            ))
                        }

                    </div>
                    <Footer/>
                </>
            }

        </div>
    );
};

export default SmartCityScanner;