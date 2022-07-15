import axios from "axios";

export default class PostService {
    static async postRegistrationForm(info) {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };


            // fetch("https://server.xn-----6kccnbhd7bxaidnbcayje0c.xn--p1ai/register_user.json?login="+ info.login +"&password="+ info.password +"&phone=" + info.phone +"&email=" + info.email+"&city=" + info.city, requestOptions)
            //     .then(response => response.text())
            //     .then(result => console.log(result))
            //     .catch(error => console.log('error', error));


            console.log(info)
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
}