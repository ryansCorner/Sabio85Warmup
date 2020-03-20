import axios from 'axios'


const insert = (payload, onSuccess, onError) => {
    const config = {
        method: "Post",
        url: 'https://localhost:50001/api/person/fullpost',
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}
const getById = (payload, onSuccess, onError) => {
    const config = {
        method: "Get",
        url: `https://localhost:50001/api/person/${payload}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}
const getAllPages = (payload, onSuccess, onError) => {
    const pageIndex = payload.pageIndex
    const pageSize = payload.pageSize
    const config = {
        method: "Get",
        url: `https://localhost:50001/api/pages?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const update = (id, payload, onSuccess, onError) => {

    const config = {
        method: "Put",
        url: `https://localhost:50001/api/person/${id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}


const remove = (payload, onSuccess, onError) => {
    const config = {
        method: "Delete",
        url: `https://localhost:50001/api/person/${payload}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}

const kitchenSinkAll = (payload, onSuccess, onError) => {
    const pageIndex = payload.pageIndex
    const pageSize = payload.pageSize
    const config = {
        method: "Get",
        url: `https://localhost:50001/api/person/personkitchensink?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response.data.item))
        .catch(err => onError(err))
}

const kitchenSinkId = (payload, onSuccess, onError) => {
    const config = {
        method: "Get",
        url: `https://localhost:50001/api/person/profileInfo${payload}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response.data.item))
        .catch(err => onError(err))
}

const updateFull = (id, payload, onSuccess, onError) => {
    console.log('update', id, payload)
    const config = {
        method: "Put",
        url: `https://localhost:50001/api/person/fullUpdate${id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
        .then(response => onSuccess(response))
        .catch(err => onError(err))
}


export { insert, getById, getAllPages, update, updateFull, remove, kitchenSinkAll, kitchenSinkId }