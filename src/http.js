
import axios from 'axios'
axios.defaults.timeout = 20000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;   //配置接口地址

//返回一个Promise(发送post请求)
export function post(url, params) {
    return axios.post(url, params)
}

//返回一个Promise(发送get请求)
export function get(url, params) {
    return axios.get(url, { params })
}

export default {
    post,
    get,
}
