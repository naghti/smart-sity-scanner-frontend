import axios from "axios";

export default class PostService {
    static async postRegistrationForm(info) {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };


            fetch("https://server.xn-----6kccnbhd7bxaidnbcayje0c.xn--p1ai/register_user.json?login="+ info.login +"&password="+ info.password +"&company=" + info.company +"&job=" + info.job +"&phone=" + info.phone +"&email=" + info.email, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }catch (e) {
            console.error(e)
        }

    }
}