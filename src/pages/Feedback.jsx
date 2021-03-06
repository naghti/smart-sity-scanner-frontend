import React from 'react';
import styles from './styles/About.module.css'
import Footer from "../components/footers/Footer";
import background2Photo from '../images/background2.png'
import background3Photo from '../images/background3.png'
import background4Photo from '../images/background4.png'
import HeaderAbout from "../components/headers/HeaderAbout";
import mapImage from '../images/map.png'

const Feedback = () => {
    return (
        <div className={styles.about}>
            <HeaderAbout active={1} home={"/"}/>
            <div className={styles.about__background}>
                <div className={styles.about__box}>
                    <div className={styles.about__textBox}>
                        <h2 className={styles.about__title}>Обратная связь</h2>
                        <div style={{display:'flex', justifyContent:'space-between',alignItems:'flex-end'}}>
                            <p className={styles.about__paragraph} style={{maxWidth:'40%'}}>
                                <span className={styles.about__paragraph_bold}>
                                    Адрес:
                                </span> Олимпийский проспект, 40
                                посёлок городского типа Сириус, 354340
                            </p>
                            <p className={styles.about__paragraph} style={{maxWidth:'40%'}}>
                                <span className={styles.about__paragraph_bold}>
                                    Почта:
                                </span> info@сканер-умного-города.рф
                            </p>
                            <p className={styles.about__paragraph} style={{maxWidth:'40%'}}>
                            </p>
                        </div>
                        <p className={styles.about__paragraph}>
                            <a
                                href="https://t.me/+Rh1-Sx7OOyVlNWRi"
                                style={{color:'rgb(2,176,208)',textDecoration:'none'}}
                                target={'_blank'}
                            >Наш telegram</a>
                        </p>
                    </div>
                    <img
                        src={mapImage}
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

export default Feedback;