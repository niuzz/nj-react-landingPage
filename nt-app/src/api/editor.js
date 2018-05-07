/**
 * Created by niuzz on 17/10/1.
 */
import fetch from '../utils/fetch'

/**
 * 编辑注册
 * @param querier
 */
export function loginEditor(querier) {
  return fetch({
    url: '/editor/login',
    method: 'post',
    data: querier
  })
}
/**
 * 编辑注册
 * @param querier
 */
export function registerEditor (querier) {
  return fetch({
    url: '/editor/register',
    method: 'post',
    data: querier
  })
}
/**
 * 取编辑列表信息
 * @param querier
 */
export function fetchEditorList (querier) {
  return fetch({
    url: '/editor/editor_list',
    method: 'post',
    data: querier
  })
}
/**
 * 添加支付宝
 * @param querier
 */
export function addAlipay (querier) {
  return fetch({
    url: '/editor/add_alipay',
    method: 'post',
    data: querier
  })
}
/**
 * 提现详情
 */
export function withdrawalsInfo(querier) {
  return fetch({
    url: '/editor/withdrawals_info',
    method: 'post',
    data: querier
  })
}
/**
 * 需要处理数
 */
export function missnum(querier) {
  return fetch({
    url: '/editor/missnum',
    method: 'post',
    data: querier
  })
}
/**
 * 编辑首页信息
 */
export function indexInfo(querier) {
  return fetch({
    url: '/editor/index',
    method: 'post',
    data: querier
  })
}
/**
 * 余额
 * @param {*} querier
 */
export function balance(querier) {
  return fetch({
    url: '/editor/balance',
    method: 'post',
    data: querier
  })
}
/**
 * 余额详情
 */
export function balanceInfo(querier) {
  return fetch({
    url: '/editor/balance_info',
    method: 'post',
    data: querier
  })
}
/**
 * 编辑提现
 * @param {*} querier
 */
export function withdrawals(querier) {
  return fetch({
    url: '/editor/withdrawals',
    method: 'post',
    data: querier
  })
}


/**
 * 余额
 * @param {*} querier
 */
export function editorList(querier) {
  return fetch({
    url: '/editor/editor_list',
    method: 'post',
    data: querier
  })
}
/**
 * 取编辑根据手机
 * @param {*} querier
 */
export function getEditorNameByMobile(querier) {
  return fetch({
    url: '/editor/get_editor_name_by_mobile',
    method: 'post',
    data: querier
  })
}

/**
 * 检查手机
 * @param {*} querier
 */
export function checkMobile(querier) {
  return fetch({
    url: '/editor/check_mobile',
    method: 'post',
    data: querier
  })
}
/**
 * 检查验证码
 * @param {*} querier
 */
export function checkSmsCode(querier) {
  return fetch({
    url: '/editor/check_sms_code',
    method: 'post',
    data: querier
  })
}
/**
 * 验证码
 * @param {*} querier
 */
export function smsCode(querier) {
  return fetch({
    url: '/editor/sms_code',
    method: 'post',
    data: querier
  })
}
/**
 * 重置密码
 * @param {*} querier
 */
export function resetPassword(querier) {
  return fetch({
    url: '/editor/reset_password',
    method: 'post',
    data: querier
  })
}
/**
 * 取稿件
 * @param {*} querier
 */
export function receive(querier) {
  return fetch({
    url: '/editor/receive',
    method: 'post',
    data: querier
  })
}



