import axios from 'axios-miniprogram'

// 默认发送 GET 请求
export function requestTest() {
  return axios('https://gcert.aoshan-academy.com:19443/api/admin/tenant/list')
}
