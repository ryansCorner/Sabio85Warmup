import axios from 'axios'

const getAllAuthors = (payload, onSuccess, onError) => {
    const config = {
        method: "Get",
        url: 'https://localhost:50001/api/author',
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const getPagedAuthors = (pageIndex, pageSize, onSuccess, onError) => {

    const config = {
        method: "Get",
        url: `https://localhost:50001/api/author/paginate/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        // data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const getIdAuthors = (id, onSuccess, onError) => {
    const config = {
        method: "Get",
        url: `https://localhost:50001/api/author/${id}`,
        // data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const authorCreate = (payload, onSuccess, onError) => {
    const config = {
        method: "Post",
        url: `https://localhost:50001/api/author/`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const authorUpdate = (id, payload, onSuccess, onError) => {
    const config = {
        method: "Put",
        url: `https://localhost:50001/api/author/${id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const authorDelete = (id, onSuccess, onError) => {
    const config = {
        method: "Delete",
        url: `https://localhost:50001/api/author/${id}`,
        data: id,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const getBlogsForAuthor = (id, onSuccess, onError) => {
    const config = {
        method: 'Get',
        url: `https://localhost:50001/api/blogpost/authorblogs${id}`,
        data: id,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(resp => onSuccess(resp))
        .catch(err => onError(err))
}

export { getAllAuthors, getPagedAuthors, getIdAuthors, authorCreate, authorUpdate, authorDelete, getBlogsForAuthor }

// class authorService {

//     static getAll(payload, onSuccess, onError) {
//         const url = `https://localhost:50001/api/author`
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
// export default authorService