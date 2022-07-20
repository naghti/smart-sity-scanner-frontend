import axios from "axios";

export default class PostService {

    static async postRegistrationForm(info) {
        try {
            const responce = await axios.post(`https://server.xn-----6kccnbhd7bxaidnbcayje0c.xn--p1ai/register_user.json`, new URLSearchParams({
                    login:info.login,
                    city:info.city,
                    phone:info.phone,
                    email:info.email,
                    password:info.password,
                    permissions: info.permissions
                })
            )
            console.log(responce)
            return responce.data
        }catch (e) {
            alert(`error: ${e}`)
            return {error: `error: ${e}`}
            console.error(e)
        }

    }
    static async postMailConfirmation(token,code) {
        try {
            console.log([token,code])
            const responce = await axios.post(`https://server.xn-----6kccnbhd7bxaidnbcayje0c.xn--p1ai/commit_reg.json`, new URLSearchParams({
                    token:token,
                    code:code,
                })
            )
            return responce.data
        }catch (e) {
            alert(`error: ${e}`)
            return {error: `error: ${e}`}
            console.error(e)
        }
    }
    static async postAuthorization(info) {
        try {
            const responce = await axios.post(`https://server.xn-----6kccnbhd7bxaidnbcayje0c.xn--p1ai/login.json`,
                new URLSearchParams(info)
            )
            console.log(responce)
            return responce.data
        }catch (e) {
            alert(`error: ${e}`)
            return {error: `error: ${e}`}
            console.error(e)
        }
    }

    static async checkStorage(funcNull,funcSuccess) {
        let StorageToken = localStorage.getItem('token');
        let StoragePassword = localStorage.getItem('password');

        console.log([StorageToken,StoragePassword])

        // если токена нет, то исполняется функция не найденного юзера
        if (StorageToken == null) {
            funcNull()
        }else{
            const result = await PostService.postAuthorization({
                login: StorageToken,
                password: StoragePassword
            })
            console.log(result)

            // если имеется ошибка то удаляю инфу и использую функцию не найденного юзера
            if (result?.error != undefined) {
                localStorage.removeItem('token')
                localStorage.removeItem('password')
                funcNull(result)
            }else{
            // если все хорошо использую функцию что все хорошо
                funcSuccess(result)
            }
        }
    }
    static async sendCalculator(url,info) {
        let StorageToken = localStorage.getItem('token');

        console.log([info,StorageToken])

        try {
            const responce = await axios.post(`https://server.xn-----6kccnbhd7bxaidnbcayje0c.xn--p1ai/${url}`,
                new URLSearchParams(
                {
                        token: StorageToken,
                        info: JSON.stringify(info)
                    }
                )
            )
            console.log(responce.data)
            // console.log(JSON.parse(responce.data.info))
            return responce.data
        }catch (e) {
            alert(`error: ${e}`)
            return {error: `error: ${e}`}
            console.error(e)
        }
    }
    static async deleteUser(token) {
        let StorageToken = localStorage.getItem('token');
        console.log(StorageToken)
        try {
            const responce = await axios.post(`https://server.xn-----6kccnbhd7bxaidnbcayje0c.xn--p1ai/delete_user`,
                new URLSearchParams(
                {
                        token: StorageToken,
                    }
                )
            )
            console.log(responce.data)
            return responce.data
        }catch (e) {
            alert(`error: ${e}`)
            return {error: `error: ${e}`}
            console.error(e)
        }
    }
}
