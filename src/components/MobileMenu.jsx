import React from 'react';
import styles from './styles/MobileMenu.module.css'
import state from "../states/state";
import burgerMenuImage from '../images/burgerMenu.png'
import {useLocation, useNavigate, useParams} from "react-router-dom";

const MobileMenu = () => {

    const router = useNavigate()
    const location = useLocation()

    function results() {
        state.mobileMenu = false
        router('/results')
    }

    function changePage() {
        state.mobileMenu = false
        if (state.permissions == 0) router('/scanner')
        if (state.permissions == 1) router('/scanner')
        if (state.permissions == 2) router('/calculator')
    }

    function exit() {
        state.mobileMenu = false
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        router('/signin')
    }

    function others(route) {
        state.mobileMenu = false
        router(route)
    }
    return (
        <div className={styles.mobileMenu_box} onClick={() => state.mobileMenu = false}>
            <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.mobileMenu__header}>
                    <img
                        src={burgerMenuImage}
                        alt="menu"
                        className={styles.mobileMenu__image}
                        onClick={() => state.mobileMenu = false}
                    />
                </div>
                {
                    location.pathname == "/" || location.pathname == "/feedback"
                    ?
                        <div className={styles.mobileMenu__itemsBox}>
                            <h5
                                className={styles.mobileMenu__itemTitle}
                                onClick={() => others('/')}
                            >
                                Главная
                            </h5>
                            <h5
                                className={styles.mobileMenu__itemTitle}
                                onClick={() => others('/feedback')}
                            >
                                Обратная связь
                            </h5>
                            <h5
                                className={styles.mobileMenu__itemTitle}
                                onClick={() => others('/signin')}
                            >
                                Войти
                            </h5>
                        </div>
                    :
                        <div className={styles.mobileMenu__itemsBox}>
                            <h5
                                className={styles.mobileMenu__itemTitle}
                                onClick={() => results()}
                                style={{display: state.permissions == 2 ? 'block' : 'none'}}
                            >
                                Результаты
                            </h5>
                            <h5
                                className={styles.mobileMenu__itemTitle}
                                onClick={() => changePage()}
                            >
                                Перейти в другой раздел
                            </h5>
                            <h5
                                className={styles.mobileMenu__itemTitle}
                                onClick={() => exit()}
                            >
                                Выйти
                            </h5>
                        </div>
                }
            </div>
        </div>
    );
};

export default MobileMenu;