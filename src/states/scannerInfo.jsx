import {makeAutoObservable, makeObservable} from "mobx";
import styles from "../pages/styles/SmartCityScanner.module.css";
import state from "./state";
import scannerCitizenStyles from "../pages/styles/SmartCityScannerCitizen.module.css";
import scannerBusinessStyles from "../pages/styles/SmartCityScannerBusiness.module.css";

class ScannerInfo {
    constructor() {
        makeAutoObservable(this)
    }

    info = {
        base:{
            title: "",
            paragraph: "",
            status: "",
            box:[
                {
                    title: "",
                    color: "",
                    items: state.CalculatorSelectionsCitizen,
                    style: scannerCitizenStyles.smartCityScannerCitizen__selection,
                    gridArea: "CalculatorSelectionsCitizen",
                    background: "linear-gradient(180deg,rgba(67, 106, 235, 0) 0%,#436AEB 87.81%, #436AEB 100%)"
                }
            ]
        },
        citizen:{
            title: "Области цифровизации городского хозяйства",
            paragraph: "В данном разделе Вы можете ознакомиться с перечнем умных решений для жителей города и проголосовать за внедрение наиболее востребованных цифровых технологий.",
            status: "Житель",
            box:[
                {
                    title: "",
                    color: "",
                    items: state.CalculatorSelectionsCitizen,
                    style: scannerCitizenStyles.smartCityScannerCitizen__selection,
                    gridArea: "CalculatorSelectionsCitizen",
                    background: "linear-gradient(180deg,rgba(67, 106, 235, 0) 0%,#436AEB 87.81%, #436AEB 100%)"
                }
            ]
        },
        admin:{
            title: "Области цифровизации",
            paragraph: "Данный раздел позволяет рассчитать показатели цифровизации городского хозяйства согласно стандарту Умного Города в соответствии с приказом Минстроя №357/пр от 11.05.2022 г.",
            status: "Городская администрация",
            box:[
                {
                    title: "Социальная сфера",
                    color: "#FF9D40",
                    items: state.scanerSelections.socialSphere,
                    style: styles.smartCityScanner__selectionSocialSphere,
                    gridArea: "socialSphere",
                    background: "linear-gradient(180deg, rgba(255, 124, 0, 0) 0%, #FF7C00 87.81%, #FF7C00 100%)"
                },
                {
                    title: "Городское хозяйство",
                    color: "#0A3AD7",
                    items: state.scanerSelections.urbanEconomy,
                    style: styles.smartCityScanner__selectionUrbanEconomy,
                    gridArea: "urbanEconomy",
                    background: "linear-gradient(180deg, rgba(10, 58, 215, 0) 0%, #0A3AD7 87.81%, #0A3AD7 100%)"
                },
                {
                    title: "Бизнес",
                    color: "#00E132",
                    items: state.scanerSelections.business,
                    style: styles.smartCityScanner__selectionBusiness,
                    gridArea: "business",
                    background: "linear-gradient(180deg, rgba(0, 225, 50, 0) 0%, #00E132 87.81%, #00E132 100%)"
                },
            ]
        },
        business:{
            title: "Области цифровизации городского хозяйства",
            paragraph: "В данном разделе Вы можете ознакомиться с перечнем умных решений для жителей города и проголосовать за внедрение наиболее востребованных цифровых технологий.",
            status: "Бизнес",
            box:[
                {
                    title: "Городское хозяйство",
                    color: "rgba(10, 58, 215, 1)",
                    items: state.CalculatorSelectionsBusiness.urbanEconomy,
                    style: scannerBusinessStyles.smartCityScannerBusiness__selectionUrbanEconomy,
                    gridArea: "businessUrbanEconomy",
                    background: "linear-gradient(180deg,rgba(67, 106, 235, 0) 0%,#436AEB 87.81%, #436AEB 100%)"
                },
                {
                    title: "Социальная сфера",
                    color: "rgb(255, 157, 64)",
                    items: state.CalculatorSelectionsBusiness.socialSphere,
                    style: scannerBusinessStyles.smartCityScannerBusiness__selectionSocialSphere,
                    gridArea: "businessSocialSphere",
                    background: "linear-gradient(rgba(255, 124, 0, 0) 0%,rgb(255, 124, 0) 87.81%,rgb(255, 124, 0) 100%)"
                },
            ]
        },
    }
}

export default new ScannerInfo()