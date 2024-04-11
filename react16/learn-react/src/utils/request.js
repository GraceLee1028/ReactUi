import axios from 'axios'
import {isPlainObject,merge} from "lodash";
import qs from "qs";
const http = axios.create({
  baseURL: '/proxy',
  timeout: 1000 * 180,
  withCredentials: true
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  config.headers['Accept-Language'] = 'zh-CN'
  var defaults = {
  }
  // 防止缓存，GET请求默认带_t参数
  if (config.method === 'get') {
    config.params = {
      ...defaults,
      ...config.params,
      ...{ '_t': new Date().getTime() }
    }
  }
  if (isPlainObject(config.params)) {
    config.params = {
      ...defaults,
      ...config.params
    }
  }
  if (isPlainObject(config.data)) {
    config.data = {
      ...defaults,
      ...config.data
    }
    if (/^application\/x-www-form-urlencoded/.test(config.headers['content-type'])) {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  const code = response.data.errorCode || response.data.code;
  const msg = response.data.msg || response.data.errorMsg
  const config = response.config;
  const headers = response.headers;
  // console.log(response)
  if (['arraybuffer', 'blob'].includes(config.responseType)) {
    const fileName = headers['content-disposition'].replace('attachment;filename=', '');
    response.fileName = decodeURIComponent(fileName);
    return response;
  }
  if (code === 401 || code === 10001) {
    if (!!window.__POWERED_BY_QIANKUN__) {
      Message({
        message: msg || "服务端授权失败，请您稍后再试",
        type: 'error'
      })
      window.parentRouter.push(`/login`);
      return Promise.reject(msg)
    } else {
      if(!window.location.origin){
        window.location.origin = window.location.protocol+"//"+window.location.hostname+(window.location.port?`:${window.location.port}`:'');
      }
      window.location.href !=`${window.location.origin}/login`&&(window.location.href = `${window.location.origin}/login`)
      return Promise.reject(msg)
    }
  }
  if (code != 0) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(response.data)
  }
  return response
}, error => {
  console.error(error)
  return Promise.reject(error)
})


// 默认入参
const getDefaults = () => {
  var defaults = {
  }
  return defaults
}

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName, apiName = 'contrastApi') => {
  return window.SITE_CONFIG[apiName] + actionName;
}
/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  return openDefultParams ? merge(getDefaults(), params) : params
}
/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
  data = openDefultdata ? merge(getDefaults(), data) : data
  return contentType === 'json' ? data : qs.stringify(data)
}

export default http
