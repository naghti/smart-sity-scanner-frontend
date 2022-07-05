import {makeAutoObservable, makeObservable} from "mobx";

class State {
    constructor() {
        makeAutoObservable(this)
    }
    roles = [
        'business',
        'administration',
        'citizen'
    ]
    scanerSelections = [
        'Обратная связь с гражданами',
        'Городская среда',
        'Культура',
        'Безопасность',
        'Образование',
        'ЖКХ',
        'Геоинформационые технологии',
        'Спорт',
        'Транспорт',
        'Здравоохранение',
        'Экология',
        'Молодежная политика',
        'Предпринимательство',
        'Энергетика',
        'Наука и высшая школа',
        'Строительство',
        'Социальная сфера',
        'Цифровая трансформация'
    ]
}

export default new State()