import {makeAutoObservable, makeObservable} from "mobx";

class SmartCityScannerCitizenButtonsInfo {
    constructor() {
        makeAutoObservable(this)
    }
    info = {
        "Дом": {
            title: "Дом",
            inputs: [
                {
                    title: "Система видеонаблюдения\t\n",
                    info:'Система обеспечения безопасности\t\n',
                },
                {
                    title: "Охранно-пожарная сигнализация\t\n",
                    info:'Оповещение о пожаре, включение антипожарной системы\t\n',
                },
                {
                    title: "Управление освещением\t\n",
                    info:'Контроль освещения, возможно управление с телефона\t\n',
                },
                {
                    title: "Контроль климата\t\n",
                    info:'Контроль климата, возможно управление с телефона\t\n',
                },
                {
                    title: "Контроль водоснабжения\t\n",
                    info:'Контроль качества питьевой воды, оплата за водоснабжение, передача данных счетчиков через мобильное приложение/сайт\t\n',
                },
                {
                    title: "Контроль газо и электроснабжения\t\n",
                    info:'Оплата за водоснабжение, передача данных счетчиков через мобильное приложение/сайт\t\n/сайт\t\n',
                },
                {
                    title: "Умные устройства\t\n",
                    info:'Устройства, управление которых возможно через мобильное устройство\t\n',
                },
                {
                    title: "Умные устройства\t\n",
                    info:'Устройства, управление которых возможно через мобильное устройство\t\n',
                },
            ]
        },
        "Парк": {
            title: "Парк",
            inputs: [
                {
                    title: "Система видеонаблюдения\t\n",
                    info:'Безопасность посетителей парка, контроль за сохранностью объектов парка\t\n',
                },
                {
                    title: "Автоматы с водой\t\n",
                    info:'Мобильное приложение с указанием расположения автоматов с водой на карте\t\n',
                },
                {
                    title: "Биотуалеты\t\n",
                    info:'Мобильное приложение с указанием расположения биотуалетов на карте\t\n',
                },
                {
                    title: "Умные скамейки\t\n",
                    info:'Быстрая зарядка телефона, вызов экстренных служб, подогрев\t\n',
                },
                {
                    title: "Мобильное приложение\t\n",
                    info:'Афиша мероприятий, карта объектов, аттракционов, аудиогиды, квесты, геймификация\t\n',
                },
                {
                    title: "Система лояльности\t\n",
                    info:'Система накопления баллов за используемые сервисы\t\n',
                },
                {
                    title: "Маркетплейс\t\n",
                    info:'Онлайн бронирование и покупка услуг парка\t\n',
                },
            ]
        },
        "Библиотека": {
            title: "Библиотека",
            inputs: [
                {
                    title: "Система заказа книг на дом\t\n",
                    info:'Онлайн выбор книг, быстрая доставка книг на дом\t\n',
                },
                {
                    title: "Умная онлайн-библиотека\t\n",
                    info:'Онлайн персонализированный подбор книг, возможность читать книги в телефоне\t\n',
                },
            ]
        },
        "Покупки": {
            title: "Покупки",
            inputs: [
                {
                    title: "Система доставки покупок на дом\t\n",
                    info:'Доставка продуктов для маломобильных граждан, пенсионеров и обычных жителей\t\n',
                },
                {
                    title: "Умный онлайн-магазин\t\n",
                    info:'Выбор необходимых продуктов, подсказки в поиске продуктов в магазине\t\n',
                },
                {
                    title: "Приложение с оповещениями о скидках\t\n",
                    info:'Указание, в каком магазине, на какой товар скидка, до какого числа скидка, наличие данного товара в конкретном магазине\t\n',
                },
                {
                    title: "Приложение доходов и расходов с расчетом более выгодных покупок и вложений финансов\t\n",
                    info:'Грамотное распоряжение пользователя своим бюджетом\t\n',
                },
            ]
        },
        "Здоровье": {
            title: "Здоровье",
            inputs: [
                {
                    title: "Умные приборы измерения показателей здоровья\t\n",
                    info:'Постоянное отслеживание состояния здоровья, возможность передачи данных близким родственникам, в случае ухудшения состояния - вызов экстренных служб\t\n',
                },
                {
                    title: "Телемедицина\t\n",
                    info:'Онлайн консультация с врачами\t\n',
                },
            ]
        },
        "Транспорт": {
            title: "Транспорт",
            inputs: [
                {
                    title: "Система отслеживания транспорта\t\n",
                    info:'Экономия времени, отслеживание необходимого транспортного маршрута\t\n',
                },
                {
                    title: "Умные дороги\t\n",
                    info:'Сообщение информации о некачественном дорожном полотне, быстрый ремон некачественного дорожного полотна\t\n',
                },
                {
                    title: "Приложения системы оплаты штрафов и госпошлин\t\n",
                    info:'Быстрая оплата штрафов и госпошлин\t\n',
                },
            ]
        },
        "Экскурсии": {
            title: "Экскурсии",
            inputs: [
                {
                    title: "Приложение заказа офлайн-гида\t\n",
                    info:'Удобное приложение для быстрого поиска экскурсовода по городу\t\n',
                },
                {
                    title: "Приложение онлайн-гидов\t\n",
                    info:'Аудиогид по городу\t\n',
                },
                {
                    title: "Умное экскурсионное приложение\t\n",
                    info:'Удобная карта с указанием пешеходных маршрутов, исторических мест, указание магазинов для покупки сувенирной продукции\t\n',
                },
            ]
        },
        "Образование": {
            title: "Образование",
            inputs: [
                {
                    title: "Приложение учреждений образования города\t\n",
                    info:'Школьное расписание, меню в столовой, кабинеты, афиша школьных мероприятий, оповещение в случае чрезвычайных происшествий\t\n',
                },
                {
                    title: "Умная онлайн-подача документов в учреждения образований\t\n",
                    info:'Подача документов в образовательные организации в любое время, в любом месте\t\n',
                },
            ]
        },
        "Развлечения": {
            title: "Развлечения",
            inputs: [
                {
                    title: "Приложение индивидуального подбора развлечений в городской среде\t\n",
                    info:'Выбор интересующего Вас мероприятия, маркетплейс с онлайн-покупкой билетов\t\n',
                },
            ]
        },
        "Участие в жизни города": {
            title: "Участие в жизни города",
            inputs: [
                {
                    title: "Система оповещений о городских мероприятиях\t\n",
                    info:'Афиша мероприятий в мобильном приложении/на сайте\t\n',
                },
                {
                    title: "Система экстренного реагирования служб безопасности\t\n",
                    info:'Безопасность жителей, в случае чрезвычайной ситуации система вызовет необходимую экстренную службу\t\n',
                },
                {
                    title: "Система видеонаблюдения\t\n",
                    info:'Система обеспечения безопасности\t\n',
                },
                {
                    title: "Система распознования лиц\t\n",
                    info:'Безопасность жителей\t\n',
                },
            ]
        },
        "ЖКХ": {
            title: "ЖКХ",
            inputs: [
                {
                    title: "Приложение оплаты счетов за ЖКХ\t\n",
                    info:'Оплата счетов за ЖКХ в любое время, в любом месте\t\n',
                },
            ]
        },
        "Экология": {
            title: "Экология",
            inputs: [
                {
                    title: "Приложение с показаниями уровня загрязнения разнообразных районов города\t\n",
                    info:'Мониторинг экологического состояния города\t\n',
                },
            ]
        }
    }
}

export default new SmartCityScannerCitizenButtonsInfo()