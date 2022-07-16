import {makeAutoObservable, makeObservable} from "mobx";
import feedbackPhoto from '../images/feedback.png'
import safetyPhoto from '../images/safety.png'
import urbanEnvironmentPhoto from '../images/urbanEnvironment.png'
import educationPhoto from '../images/education.png'
import culturePhoto from '../images/culture.png'
import hcsPhoto from '../images/hcs.png'
import geoinformationTechnologiesPhoto from '../images/geoinformationTechnologies.png'
import transportPhoto from '../images/transport.png'
import healthcarePhoto from '../images/healthcare.png'
import ecologyPhoto from '../images/ecology.png'
import youthPolicyPhoto from '../images/youthPolicy.png'
import EntrepreneurshipPhoto from '../images/Entrepreneurship.png'
import EnergyPhoto from '../images/Energy.png'
import sciencePhoto from '../images/science.png'
import ConstructionPhoto from '../images/Construction.png'
import ConstructionMiniPhoto from '../images/ConstructionMini.png'
import SocialSpherePhoto from '../images/SocialSphere.png'
import sportPhoto from '../images/sport.png'
import tourismPhoto from '../images/tourism.png'
import archivesPhoto from '../images/archives.png'
import RealEstatePhoto from '../images/RealEstate.png'
import rentPhoto from '../images/rent.png'
import repairPhoto from '../images/repair.png'
import housePhoto from '../images/house.png'
import purchasesPhoto from '../images/purchases.png'
import libraryPhoto from '../images/library.png'
import entertainmentPhoto from '../images/entertainment.png'
import digitalTransformationPhoto from '../images/digitalTransformation.png'
import calculatorButtonsInfo from "./calculatorButtonsInfo";
import smartCityScannerAdministrationButtonsInfo from "./SmartCityScannerAdministrationButtonsInfo";

class State {
    constructor() {
        makeAutoObservable(this)
    }
    roles = [
        'business',
        'administration',
        'citizen'
    ]
    CalculatorSelections = [
        {
          name: 'Обратная связь с гражданами',
          photo: feedbackPhoto,
          info: calculatorButtonsInfo.info.FeedbackFromCitizens
        },
        {
          name: 'Городская среда',
          photo: urbanEnvironmentPhoto
        },
        {
          name: 'Культура',
          photo: culturePhoto
        },
        {
          name: 'Безопасность',
          photo: safetyPhoto
        },
        {
          name: 'Образование',
          photo: educationPhoto
        },
        {
          name: 'ЖКХ',
          photo: hcsPhoto
        },
        {
          name: 'Спорт',
          photo: sportPhoto
        },
        {
          name: 'Геоинформационные технологии',
          photo: geoinformationTechnologiesPhoto
        },
        {
          name: 'Транспорт',
          photo: transportPhoto
        },
        {
          name: 'Здравоохранение',
          photo: healthcarePhoto
        },
        {
          name: 'Экология',
          photo: ecologyPhoto
        },
        {
          name: 'Молодежная политика',
          photo: youthPolicyPhoto
        },
        {
          name: 'Предпринимательство',
          photo: EntrepreneurshipPhoto
        },
        {
          name: 'Энергетика',
          photo: EnergyPhoto
        },
        {
          name: 'Наука и высшая школа',
          photo: sciencePhoto
        },
        {
          name: 'Строительство',
          photo: ConstructionPhoto
        },
        {
          name: 'Социальная сфера',
          photo: SocialSpherePhoto
        },
        {
          name: 'Цифровая трансформация',
          photo: digitalTransformationPhoto
        },
    ]
    scanerSelections = {
        socialSphere : [
            {
                name: 'Обратная связь с гражданами',
                photo: feedbackPhoto
            },
            {
                name: 'Культура',
                photo: culturePhoto
            },
            {
                name: 'Молодежная политика',
                photo: youthPolicyPhoto
            },
            {
                name: 'Спорт',
                photo: sportPhoto
            },
            {
                name: 'Образование',
                photo: educationPhoto
            },
            {
                name: 'Наука и высшая школа',
                photo: sciencePhoto
            },
            {
                name: 'Соцзащита',
                photo: SocialSpherePhoto
            },
            {
                name: 'Цифровая трансформация',
                photo: digitalTransformationPhoto
            },
            {
                name: "Туризм",
                photo: tourismPhoto
            },
            {
                name: 'Здравоохранение',
                photo: healthcarePhoto
            },
            {
                name: "Архивы",
                photo: archivesPhoto
            },
        ],
        urbanEconomy : [
            {
                name: 'Благоустройство территории',
                photo: urbanEnvironmentPhoto
            },
            {
                name: 'ЖКХ',
                photo: hcsPhoto
            },
            {
                name: 'Безопасность',
                photo: safetyPhoto
            },
            {
                name: 'Транспорт',
                photo: transportPhoto
            },
            {
                name: 'Капитальный ремонт',
                photo: repairPhoto
            },
            {
                name: 'Недвижимость',
                photo: RealEstatePhoto
            },
            {
                name: 'Экология',
                photo: ecologyPhoto
            },
            {
                name: "Цифровая трансформация",
                photo: digitalTransformationPhoto
            },
        ],
        business : [
            {
                name: "Промышленность",
                photo: EntrepreneurshipPhoto
            },
            {
                name: "Аренда",
                photo: rentPhoto
            },
            {
                name: "Инновации",
                photo: educationPhoto
            },
            {
                name: "Строительство",
                photo: ConstructionMiniPhoto
            },
        ],
    }

    CalculatorSelectionsCitizen = [
        {
            name: 'Дом',
            photo: housePhoto,
        },
        {
            name: 'Парк',
            photo: urbanEnvironmentPhoto
        },
        {
            name: 'Покупки',
            photo: purchasesPhoto,
        },
        {
            name: 'Библиотека',
            photo: libraryPhoto
        },
        {
            name: 'Образование',
            photo: educationPhoto,
        },
        {
            name: 'ЖКХ',
            photo: hcsPhoto
        },
        {
            name: 'Экскурсии',
            photo: geoinformationTechnologiesPhoto,
        },
        {
            name: 'Здоровье',
            photo: sportPhoto
        },
        {
            name: 'Транспорт',
            photo: transportPhoto,
        },
        {
            name: 'Развлечения',
            photo: entertainmentPhoto
        },
        {
            name: 'Экология',
            photo: ecologyPhoto,
        },
        {
            name: 'Участие в жизни города',
            photo: youthPolicyPhoto
        },
    ]

    CalculatorSelectionsBusiness = {
        urbanEconomy:[
            {
                name: 'Безопасность',
                photo: safetyPhoto
            },
            {
                name: 'ЖКХ',
                photo: hcsPhoto
            },
            {
                name: 'Капитальный ремонт',
                photo: repairPhoto
            },
            {
                name: 'Недвижимость',
                photo: RealEstatePhoto
            },
            {
                name: 'Экология',
                photo: ecologyPhoto
            },
            {
                name: 'Транспорт',
                photo: transportPhoto,
            },
            {
                name: "Цифровая трансформация",
                photo: digitalTransformationPhoto
            },
        ],
        socialSphere:[
            {
                name: "Архивы",
                photo: archivesPhoto
            },
            {
                name: 'Здравоохранение',
                photo: healthcarePhoto
            },
            {
                name: 'Цифровая трансформация',
                photo: digitalTransformationPhoto
            },
            {
                name: 'Образование',
                photo: educationPhoto
            },
            {
                name: 'Обратная связь с гражданами',
                photo: feedbackPhoto
            },
            {
                name: 'Соцзащита',
                photo: SocialSpherePhoto
            },
            {
                name: 'Инновации',
                photo: feedbackPhoto
            },
            {
                name: 'Промышленность',
                photo: SocialSpherePhoto
            },
            {
                name: 'Строительство',
                photo: ConstructionPhoto
            },
        ]
    }

    token = ""
    email = 0

    changePageUp(pages,page){
        let pageList = []
        for (let key in pages) {
            pageList.push(key)
        }
        let result =''
        pageList.map((item,index) => {
            if (item == page) {
                if (--index <= -1){
                    console.log(1)

                    result = pageList[ pageList.length - 1 ]
                }else{
                    console.log(--index)
                    result = pageList[++index]
                }
            }
        })
        return result
    }
    changePageDown(pages,page){
        let pageList = []
        for (let key in pages) {
            pageList.push(key)
        }

        let result =''
        pageList.map((item,index) => {
            if (item == page) {
                if (++index >= pageList.length){
                    console.log(1)
                    result = pageList[0]
                }else{
                    console.log(--index)
                    result = pageList[++index]
                }
            }
        })
        return result
    }
    mobileMenu = false
    loader = false
    startPage = false
    info = undefined
    permissions = 0

}

export default new State()