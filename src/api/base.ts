// index.ts
import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios'

export interface Result<T = any> {
  code: number
  message: string
  data: T
}

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 30000,
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token') as string
    if (token) {
      config.headers!.Authorization = token
    }
    return config
  },
  (error: AxiosError) => {
    // 请求错误，这里可以用全局提示框进行提示
    return Promise.reject(error)
  },
)
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message, data } = response.data // 根据自定义错误码判断请求是否成功
    if (code === 0) {
      // 将组件用的数据返回
      return data
    } else {
      // 处理业务错误。这里错误消息可以使用全局弹框展示出来
      return Promise.reject(new Error(message))
    }
  },
  (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let message = ''
    // HTTP 状态码
    const status = error.response?.status
    switch (status) {
      case 401:
        message = 'token 失效，请重新登录'
        // 这里可以触发退出的 action
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器故障'
        break
      default:
        message = '网络连接故障'
    }
    // 这里错误消息可以使用全局弹框展示出来
    return Promise.reject(error)
  },
)

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },
  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  },
}
