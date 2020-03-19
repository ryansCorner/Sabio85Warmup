import axios from 'axios'

// https://localhost:50001/api/blogpost/5
// https://localhost:50001/api/blogpost/search/?searchWord=system&sortBy=Title&sortOrder=ASC&pageIndex=0&pageSize=20

const getAll = (payload, onSuccess, onError) => {
    var pageSize = payload.pageSize
    var pageIndex = payload.pageIndex
    const config = {
        method: 'Get',
        url: `https://localhost:50001/api/blogpost?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const create = (payload, onSuccess, onError) => {
    const config = {
        method: 'Post',
        url: `https://localhost:50001/api/blogpost`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(resp => onSuccess(resp))
        .catch(err => onError(err))
}

const getById = (id, onSuccess, onError) => {
    const config = {
        method: 'Get',
        url: `https://localhost:50001/api/blogpost/${id}`,
        data: id,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(resp => onSuccess(resp))
        .catch(err => onError(err))
}

const update = (payload, onSuccess, onError) => {
    const id = payload.id
    const config = {
        method: 'Put',
        url: `https://localhost:50001/api/blogpost/${id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(resp => onSuccess(resp))
        .catch(err => onError(err))
}

const remove = (id, onSuccess, onError) => {
    const config = {
        method: 'Delete',
        url: `https://localhost:50001/api/blogpost/${id}`,
        data: id,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(resp => onSuccess(resp))
        .catch(err => onError(err))
}
export { getAll, create, getById, update, remove }