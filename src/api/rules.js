import {
    post,
    postDownload
} from '../util/request'
import {
    URL_POST_LOGIN,
    URL_POST_REGISTERED,
    URL_POST_SCANNING,
    URL_POST_LIST_QUERY,
    URL_POST_INFOMATION_QUERY,
    URL_POST_MEDUSA_QUERY,
    URL_POST_GENERATE_WORD,
    URL_POST_DOWNLOAD_WORD
} from './url'

// 登陆接口
export async function login(params) {
    let response = await post(URL_POST_LOGIN, params, {
        headers: {}
    })
    return response
}

// 登陆接口
export async function registered(params) {
    let response = await post(URL_POST_REGISTERED, params, {
        headers: {}
    })
    return response
}


// 扫描接口
export async function scanning(params) {
    let response = await post(URL_POST_SCANNING, params, {
        headers: {}
    })
    return response
}

//列表接口
export async function list_query(params) {
    let response = await post(URL_POST_LIST_QUERY, params, {
        headers: {}
    })
    return response
}

//主动扫描目标漏洞列表查询接口

export async function imfomation_query(params) {
    let response = await post(URL_POST_INFOMATION_QUERY, params, {
        headers: {}
    })
    return response
}



export async function medusa_query(params) {
    let response = await post(URL_POST_MEDUSA_QUERY, params, {
        headers: {}
    })
    return response
}


export async function generate_word(params) {
    let response = await post(URL_POST_GENERATE_WORD, params, {
        headers: {}
    })
    return response
}

export async function download_word(params) {
    let response = await postDownload(URL_POST_DOWNLOAD_WORD, params, {
        headers: {}
    })
    return response
}
