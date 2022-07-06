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
import SocialSpherePhoto from '../images/SocialSphere.png'
import sportPhoto from '../images/sport.png'
import digitalTransformationPhoto from '../images/digitalTransformation.png'

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
          photo: feedbackPhoto
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
          name: 'Геоинформационые технологии',
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
    scanerSelections = [
        {
            name: 'Обратная связь с гражданами',
            photo: feedbackPhoto
        },
        {
            name: 'Благоустройство територии',
            photo: educationPhoto
        },
        {
            name: 'Культура',
            photo: educationPhoto
        },
        {
            name: 'Безопасность',
            photo: educationPhoto
        },
        {
            name: 'Образование',
            photo: safetyPhoto
        },
        {
            name: 'ЖКХ',
            photo: hcsPhoto
        },
        {
            name: 'Недвижимость',
            photo: educationPhoto
        },
        {
            name: 'Спорт',
            photo: educationPhoto
        },
        {
            name: 'Транспорт',
            photo: educationPhoto
        },
        {
            name: 'Здравоохранение',
            photo: educationPhoto
        },
        {
            name: 'Экология',
            photo: educationPhoto
        },
        {
            name: 'Молодежная политика',
            photo: educationPhoto
        },
        {
            name: 'Предпринимательство',
            photo: educationPhoto
        },
        {
            name: 'Капитальный ремонт',
            photo: educationPhoto
        },
        {
            name: 'Наука и высшая школа',
            photo: educationPhoto
        },
        {
            name: 'Строительство',
            photo: educationPhoto
        },
        {
            name: 'Социальная сфера',
            photo: educationPhoto
        },
        {
            name: 'Цифровая трансформация',
            photo: educationPhoto
        },
        {
            name: "item1",
            photo: educationPhoto
        },
        {
            name: "item2",
            photo: educationPhoto
        },
        {
            name: "item3",
            photo: educationPhoto
        },
        {
            name: "item4",
            photo: educationPhoto
        },
    ]
}

export default new State()