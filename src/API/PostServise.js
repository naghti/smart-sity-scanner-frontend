import axios from "axios";

export default class PostService {
    static async postRegistrationForm() {
        const responce = await axios.post(`https://dreamhouse-tomsk.ru/`, new URLSearchParams({
                action: 'разделы'
            })
        )
        return responce.data
    }
}