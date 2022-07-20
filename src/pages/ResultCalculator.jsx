import React from 'react';
import styles from './styles/ResultCalculator.module.css'
import frameImage from '../images/frame.svg'
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";

const ResultCalculator = () => {
    return (
    <div className={styles.resultCalculator}>
        <Header home={'/result'}/>
        <div className={styles.resultCalculator__box}>
            <div className={styles.resultCalculator__titleBox}>
                <h1 className={styles.resultCalculator__title}>
                    Отчет за 16.07.2022
                </h1>
                <img src={frameImage} alt=""/>
            </div>
            <p className={styles.resultCalculator__titleParagraph}>
                В результате прохождения Калькулятора Умного Города автоматически рассчитаны показатели цифровизации
                городского хозяйства согласно стандарту "Умного города" в соответствии с Приказом Минстроя России
                №357/пр от 11.05.2022 г.
            </p>
            <div className={styles.resultCalculator__hr}/>
                <ul className={styles.resultCalculator__ul}>
                    <li className={styles.resultCalculator__li}>Обратная связь с гражданами</li>
                    <li className={styles.resultCalculator__li}>Образование</li>
                    <li className={styles.resultCalculator__li}>Транспорт</li>
                    <li className={styles.resultCalculator__li}>Предпринимательство</li>
                    <li className={styles.resultCalculator__li}>Социальная сфера</li>
                    <li className={styles.resultCalculator__li}>ЖКХ</li>
                    <li className={styles.resultCalculator__li}>Здравоохранение</li>
                    <li className={styles.resultCalculator__li}>Городская среда</li>
                    <li className={styles.resultCalculator__li}>Геоинформационные технологии</li>
                    <li className={styles.resultCalculator__li}>Энергетика</li>
                    <li className={styles.resultCalculator__li}>Экология</li>
                    <li className={styles.resultCalculator__li}>Наука и высшая школа</li>
                    <li className={styles.resultCalculator__li}>Цифровая трансформация</li>
                    <li className={styles.resultCalculator__li}>Культура</li>
                    <li className={styles.resultCalculator__li}>Молодежная политика</li>
                    <li className={styles.resultCalculator__li}>Безопасность</li>
                    <li className={styles.resultCalculator__li}>Спорт</li>
                    <li className={styles.resultCalculator__li}>Строительство</li>
                </ul>
                <div className={styles.resultCalculator__hr}/>
                    <h3 className={styles.resultCalculator__titleBlue}>Обратная связь с гражданами</h3>
                        <div className={styles.resultCalculator__itemsBox}>
                            <div className={styles.resultCalculator__item}>
                                <p className={styles.resultCalculator__itemParagraph}>
                                    Уровень удовлетворенности граждан ответами на сообщения через модуль «Обращения и
                                    сообщения» Платформы обратной связи (ПОС) «Госуслуги. Решаем вместе»
                                </p>
                                <div className={styles.resultCalculator__alert}>
                                    <div className={styles.resultCalculator__itemProperty}>
                                        <p className={styles.resultCalculator__itemPropertyTitle}>
                                            набранно 36%
                                        </p>
                                    </div>
                                    <div className={styles.resultCalculator__itemProperty}>
                                        <div className={styles.resultCalculator__itemRequired}>
                                            <p className={styles.resultCalculator__itemRequiredTitle}>
                                                ️Необходимо 80%
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                            <div className={styles.resultCalculator__itemsBox}>
                                <div className={styles.resultCalculator__item}>
                                    <p className={styles.resultCalculator__itemParagraph}>
                                        Внедрение модулей Платформы обратной связи (ПОС)
                                    </p>
                                    <div className={styles.resultCalculator__alert}>
                                        <div  className={styles.resultCalculator__itemProperty}>
                                            <p className={styles.resultCalculator__itemPropertyTitle}>
                                                набранно 36%
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                                <h3 className={styles.resultCalculator__titleBlue}>Обратная связь с гражданами</h3>
                                <div className={styles.resultCalculator__itemsBox}>
                                    <div className={styles.resultCalculator__item}>
                                        <p className={styles.resultCalculator__itemParagraph}>
                                            Уровень удовлетворенности граждан ответами на сообщения через модуль
                                            «Обращения и сообщения» Платформы обратной связи (ПОС) «Госуслуги. Решаем
                                            вместе»
                                        </p>
                                        <div className={styles.resultCalculator__alert}>
                                            <div className={styles.resultCalculator__itemProperty}>
                                                <p className={styles.resultCalculator__itemPropertyTitle}>
                                                    набранно 36%
                                                </p>
                                            </div>
                                            <div  className={styles.resultCalculator__itemProperty}>
                                                <div className={styles.resultCalculator__itemRequired}>
                                                    <p className={styles.resultCalculator__itemRequiredTitle}>
                                                        ️Необходимо 80%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        </div>
        <Footer/>
    </div>
);
};

export default ResultCalculator;