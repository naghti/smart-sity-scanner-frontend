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
                })
            )
            console.log(responce)
            return responce.data
        }catch (e) {
            alert(`error: ${e}`)
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
            console.error(e)
        }
    }
    static async checkStorage(funcNull,funcSuccess) {
        let StorageToken = localStorage.getItem('token');
        let StoragePassword = localStorage.getItem('password');

        if (StorageToken == null) {
            funcNull()
        }else{
            const result = await PostService.postAuthorization({
                login: StorageToken,
                password: StoragePassword
            })
            if (result?.error != undefined) {
                localStorage.removeItem('token')
                localStorage.removeItem('password')
                funcNull()
            }else{
                funcSuccess(result)
            }
        }
    }
}