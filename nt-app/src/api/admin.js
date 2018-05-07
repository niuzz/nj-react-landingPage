/**
 * Created by niuzz on 17/10/1.
 */
import fetch from '../utils/fetch'
/**
 * 登录
 * @param {*} params
 */
export function login(params) {
  return fetch({
    url: '/admin/login',
    method: 'post',
    data: params
  })
}
/**
 * 首页关键数据
 */
export function keyData(params) {
  return fetch({
    url: '/admin/key_data',
    method: 'post',
    data: params
  })
}
/**
 * admin媒体chart
 * @param {*} params
 */
export function mediaStatisticsChart(params) {
  return fetch({
    url: '/admin/media_statistics_chart',
    method: 'post',
    data: params
  })
}
/**
 * admin 用户chart数据
 */
export function userStatisticsChart(params) {
  return fetch({
    url: '/admin/user_statistics_chart',
    method: 'post',
    data: params
  })
}
/**
 * admin 用户媒体table
 * @param {*} params
 */
export function mediaStatisticsList(params) {
  return fetch({
    url: '/admin/media_statistics_list',
    method: 'post',
    data: params
  })
}
export function mediaStatisticsInfo(params) {
  return fetch({
    url: '/admin/media_statistics_info',
    method: 'post',
    data: params
  })
}
/**
 * 用户列表table
 * @param {*} params
 */
export function userStatisticsList(params) {
  return fetch({
    url: '/admin/user_statistics_list',
    method: 'post',
    data: params
  })
}
export function userStatisticsInfo(params) {
  return fetch({
    url: '/admin/user_statistics_info',
    method: 'post',
    data: params
  })
}


/**
 * 添加编辑
 * @param {*} params
 */
export function addBusiness(params) {
  return fetch({
    url: '/admin/add_business',
    method: 'post',
    data: params
  })
}

export function addEditor(params) {
  return fetch({
    url: '/admin/add_editor',
    method: 'post',
    data: params
  })
}
/**
 * 更改编辑信息
 * @param querier
 */
export function updateEditor(params) {
  return fetch({
    url: '/admin/update_editor',
    method: 'post',
    data: params
  })
}
/**
 * 修改编辑Alipay
 * @param {*} params
 */
export function updateEditorAlipay(params) {
  return fetch({
    url: '/admin/update_editor_alipay',
    method: 'post',
    data: params
  })
}
/**
 * 编辑日志
 * @param {*} params
 */
export function editorLog(params) {
  return fetch({
    url: '/admin/editor_log_list',
    method: 'post',
    data: params
  })
}
/**
 * 添加销售
 * @param {*} params
 */
export function addSeller(params) {
  return fetch({
    url: '/admin/add_sale',
    method: 'post',
    data: params
  })
}
/**
 * 修改销售
 * @param {*} params
 */
export function updateSale(params) {
  return fetch({
    url: '/admin/update_sale',
    method: 'post',
    data: params
  })
}
/**
 * 修改用户
 * @param {*} params
 */
export function changeCustomer(params) {
  return fetch({
    url: '/admin/change_customer',
    method: 'post',
    data: params
  })
}
/**
 * 账单列表
 * @param {*} params
 */
export function getManualRechare(params) {
  return fetch({
    url: '/admin/get_manual_recharge',
    method: 'post',
    data: params
  })
}
/**
 * 操作账单
 * @param {*} params
 */
export function doManualRechare(params) {
  return fetch({
    url: '/admin/examine_manual_recharge',
    method: 'post',
    data: params
  })
}

/**
 * 账单列表
 * @param {*} params
 */
export function manualRechare(params) {
  return fetch({
    url: '/admin/manual_recharge',
    method: 'post',
    data: params
  })
}
/**
 * 提现列表
 */
export function withdrawalsList(querier) {
  return fetch({
    url: '/admin/withdrawals_list',
    method: 'post',
    data: querier
  })
}
/**
 * 修改提现列表
 */
export function updateWithdrawals(querier) {
  return fetch({
    url: '/admin/update_withdrawals',
    method: 'post',
    data: querier
  })
}
/**
 * 提现列表excel数据
 */
export function withdrawalsInfo(querier) {
  return fetch({
    url: '/editor/withdrawals_info',
    method: 'post',
    data: querier
  })
}

/**
 * 通知列表
 */
export function getNotice(querier) {
  return fetch({
    url: '/admin/get_notice',
    method: 'post',
    data: querier
  })
}
/**
 * 通知列表
 */
export function addNotice(querier) {
  return fetch({
    url: '/admin/add_notice',
    method: 'post',
    data: querier
  })
}
/**
 * 改变通知状态
 */
export function updateNotice(querier) {
  return fetch({
    url: '/admin/update_notice',
    method: 'post',
    data: querier
  })
}
/**
 * 获取问题
 */
export function getQuestion(querier) {
  return fetch({
    url: '/admin/get_questions',
    method: 'post',
    data: querier
  })
}
/**
 * 删除问题
 */
export function delQuestion(querier) {
  return fetch({
    url: '/admin/del_question',
    method: 'post',
    data: querier
  })
}
/**
 * 修改问题
 */
export function updateQuestion(querier) {
  return fetch({
    url: '/admin/update_question',
    method: 'post',
    data: querier
  })
}
/**
 * 添加问题
 */
export function addQuestion(querier) {
  return fetch({
    url: '/admin/add_question',
    method: 'post',
    data: querier
  })
}
/**
 * 取用户列表
 */
export function getUser(querier) {
  return fetch({
    url: '/admin/userList',
    method: 'post',
    data: querier
  })
}
/**
 * 更改用户状态
 */
export function updateUser(querier) {
  return fetch({
    url: '/admin/userupdatestatus',
    method: 'post',
    data: querier
  })
}
/**
 * 审核员列表
 */
export function getAdminList(querier) {
  return fetch({
    url: '/admin/admin_list',
    method: 'post',
    data: querier
  })
}
/**
 * 添加审核员
 */
export function addAdmin(querier) {
  return fetch({
    url: '/admin/adminadd',
    method: 'post',
    data: querier
  })
}
/**
 * 更改审核员状态
 */
export function updateAdminStatus(querier) {
  return fetch({
    url: '/admin/updatestatus',
    method: 'post',
    data: querier
  })
}
/**
 * 更改审核员 密码等
 */
export function updateAdmin(querier) {
  return fetch({
    url: '/admin/update',
    method: 'post',
    data: querier
  })
}
/**
 * 审核员日志
 */
export function adminLog(querier) {
  return fetch({
    url: '/admin/admin_examine_log_list',
    method: 'post',
    data: querier
  })
}
/**
 * 商务员列表
 */
export function getBussinessList(querier) {
  return fetch({
    url: '/admin/business_list',
    method: 'post',
    data: querier
  })
}
/**
 * api
 */
export function updateAPI(querier) {
  return fetch({
    url: '/admin/update_user',
    method: 'post',
    data: querier
  })
}





