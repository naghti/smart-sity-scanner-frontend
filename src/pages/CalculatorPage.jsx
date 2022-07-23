import React, {useEffect, useState} from 'react';
import styles from './styles/CalculatorPage.module.css'
import Header from "../components/headers/Header";
import WhiteButton2 from "../components/buttons/WhiteButton2";
import BlueButton from "../components/buttons/BlueButton";
import downloadImage from '../images/download.png'
import Footer from "../components/footers/Footer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import CalculatorButtonsInfo from "../states/calculatorButtonsInfo";
import UnknowPage from "./UnknowPage";
import ChangePage from "../components/ChangePage";
import state from "../states/state";
import PostService from "../API/PostServise";

const CalculatorPage = () => {

    const params = useParams()
    const router = useNavigate()

    function funcNull() {
        state.loader = false
        router('/signin')
    }
    function funcSuccess(result) {
        state.loader = false
        if (result.email == 0) router('/mailconfirmation')
        else if(result.permissions != 2){
            router('/scanner')
        }
        else{}
    }
    useEffect(() => {
        state.loader = true
        PostService.checkStorage(funcNull,funcSuccess)
    },[])
    
    const page = CalculatorButtonsInfo.info[params.page]
    // проверка валидности страницы из url
    if (page == undefined) return <UnknowPage/>
    window.scrollTo(0, 0);


    async function save (url,values) {
        const Result = await PostService.sendCalculator(url,values)

        if (Result?.error == undefined) {
            console.log(Result)
        }
        else alert(Result.error)
    }

    async function saveAndGo (url,values) {
        const Result = await PostService.sendCalculator(url,values)
        const Resulti = await PostService.getWidgetPage(Result.link)

        if (Resulti?.error == undefined) {
            console.log(Resulti)
        }
        else alert(Resulti.error)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}} key={Date.now()}>
            <div>
                <Header home={'/control'} permissions={2}/>
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
                        <div className={styles.calculatorPage__content} key={Date.now()}>
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
                                                {
                                                    input.type
                                                    ?
                                                        <input
                                                            type={input.type}
                                                            placeholder={'Отметьте наличие'}
                                                            className={styles.calculatorPage__input}
                                                            style={{transform:'scale(1.5)'}}
                                                            onClick={e => {
                                                                page.values[input.change] =
                                                                    page.values[input.change] == false
                                                                        ?
                                                                        true
                                                                    :
                                                                        false
                                                            }}
                                                            value={page.values[input.change]}
                                                        />
                                                    :
                                                        <>
                                                            <input
                                                                type={'text'}
                                                                placeholder={'Введите количество'}
                                                                className={styles.calculatorPage__input}
                                                                onChange={e => {
                                                                    page.values[input.change] = e.target.value
                                                                }}
                                                                defaultValue={page.values[input.change]}
                                                            />
                                                            <div className={styles.calculatorPage__inputValue}>
                                                                <p className={styles.calculatorPage__valueTitle}>шт</p>
                                                            </div>
                                                        </>
                                                }
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
                        onClick={() =>  save(page.url,page.values)}
                    />
                    <BlueButton
                        text={'Сохранить и перейти к результатам'}
                        className={styles.calculatorPage__button}
                        onClick={() =>  saveAndGo(page.url,page.values)}
                    />
                    <BlueButton
                        img={downloadImage}
                        className={styles.calculatorPage__button_download}
                    />
                </div>

            </div>
            <div>
                <div style={{width:1400,maxWidth:'100vw',margin:'0 auto',padding:'0 10px'}}>
                    {
                        page.info.length > 0 &&
                            <hr style={{background:'#ADA5A5'}}/>
                    }
                    <div style={{width:1400,maxWidth:'100vw',margin:'0 auto',display:'flex',justifyContent:'space-between'}}>
                        <ChangePage
                            title={'Перейти к предыдущей странице'}
                            deg={'0'}
                            click={() => router(`/calculator/${state.changePageUp(CalculatorButtonsInfo.info,page.title)}`)}
                        />

                        <ChangePage
                            title={'Перейти к следующей странице'}
                            style={{flexDirection: 'row-reverse'}}
                            deg={'180'}
                            click={() => router(`/calculator/${state.changePageDown(CalculatorButtonsInfo.info,page.title)}`)}
                        />
                    </div>
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