import axios from 'axios'


let serverLogin = (onSuccess, onError) => {
    const config = {
        method: "Get",
        url: 'https://localhost:50001/api/temp/auth/login/8/gregorio/cto',
        // data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))

}

let getPing = (payload, onSuccess, onError) => {
    const config = {
        method: "Get",
        url: 'https://localhost:50001/api/ping',
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}
export { serverLogin, getPing }


// class loginService {
//     static serverLogin(payload, onSuccess, onError) {
//         const url = 'https://localhost:50001/api/temp/auth/login/8/gregorio/cto'
//         const config = {
//             // method: "Get",
//             // url: 'https://localhost:50001/api/temp/auth/login/8/gregorio/cto',
//             data: payload,
//             withCredentials: true,
//             crossdomain: true,
//             headers: { "Content-Type": "application/json" }
//         }
//         axios.get(url, config)
//             .then(response => onSuccess(response))
//             .catch(err => onError(err))
//     }

//     static getPing(payload, onSuccess, onError) {
//         const url = `https://localhost:50001/api/ping`
//         const config = {
//             // method: "Get",
//             // url: 'https://localhost:50001/api/temp/auth/login/8/gregorio/cto',
//             data: payload,
//             withCredentials: true,
//             crossdomain: true,
//             headers: { "Content-Type": "application/json" }
//         }
//         axios.get(url, config)
//             .then(response => onSuccess(response))
//             .catch(err => onError(err))
//     }
// }
// export default loginService