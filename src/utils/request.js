import axios from 'axios';             
// get post请求封装
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param}).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch((error) => {
            reject(error)
        })
    })
}
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
}