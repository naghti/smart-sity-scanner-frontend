import React from 'react';
import styles from './styles/About.module.css'
import Footer from "../components/footers/Footer";
import background2Photo from '../images/background2.png'
import background3Photo from '../images/background3.png'
import background4Photo from '../images/background4.png'
import HeaderAbout from "../components/headers/HeaderAbout";

const About = () => {
    return (
        <div className={styles.about}>
            <HeaderAbout active={0}/>
            <div className={styles.about__background}>
                <div className={styles.about__box}>
                    <div className={styles.about__textBox}>
                        <h2 className={styles.about__title}>О Сканере Умного Города</h2>
                        <p className={styles.about__paragraph}>
                            <span className={styles.about__paragraph_bold}>
                                Сканер Умного Города
                            </span> — это практический инструмент определения статуса цифровой зрелости в конкретных областях городского хозяйства и бизнес-процессах, который позволит сотрудникам городской администрации и руководителям предприятий проводить онлайн-исследование цифрового развития города по направлениям городского хозяйства, социальной сферы и бизнес-процессам, по результатам которого можно получать аналитическую справку с эффектами внедрения возможных цифровых продуктов и дорожной картой с приоритезацией этапов внедрения, а также осуществлять проверку соответствия стандартам Умного Города согласно Приказу Минстроя №357/пр от 11.05.2022г.
                        </p>
                    </div>
                    <img
                        src={background2Photo}
                        alt="фото"
                        className={styles.about__photo}
                    />

                    <div className={styles.about__textBox}>
                        <p className={styles.about__paragraph}>
                            <span className={styles.about__paragraph_bold}>
                                Цифровые технологии
                            </span> — тренд и дорожная карта прогрессивного человечества, вступающего в Индустрию 4.0, призваны сделать процессы прозрачными, эффективными, позволить экономить бюджет и ресурсы. Наш проект – уже цифровая технология, которая позволяет сделать планирование этапов цифровизации для города и бизнеса доступным, обоснованным и оперативным.

                        </p>
                    </div>
                    <img
                        src={background3Photo}
                        alt="фото"
                        className={styles.about__photo}
                    />

                    <div className={styles.about__textBox}>
                        <p className={styles.about__paragraph}>
                            <span className={styles.about__paragraph_bold}>
                                Сканер Умного Города
                            </span> также предусматривает пользовательский функционал для жителей в рамках выбора приоритетных инструментов для развития городской инфраструктуры. Данное взаимодействие позволяет привлечь жителей к решению важных городских вопросов, планомерная реализация которых, в свою очередь, обеспечит экономию средств и времени: многие процессы, требующие человеческих усилий, будут автоматизированы, соответственно, будет повышен уровень жизни.
                        </p>
                    </div>
                    <img
                        src={background4Photo}
                        alt="фото"
                        className={styles.about__photo}
                        style={{borderRadius:' 0 0 20px 20px'}}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;