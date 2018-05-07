/**
 * Created by niuzz on 17/10/1.
 */
import fetch from '../utils/fetch'
/**
 * 获取余额
 * @param querier
 */
export function fetchBalance(querier) {
  return fetch({
    url: '/user/balance',
    method: 'post',
    data: querier
  })
}
/**
 * 用户信息
 * @param querier
 */
export function getUserInfo(querier) {
  return fetch({
    url: '/user/get_userinfo',
    method: 'post',
    data: querier
  })
}
/**
 * 用户信息
 * @param querier
 */
export function update(querier) {
  return fetch({
    url: '/user/update',
    method: 'post',
    data: querier
  })
}
/**
 * 用户账户详情
 * @param {*} querier
 */
export function fetchBalanceInfo(querier) {
  return fetch({
    url: '/user/balanceinfo',
    method: 'post',
    data: querier
  })
}
/**
 * 检查邮箱
 * @param {*} querier
 */
export function checkmail(querier) {
  return fetch({
    url: '/user/checkemail',
    method: 'post',
    data: querier
  })
}
/**
 * 获取邮箱注册码
 * @param {*} querier
 */
export function getcode(querier) {
  return fetch({
    url: '/user/getcode',
    method: 'post',
    data: querier
  })
}
/**
 * 登录
 * @param {*} querier
 */
export function login(querier) {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: querier
  })
}
/**
 * 文章列表
 * @param {*} querier
 */
export function articlechart(querier) {
  return fetch({
    url: '/user/articlechart',
    method: 'post',
    data: querier
  })
}
/**
 * 充值
 * @param {*} querier
 */
export function recharge(querier) {
  return fetch({
    url: '/user/recharge',
    method: 'post',
    data: querier
  })
}
/**
 * 充值
 * @param {*} querier
 */
export function register(querier) {
  return fetch({
    url: '/user/register',
    method: 'post',
    data: querier
  })
}
