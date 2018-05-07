/**
 * Created by niuzz on 17/11/6.
 */
import fetch from '../utils/fetch'
import axios from 'axios'
/**
 * 取验证码
 */
export function getImg () {
  return fetch({
    url: 'http://reg.chinabyte.com/jsp/common/code.jsp',
    method: 'get'
  })
}
/**
 * 验证验证码
 */
export function getCode (params) {
  let url = '/getCode/validateCode.jsp?authcode=' + params
  return axios.get(url)
}